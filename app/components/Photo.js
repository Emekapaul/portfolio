import { motion } from "framer-motion";
import Image from "next/image";
import photo from "@/public/assets/images/emekaPaul.jpg";

const Photo = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl overflow-visible flex items-center justify-center">
      {/* Profile Image */}
      <Image
        src={photo}
        alt="Developer photo"
        quality={100}
        priority
        fill
        className="object-cover rounded-full"
      />

      {/* Animated Circular Border */}
      <motion.svg
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
        fill="transparent"
        viewBox="0 0 550 550"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="275"
          cy="275"
          r="270" // Slightly larger than half of the viewBox
          stroke="blue"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
