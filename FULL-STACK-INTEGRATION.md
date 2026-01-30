# Full Stack Integration & Deployment Guide

## ✅ Backend-Frontend Integration Completed

### Changes Made:

#### 1. Backend Configuration (`backend/.env`)
- ✅ Set production `CLIENT_URL`: https://kyptronix-wallet.netlify.app
- ✅ Set production `FRONTEND_URL`: https://kyptronix-wallet.netlify.app
- ✅ Configured MongoDB Atlas connection
- ✅ Set up Gmail SMTP for magic link emails
- ✅ JWT_SECRET configured

#### 2. Frontend API Centralization (`src/lib/api.ts`)
Created comprehensive `authAPI` with all endpoints:
- ✅ `requestMagicLink()` - Send magic link email
- ✅ `verifyMagicLink()` - Verify magic link token
- ✅ `signup()` - Traditional signup
- ✅ `login()` - Traditional login
- ✅ `verifyEmail()` - Email verification
- ✅ `getCurrentUser()` - Get user info
- ✅ `getWalletMessage()` - Get wallet signing message
- ✅ `connectWallet()` - Connect wallet with signature

#### 3. Updated Components to Use Centralized API
- ✅ `src/pages/Auth.tsx` - Already using authAPI
- ✅ `src/pages/VerifyEmail.tsx` - Updated to use authAPI
- ✅ `src/components/common/Login.tsx` - Updated to use authAPI
- ✅ `src/components/wallet/WalletConnectButton.tsx` - Updated to use authAPI

#### 4. Backend Server Status
✅ **Running Successfully on `http://localhost:5000`**
- MongoDB connected to Atlas
- Email service (Gmail) configured
- CORS configured for both localhost and production
- All 6 authentication endpoints available

---

## 🚀 Deployment Steps

### Option 1: Deploy Backend to Render.com (Recommended)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up or login with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder or create a separate repo

3. **Configure Build Settings**
   ```
   Name: kryptronix-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://mondalsubarna29:Su12345@cluster0.1kmazke.mongodb.net/crypto
   JWT_SECRET=kryptronix-super-secret-jwt-key-2025-change-in-production
   CLIENT_URL=https://kyptronix-wallet.netlify.app
   FRONTEND_URL=https://kyptronix-wallet.netlify.app
   EMAIL_PROVIDER=gmail
   EMAIL_USER=tirtho.kyptronix@gmail.com
   EMAIL_PASS=koziozmnwtzncuyg
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the backend URL (e.g., `https://kryptronix-backend.onrender.com`)

### Option 2: Deploy Backend to Vercel

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Create vercel.json in backend folder**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/server.js"
       }
     ]
   }
   ```

3. **Deploy to Vercel**
   ```powershell
   cd backend
   vercel --prod
   ```

4. **Set Environment Variables** (in Vercel Dashboard)
   - Add all env variables from `.env` file

### Update Frontend Environment Variables

After backend deployment, update frontend `.env`:

```bash
VITE_API_URL=https://your-backend-url.com/api
# Example: VITE_API_URL=https://kryptronix-backend.onrender.com/api
```

---

## 🧪 Testing Checklist

### Local Testing (Backend on localhost:5000)

1. **Magic Link Flow**
   ```
   ✅ Visit http://localhost:8080/auth
   ✅ Enter email
   ✅ Check console for magic link (or check email)
   ✅ Click magic link
   ✅ Verify redirect to homepage with authentication
   ```

2. **Wallet Connection Flow**
   ```
   ✅ Login with magic link
   ✅ Click "Connect Wallet" button
   ✅ Approve MetaMask connection
   ✅ Sign message in MetaMask
   ✅ Verify wallet address appears in button
   ```

### Production Testing (After Deployment)

1. **Update frontend .env.production**
   ```bash
   VITE_API_URL=https://your-backend-url.com/api
   ```

2. **Rebuild and deploy frontend**
   ```powershell
   npm run build
   # Netlify will auto-deploy on push to main
   ```

3. **Test same flows on production URL**

---

## 📝 Backend API Endpoints

All endpoints use base URL: `YOUR_API_URL/api/auth`

### Public Endpoints (No Auth Required)
- `POST /magic-link` - Request magic login link
  ```json
  Body: { "email": "user@example.com" }
  Response: { "message": "Magic link sent to your email" }
  ```

- `GET /magic-login/:token` - Verify magic link
  ```
  Response: { "token": "jwt_token", "user": { ... } }
  ```

- `POST /signup` - User registration
  ```json
  Body: { "email": "user@example.com", "password": "password" }
  Response: { "message": "Signup successful! Check your email" }
  ```

- `POST /login` - Traditional login
  ```json
  Body: { "email": "user@example.com", "password": "password" }
  Response: { "token": "jwt_token", "user": { ... } }
  ```

- `GET /verify/:token` - Verify email
  ```
  Response: { "message": "Email verified successfully" }
  ```

### Protected Endpoints (Requires Auth Token)
- `GET /me` - Get current user
  ```
  Headers: { "Authorization": "Bearer <token>" }
  Response: { "user": { "id", "email", "role" } }
  ```

- `GET /wallet-message/:walletAddress` - Get message to sign
  ```
  Headers: { "Authorization": "Bearer <token>" }
  Response: { "message": "Connect wallet...", "walletAddress", "timestamp" }
  ```

- `POST /wallet-connect` - Connect wallet with signature
  ```json
  Headers: { "Authorization": "Bearer <token>" }
  Body: { "walletAddress": "0x...", "signature": "0x...", "message": "..." }
  Response: { "message": "Wallet connected", "user": { ... } }
  ```

---

## 🔧 Environment Variables Reference

### Backend (.env)
```bash
PORT=5000
NODE_ENV=development|production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
CLIENT_URL=https://kyptronix-wallet.netlify.app
FRONTEND_URL=https://kyptronix-wallet.netlify.app
EMAIL_PROVIDER=gmail|resend
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend (.env)
```bash
VITE_API_URL=http://localhost:5000/api  # Development
# VITE_API_URL=https://your-backend.com/api  # Production
VITE_SUPABASE_PROJECT_ID=mdccmwabkibgtpuxngpn
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...
VITE_SUPABASE_URL=https://mdccmwabkibgtpuxngpn.supabase.co
```

---

## 🎯 Current Status

✅ **Backend**: Running locally, ready for deployment
✅ **Frontend**: Updated to use centralized API
✅ **MongoDB**: Connected to Atlas (production ready)
✅ **Email Service**: Gmail SMTP configured
✅ **CORS**: Configured for localhost and production
✅ **API Integration**: All components using centralized authAPI

## 📌 Next Steps

1. Choose deployment platform (Render or Vercel)
2. Deploy backend with environment variables
3. Update frontend VITE_API_URL with deployed backend URL
4. Rebuild and deploy frontend
5. Test complete authentication flow in production

---

## 🐛 Troubleshooting

### Issue: 404 on /auth endpoint
**Solution**: This was caused by hardcoded API URLs. Now fixed with centralized API.

### Issue: CORS errors
**Solution**: Backend CORS is configured for both localhost and production URL.

### Issue: Magic link not arriving
**Solution**: Check backend console logs. Magic links are logged there in development mode.

### Issue: Wallet signature verification failing
**Solution**: Ensure message format matches between frontend and backend.

---

## 📚 Additional Resources

- [Render Deployment Guide](https://render.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Gmail App Password](https://support.google.com/accounts/answer/185833)

