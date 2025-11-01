// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Mail, Lock, Loader2, LogIn } from "lucide-react";

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch("http://localhost:3400/api/v1/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("✅ Login successful!");
//         setFormData({ email: "", password: "" });
//         setTimeout(() => navigate("/"), 1500);
//       } else {
//         setMessage(`❌ ${data.message}`);
//       }
//     } catch (error) {
//       setMessage("❌ Server error. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
//       >
//         <div className="flex items-center justify-center mb-6">
//           <LogIn className="text-blue-600 mr-2" size={28} />
//           <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Email Input */}
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center items-center bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
//           >
//             {loading ? <Loader2 className="animate-spin mr-2" /> : null}
//             {loading ? "Logging In..." : "Login"}
//           </button>
//         </form>

//         {/* Message */}
//         {message && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center mt-4 text-sm text-gray-700"
//           >
//             {message}
//           </motion.p>
//         )}

//         {/* Signup Redirect */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             className="text-indigo-600 hover:underline cursor-pointer"
//           >
//             Sign Up
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, LogIn } from "lucide-react";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3400/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful!");
        setFormData({ email: "", password: "" });
        setTimeout(() => navigate("/"), 1500);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // 👉 Google OAuth handler
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3400/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-6">
          <LogIn className="text-blue-600 mr-2" size={28} />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-500 mb-2 text-sm">or continue with</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="font-medium text-gray-700">Sign in with Google</span>
          </motion.button>
        </div>

        {/* Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm text-gray-700"
          >
            {message}
          </motion.p>
        )}

        {/* Signup Redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginForm;

