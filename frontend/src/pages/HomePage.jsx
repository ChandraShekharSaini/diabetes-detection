import React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Monitor, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
    
      <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Diabetes Detection Made Easy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-8"
          >
            Quickly assess your risk and take control of your health with our AI-powered detection tool.
          </motion.p>
          <motion.button
            onClick={() => navigate("/signup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diabetes detection system is easy to use, accurate, and helps you monitor your health proactively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <Activity size={40} className="text-indigo-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">AI Powered</h3>
            <p className="text-gray-600">Advanced AI algorithms to assess your risk accurately.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <Heart size={40} className="text-red-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Health Monitoring</h3>
            <p className="text-gray-600">Keep track of your vitals and diabetes risk conveniently.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <Monitor size={40} className="text-green-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">User Friendly</h3>
            <p className="text-gray-600">Simple interface, easy for everyone to use.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <CheckCircle size={40} className="text-indigo-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Reliable</h3>
            <p className="text-gray-600">Trusted results to help you take timely decisions.</p>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow three simple steps to assess your diabetes risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <span className="text-2xl font-bold mb-2 inline-block">1</span>
            <h3 className="font-semibold text-xl mb-2">Sign Up</h3>
            <p className="text-gray-600">Create an account to access the diabetes detection tool.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <span className="text-2xl font-bold mb-2 inline-block">2</span>
            <h3 className="font-semibold text-xl mb-2">Enter Data</h3>
            <p className="text-gray-600">Input your health parameters like glucose levels, BMI, and age.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <span className="text-2xl font-bold mb-2 inline-block">3</span>
            <h3 className="font-semibold text-xl mb-2">Get Results</h3>
            <p className="text-gray-600">Receive an instant analysis of your diabetes risk and recommendations.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Take Control of Your Health?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
          className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Diabetes Detection. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
