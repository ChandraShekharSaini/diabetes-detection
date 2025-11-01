import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Loader2, Home } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const num = 90;
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://diabetes-detection-g9hw.vercel.app/api/v1/auth/signup",
        formData, 
        {
          headers: { "Content-Type": "application/json" },
     
     
        }
      );

       console.log(res.data);

      if (res.ok) {
        setMessage("✅ Signup successful!");
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    window.location.href =
      "https://diabetes-detection-g9hw.vercel.app/auth/google";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden p-4">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-pink-400 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-400 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl p-8 rounded-3xl w-full max-w-md text-white"
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-lg">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-100">
            Join GlucoAI and start your AI-powered health journey
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative group">
            <User
              className="absolute left-3 top-3 text-gray-300 group-focus-within:text-white transition"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 backdrop-blur-md transition"
              required
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail
              className="absolute left-3 top-3 text-gray-300 group-focus-within:text-white transition"
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 backdrop-blur-md transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock
              className="absolute left-3 top-3 text-gray-300 group-focus-within:text-white transition"
              size={20}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 backdrop-blur-md transition"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-md shadow-lg hover:shadow-indigo-400/40 transition"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-300/40" />
          <span className="mx-3 text-gray-300">OR</span>
          <hr className="flex-1 border-gray-300/40" />
        </div>

        {/* Google Signup */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center border border-white/30 bg-white/10 py-2 rounded-md hover:bg-white/20 transition"
        >
          <FcGoogle size={24} className="mr-2" />
          <span className="text-white font-medium">Sign up with Google</span>
        </motion.button>

        {/* Message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm text-gray-200"
          >
            {message}
          </motion.p>
        )}

        {/* Footer Links */}
        <p className="text-center text-sm text-gray-200 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-200 hover:text-white transition"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
