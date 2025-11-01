import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(formData);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3400/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Signup successful!");
        setFormData({ name: "", email: "", password: "" });

        navigate("/login");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
