import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 gradient-text">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including wallet addresses, transaction data, 
              and communication preferences when using our marketplace and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>
              Your information is used to facilitate domain transactions, provide customer support, improve our 
              services, and communicate important updates about your account and the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information and 
              transaction data. All sensitive data is encrypted and stored securely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. Contact Us</h2>
            <p>
              For privacy-related questions or concerns, please contact us at privacy@uddomainhub.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
