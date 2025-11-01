import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 text-gray-100 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-indigo-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-6rem] right-[-6rem] w-80 h-80 bg-pink-500 opacity-30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
            Gluco<span className="text-blue-300">AI</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            Empowering early diabetes detection through intelligent, AI-powered insights.
            Take charge of your health today.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-5 text-white">Quick Links</h2>
          <ul className="space-y-3 text-gray-200">
            {["Home", "About", "Dashboard", "Login", "Sign Up"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cursor-pointer transition-all duration-200"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-5 text-white">Stay Connected</h2>
          <div className="flex space-x-5 mb-6">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  color: "#fff",
                  textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
                }}
                className="text-gray-200 hover:text-white transition-all duration-300"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          <p className="text-gray-200 text-sm mb-3">
            Subscribe for health insights & updates
          </p>
          <div className="flex bg-white/10 backdrop-blur-lg rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-100 placeholder-gray-300 focus:outline-none"
            />
            <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-r-full hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 border-t border-white/20 mt-10 py-5 text-center text-gray-300 text-sm"
      >
        © {new Date().getFullYear()} <span className="font-semibold text-white">GlucoAI</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
