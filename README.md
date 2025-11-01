diabetes-detection/
│
├── 📂 frontend/ # React.js client-side application
│ ├── 📂 src/
│ │ ├── 📂 assets/ # Images, icons, and static files
│ │ ├── 📂 component/ # Reusable UI components
│ │ │ ├── AboutPage.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── NavBar.jsx
│ │ │ └── ...
│ │ ├── 📂 pages/ # Page-level components (Routes)
│ │ │ ├── HomePage.jsx
│ │ │ ├── LoginPage.jsx
│ │ │ ├── SignupPage.jsx
│ │ │ └── ...
│ │ ├── 📂 customComponents/ # Custom hooks or reusable logic
│ │ │ └── UseAuthentication.js
│ │ ├── App.jsx # Main App component
│ │ ├── index.css # Global styles
│ │ └── main.jsx # Entry point
│ ├── tailwind.config.js # Tailwind CSS configuration
│ ├── vite.config.js # Vite bundler configuration
│ └── package.json # Frontend dependencies
│
├── 📂 server/ # Backend application
│ ├── 📂 authentication/ # Authentication logic (Google OAuth2.0)
│ │ └── googleAuthentication.js
│ ├── 📂 models/ # Mongoose schemas
│ │ └── User.model.js
│ ├── 📂 routes/ # Express routes
│ │ ├── authRoutes.js
│ │ ├── userRoutes.js
│ │ └── predictionRoutes.js
│ ├── 📂 utils/ # Helper utilities (password generator, etc.)
│ │ └── passwordGenerator.js
│ ├── server.js # Entry point for Node.js app
│ ├── package.json # Backend dependencies
│ └── .env.example # Example environment variables
│
├── 📂 ml_model/ (optional) # Python-based machine learning model
│ ├── diabetes_model.pkl # Trained model file
│ ├── model_script.py # Script for model training or inference
│ └── requirements.txt # Python dependencies
│
├── .gitignore # Ignored files for Git
├── README.md # Project documentation
└── LICENSE # License file
