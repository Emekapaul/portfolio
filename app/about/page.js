"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const sideNavItems = [
  { title: "Introduction", href: "#introduction" },
  { title: "Work Experience", href: "#experience" },
  { title: "Studies", href: "#education" },
  { title: "Technical skills", href: "#skills" },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto pt-30 section-padding">
        <div className="flex flex-col lg:flex-row gap-20 relative">
          {/* Side Navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:sticky lg:top-50 h-fit"
          >
            <nav className="space-y-6">
              {sideNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-20">
                {/* Profile Image */}
                <div className="relative w-48 h-48">
                  <Image
                    src="/assets/images/photo.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <Link
                    href="/contact"
                    className="inline-block mb-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                  >
                    Get in Touch
                  </Link>

                  <h1 className="text-5xl font-bold mb-4">Emeka Paul</h1>
                  <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
                    Software Engineer
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I'm a passionate Software Engineer with a keen eye for
                    detail and a love for creating beautiful, functional web
                    applications. With years of experience in the industry, I've
                    developed a strong foundation in both front-end and back-end
                    development.
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Work Experience Section */}
            <section id="experience" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2">
                      Senior Software Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      2020 - Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Led the development of multiple full-stack applications
                      using modern technologies. Implemented best practices and
                      mentored junior developers.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      2018 - 2020
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Developed and maintained web applications using React,
                      Node.js, and various databases. Collaborated with design
                      teams to implement responsive UI/UX solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    2014 - 2018
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Frontend */}
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>React.js / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>RESTful APIs</li>
                      <li>MongoDB / PostgreSQL</li>
                    </ul>
                  </div>

                  {/* Tools & Others */}
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Git / GitHub</li>
                      <li>Docker</li>
                      <li>AWS / Vercel</li>
                      <li>Agile / Scrum</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
