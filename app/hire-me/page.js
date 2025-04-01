"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Cross-browser Compatibility",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Full Stack Development",
    description: "End-to-end solutions from frontend to backend development.",
    features: [
      "API Development",
      "Database Design",
      "Authentication & Security",
      "Cloud Integration",
    ],
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$50",
    period: "per hour",
    features: [
      "Basic Web Development",
      "Responsive Design",
      "Basic SEO",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$75",
    period: "per hour",
    features: [
      "Advanced Web Development",
      "UI/UX Design",
      "Advanced SEO",
      "Priority Support",
      "Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$100",
    period: "per hour",
    features: [
      "Full Stack Development",
      "Custom Solutions",
      "24/7 Support",
      "Project Management",
      "Security Auditing",
    ],
  },
];

export default function HireMe() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">Hire Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's work together to bring your ideas to life. I offer a range
              of services to help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Services</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I offer a comprehensive range of services to meet your development
              needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <h3 className="heading-3 mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Pricing</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the plan that best fits your needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative ${
                  plan.popular ? "ring-2 ring-blue-600" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="heading-3 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
