import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { authAPI } from "@/lib/api";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const verifyMagicLink = async () => {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        const data = await authAPI.verifyMagicLink(token);
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setStatus("success");
        setTimeout(() => navigate("/"), 2000);
      } catch (error) {
        console.error('Magic link verification error:', error);
        setStatus("error");
      }
    };

    verifyMagicLink();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <motion.div
        className="w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="bg-card/80 backdrop-blur-xl border rounded-2xl p-8 shadow-2xl">
          {status === "loading" && (
            <>
              <Loader2 className="w-16 h-16 mx-auto mb-4 animate-spin text-primary" />
              <h2 className="text-2xl font-bold mb-2">Verifying Email...</h2>
              <p className="text-muted-foreground">Please wait</p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-bold mb-2">Login Successful!</h2>
              <p className="text-muted-foreground mb-6">Redirecting to homepage...</p>
            </>
          )}

          {status === "error" && (
            <>
              <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-2xl font-bold mb-2">Link Expired</h2>
              <p className="text-muted-foreground mb-6">This magic link has expired or is invalid.</p>
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline"
              >
                Request a new link
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
