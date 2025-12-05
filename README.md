# Logging & Monitoring System

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-19.2.0-blue)](https://reactjs.org/)

A comprehensive MERN-based **Logging & Monitoring System** that provides centralized logging, real-time request monitoring, and an intuitive dashboard for viewing system metrics and logs in production environments.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 📌 Project Overview

This enterprise-grade logging and monitoring solution is designed for modern web applications requiring robust observability. Built with the MERN stack, it offers centralized log management, HTTP request tracking, and a responsive web interface for real-time system monitoring.

The system implements industry best practices for logging, including structured logging with Winston, automatic log rotation, and comprehensive error tracking to ensure high availability and quick issue resolution.

## ✨ Key Features

- **🔄 Centralized Logging**: All application logs collected in structured, rotating files
- **📊 Request Monitoring**: HTTP request logging with detailed metadata using Morgan middleware
- **⚡ Real-time Dashboard**: Interactive React-based UI for live system monitoring
- **🔍 Error Tracking**: Comprehensive error logging with stack traces and context
- **📅 Daily Rotation**: Automatic log file rotation with configurable retention policies
- **🧪 Testing Suite**: Complete backend API testing with Jest and Supertest
- **📱 Responsive Design**: Mobile-friendly dashboard interface
- **🔒 Production Ready**: Optimized for deployment with environment-based configurations

## 🏗️ Tech Stack

### Backend (Node.js + Express)
- **Express.js** `^5.2.1` - Fast, unopinionated web framework
- **Winston** `^3.18.3` - Versatile logging library with multiple transports
- **Morgan** `^1.10.1` - HTTP request logger middleware
- **Mongoose** `^9.0.0` - Elegant MongoDB object modeling
- **CORS** `^2.8.5` - Cross-origin resource sharing middleware
- **Dotenv** `^17.2.3` - Environment variable management

### Frontend (React + Vite)
- **React** `^19.2.0` - Declarative UI library for building user interfaces
- **Vite** `^7.2.4` - Next-generation frontend tooling for faster development
- **Axios** `^1.13.2` - Promise-based HTTP client for API requests
- **ESLint** `^9.39.1` - Pluggable linting utility for JavaScript and JSX

### Development & Testing
- **Jest** `^30.2.0` - Delightful JavaScript testing framework
- **Supertest** `^7.1.4` - Super-agent driven library for testing HTTP servers
- **Nodemon** `^3.1.11` - Utility for automatic server restarts during development

## 📁 Project Structure

```
logging-monitoring/
├── Backend/
│   ├── app.js                 # Main Express application setup
│   ├── server.js              # Server entry point and initialization
│   ├── package.json           # Backend dependencies and scripts
│   ├── package-lock.json      # Lockfile for exact dependency versions
│   ├── .env                   # Environment configuration variables
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── controllers/           # Business logic and request handlers
│   ├── middleware/
│   │   └── logger.js          # Winston and Morgan logging configuration
│   ├── models/                # MongoDB data models and schemas
│   ├── routers/
│   │   └── apiRoutes.js       # API endpoint definitions and routing
│   ├── logs/                  # Log files storage directory
│   │   ├── combined.log       # All logs (info, warn, error)
│   │   └── error.log          # Error-only logs for quick debugging
│   └── tests/
│       └── api.test.js        # Backend API test suite
├── Frontend/
│   └── login-monitering/
│       ├── public/            # Static assets
│       ├── src/
│       │   ├── App.jsx        # Main React application component
│       │   ├── main.jsx       # Application entry point
│       │   ├── App.css        # Global application styles
│       │   ├── assets/        # Static assets (images, icons)
│       │   ├── Components/
│       │   │   └── LogTable.jsx # Reusable log display component
│       │   └── Pages/
│       │       └── DashBord.jsx # Main dashboard page component
│       ├── package.json       # Frontend dependencies and scripts
│       ├── package-lock.json  # Lockfile for exact dependency versions
│       ├── vite.config.js     # Vite build configuration
│       ├── index.html         # Main HTML template
│       └── eslint.config.js   # ESLint configuration
└── README.md                  # Project documentation
```

## 🔧 Prerequisites

Before installing and running this project, ensure you have the following prerequisites installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional package manager)
- **MongoDB** (optional, for future database extensions) - [Download from mongodb.com](https://www.mongodb.com/)
- **Git** (for cloning the repository)

You can verify your Node.js installation by running:
```bash
node --version
npm --version
```

## 🚀 Installation & Setup

Follow these steps to set up the Logging & Monitoring System on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd logging-monitoring
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env  # If .env.example exists, otherwise create .env manually

# Start development server
npm run dev
```

The backend server will be available at `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd Frontend/login-monitering

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend application will be available at `http://localhost:5173`

### 4. Verify Installation

Open your browser and navigate to:
- Backend API: `http://localhost:5000` (should return "Logging & Monitoring API")
- Frontend Dashboard: `http://localhost:5173` (should display the monitoring dashboard)

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `Backend/` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration (for future use)
MONGODB_URI=mongodb://localhost:27017/logging_monitoring

# Logging Configuration
LOG_LEVEL=info
LOG_MAX_SIZE=5242880  # 5MB
LOG_MAX_FILES=30      # 30 days retention
```

### Log Configuration

Logging is configured in `Backend/middleware/logger.js` with the following settings:

- **Combined Logs**: `logs/combined.log` - Contains all log levels (info, warn, error)
- **Error Logs**: `logs/error.log` - Contains only error-level logs
- **Daily Rotation**: Automatic rotation at midnight
- **Maximum Retention**: 30 days of log history
- **Maximum File Size**: 5MB per log file

## 📚 API Documentation

The backend provides RESTful API endpoints for system monitoring and testing.

### Base URL
```
http://localhost:5000
```

### Endpoints

#### Health Check
```http
GET /
```

**Response:**
```json
"Logging & Monitoring API"
```

#### System Status
```http
GET /api/status
```

**Response:**
```json
{
  "status": "API is running",
  "timestamp": "2025-12-05T08:39:18.536Z",
  "uptime": "0d 2h 15m 30s",
  "environment": "development"
}
```

#### Trigger Test Error
```http
GET /api/error
```

**Purpose:** Triggers a test error for logging verification
**Response:** HTTP 500 with error details

#### View Combined Logs
```http
GET /logs/combined.log
```

**Response:** Raw text content of the combined log file

#### View Error Logs
```http
GET /logs/error.log
```

**Response:** Raw text content of the error log file

### API Response Codes

- `200` - Success
- `404` - Not Found
- `500` - Internal Server Error

## 🧪 Testing

The project includes comprehensive backend testing using Jest and Supertest.

### Running Tests

```bash
cd Backend
npm test
```

### Test Coverage

The test suite covers:
- API endpoint functionality
- Error handling scenarios
- Response format validation
- Middleware integration

## 🚀 Deployment

### Production Backend Deployment

```bash
cd Backend
NODE_ENV=production npm start
```

### Production Frontend Deployment

```bash
cd Frontend/login-monitering
npm run build
npm run preview
```

The built frontend will be served from the `dist/` directory.

### Environment Setup for Production

Ensure the following environment variables are set in production:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_production_mongodb_uri
```

## 💻 Usage

### Monitoring Dashboard

1. Start both backend and frontend servers
2. Open `http://localhost:5173` in your browser
3. View real-time API status and recent log entries
4. Monitor system health and performance metrics

### Log Analysis

- Access raw logs via API endpoints: `/logs/combined.log`
- View error-specific logs: `/logs/error.log`
- Logs are automatically rotated daily to prevent file bloat

### Development Workflow

```bash
# Backend development
cd Backend && npm run dev

# Frontend development
cd Frontend/login-monitering && npm run dev

# Run tests
cd Backend && npm test
```

## 📸 Screenshots

### Dashboard Overview
![Dashboard Interface](Frontend/login-monitering/src/assets/Screenshot%202025-12-05%20100613.png)

The monitoring dashboard provides:
- Real-time API status indicators
- Live log streaming from combined.log
- System uptime and performance metrics
- Error rate monitoring and alerts

## 🔧 Troubleshooting

### Common Issues

#### Backend Server Won't Start
- **Issue:** Port 5000 already in use
- **Solution:** Change PORT in `.env` or kill process using the port
  ```bash
  # Find process using port 5000
  netstat -ano | findstr :5000
  # Kill process (replace PID)
  taskkill /PID <PID> /F
  ```

#### Frontend Build Fails
- **Issue:** Node modules corrupted
- **Solution:** Clear cache and reinstall
  ```bash
  cd Frontend/login-monitering
  rm -rf node_modules package-lock.json
  npm install
  ```

#### Logs Not Rotating
- **Issue:** Log files growing too large
- **Solution:** Check logger configuration in `middleware/logger.js`
- **Verify:** Ensure `NODE_ENV` is set correctly

#### API Returns 404
- **Issue:** Routes not loading
- **Solution:** Check server.js for proper route mounting
- **Verify:** Backend server logs for initialization errors

#### Database Connection Issues
- **Issue:** MongoDB connection fails
- **Solution:** Verify MONGODB_URI in `.env`
- **Check:** MongoDB service is running

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
LOG_LEVEL=debug
```

### Performance Issues

- Monitor memory usage with Node.js built-in tools
- Check log file sizes regularly
- Implement log archiving for long-term storage

## 🤝 Contributing

We welcome contributions to improve the Logging & Monitoring System!

### Development Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Make** your changes and ensure tests pass
4. **Commit** your changes: `git commit -am 'Add new feature'`
5. **Push** to the branch: `git push origin feature/your-feature-name`
6. **Submit** a Pull Request

### Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style

- Use ESLint configuration for JavaScript/React code
- Follow conventional commit messages
- Maintain consistent indentation (2 spaces)
- Add JSDoc comments for functions and classes

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

The ISC License is a permissive free software license written by the Internet Systems Consortium (ISC). It is functionally equivalent to the simplified BSD and MIT licenses.

## 👨‍💻 Author

**Developer Name**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- Email: [your.email@example.com]

Built with ❤️ as a demonstration of modern logging and monitoring practices in MERN stack applications.

---

**Version:** 1.0.0  
**Last Updated:** December 2025  
**Node.js Version:** ≥14.0.0  
**React Version:** 19.2.0