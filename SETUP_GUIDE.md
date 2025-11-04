# Setup Guide - Student Ranking System

## Prerequisites
- Node.js v18+ installed
- MongoDB Atlas account (free tier)
- Text editor (VS Code recommended)

## Step-by-Step Setup

### 1. Extract Files
Unzip the project folder to your desired location.

### 2. Install Dependencies

Open terminal and navigate to project folder:

```bash
cd student-ranking-system
```

Install server dependencies:
```bash
cd server
npm install
```

Install client dependencies:
```bash
cd ../client
npm install
```

### 3. MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account or login
3. Create a new cluster (free tier M0)
4. Wait for cluster to be created (2-3 minutes)
5. Click "Connect" button
6. Choose "Connect your application"
7. Copy the connection string (looks like):
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `<password>` with your actual password
9. Add `/student-ranking` before the `?` in the URL

### 4. Configure Environment Variables

Create `server/.env` file with:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/student-ranking?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

(Optional) Create `client/.env` file with:
```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```

You should see:
```
✓ MongoDB Connected: cluster0.xxxxx.mongodb.net
🚀 Server running on port 5000
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### 6. Access Application

Open browser and go to: **http://localhost:3000**

### 7. Test the Application

1. Click "Load Sample Data" to populate test students
2. Try sorting with different algorithms
3. Search for a student by ID
4. Add a new student
5. View statistics

## Troubleshooting

### MongoDB Connection Error
- Verify connection string is correct
- Check database user has read/write permissions
- Whitelist your IP in MongoDB Atlas Network Access
  - Or use `0.0.0.0/0` for development

### Port Already in Use
- Kill existing process: `lsof -ti:5000 | xargs kill`
- Or change PORT in `server/.env`

### Dependencies Installation Failed
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### CORS Errors
- Ensure backend is running on port 5000
- Check VITE_API_URL in client/.env
- Verify proxy settings in vite.config.js

## Scripts Reference

**Server:**
- `npm start` - Production mode
- `npm run dev` - Development with auto-reload

**Client:**
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## MongoDB Atlas IP Whitelist

For development, whitelist all IPs:
1. Go to Network Access in MongoDB Atlas
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere"
4. Enter `0.0.0.0/0`
5. Click "Confirm"

**Note:** For production, use specific IP addresses only.

## Next Steps

After successful setup:
1. Explore all features (CRUD, sorting, search)
2. Check the code structure
3. Modify and extend as needed
4. Deploy to production (see README for deployment guide)

## Support

For issues:
- Check console logs in browser (F12)
- Check terminal output for errors
- Verify all environment variables are set
- Ensure MongoDB Atlas cluster is running

---

**Congratulations! Your Student Ranking System is ready! 🎉**
