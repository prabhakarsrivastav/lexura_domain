const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
console.log('[API] Using URL:', API_URL);

// Helper function to get auth token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }
  
  return data;
};

export const authAPI = {
  // Magic link authentication
  requestMagicLink: async (email: string) => {
    console.log('[API] Magic link request:', { email });
    const res = await fetch(`${API_URL}/auth/magic-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await handleResponse(res);
    console.log('[API] Magic link response:', data);
    return data;
  },

  // Verify magic link token
  verifyMagicLink: async (token: string) => {
    console.log('[API] Verifying magic link token');
    const res = await fetch(`${API_URL}/auth/magic-login/${token}`, {
      method: 'GET',
    });
    return handleResponse(res);
  },

  // Traditional signup
  signup: async (email: string, password: string) => {
    console.log('[API] Signup request:', { email });
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(res);
  },

  // Traditional login
  login: async (email: string, password: string) => {
    console.log('[API] Login request:', { email });
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(res);
  },

  // Verify email with token
  verifyEmail: async (token: string) => {
    console.log('[API] Verifying email token');
    const res = await fetch(`${API_URL}/auth/verify/${token}`, {
      method: 'GET',
    });
    return handleResponse(res);
  },

  // Get current user info
  getCurrentUser: async () => {
    console.log('[API] Getting current user');
    const res = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    return handleResponse(res);
  },

  // Wallet connection - Get message to sign
  getWalletMessage: async (walletAddress: string) => {
    console.log('[API] Getting wallet message for:', walletAddress);
    const res = await fetch(`${API_URL}/auth/wallet-message/${walletAddress}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });
    return handleResponse(res);
  },

  // Wallet connection - Connect wallet with signature
  connectWallet: async (walletAddress: string, signature: string, message: string) => {
    console.log('[API] Connecting wallet:', { walletAddress });
    const res = await fetch(`${API_URL}/auth/wallet-connect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify({ walletAddress, signature, message }),
    });
    return handleResponse(res);
  },
};
