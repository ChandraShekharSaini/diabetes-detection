# 🩺 GlucoAI — Diabetes Detection and Prediction System

**GlucoAI** is a full-stack web application that helps detect diabetes risk using **AI-powered machine learning models**.  
It enables users to input health data, get predictions, and manage their health insights with a modern, intuitive interface.

---

## 📖 Table of Contents

1. [✨ Overview](#-overview)
2. [🧠 Tech Stack Used](#-tech-stack-used)
3. [📦 Features](#-features)
4. [📁 Project Structure](#-project-structure)
5. [⚙️ Installation & Setup](#️-installation--setup)
6. [🔑 Environment Variables](#-environment-variables)
7. [🚀 Running the Project](#-running-the-project)
8. [📸 UI Preview](#-ui-preview)
9. [🧑‍💻 Author](#-author)
10. [🛡️ License](#️-license)

---

## ✨ Overview

GlucoAI leverages **React**, **Node.js**, and **Machine Learning** to predict diabetes based on user health inputs like BMI, glucose levels, age, and more.  
The goal is to empower users to make data-driven health decisions with early detection.

---

## 🧠 Tech Stack Used

### **Frontend**
- ⚛️ React.js (Vite)
- 💨 Tailwind CSS
- 🎞️ Framer Motion for animations
- 🌐 Axios for API communication

### **Backend**
- 🧩 Node.js + Express.js
- 🔒 Passport.js (Google OAuth2.0)
- 🗄️ MongoDB with Mongoose
- 🧠 Python (Machine Learning Model Integration)

### **Development Tools**
- 🧰 Git & GitHub
- 🧱 VS Code
- 🌍 Postman for API testing

---

## 📦 Features

✅ AI-based diabetes prediction  
✅ Google OAuth2.0 secure authentication  
✅ Interactive dashboard for users  
✅ Beautiful UI/UX with Tailwind and animations  
✅ Modular & scalable code structure  

---

## 📁 Project Structure

The repository is organized into two main parts: the **frontend** (React + Tailwind) and the **backend** (Node.js + Express + MongoDB + Python ML).

```bash
diabetes-detection/
│
├── 📂 frontend/                # React.js client-side application
│   ├── 📂 src/
│   │   ├── 📂 assets/          # Images, icons, and static files
│   │   ├── 📂 component/       # Reusable UI components
│   │   │   ├── AboutPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── ...
│   │   ├── 📂 pages/           # Page-level components (Routes)
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   └── ...
│   │   ├── 📂 customComponents/ # Custom hooks or reusable logic
│   │   │   └── UseAuthentication.js
│   │   ├── App.jsx             # Main App component
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Entry point
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── vite.config.js          # Vite bundler configuration
│   └── package.json            # Frontend dependencies
│
├── 📂 server/                  # Backend application
│   ├── 📂 authentication/      # Authentication logic (Google OAuth2.0)
│   │   └── googleAuthentication.js
│   ├── 📂 models/              # Mongoose schemas
│   │   └── User.model.js
│   ├── 📂 routes/              # Express routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── predictionRoutes.js
│   ├── 📂 utils/               # Helper utilities (password generator, etc.)
│   │   └── passwordGenerator.js
│   ├── server.js               # Entry point for Node.js app
│   ├── package.json            # Backend dependencies
│   └── .env.example            # Example environment variables
│
├── 📂 ml_model/ (optional)     # Python-based machine learning model
│   ├── diabetes_model.pkl      # Trained model file
│   ├── model_script.py         # Script for model training or inference
│   └── requirements.txt        # Python dependencies
│
├── .gitignore                  # Ignored files for Git
├── README.md                   # Project documentation
└── LICENSE                     # License file


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ChandraShekharSaini/diabetes-detection.git
cd diabetes-detection
 add project structorte
