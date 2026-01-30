import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2, User, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { authAPI } from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [role, setRole] = useState<"user" | "admin">("user");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await authAPI.requestMagicLink(email);

      setEmailSent(true);
      toast({
        title: "Magic Link Sent! ✨",
        description: data.message || "Check your email for the login link. It expires in 10 minutes.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-card/80 backdrop-blur-xl border rounded-2xl p-8 shadow-2xl">
          {!emailSent ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">Enter your email to receive a magic login link</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={role === "user" ? "default" : "outline"}
                    onClick={() => setRole("user")}
                    className="flex-1"
                  >
                    <User className="w-4 h-4 mr-2" />
                    User
                  </Button>
                  <Button
                    type="button"
                    variant={role === "admin" ? "default" : "outline"}
                    onClick={() => setRole("admin")}
                    className="flex-1"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
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

                <p className="text-center text-sm text-muted-foreground">
                  🔐 No password required • Link expires in 10 minutes
                </p>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold">Check Your Email</h2>
              <p className="text-muted-foreground">
                We sent a magic link to <span className="text-foreground font-medium">{email}</span>
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
                className="text-primary hover:text-primary hover:bg-primary/10 mt-4"
              >
                Try a different email
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
