"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaChevronRight,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNode,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import Social from "../components/Social";
import Photo from "../components/Photo";

const sideNavItems = [
  { title: "Introduction", href: "#introduction" },
  { title: "Work Experience", href: "#experience" },
  { title: "Studies", href: "#education" },
  { title: "Technical skills", href: "#skills" },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto pt-20 md:pt-30 section-padding">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 relative">
          {/* Side Navigation - Mobile Version */}
          <div className="lg:hidden mb-4">
            <nav className="flex overflow-x-auto gap-4 pb-2">
              {sideNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="whitespace-nowrap px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Side Navigation - Desktop Version */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:sticky lg:top-50 h-fit border-l-2 py-5 pl-4 border-gray-400 dark:border-gray-400"
          >
            <nav className="space-y-6">
              {sideNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Section */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-8 lg:gap-20">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:sticky md:top-30"
              >
                <Photo
                  containerStyles="relative w-72 h-72 md:w-60 md:h-60"
                  imageSize="(max-width: 767px) 288px, 240px"
                />
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-justify md:text-left">
                <section className="mb-12 md:mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/contact"
                      className="group flex items-center gap-4 md:gap-10 w-fit mx-auto md:mx-0 mb-4 mt-4 md:mt-0 pl-4 pr-2 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Get in Touch
                      <FaChevronRight
                        size={20}
                        className="border border-white rounded-full group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                    <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">
                      Emeka Paul
                    </h1>
                    <h2 className="text-center md:text-left text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4">
                      Software Engineer
                    </h2>

                    {/* Social Links */}
                    <Social
                      containerStyles="flex gap-6 justify-center md:justify-start mb-4"
                      iconStyles="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-400 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-2 transition-colors duration-300"
                    />
                    <p className="text-gray-600 dark:text-gray-300 mb-6 px-6 md:pr-6 md:pl-0">
                      I'm a passionate Software Engineer with a keen eye for
                      detail and a love for creating beautiful, functional web
                      applications. With years of experience in the industry,
                      I've developed a strong foundation in both front-end and
                      back-end development.
                    </p>
                  </motion.div>
                </section>
                {/* Work Experience Section */}
                <section id="experience" className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-1">Work Experience</h2>
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-2">
                          Senior Software Engineer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          2020 - Present
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Led the development of multiple full-stack
                          applications using modern technologies. Implemented
                          best practices and mentored junior developers.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold mb-2">
                          Full Stack Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          2018 - 2020
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Developed and maintained web applications using React,
                          Node.js, and various databases. Collaborated with
                          design teams to implement responsive UI/UX solutions.
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
                    <h2 className="text-3xl font-bold mb-1">Education</h2>
                    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
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
                    <h2 className="text-3xl font-bold mb-2">
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        <h3 className="text-xl font-bold mb-4">
                          Tools & Others
                        </h3>
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
        </div>
      </div>
    </main>
  );
}
