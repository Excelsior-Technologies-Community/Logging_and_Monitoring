# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






# Logging & Monitoring (MERN) — Project README

A complete MERN-based **Logging & Monitoring System** integrating:

* **Winston** (advanced logging)
* **Morgan** (request logging)
* **Centralized Log Files** with rotation
* **API Monitoring Endpoint**
* **Backend Testing (Jest + Supertest)**
* **Responsive React Dashboard** to view metrics & logs

---

## 📌 Project Overview

This project provides a production-ready MERN setup for logging & monitoring any backend system. It logs:

* Incoming API requests
* Errors & exceptions
* Response time
* IP, method, URL, status codes
* Rotating log files (daily)

The frontend provides a monitoring dashboard to view:

* API uptime
* Timestamps
* Recent logs (sample)

---

## 🏗️ Tech Stack

### **Backend (Node.js + Express)**

* Winston + Daily Rotate File
* Morgan (write logs → Winston stream)
* Express Middleware (custom logger, error handler)
* Helmet, CORS, Rate-Limiter
* Jest + Supertest for testing

### **Frontend (React + Vite)**

* Axios API service
* Responsive dashboard UI
* Separate CSS

---

## 📁 Folder Structure

```
logging-monitoring/
├─ backend/
│  ├─ src/
│  │  ├─ logger/
│  │  ├─ middleware/
│  │  ├─ controllers/
│  │  ├─ routes/
│  │  ├─ tests/
│  │  └─ app.js / index.js
│  ├─ package.json
│  ├─ .env.example
│  └─ jest.config.js
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ services/
│  │  ├─ styles/
│  │  └─ App.jsx / main.jsx
│  ├─ package.json
│  └─ vite.config.js
```

---

## ⚙️ Installation & Setup

### **1️⃣ Backend Setup**

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

### **2️⃣ Frontend Setup**

```bash
cd frontend
cd login-monitering
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 Running Tests (Backend)

```bash
cd backend
npm test
```

---

## 🚀 API Endpoints

### **Health Check**

```
GET /health
```

### **Get Monitoring Data**

```
GET /api/monitor
```

Returns:

```json
{
  "uptime": 124,
  "timestamp": 1703074356871,
  "recent": [{"level":"info","message":"Service started"}]
}
```

### **Trigger Error (Test Logging)**

```
GET /api/error
```

---

## 🖥️ Frontend Screenshots



### **Dashboard Overview**



![alt text](<Screenshot 2025-12-05 100613.png>)



## 📊 Features

✔ Centralized Logging
✔ Request Logging with Morgan → Winston
✔ Error Logging with stack trace
✔ Daily rotated log files
✔ Rate Limiter for sensitive endpoints
✔ Monitoring API
✔ Dashboard UI
✔ Fully responsive
✔ Clean, separated CSS

---

## 📦 Production Build

### **Backend**

```
NODE_ENV=production
npm start
```

### **Frontend**

```
npm run build
npm run preview
```

---

## 🐳 Docker (optional)

Backend includes Dockerfile:

```bash
docker build -t logging-backend .
docker run -p 8000:8000 logging-backend
```

---

## 🚀 Future Enhancements

* Log viewer with file tailing
* Graphs for request count (Recharts)
* Error rate visualization
* Prometheus + Grafana integration
* ELK / Loki logging pipeline

---




