"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import {
  Building,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";
import Social from "../components/server/Social";
import Photo from "../components/server/Photo";
import SkillItem from "../components/client/SkillItem";
import AnimatedBackground from "../components/client/AnimatedBackground";
import SectionHeader from "../components/server/SectionHeader";
import Card from "../components/server/Card";
import { useState } from "react";
import EducationCard from "../components/client/EducationCard";

const sideNavItems = [
  { title: "Introduction", href: "#introduction" },
  { title: "Work Experience", href: "#experience" },
  { title: "Studies", href: "#education" },
  { title: "Technical skills", href: "#skills" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const experience = [
  {
    id: 1,
    company: "Aptech Learning",
    role: "Software Engineer Faculty",
    period: "Feb 2025 - Present",
    location: "Abuja, Nigeria",
    type: "Full Time",
    description:
      "Mentored 200+ engineers with industry-focused training, projects, and career coaching, leading to strong placement outcomes.",
    points: [
      "Lead instructor and mentor for 200+ aspiring engineers, designing industry-aligned curriculum and coaching students in development and career readiness, with many securing internships and full-time roles within six months",
      "Mentored students on deploying applications and integrating cloud/ML, with strong internship and job placement outcomes.",
      "Introduced business case studies and hackathons to foster collaboration, leadership, and innovation",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "MySql",
      "Python",
      "Django",
      "Flask",
    ],
    link: "https://aptech-nigeria.com/",
  },
  {
    id: 2,
    company: "Fidelity Pension Managers",
    role: "Software Engineer",
    period: "July 2021 - Dec 2025",
    location: "Abuja, Nigeria",
    type: "Full Time",
    description:
      "Developed and maintained web applications to automate pension fund administration and compliance reporting, improving operational efficiency and data accuracy.",
    points: [
      "Built and maintained applications automating pension fund administration and compliance reporting",
      "Partnered with finance, compliance, and IT teams to deliver secure digital platforms for 200k+ customer accounts.",
      "Integrated APIs and payment systems, streamlining client onboarding and service delivery.",
      "Advised management on automation initiatives, improving accuracy and operational efficiency.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "MySql",
      "FireBase",
      "Tailwind",
      "Framer Motion",
      "Vite",
      "WebPack",
      "JWT Auth",
    ],
    link: "https://www.fidelitypensionmanagers.com/",
  },
  {
    id: 3,
    company: "Egbin Power PLC",
    role: "Software Engineer Intern",
    period: "Oct 2019 - Aug 2021",
    location: "Abuja, Nigeria",
    type: "Full Time",
    description:
      "Developed internal tools and dashboards to digitize maintenance, safety, and compliance processes at Nigeria's largest power plant, enhancing operational efficiency and data accuracy.",
    points: [
      "Developed applications for maintenance tracking, workforce scheduling, and equipment monitoring.",
      "Designed real-time dashboards that reduced downtime and enabled proactive plant maintenance.",
      "Collaborated with engineers and analysts to digitize safety inspections and compliance processes.",
    ],
    skills: [
      "HTML",
      "css",
      "Javascript",
      "React",
      "Vite",
      "WebPack",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    link: "https://egbin-power.com/",
  },
];

const educationAndCertifications = [
  {
    id: 1,
    type: "education",
    school: "Federal University of Ibadan",
    degree: "Bachelor of Science in Psychology",
    period: "2015 - 2020",
    location: "Ibadan, Oyo State, Nigeria",
  },
  {
    id: 2,
    type: "education",
    school: "ALX Africa",
    degree: "Software Engineering",
    period: "2024",
    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    type: "certification",
    school: "Meta",
    degree: "Programming in Python",
    period: "2023",
    location: "Remote",
  },
  {
    id: 4,
    type: "certification",
    school: "Codecademy",
    degree: "Software Engineering Fundamentals",
    period: "2022",
    location: "Remote",
  },
  {
    id: 5,
    type: "certification",
    school: "Microsoft",
    degree: "Microsoft Azure Fundamentals",
    period: "2021",
    location: "Remote",
  },
  {
    id: 6,
    type: "certification",
    school: "Coursera",
    degree: "Web Development",
    period: "2019",
    location: "Remote",
  },
];

export default function About() {
  const [expandedCards, setExpandedCards] = useState({});

  const togglePoints = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto pt-20 md:pt-30 section-padding">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 relative">
          {/* Side Navigation - Mobile Version */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:hidden mb-4"
          >
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
          </motion.div>

          {/* Side Navigation - Desktop Version */}
          <motion.aside
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:block lg:sticky lg:top-50 h-fit border-l-2 py-5 pl-4 border-gray-400 dark:border-gray-400"
          >
            <nav className="space-y-6">
              {sideNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 hover:translate-x-1"
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
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:sticky md:top-30"
              >
                <Photo
                  containerStyles="relative w-72 h-72 md:w-60 md:h-60"
                  imageSize="(max-width: 767px) 288px, 240px"
                />
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 text-left">
                <section className="mb-12 md:mb-16">
                  <motion.div {...fadeInUp} viewport={{ once: true }}>
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
                    <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-gray-600 dark:text-gray-300">
                      Emeka Paul
                    </h1>

                    <h2 className="text-center md:text-left text-xl sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
                      Software Engineer
                    </h2>

                    {/* Social Links */}
                    <Social
                      containerStyles="flex gap-6 justify-center md:justify-start mb-4"
                      iconStyles="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-400 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 p-2 transition-colors duration-300"
                    />
                    <p className="text-gray-600 dark:text-gray-300 mb-6 px-6 md:pr-6 md:pl-0">
                      I&apos;m a passionate Software Engineer with a keen eye
                      for detail and a love for creating beautiful, functional
                      web applications. With years of experience in the
                      industry, I&apos;ve developed a strong foundation in both
                      front-end and back-end development.
                    </p>
                  </motion.div>
                </section>

                {/* Work Experience Section */}
                <section
                  id="experience"
                  className="mb-16 relative px-4 py-10 md:pl-8 md:pr-0 bg-transparent overflow-hidden"
                >
                  <AnimatedBackground />
                  <motion.div {...fadeInUp} viewport={{ once: true }}>
                    <SectionHeader title="Work Experience" />
                    <div className="space-y-8">
                      {experience.map((exp, index) => (
                        <Card
                          key={exp.id}
                          title={exp.company}
                          subtitle={exp.role}
                        >
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-6 my-4 sm:my-6 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar
                                  size={16}
                                  className="text-blue-600 dark:text-blue-400"
                                />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin
                                  size={16}
                                  className="text-blue-600 dark:text-blue-400"
                                />
                                {exp.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock
                                  size={16}
                                  className="text-blue-600 dark:text-blue-400"
                                />
                                {exp.type}
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                              {exp.description}
                            </p>

                            {/* View Key Contributions Button */}
                            <button
                              onClick={() => togglePoints(exp.id)}
                              className="mb-4 text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-sm sm:text-base"
                            >
                              {expandedCards[exp.id]
                                ? "Hide Key Contributions"
                                : "View Key Contributions"}
                              {expandedCards[exp.id] ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </button>

                            {/* Key Contributions */}
                            {expandedCards[exp.id] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="space-y-2"
                              >
                                {exp.points.map((point, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                                  >
                                    <span className="text-blue-600 dark:text-blue-400">
                                      •
                                    </span>
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {exp.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-sm text-blue-600 dark:text-blue-400 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg dark:bg-[rgba(60,60,80,0.3)] transition-all duration-300 hover:-translate-y-1 rounded-md"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group border border-blue-600 dark:border-blue-400 rounded-full px-4 py-2"
                              >
                                <span>View Website</span>
                                <ExternalLink
                                  size={16}
                                  className="group-hover:translate-x-1 transition-transform"
                                />
                              </a>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Education Section */}
                <section
                  id="education"
                  className="mb-16 bg-transparent overflow-hidden relative px-4 py-10 md:pl-8 md:pr-0"
                >
                  <AnimatedBackground />
                  <motion.div {...fadeInUp} viewport={{ once: true }}>
                    <SectionHeader title="Education & Certifications" />
                    <EducationCard
                      educationAndCertifications={educationAndCertifications}
                    />
                  </motion.div>
                </section>

                {/* Technical Skills Section */}
                <SkillItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
