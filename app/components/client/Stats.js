"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    title: "Years of Experience",
    value: 5,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Projects Completed",
    value: 56,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Technologies Mastered",
    value: 13,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Code Commits",
    value: 1925,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Awards Won",
    value: 6,
    color: "from-pink-500 to-pink-600",
  },
];

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-12 md:mt-18">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-3 xl:p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <CountUp
                      end={stat.value}
                      duration={5}
                      delay={2}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-500 dark:to-blue-400 bg-clip-text text-transparent"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium tracking-wide">
                      {stat.title}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
