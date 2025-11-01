import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-100 text-gray-800 overflow-hidden">
      {/* Hero Section */}
  
<section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-purple-100">
  {/* Animated background glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-300/30 blur-3xl rounded-full animate-pulse -z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-pulse -z-10"></div>

  {/* Logo and Title */}
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col md:flex-row justify-center items-center gap-3"
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <Sparkles className="text-indigo-600 w-10 h-10 drop-shadow-md" />
    </motion.div>

    <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
      GlucoAI
    </h1>
  </motion.div>

  {/* Subtext */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-700 leading-relaxed"
  >
    Empowering lives through{" "}
    <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      AI-driven diabetes detection
    </span>{" "}
    and health awareness. Take control of your well-being with smart,
    predictive insights that inspire a healthier future.
  </motion.p>

  {/* Floating tagline or badge */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
  >
    💡 Powered by Artificial Intelligence for a Healthier Tomorrow
  </motion.div>

  {/* Subtle animated line */}
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    className="mt-12 w-32 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"
  />
</section>

 {/* Mission Section */}
<section className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-8 py-20 bg-gradient-to-r from-indigo-50 via-white to-purple-50 overflow-hidden">
  {/* Soft gradient background circles */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -z-10" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />

  {/* Text Section */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="md:w-1/2 text-center md:text-left"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
      Our Mission
    </h2>

    {/* Glowing Divider */}
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto md:mx-0 rounded-full mb-6 animate-pulse"></div>

    <p className="text-gray-700 text-lg leading-relaxed mb-4">
      At <span className="font-semibold text-indigo-700">GlucoAI</span>, our mission is to make
      <span className="text-purple-600 font-medium"> early diabetes detection </span>
      accessible to everyone — empowering individuals through innovation and data intelligence.
    </p>

    <p className="text-gray-600 text-base leading-relaxed">
      By harnessing the power of <span className="font-semibold text-indigo-600">Artificial Intelligence</span>,
      we enable proactive health management, allowing people to take charge of their wellbeing and
      make timely, informed decisions that can transform lives.
    </p>
  </motion.div>

  {/* Image Section */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative md:w-1/2"
  >
    <motion.img
      src="https://img.freepik.com/free-photo/stay-strong-healthy-asian-family-multi-generation-wearing-virus-protective-face-mask-stay-quarantane-together-living-room-home-background-social-distacing-new-normal-lifestyle_609648-405.jpg"
      alt="Health Checkup"
      className="w-full rounded-3xl shadow-2xl border border-indigo-200 hover:shadow-indigo-300/40 transition-all duration-500"
      whileHover={{ scale: 1.05, y: -5 }}
    />

    {/* Floating Tag */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg"
    >
      AI-Driven Health Insights 🤖❤️
    </motion.div>
  </motion.div>
</section>



   {/* Technology Section */}
<section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 text-center px-6 relative overflow-hidden">
  {/* Animated background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)] blur-3xl"></div>

  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-8"
  >
    How GlucoAI Works
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="relative max-w-3xl mx-auto text-gray-700 mb-16 leading-relaxed text-lg"
  >
    GlucoAI combines medical science and artificial intelligence to detect diabetes risk — 
    analyzing your health data with precision and delivering insights that empower smarter lifestyle choices.
  </motion.p>

  {/* Flow Cards */}
  <div className="relative flex flex-wrap justify-center gap-10 md:gap-16">
    {[
      {
        title: "1. Data Input",
        desc: "You provide essential health details — glucose levels, BMI, blood pressure, and age.",
        src: "https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-14-at-3.30.06-PM-5.jpeg",
        alt: "Health data input",
      },
      {
        title: "2. AI-Powered Analysis",
        desc: "Our machine learning model processes data using advanced algorithms to detect early signs of diabetes.",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEPXYZoxU-i6bd3C01dUQxMJIEfCPoeJmrX6Cx8oAzmYW9KAghN5eHZku_fa0MoZW30Y&usqp=CAU",
        alt: "AI data analysis",
      },
      {
        title: "3. Personalized Insights",
        desc: "Receive a detailed risk report and actionable insights to maintain your health effectively.",
        src: "https://media.licdn.com/dms/image/v2/D5612AQFDUwn2jdZalA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728480895369?e=2147483647&v=beta&t=S9uImgcK-XKC_U9IUoPZcJqOVFlzFr1LAN-JB0qqUQk",
        alt: "Personalized AI insights",
      },
    ].map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-white/80 backdrop-blur-xl border border-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-80"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold px-5 py-2 rounded-full shadow-lg">
          Step {i + 1}
        </div>

        <img
          src={step.src}
          alt={step.alt}
          className="w-60 h-40 object-cover rounded-2xl mx-auto mb-5 shadow-md"
        />
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
      </motion.div>
    ))}
  </div>

  {/* Animated connecting arrows for desktop */}
  <div className="hidden md:flex justify-center items-center mt-16 gap-6 text-indigo-500">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-4xl"
    >
      ➡️
    </motion.span>
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-4xl"
    >
      ➡️
    </motion.span>
  </div>
</section>


 {/* Team Section */}
<section className="py-20 px-6 text-center bg-gradient-to-b from-white via-indigo-50 to-purple-100">
  <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
    Meet Our Experts
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
    GlucoAI is powered by a passionate team of doctors, AI specialists, and researchers 
    dedicated to transforming diabetes care through innovation and compassion.
  </p>

  <div className="flex flex-wrap justify-center gap-10">
    {[
      {
        name: "Dr. Anjali Sharma",
        role: "Endocrinologist & Medical Advisor",
        img: "https://aeroflowdiabetes.com/media/wysiwyg/Untitled_design_31__5.png",
      },
      {
        name: "Dr. Ramesh Verma",
        role: "Diabetes Specialist",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/WRcwyDhvCktKjrbpWubL5g/348s.jpg",
      },
      {
        name: "Dr. Sneha Patel",
        role: "Clinical Nutrition Expert",
        img: "https://www.imperial.nhs.uk/-/media/website/consultant-directory/a-to-e/aditi-sharma.jpg?rev=cbb1b65306d248bf82895a08b987e2d9&bc=E6F2F9&w=954&h=556&as=1&la=en&hash=4592219ECFF0F84E177999B488D09461",
      },
      {
        name: "Ravi Kumar",
        role: "AI Research Engineer",
        img: "https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Vimal_Upreti_0d7ec75017.jpg",
      },
      {
        name: "Neha Gupta",
        role: "Health Data Scientist",
        img: "https://img.freepik.com/premium-photo/female-doctor-with-stethoscope-around-her-neck_1204495-11696.jpg",
      },
      {
        name: "Dr. Priya Nair",
        role: "Public Health Researcher",
        img: "https://img.bookimed.com/doctor/6533e69f3baa1_b.jpeg",
      },
      {
        name: "Dr. Arjun Mehta",
        role: "AI in Healthcare Specialist",
        img: "https://images.jdmagicbox.com/v2/comp/lucknow/d4/0522px522.x522.201128090004.b9d4/catalogue/dr-rishabh-jaiswal-gomti-nagar-lucknow-orthopaedic-doctors-bwvfv9x5g9.jpg",
      },
      {
        name: "Dr. Kavita Reddy",
        role: "Medical Data Analyst",
        img: "https://assets.thehansindia.com/h-upload/2023/10/30/1393445-saloni-anand.webp",
      },
    ].map((member, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.08, y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-md border border-transparent hover:border-indigo-200 shadow-md hover:shadow-2xl rounded-2xl p-6 w-72 transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-xl -z-10" />
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-100 shadow-md"
        />
        <h3 className="text-xl font-semibold text-indigo-700 mb-1">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center py-6 mt-10 shadow-inner">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">GlucoAI</span> — Empowering Health with Artificial Intelligence.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
