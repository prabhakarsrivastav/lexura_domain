import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2, Sparkles } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";
import { authAPI } from "@/lib/api";
import { getAuthToken } from "@/lib/auth";

const emailSchema = z.string().email("Please enter a valid email address");

export default function Auth() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (getAuthToken()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailValidation = emailSchema.safeParse(email);
    if (!emailValidation.success) {
      toast({
        title: "Invalid Email",
        description: emailValidation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const data = await authAPI.requestMagicLink(email);
      if (data.message) {
        setEmailSent(true);
        toast({
          title: "Magic Link Sent! ✨",
          description: data.message,
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send magic link",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="text-center mb-8">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Enter your email to receive a magic login link
            </p>
          </motion.div>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Magic Link
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>🔐 No password required • Link expires in 10 minutes</p>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold">Check Your Email</h2>
              <p className="text-muted-foreground">
                We sent a magic link to <span className="font-medium">{email}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Click the link in the email to sign in. The link expires in 10 minutes.
              </p>
              <Button
                variant="ghost"
                onClick={() => {
                  setEmailSent(false);
                  setEmail("");
                }}
              >
                Try a different email
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
