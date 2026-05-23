"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { ExternalLink, Github } from "lucide-react";
// import { ArrowRight } from "lucide-react";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import homeShare from "@/public/assets/images/homeShare.png";
import scheduly from "@/public/assets/images/scheduly.png";
import callOfDuty from "@/public/assets/images/callOfDuty.jpg";
import osoTheStudio from "@/public/assets/images/osoTheStudio.png";
import zypaTech from "@/public/assets/images/zypaTech.png";
import gleamDigitalTechnologies from "@/public/assets/images/gleamDigitalTechnologies.png";
import cre8tiverse from "@/public/assets/images/cre8tiverse.png";
import whoGoFixAm from "@/public/assets/images/whoGoFixAm.png";

const projects = [
  {
    id: 0,
    title: "Gleam Digital Technologies",
    description:
      "Gleam Digital Technologies is a modern technology consultancy website built to showcase scalable digital solutions, cloud infrastructure services, cybersecurity, DevOps practices, and software engineering expertise. The platform features a clean responsive design, modern UI animations, and service-focused architecture tailored for startups and enterprise clients.",
    image: gleamDigitalTechnologies,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    liveUrl: "https://www.gleamdigitaltechnologies.com/",
    githubUrl: "https://github.com/GleamDT/gleam-digital-technologies",
  },
  {
    id: 1,
    title: "ZYPA Tech",
    description:
      "ZYPA Tech is a smart-city and urban innovation platform focused on solving real-world city challenges through scalable digital solutions, transportation technology, housing accessibility tools, and urban resource platforms. The website features a modern responsive interface, service-oriented architecture, and interactive user experience tailored toward sustainable urban development and digital transformation.",
    image: zypaTech,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
    ],
    liveUrl: "https://www.zypatech.online/",
    githubUrl: "https://github.com/JesseGreat/rubanx_website",
  },
  {
    id: 2,
    title: "WhoGoFixAm",
    description:
      "WhoGoFixAm is a vocational services and artisan marketplace platform that connects customers with trusted skilled workers such as plumbers, electricians, mechanics, tailors, and technicians. The platform also enables users to learn vocational skills online or discover nearby workshops, combining local service discovery with digital skill empowerment through a mobile-friendly and culturally localized experience.",
    image: whoGoFixAm,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "React Router",
    ],
    liveUrl: "https://whogofixam.online/",
    githubUrl: "https://github.com/JasperZeroes/WhoGoFixAm",
  },
  {
    id: 3,
    title: "Cre8tiverse",
    description:
      "Cre8tiverse is a creative digital agency and EdTech platform focused on empowering brands, creators, and learners through multimedia solutions, digital marketing, creative training, and content production. The platform features a modern responsive interface, service-driven architecture, educational content integration, and a strong visual identity tailored for innovation, creativity, and digital transformation.",
    image: cre8tiverse,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    liveUrl: "https://www.cre8tiverse.online/",
    githubUrl: "https://github.com/samdcre8tive/cre8tiverse",
  },
  {
    id: 4,
    title: "OsoTheStudio",
    description:
      "OsoTheStudio is a portfolio website designed to showcase the work of a creative studio. It features a modern design, smooth animations, and a user-friendly interface that highlights the studio's projects and services.",
    image: osoTheStudio,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://osothestudio.vercel.app/",
    githubUrl: "https://github.com/Emekapaul/oso-the-studio",
  },
  {
    id: 5,
    title: "HomeShare",
    description:
      "Developed a waitlist platform for HomeShare, a fractional real estate investment marketplace, enabling early users to sign up, engage with key features, and stay informed ahead of the main product launch.",
    image: homeShare,
    technologies: [
      "Vite",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      "express",
      "MongoDB",
      "JWT Authentication",
      "Render",
    ],
    liveUrl: "https://homeshare-tn3c.onrender.com/",
    githubUrl: "https://github.com/Emekapaul/HomeShare",
  },
  {
    id: 6,
    title: "Scheduly",
    description:
      "Scheduly is a modern event scheduling application that helps users manage their events, meetings, and appointments efficiently. Built with a React frontend and Node.js backend, it provides a seamless experience for creating, managing, and organizing events",
    image: scheduly,
    technologies: [
      "React",
      "CSS",
      "Framer Motion",
      "Node.js",
      "express",
      "MongoDB",
      "PassportJs Auth",
      "Firebase",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Emekapaul/scheduly",
  },
  {
    id: 7,
    title: "GameVault",
    description:
      "GameVault is a web app that lets users explore and download their favorite games from a central database. It features a secure login system, smooth animations, and a clean, responsive interface designed to deliver a seamless browsing and downloading experience.",
    image: callOfDuty,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const isProjectDeployed = (project) => {
    return project.liveUrl && project.liveUrl !== "#";
  };

  return (
    <main className="min-h-screen">
      {/* Projects Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6 text-gray-700 dark:text-gray-300">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Here are some of the projects I&apos;ve worked on. Each project
              represents a unique challenge and an opportunity to create
              something meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-50 z-10" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay with links on hover */}
                    <div
                      className={`absolute inset-0 bg-[var(--background)]/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      } z-20`}
                    >
                      {isProjectDeployed(project) ? (
                        <>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--primary)] text-[var(--background)] hover:scale-110 transition-transform"
                          >
                            <FaExternalLinkAlt size={20} />
                          </a>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-[var(--muted)] text-[var(--foreground)] hover:scale-110 transition-transform"
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                        </>
                      ) : (
                        <span className="px-4 py-2 rounded-full bg-[var(--muted)] text-[var(--foreground)] text-sm font-medium">
                          In Development
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-sm backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg dark:bg-[rgba(60,60,80,0.3)] transition-all duration-300 hover:-translate-y-1 rounded-md text-blue-600 dark:text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-sm backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg dark:bg-[rgba(60,60,80,0.3)] transition-all duration-300 hover:-translate-y-1 rounded-md text-blue-600 dark:text-blue-400">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-auto pt-4">
                      {isProjectDeployed(project) ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 group"
                        >
                          View Website
                          <FaArrowRight
                            size={16}
                            className="group-hover:translate-x-2 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          <span>In Development</span>
                          <span className="animate-pulse">•</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
