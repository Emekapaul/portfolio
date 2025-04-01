"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* About Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate Software Engineer with a keen eye for detail and
              a love for creating beautiful, functional web applications. With
              years of experience in the industry, I've developed a strong
              foundation in both front-end and back-end development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  Senior Software Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Company Name • 2020 - Present
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Led the development of multiple full-stack applications using
                  modern technologies. Implemented best practices and mentored
                  junior developers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Company Name • 2018 - 2020
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained web applications using React,
                  Node.js, and various databases. Collaborated with design teams
                  to implement responsive UI/UX solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Education</h2>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                University Name • 2014 - 2018
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
