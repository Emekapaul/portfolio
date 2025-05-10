"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ title, className = "" }) => {
  return (
    <div className={`mb-14 relative ${className}`}>
      <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
        {title}
      </h2>
      <div className="h-1 w-24 bg-[var(--primary)] mt-4 relative">
        <div className="absolute h-1 w-12 bg-[var(--primary)] opacity-50 blur-sm -top-1"></div>
      </div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default SectionHeader;
