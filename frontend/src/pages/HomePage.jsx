import React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Monitor, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 mt-[65px]">
        <section className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white">
          {/* Decorative Gradient Blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 blur-3xl rounded-full -translate-x-24 -translate-y-24 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-25 blur-3xl rounded-full translate-x-24 translate-y-24 animate-pulse"></div>

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            >
              Take Control of Your Health with{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">
                GlucoAI
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-100 leading-relaxed mb-10"
            >
              Detect early signs of diabetes with our{" "}
              <span className="font-semibold text-yellow-200">
                AI-powered analysis
              </span>{" "}
              — fast, accurate, and personalized for you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Decorative Sparkles */}
            {/* Decorative Icons Related to Health & AI */}
           
          </div>
        </section>
        {/* Features Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
          {/* Decorative Gradient Blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full -translate-x-32 -translate-y-24"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full translate-x-24 translate-y-24"></div>

          <div className="relative max-w-7xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              Why Choose <span className="text-indigo-700">GlucoAI?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Experience the next generation of diabetes prediction — built with
              AI precision, user-friendly design, and real-time insights for
              your health journey.
            </motion.p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Feature Card 1 */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white"
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-5">
                <Activity size={40} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">AI Intelligence</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Harness deep learning models for accurate and personalized
                predictions.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: -1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white"
            >
              <div className="bg-red-100 p-4 rounded-full mb-5">
                <Heart size={40} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Smart Health Tracking
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Monitor key metrics with ease — stay informed and in control.
              </p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-400 hover:to-teal-500 hover:text-white"
            >
              <div className="bg-green-100 p-4 rounded-full mb-5">
                <Monitor size={40} className="text-green-500" />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Seamless Experience
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                A beautifully intuitive interface that anyone can navigate
                effortlessly.
              </p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: -1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-cyan-500 hover:text-white"
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-5">
                <CheckCircle size={40} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Proven Reliability</h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                Trusted performance backed by real medical data and expert
                validation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
          {/* Background Blobs for Soft Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full -translate-x-40 -translate-y-24"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full translate-x-20 translate-y-24"></div>

          <div className="relative max-w-6xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              How GlucoAI Works
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Get your diabetes risk analysis in just{" "}
              <span className="font-semibold text-indigo-600">
                three simple steps
              </span>{" "}
              — fast, accurate, and effortless.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-xl rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-2xl font-bold rounded-full shadow-lg mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sign Up
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create your free GlucoAI account to begin your health journey.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-xl rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl font-bold rounded-full shadow-lg mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Enter Your Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Input key health metrics — glucose, BMI, age, and blood
                pressure.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-xl rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 text-white text-2xl font-bold rounded-full shadow-lg mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Instantly receive AI-powered predictions and health insights.
              </p>
            </motion.div>
          </div>
        </section>

       {/* Call to Action Section */}
<section className="relative py-28 px-6 text-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#6d28d9] to-[#db2777] text-white">
  {/* Subtle gradient glows */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 opacity-30 blur-3xl rounded-full -translate-x-40 -translate-y-20"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full translate-x-20 translate-y-24"></div>

  {/* Main content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 bg-gradient-to-r from-cyan-200 via-white to-pink-100 bg-clip-text text-transparent drop-shadow-lg"
    >
      Ready to Take Control of Your Health?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed"
    >
      Join <span className="font-semibold text-white">GlucoAI</span> and
      get personalized insights, early detection, and smart health guidance —
      all powered by AI.
    </motion.p>

    {/* CTA Button */}
    <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 30px rgba(255,255,255,0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/signup")}
      className="relative overflow-hidden bg-white text-indigo-700 font-bold px-10 py-4 rounded-full shadow-xl transition-all duration-300"
    >
      <span className="relative z-10">🚀 Get Started Now</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 rounded-full"
        whileHover={{ opacity: 1 }}
      ></motion.span>
    </motion.button>
  </div>

  {/* Sparkle animation */}
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      className="absolute top-10 left-1/3 w-2 h-2 bg-white rounded-full"
      animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <motion.div
      className="absolute bottom-20 right-1/4 w-3 h-3 bg-cyan-300 rounded-full"
      animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
    />
  </div>
</section>


        
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
