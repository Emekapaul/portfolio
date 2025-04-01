import { motion } from "framer-motion";

// Constants
const FEATURED_SECTIONS = [
  {
    title: "Web Development",
    description:
      "Creating responsive and modern web applications using the latest technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that enhance user experience.",
  },
  {
    title: "Problem Solving",
    description:
      "Tackling complex challenges with innovative solutions and clean code.",
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURED_SECTIONS.map((section) => (
            <motion.div
              key={section.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="heading-3 mb-4">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
