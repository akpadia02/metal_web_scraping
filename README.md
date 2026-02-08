# Indian Metals Price Dashboard (Frontend)

This is the frontend application for the Indian Metals & Gold Price Dashboard.
It displays real-time gold prices using data fetched from the deployed backend API.

The frontend is built using React and Vite with plain CSS for styling.

---

## Features

- Displays live gold prices by karat
- Responsive dashboard layout
- Search and filter functionality
- Connects to live backend API
- Lightweight and fast UI
- Mobile-friendly design

---

## Tech Stack

| Technology | Purpose |
|------------|----------|
| React      | UI Framework |
| Vite       | Build Tool |
| Axios      | API Requests |
| CSS        | Styling |

---

## Installation & Setup (Local)

### Step 1: Navigate to Frontend Folder

cd indian-metals-dashboard/frontend

---

### Step 2: Install Dependencies

npm install

---

### Step 3: Run Development Server

npm run dev

Application will run at:

http://localhost:5173

---

## Connecting to Backend

Open the following file:

src/App.jsx

Update the API URL:

axios.get("https://web-scraping-backend-k13b.onrender.com/api/metals")

This connects the frontend to the live backend.

---

## Build for Production

To generate production build:

npm run build

Build files will be created inside:

dist/

---
