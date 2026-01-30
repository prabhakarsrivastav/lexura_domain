import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessPlan } = await req.json();
    
    if (!businessPlan || businessPlan.trim().length < 100) {
      return new Response(
        JSON.stringify({ error: 'Business plan must be at least 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('Analyzing business plan with Lovable AI');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an expert business analyst. Analyze business plans and provide scores (0-100) for each category with detailed insights. Return ONLY valid JSON with this exact structure:
{
  "overallScore": number,
  "verdict": "Promising" | "Needs Work" | "High Risk",
  "categories": {
    "marketFit": { "score": number, "insight": "string" },
    "productScalability": { "score": number, "insight": "string" },
    "financialHealth": { "score": number, "insight": "string" },
    "teamStrength": { "score": number, "insight": "string" },
    "riskMitigation": { "score": number, "insight": "string" },
    "executionReadiness": { "score": number, "insight": "string" }
  },
  "weaknesses": ["string", "string", "string"],
  "recommendations": ["string", "string", "string"],
  "growthStage": { "seed": number, "early": number, "growth": number, "mature": number },
  "riskReward": { "risk": number, "reward": number }
}`
          },
          {
            role: 'user',
            content: `Analyze this business plan:\n\n${businessPlan}`
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please contact support.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI response received, parsing JSON');
    
    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from response');
    }
    
    const analysis = JSON.parse(jsonMatch[0]);

    return new Response(
      JSON.stringify({ analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-business-plan:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Analysis failed',
        details: error instanceof Error ? error.stack : undefined
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
