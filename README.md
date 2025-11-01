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

diabetes-detection/
│
├── frontend/ # React + Tailwind frontend
│ ├── src/
│ │ ├── component/ # Navbar, Footer, AboutPage, Dashboard
│ │ ├── pages/ # HomePage, LoginPage, SignupPage
│ │ └── customComponeds/# Custom Hooks & Utils
│ └── package.json
│
├── server/ # Node.js backend
│ ├── authentication/ # Google OAuth Strategy
│ ├── models/ # MongoDB models
│ ├── routes/ # Express routes
│ ├── utils/ # Helper functions
│ └── server.js
│
├── .env # Environment variables (not committed)
└── README.md

