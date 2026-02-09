# Indian Metals Price Dashboard - Frontend

React + Vite application for displaying real-time precious metals prices.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running](#running-locally)
- [Building](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Features

- Real-time precious metals price display
- Search and filter functionality
- Fully responsive mobile-friendly design
- Automatic karat detection (10K, 22K, 24K, etc.)
- Fast performance with Vite
- Built with React hooks

---

## Prerequisites

- Node.js 16+
- npm 7+
- Internet connection

## Tech Stack

- React 19.2.0, Vite 7.2.4, Axios 1.13.4, CSS3

---

## Installation

```bash
git clone <repo-url>
cd frontend/web_scraping
npm install
npm run dev  # Starts at http://localhost:5173
```

---

## Configuration

Update API URL in **src/App.jsx** (line 13):

```javascript
// Local backend
axios.get("http://127.0.0.1:5000/api/metals")

// Production backend
axios.get("https://web-scraping-backend-k13b.onrender.com/api/metals")
```

---

## Running Locally

```bash
npm run dev
```

Starts development server with hot reload at `http://localhost:5173`

---

## Building for Production

```bash
npm run build
npm run preview
```

Build output: `dist/` folder

---

## Deployment

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**:
```bash
npm run build
# Deploy dist/ folder
```

---

## Troubleshooting

**Module Not Found:** `rm -rf node_modules && npm install`

**API Connection Error:** Verify backend URL in src/App.jsx and CORS configuration

**Blank Page:** Check browser console for errors

**Port Already In Use:** Change port or use different terminal

---

**Author:** Akshay H. Padia | B.Tech CSE
