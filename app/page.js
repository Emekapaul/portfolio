"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "./components/server/Photo";
import Social from "./components/server/Social";
import Stats from "./components/client/Stats";
import Services from "./components/client/Services";
import SlideSkills from "./components/client/SlideSkills";
import Testimonials from "./components/client/Testimonials";
import AnimatedText from "./components/client/AnimatedText";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 pb-6 xl:pb-1 pt-30 md:pt-35 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left order-2 md:order-none"
            >
              <h1 className="heading-1 mb-4 text-left">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Paul Nnaemeka
                </span>
              </h1>
              <AnimatedText />
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                I'm passionate about crafting beautiful and functional web
                experiences. I turn ideas into reality, I bring your ideas and
                visions to life. Let's build!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Contact Me
                </Link>
                <a
                  href="/assets/PaulNna_Software-Engineer.pdf"
                  download
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Download CV
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </a>
              </div>
              <Social
                containerStyles="flex gap-6 justify-center md:justify-start mt-8"
                iconStyles="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 p-2 transition-colors duration-300"
              />
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
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

      {/* Tech Stack Section */}
      <SlideSkills />

      {/* Featured Section Services */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
