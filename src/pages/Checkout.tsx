import { useState } from "react";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { TransactionStatus } from "@/components/common/TransactionStatus";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"pending" | "success" | "failed">("pending");
  const [processing, setProcessing] = useState(false);

  const handlePurchase = () => {
    setProcessing(true);
    // Simulate transaction
    setTimeout(() => {
      setStatus("success");
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold gradient-text mb-8 text-center">Complete Purchase</h1>

        {/* Order Summary */}
        <div className="glass-card rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Domain</span>
              <span className="font-bold">crypto.nft</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Price</span>
              <span className="font-medium">5.2 ETH</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border/50">
              <span className="text-muted-foreground">Platform Fee (2.5%)</span>
              <span className="font-medium">0.13 ETH</span>
            </div>
            <div className="flex justify-between py-3 text-xl">
              <span className="font-bold">Total</span>
              <span className="font-bold gradient-text">5.33 ETH</span>
            </div>
          </div>

          <Button
            className="w-full btn-gradient h-12 text-lg"
            onClick={handlePurchase}
            disabled={processing || status === "success"}
          >
            {processing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : status === "success" ? (
              "Purchase Complete"
            ) : (
              "Confirm Purchase"
            )}
          </Button>
        </div>

        {/* Transaction Status */}
        {processing && (
          <TransactionStatus
            status="pending"
            message="Processing your transaction on the blockchain..."
          />
        )}

        {status === "success" && !processing && (
          <TransactionStatus
            status="success"
            message="Domain successfully transferred to your wallet!"
          />
        )}

        {/* Transaction Details */}
        {status === "success" && (
          <div className="glass-card rounded-xl p-6 mt-6">
            <h3 className="font-semibold mb-4">Transaction Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction Hash</span>
                <span className="font-mono text-primary">0x7f8d...9e2a</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Block Number</span>
                <span className="font-mono">18,234,567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas Used</span>
                <span className="font-mono">0.0021 ETH</span>
              </div>
            </div>
            <Button className="w-full mt-6" onClick={() => navigate("/")}>
              Return to Marketplace
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
