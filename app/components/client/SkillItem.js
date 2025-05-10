"use client";

import { useState, useEffect } from "react";
import { Server, Database, Terminal, Layout } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

// Add these animation variants at the top of the file, after imports
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const SkillItem = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Layout size={24} />,
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          level: "Expert",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          level: "Advanced",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          level: "Expert",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          level: "Expert",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          level: "Expert",
        },
        {
          name: "Framer Motion",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
          level: "Expert",
        },
      ],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
          level: "Expert",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
          level: "Advanced",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          level: "Expert",
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          level: "Expert",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
          level: "Expert",
        },
        // {
        //   name: "Prisma",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        //   level: "Advanced",
        // },
        // {
        //   name: "Firebase",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        //   level: "Intermediate",
        // },
        // {
        //   name: "Appwrite",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
        //   level: "Expert",
        // },
        // {
        //   name: "GraphQL",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        //   level: "Advanced",
        // },
      ],
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      skills: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
          level: "Expert",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          level: "Advanced",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          level: "Advanced",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
          level: "Intermediate",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
          level: "Intermediate",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
          level: "Expert",
        },
        // {
        //   name: "Appwrite",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
        //   level: "Expert",
        // },
      ],
    },
    {
      name: "DevOps",
      icon: <Terminal size={24} />,
      skills: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          level: "Advanced",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          level: "Expert",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setTimeout(() => {
          setIsAnimating(false);
        }, 150);
      }, 300);
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "var(--primary)";
      case "Advanced":
        return "#4CD964";
      case "Intermediate":
        return "#FF9500";
      default:
        return "var(--primary)";
    }
  };

  const activeCategorySkills = skillCategories.find(
    (cat) => cat.name === activeCategory
  ).skills;

  return (
    <section
      id="skills"
      className="w-full py-10 px-4 sm:px-8 bg-transparent relative overflow-hidden"
    >
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 relative"
        >
          <h2 className="text-4xl font-bold text-gray-600 dark:text-[var(--foreground)] inline-block">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-[var(--primary)] mt-4 relative">
            <div className="absolute h-1 w-12 bg-[var(--primary)] opacity-50 blur-sm -top-1"></div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Categories with animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 xl:grid-cols-4 gap-4 items-start justify-center mb-12"
        >
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.name;
            return (
              <motion.button
                key={index}
                variants={categoryVariants}
                onClick={() => handleCategoryChange(category.name)}
                className={`cursor-pointer relative px-5 py-3 rounded-lg transition-all duration-300 overflow-hidden group ${
                  isActive
                    ? "shadow-lg bg-[rgba(var(--primary-rgb),0.1)] border border-[var(--primary)]"
                    : "dark:bg-[rgba(31,31,46,0.3)] border border-[rgba(0,0,0,0.1)] dark:border-[rgba(224,224,224,0.1)]"
                }`}
                style={{
                  transform: isActive ? "translateY(-2px)" : "translateY(0px)",
                }}
              >
                {/* Enhanced shimmering effect */}
                <div
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 25%, rgba(0, 191, 255, 0.5) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 1.5s infinite linear",
                  }}
                />

                <div className="flex items-center justify-center">
                  <span
                    className={`mr-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-gray-600 dark:text-[var(--foreground)]"
                    }`}
                  >
                    {category.icon}
                  </span>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-gray-600 dark:text-[var(--foreground)]"
                    }`}
                  >
                    {category.name}
                  </span>
                </div>

                {/* Enhanced animated underline */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full"
                    style={{
                      background: "var(--primary)",
                      boxShadow: "0 0 8px 1px var(--primary)",
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid with animation */}
        <motion.div
          variants={skillsContainerVariants}
          initial="hidden"
          animate={isAnimating ? "hidden" : "visible"}
          className={`transition-all duration-300 ${
            isAnimating
              ? "opacity-0 transform scale-95"
              : "opacity-100 transform scale-100"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 items-start justify-center">
            {activeCategorySkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Modernized skill card - more compact */}
                <div
                  className={`p-4 rounded-lg backdrop-blur-sm transition-all duration-300 h-full flex flex-col items-center justify-between transform group-hover:shadow-lg group-hover:-translate-y-1 ${
                    hoveredSkill === skill.name
                      ? "dark:bg-[rgba(31,31,46,0.5)]"
                      : "dark:bg-[rgba(31,31,46,0.3)]"
                  }`}
                  style={{
                    border:
                      hoveredSkill === skill.name
                        ? `1px solid ${getLevelColor(skill.level)}`
                        : "1px solid rgba(0,0,0,0.2)",
                    boxShadow:
                      hoveredSkill === skill.name
                        ? `0 4px 12px rgba(0, 191, 255, 0.1)`
                        : "none",
                  }}
                >
                  {/* Skill icon without circle border */}
                  <div className="relative w-full flex justify-center mb-3">
                    <div className="w-12 h-12 relative transform transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />

                      {/* Subtle glow effect on hover */}
                      {hoveredSkill === skill.name && (
                        <div
                          className="absolute inset-0 -z-10 opacity-20 blur-md rounded-full"
                          style={{
                            backgroundColor: getLevelColor(skill.level),
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Skill name - simple version without progress bar */}
                  <h3 className="font-medium text-center text-sm text-gray-600 dark:text-[var(--foreground)]">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillItem;
