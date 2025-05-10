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

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="heading-2 text-center mb-12 text-gray-700 dark:text-gray-200"
        >
          SERVICES
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {servicesData.map((section) => (
            <motion.div key={section.id} variants={itemVariants}>
              <Tilt className="p-6 bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-300 dark:border-gray-700">
                <section.icon className="text-4xl mb-3 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
