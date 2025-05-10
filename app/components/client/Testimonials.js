"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Photo from "../server/Photo";
import gemez from "@/public/assets/images/gemez.jpg";
import guzziimane from "@/public/assets/images/guzziimane.jpg";
import oso from "@/public/assets/images/oso.jpg";

const testimonials = [
  {
    name: "Gemez Peter",
    role: "Product Manager",
    company: "Welfare",
    image: gemez,
    content: `I have never been more willing to give a freelancer review. I call this guy the Devil's Dev for a reason. I was stuck trying to automate a flow with the right API, searched everywhere, wrote some buggy code myself, nothing worked. Then I met the Wizard of Salem. After just two questions and a quick negotiation, he rewired everything, pulled an API from heaven knows where, and brought my project back to life. An Apex predator in this ecosystem, absolute 5 stars!`,
  },
  {
    name: "Guzziimane Agbata",
    role: "Blockchain Developer",
    company: "InnovateTech",
    image: guzziimane,
    content:
      "The level of expertise and professionalism demonstrated throughout our collaboration was outstanding. They consistently delivered solutions that exceeded our expectations and helped us achieve our business goals.",
  },
  {
    name: "Oso John",
    role: "Photographer",
    company: "OsoTheStudio",
    image: oso,
    content:
      "I was impressed by the technical knowledge and problem-solving skills. They not only delivered a great product but also provided valuable insights that helped us improve our business processes.",
  },
];

const Testimonials = ({ autoPlayDuration = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayDuration]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-800 dark:text-gray-100">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Don't just take my word for it - hear from my satisfied clients. I
            go lie for you!
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl dark:shadow-none dark:shadow-gray-700/50 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <Photo
                      containerStyles="relative w-20 h-20 rounded-full shadow-xl overflow-visible flex items-center justify-center"
                      imageSize="80px"
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      borderWidth="8"
                      r="230"
                    />
                  </div>
                  <blockquote className="text-center">
                    <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="mt-4">
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-blue-200 hover:dark:bg-gray-800 shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-blue-200 hover:dark:bg-gray-800 shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
