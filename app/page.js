"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "./components/Photo";
import Social from "./components/Social";
import Stats from "./components/Stats";
import Services from "./components/Services";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 pb-6 xl:pb-1 pt-30 md:pt-35 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center md:text-left order-2 md:order-none"
            >
              <span className="inline-block text-gray-800 dark:text-gray-200 rounded-full text-xl font-medium tracking-wide">
                Software Engineer
              </span>
              <h1 className="heading-1 mb-1">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Paul Nnaemeka
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                A passionate Software Engineer crafting beautiful and functional
                web experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Contact Me
                </Link>
                <Link
                  href="/resume.pdf"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Download CV
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </Link>
              </div>
              <Social
                containerStyles="flex gap-6 justify-center md:justify-start mt-8"
                iconStyles="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-400 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 p-2 transition-colors duration-300"
              />
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center items-center order-1 md:order-none"
            >
              <Photo
                containerStyles="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl overflow-visible flex items-center justify-center"
                imageSize="(max-width: 767px) 288px, 384px"
              />
            </motion.div>
          </div>
        </div>
        <Stats />
      </section>

      {/* Featured Section Services */}
      <Services />
    </main>
  );
}
