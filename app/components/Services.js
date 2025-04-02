import { motion } from "framer-motion";
import {
  FaCode,
  FaUser,
  FaShoppingCart,
  FaDatabase,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";

// Constants
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Creating responsive and modern web applications using the latest technologies.",
    icon: FaCode,
  },
  {
    id: 2,
    title: "API Integration",
    description:
      "Integrating APIs to enhance functionality and streamline data flow.",
    icon: FaCode,
  },
  {
    id: 3,
    title: "Database Management",
    description:
      "Managing and optimizing databases to ensure efficient data storage and retrieval.",
    icon: FaDatabase,
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "Secure and scalable e-commerce websites built with the latest technologies.",
    icon: FaShoppingCart,
  },
  {
    id: 5,
    title: "User Interfaces",
    description:
      "Designing intuitive and beautiful user interfaces that enhance user experience.",
    icon: FaUser,
  },

  {
    id: 6,
    title: "Real-Time Features",
    description:
      "Add live chat, notifications, and other real-time features to your website.",
    icon: FaComments,
  },
  {
    id: 7,
    title: "SEO Optimization",
    description:
      "Optimizing your website for search engines to improve visibility and traffic.",
    icon: FaSearch,
  },

  {
    id: 8,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that enhance user experience.",
    icon: FaUser,
  },
];

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {servicesData.map((section) => (
            <Tilt
              key={section.id}
              className="p-6 bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-300 dark:border-gray-700"
            >
              <section.icon className="text-4xl mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
