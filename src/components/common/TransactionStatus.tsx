import { CheckCircle2, Loader2, XCircle } from "lucide-react";

interface TransactionStatusProps {
  status: "pending" | "success" | "failed";
  message: string;
}

export const TransactionStatus = ({ status, message }: TransactionStatusProps) => {
  const statusConfig = {
    pending: {
      icon: Loader2,
      className: "text-warning animate-spin",
      bgClassName: "bg-warning/10",
    },
    success: {
      icon: CheckCircle2,
      className: "text-success",
      bgClassName: "bg-success/10",
    },
    failed: {
      icon: XCircle,
      className: "text-destructive",
      bgClassName: "bg-destructive/10",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`glass-card rounded-xl p-6 ${config.bgClassName} border border-border/50`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${config.bgClassName}`}>
          <Icon className={`h-6 w-6 ${config.className}`} />
        </div>
        <div>
          <p className="font-medium capitalize">{status}</p>
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
};
