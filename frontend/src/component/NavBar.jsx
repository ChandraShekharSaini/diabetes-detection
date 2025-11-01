import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveNavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 border-b border-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Sparkles */}
        <motion.div
  onClick={() => navigate("/")}
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 cursor-pointer select-none"
>
  <motion.div
    animate={{
      rotate: [0, 10, -10, 0],
      scale: [1, 1.3, 1],
      opacity: [1, 0.8, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    <motion.div
      className="absolute inset-0 blur-md bg-indigo-500/50 rounded-full"
      animate={{
        scale: [1, 1.6, 1],
        opacity: [0.5, 0.2, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <Sparkles className="relative text-indigo-500 w-6 h-6 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
  </motion.div>

  <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 drop-shadow-sm">
    GlucoAI
  </h1>
</motion.div>


        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer transition-all duration-300 group"
              onClick={() => navigate(link.path)}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:text-transparent font-semibold">
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X size={28} className="text-indigo-600" />
            ) : (
              <Menu size={28} className="text-indigo-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-indigo-600 via-blue-600 to-purple-700 text-white shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-center p-5 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                  <h2 className="text-xl font-bold tracking-wide">
                    GlucoAI
                  </h2>
                </div>
                <X
                  size={28}
                  className="cursor-pointer hover:text-yellow-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <ul className="flex flex-col p-6 space-y-6 text-lg font-medium">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.05, x: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="hover:text-yellow-300 cursor-pointer transition-colors duration-300"
                    onClick={() => {
                      navigate(link.path);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-10 w-full text-center"
              >
                <p className="text-sm text-white/80">
                  © {new Date().getFullYear()} GlucoAI
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavBar;
