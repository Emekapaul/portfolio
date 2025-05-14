"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, message } = formData;

    if (!fullName.trim()) return setError("A Name is required");
    if (!email.trim()) return setError("Email is required");
    if (!message.trim()) return setError("A Message is required");

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, phone, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }); // Clear the form
      setError(null);
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  return (
    <main className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6 text-gray-800 dark:text-gray-200">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-2 mb-4 text-gray-800 dark:text-gray-200">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {process.env.NEXT_PUBLIC_EMAIL_USER}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaLocationDot className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Abuja, Nigeria
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Emekapaul"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaGithub className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/paul-ugwuoke"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://twitter.com/Emekapaul302"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <FaXTwitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-800 dark:text-gray-200"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md outline-none focus:border-blue-600 focus:ring focus:ring-blue-600"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-800 dark:text-gray-200"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md outline-none focus:border-blue-600 focus:ring focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-800 dark:text-gray-200"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Optional"
                    autoComplete="tel"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md outline-none focus:border-blue-600 focus:ring focus:ring-blue-600"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-800 dark:text-gray-200"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md outline-none focus:border-blue-600 focus:ring focus:ring-blue-600"
                    placeholder="Your message"
                  ></textarea>
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-2">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 ${
                    loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
