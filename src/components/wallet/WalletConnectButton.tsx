import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import { authAPI } from "@/lib/api";
import Wallet from "../../assets/logo2/lestsection/walletlogo11111.png"

declare global {
  interface Window {
    ethereum?: any;
  }
}

type WalletConnectButtonProps = {
  label?: string;
  showLabel?: boolean;
};

export const WalletConnectButton = ({ label, showLabel }: WalletConnectButtonProps) => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [connecting, setConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const savedWallet = localStorage.getItem('walletAddress');

    // Only show wallet as connected if user is logged in AND wallet is saved
    if (token && savedWallet) {
      setAddress(savedWallet);
      setConnected(true);
    } else {
      // Clear wallet state if no token
      setAddress("");
      setConnected(false);
      if (!token) {
        localStorage.removeItem('walletAddress');
      }
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else if (accounts[0] !== savedWallet) {
          disconnectWallet();
        }
      });

      window.ethereum.on('disconnect', () => {
        disconnectWallet();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('disconnect');
      }
    };
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask extension from https://metamask.io",
        variant: "destructive",
      });
      return;
    }

    setConnecting(true);

    try {
      // Check if user is logged in
      const token = localStorage.getItem('token');
      if (!token) {
        toast({
          title: "Login Required",
          description: "Please login first to connect your wallet",
          variant: "destructive",
        });
        setConnecting(false);
        return;
      }

      console.log('🔗 [WALLET-CONNECT] Step 1: Requesting MetaMask account access...');

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      const walletAddress = accounts[0];
      console.log(`🔗 [WALLET-CONNECT] Step 2: MetaMask connected - Address: ${walletAddress}`);

      // Get message to sign from backend
      console.log(`🔗 [WALLET-CONNECT] Step 3: Fetching message to sign...`);
      const { message } = await authAPI.getWalletMessage(walletAddress);
      console.log(`🔗 [WALLET-CONNECT] Step 4: Message received: "${message}"`);

      // Request signature from MetaMask
      console.log(`🔗 [WALLET-CONNECT] Step 5: Requesting signature from MetaMask...`);
      toast({
        title: "Sign Message",
        description: "Please sign the message in MetaMask to verify wallet ownership",
      });

      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, walletAddress]
      });

      console.log(`🔗 [WALLET-CONNECT] Step 6: Signature received from MetaMask`);
      console.log(`🔗 [WALLET-CONNECT] Signature: ${signature.substring(0, 20)}...`);

      // Connect wallet with signature verification
      console.log(`🔗 [WALLET-CONNECT] Step 7: Sending signature to backend for verification...`);
      const data = await authAPI.connectWallet(walletAddress, signature, message);
      console.log(`🔗 [WALLET-CONNECT] Step 8: Wallet connected successfully!`);

      // Update user data with wallet address
      const updatedUser = { ...data.user, walletAddress };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      localStorage.setItem('walletAddress', walletAddress);

      setAddress(walletAddress);
      setConnected(true);

      toast({
        title: "✅ Wallet Connected",
        description: `Successfully connected to ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`,
      });
    } catch (error: any) {
      console.error('❌ [WALLET-CONNECT] Error:', error);

      // Handle user rejection
      if (error.code === 4001 || error.message?.includes('User rejected')) {
        toast({
          title: "Connection Cancelled",
          description: "You cancelled the wallet connection",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Connection Failed",
          description: error.message || "Failed to connect wallet",
          variant: "destructive",
        });
      }
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = () => {
    // Clear wallet data
    localStorage.removeItem('walletAddress');

    // Update state
    setConnected(false);
    setAddress("");

    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected. Please logout to complete the process.",
    });
  };

  // If a label is requested, render a normal button with icon + text.
  if (showLabel) {
    const display = connected ? `${address.slice(0, 6)}...${address.slice(-4)}` : label || "Connect Wallet";
    return (
      <Button
        onClick={connected ? disconnectWallet : connectWallet}
        disabled={connecting}
        variant="ghost"
        size="sm"
        className="inline-flex gap-0 p-0 hover:bg-transparent hover:text-cyan-300"
        type="button"
        style={{ color: "white" }}
      >
        <img src={Wallet} alt="Wallet Icon" className="h-[1rem] w-[1rem] " />
        <span className="text-xs  text-white">{display}</span>
      </Button>
    );
  }

  // Default: icon-only button
  return (
    <Button
      onClick={connected ? disconnectWallet : connectWallet}
      disabled={connecting}
      variant="ghost"
      size="icon"
      className="hover:bg-transparent"
      style={{ color: "white" }}
      type="button"
    >
      <img src={Wallet} alt="Wallet Icon" className="h-5 w-5" />
    </Button>
  );
};
