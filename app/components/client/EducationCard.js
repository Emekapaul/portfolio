"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Clock } from "lucide-react";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const EducationCard = ({ educationAndCertifications }) => {
  return (
    <div className="w-full px-4 sm:px-8 bg-transparent relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >
        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {educationAndCertifications.map((item) => (
            <motion.div key={item.id} variants={cardVariants} className="group">
              <div className="py-6 px-2 md:px-6 rounded-xl backdrop-blur-sm h-full border border-gray-300 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg dark:bg-[rgba(31,31,46,0.3)] transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-1 md:p-3 rounded-lg bg-[rgba(var(--primary-rgb),0.1)] text-[var(--primary)]">
                    {item.type === "certification" ? (
                      <Award size={24} />
                    ) : (
                      <GraduationCap size={24} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300">
                      {item.school}
                    </h3>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {item.degree}
                    </p>
                    <div className="flex sm:flex-row flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock
                          size={16}
                          className="text-blue-600 dark:text-blue-400"
                        />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="text-blue-600 dark:text-blue-400"
                        />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[var(--primary)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationCard;
