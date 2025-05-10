"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Photo from "../server/Photo";
import Social from "../server/Social";
import emekaPaul from "@/public/assets/images/photo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:your.email@example.com",
    },
  ];

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
      { name: "Hire Me", href: "/hire-me" },
    ],
    social: socialLinks,
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-400 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <Photo
                containerStyles="relative w-10 h-10 mr-1"
                imageSize="40px"
                src={emekaPaul}
                r="190"
                borderWidth="8"
                alt="Logo"
              />
              <h1 className="font-[Orbitron] text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
                PaulNna
                <span className="text-gray-900 dark:text-white font-extrabold">
                  .
                </span>
              </h1>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Full-stack developer passionate about creating beautiful and
              functional web applications.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-2"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Connect
            </h3>
            <Social
              containerStyles="mt-4 flex space-x-6"
              iconStyles="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-400 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} PaulNna. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
