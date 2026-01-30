# Render Deployment Guide

Complete guide to deploy your Kryptronix application on Render with working email functionality.

## 🚀 Quick Overview

- **Backend**: Deploy on Render Web Service
- **Frontend**: Deploy on Netlify/Vercel (or Render Static Site)
- **Database**: MongoDB Atlas (free tier)
- **Email**: Resend API (free tier: 3000 emails/month)

---

## 📋 Pre-Deployment Checklist

### 1. MongoDB Atlas Setup

1. **Create Account**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create Cluster**: 
   - Choose FREE tier (M0)
   - Select a region close to your Render datacenter
3. **Create Database User**:
   - Database Access → Add New User
   - Set username and password (save these!)
4. **Whitelist IP**:
   - Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
5. **Get Connection String**:
   - Clusters → Connect → Connect your application
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/kryptonics`

### 2. Resend Email Setup

1. **Create Account**: Sign up at [Resend](https://resend.com)
2. **Get API Key**:
   - Dashboard → API Keys → Create API Key
   - Copy the API key (starts with `re_`)
   - Save it securely (shown only once!)
3. **Email From Address**:
   - **For Testing**: Use `onboarding@resend.dev` (no verification needed)
   - **For Production**: Add and verify your domain

---

## 🖥️ Backend Deployment (Render)

### Step 1: Prepare Repository

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Ensure backend/package.json has**:
   ```json
   {
     "scripts": {
       "start": "node server.js",
       "build": "npm install"
     }
   }
   ```

### Step 2: Create Render Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `kryptonics-backend` (or your choice)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### Step 3: Configure Environment Variables

In Render Dashboard → Environment tab, add these variables:

```env
# Server
NODE_ENV=production
PORT=5000

# Database (from MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/kryptonics

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-random-string-at-least-32-chars

# Frontend URL (update after deploying frontend)
CLIENT_URL=https://your-frontend-app.netlify.app
FRONTEND_URL=https://your-frontend-app.netlify.app

# Email Configuration
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_USER=Kryptronix <onboarding@resend.dev>
```

**⚠️ Important Notes:**
- Replace all placeholder values with actual values
- For `JWT_SECRET`, generate a random string: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- Keep `EMAIL_USER=Kryptronix <onboarding@resend.dev>` for testing
- Update `CLIENT_URL` and `FRONTEND_URL` after deploying frontend

### Step 4: Deploy

1. Click **Create Web Service**
2. Wait for deployment (3-5 minutes)
3. Note your backend URL: `https://your-app-name.onrender.com`

### Step 5: Verify Backend

Test the backend:
```bash
curl https://your-app-name.onrender.com/api/auth/me
# Should return: {"message":"Authentication required"}
```

---

## 🌐 Frontend Deployment (Netlify)

### Step 1: Build Configuration

1. **Update `.env.production`**:
   ```env
   VITE_API_URL=https://your-backend-name.onrender.com/api
   VITE_SUPABASE_PROJECT_ID=mdccmwabkibgtpuxngpn
   VITE_SUPABASE_PUBLISHABLE_KEY=your-key-here
   VITE_SUPABASE_URL=https://mdccmwabkibgtpuxngpn.supabase.co
   ```

2. **Create `netlify.toml`** in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect GitHub repository
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Build environment variables**: Add variables from `.env.production`

5. Click **Deploy site**

### Step 3: Update Backend URLs

1. Copy your Netlify URL: `https://your-app.netlify.app`
2. Go back to Render Dashboard → Backend → Environment
3. Update:
   ```env
   CLIENT_URL=https://your-app.netlify.app
   FRONTEND_URL=https://your-app.netlify.app
   ```
4. Click **Save Changes** (backend will redeploy)

---

## ✅ Testing the Deployment

### Test Email Functionality

1. **Navigate to your frontend**: `https://your-app.netlify.app`
2. **Request Magic Link**:
   - Click Login
   - Enter your email
   - Click "Send Magic Link"
3. **Check Email**: You should receive an email within 30 seconds
4. **Check Render Logs**: 
   - Go to Render Dashboard → Logs
   - You should see: `✅ Email sent via Resend: [id]`

### Test Wallet Connect

1. **Login first** via magic link
2. **Click "Connect Wallet"**
3. Should prompt MetaMask
4. After connecting, wallet address should be linked to your account

---

## 🔧 Troubleshooting

