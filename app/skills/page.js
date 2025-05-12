"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = {
  frontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      level: 90,
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      level: 95,
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      level: 80,
    },
    {
      name: "HTML/CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      level: 95,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      level: 88,
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      level: 88,
    },

    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      level: 80,
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      level: 80,
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      level: 80,
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      level: 80,
    },
    {
      name: "REST APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/api/api-plain.svg",
      level: 95,
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      level: 87,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      level: 85,
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      level: 86,
    },
  ],
  devops: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      level: 90,
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      level: 75,
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
      level: 70,
    },
    {
      name: "CI/CD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      level: 86,
    },
    {
      name: "Agile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/agile/agile-original.svg",
      level: 86,
    },
  ],
};

export default function Skills() {
  return (
    <main className="min-h-screen">
      {/* Skills Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 text-gray-700 dark:text-gray-300 mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I&apos;ve developed a comprehensive skill set through years of
              experience in software development. Here&apos;s a breakdown of my
              technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h2 className="heading-3 mb-6 text-gray-700 dark:text-gray-300">
                Frontend
              </h2>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-4">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${
                          skill.level > 85 ? "bg-green-600" : "bg-blue-600"
                        } h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h2 className="heading-3 mb-6 text-gray-700 dark:text-gray-300">
                Backend
              </h2>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-4">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${
                          skill.level > 85 ? "bg-green-600" : "bg-blue-600"
                        } h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Database Skills */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h2 className="heading-3 mb-6 text-gray-700 dark:text-gray-300">
                Database
              </h2>
              <div className="space-y-4">
                {skills.database.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-4">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${
                          skill.level > 85 ? "bg-green-600" : "bg-blue-600"
                        } h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DevOps & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h2 className="heading-3 mb-6 text-gray-700 dark:text-gray-300">
                DevOps & Tools
              </h2>
              <div className="space-y-4">
                {skills.devops.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center gap-4">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${
                          skill.level > 85 ? "bg-green-600" : "bg-blue-600"
                        } h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
