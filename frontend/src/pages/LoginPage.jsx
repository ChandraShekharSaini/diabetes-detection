import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, LogIn, Home } from "lucide-react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://diabetes-detection-g9hw.vercel.app/api/v1/auth/login", {
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
    } catch {
      setMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://diabetes-detection-g9hw.vercel.app/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 relative overflow-hidden p-4">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400 opacity-30 blur-3xl rounded-full -translate-x-24 -translate-y-24 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-25 blur-3xl rounded-full translate-x-24 translate-y-24 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-400 p-3 rounded-full mb-4 shadow-lg"
          >
            <LogIn className="text-white" size={28} />
          </motion.div>

          <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 drop-shadow-md">
            Welcome to GlucoAI
          </h1>
          <p className="mt-2 text-gray-200 text-sm text-center">
            Your AI-powered diabetes detection assistant
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative group">
            <Mail
              className="absolute left-3 top-3 text-gray-300 group-focus-within:text-yellow-300 transition"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <Lock
              className="absolute left-3 top-3 text-gray-300 group-focus-within:text-yellow-300 transition"
              size={20}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center items-center bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 text-gray-900 font-semibold py-2 rounded-md shadow-lg hover:shadow-xl transition"
          >
            {loading && <Loader2 className="animate-spin mr-2" />}
            {loading ? "Logging In..." : "Login"}
          </motion.button>
        </form>

        {/* Google Login */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-300 mb-2 text-sm">or continue with</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full bg-white text-gray-700 py-2 rounded-md shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </motion.button>
        </div>

        {/* Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm text-yellow-200"
          >
            {message}
          </motion.p>
        )}

        {/* Redirects */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-yellow-300 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-300 hover:text-yellow-300 transition"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