### Issue: Email Timeout on Render

**Cause**: Gmail SMTP ports are blocked on Render
**Solution**: Use Resend (already implemented)

```env
# In Render environment variables
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_xxxxx
```

### Issue: CORS Error

**Symptom**: Frontend can't connect to backend
**Solution**: 
1. Check `FRONTEND_URL` in Render environment variables
2. Ensure it matches your actual frontend URL
3. Check backend logs for CORS warnings

### Issue: "Authentication required" on wallet connect

**Cause**: User not logged in
**Solution**: This is expected! Users must login via magic link first, then connect wallet

### Issue: Magic link expired

**Cause**: Links expire after 10 minutes
**Solution**: Request a new magic link

### Issue: MongoDB connection error

**Symptom**: `MongooseServerSelectionError`
**Solution**:
1. Check MongoDB Atlas → Network Access
2. Ensure "0.0.0.0/0" is whitelisted
3. Verify `MONGODB_URI` in Render environment variables
4. Check MongoDB Atlas user has correct password

### Issue: Resend API error

**Symptom**: `Invalid API key` or `401 Unauthorized`
**Solution**:
1. Verify `RESEND_API_KEY` in Render environment variables
2. Check API key in Resend dashboard
3. Ensure no extra spaces in the key

---

## 📊 Monitoring

### Render Logs

View real-time logs:
1. Render Dashboard → Your Service → Logs
2. Watch for:
   - `✅ Email sent via Resend`
   - `MongoDB connected successfully`
   - `Server running on port 5000`

### Email Logs

Check email delivery:
1. Resend Dashboard → Emails
2. View delivery status, opens, clicks

---

## 💰 Cost Breakdown (FREE TIER)

| Service | Free Tier | Limit |
|---------|-----------|-------|
| Render | ✅ Free | 750 hours/month, sleeps after 15 min inactivity |
| MongoDB Atlas | ✅ Free | 512 MB storage, M0 cluster |
| Resend | ✅ Free | 3,000 emails/month, 100 emails/day |
| Netlify | ✅ Free | 100 GB bandwidth, 300 build minutes |

**Total: $0/month** (with limitations)

---

## 🚀 Production Optimizations

### 1. Keep Render Awake

Render free tier sleeps after 15 minutes. Use a cron job or service like:
- [Uptime Robot](https://uptimerobot.com) (free)
- [Cron-job.org](https://cron-job.org/en/) (free)

Ping your backend every 10 minutes: `https://your-backend.onrender.com/api/auth/me`

### 2. Custom Domain (Resend)

1. Add domain in Resend dashboard
2. Add DNS records to your domain registrar:
   ```
   Type: TXT
   Name: @
   Value: [from Resend]
   ```
3. Update environment variable:
   ```env
   EMAIL_USER=Kryptronix <noreply@yourdomain.com>
   ```

### 3. Environment Secrets

Never commit `.env` files to Git. Use:
- Render: Environment variables in dashboard
- Netlify: Environment variables in site settings

### 4. Database Backups

MongoDB Atlas M0 tier doesn't include backups. Consider:
- Upgrading to M2+ for automated backups
- Manual exports via MongoDB Compass

---

## 📝 Deployment Checklist

- [ ] MongoDB Atlas cluster created and IP whitelisted
- [ ] Resend account created and API key obtained
- [ ] Backend deployed on Render
- [ ] All environment variables configured in Render
- [ ] Frontend built and deployed on Netlify
- [ ] Frontend environment variables configured
- [ ] Backend `CLIENT_URL` and `FRONTEND_URL` updated
- [ ] Email sending tested and working
- [ ] Wallet connect tested (after login)
- [ ] Magic link login tested end-to-end
- [ ] Logs checked for errors

---

## 🆘 Support

### Common Commands

**Test API endpoint:**
```bash
curl https://your-backend.onrender.com/api/auth/me
```

**Generate JWT secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**View Render logs:**
```bash
# In Render Dashboard → Logs tab
# Or use Render CLI
```

### Resources

- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Resend Docs](https://resend.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

## 🎉 Success!

If everything is working:
1. ✅ Backend responds on Render URL
2. ✅ Frontend loads on Netlify URL
3. ✅ Magic link emails are delivered
4. ✅ Users can login via magic link
5. ✅ Wallet connect works after login

**Your Kryptronix application is now live!** 🚀
