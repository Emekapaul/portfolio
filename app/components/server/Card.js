"use client";

const Card = ({ title, subtitle, children, className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 ${className}`}
    >
      {title && (
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
