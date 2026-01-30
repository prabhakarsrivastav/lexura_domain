import { useState } from "react";
import { ConsultancyHero } from "@/components/hero/ConsultancyHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sparkles, Video, CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const Consultancy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [consultationType, setConsultationType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const consultationTypes = [
    { value: "app-strategy", label: "App Strategy Session", price: "0.5 ETH" },
    { value: "saas-mvp", label: "SaaS MVP Consultation", price: "0.8 ETH" },
    { value: "tokenomics", label: "Tokenomics Design", price: "1.2 ETH" },
    { value: "tech-stack", label: "Tech Stack Advice", price: "0.3 ETH" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!consultationType || !date || !selectedTime || !name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: "You'll receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <ConsultancyHero />

      {/* Booking Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass-card">
            <h3 className="text-3xl font-bold mb-8">Book Your Consultation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="consultation-type">Consultation Type *</Label>
                  <Select value={consultationType} onValueChange={setConsultationType}>
                    <SelectTrigger id="consultation-type">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} - {type.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about your project..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <Label>Select Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Select Time Slot *</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        <Clock className="mr-2 h-3 w-3" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient flex-1" onClick={handleBooking}>
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Confirm Booking
              </Button>
              <Button size="lg" variant="outline" className="flex-1" onClick={() => navigate("/")}>
                Cancel
              </Button>
            </div>
          </Card>

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hero-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Video className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Live Video Sessions</h4>
              <p className="text-sm text-muted-foreground">
                Real-time consultation with Web3 experts via video chat
              </p>
            </Card>

            <Card className="p-6 text-center hero-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Actionable Insights</h4>
              <p className="text-sm text-muted-foreground">
                Get practical recommendations and next steps for your project
              </p>
            </Card>

            <Card className="p-6 text-center hero-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">Post-Session Summary</h4>
              <p className="text-sm text-muted-foreground">
                Detailed summary and resources delivered after each session
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
