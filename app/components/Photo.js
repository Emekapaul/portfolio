import { motion } from "framer-motion";
import Image from "next/image";
import photo from "@/public/assets/images/emekaPaul.jpg";

const Photo = ({
  containerStyles = "relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl overflow-visible flex items-center justify-center",
  imageStyles = "object-cover rounded-full",
  imageSize = "(max-width: 767px) 288px, 384px",
  alt = "Developer photo",
  quality = 100,
  priority = true,
  fill = true,
  showBorder = true,
  borderColor = "blue",
  borderWidth = "4",
}) => {
  return (
    <div className={containerStyles}>
      {/* Profile Image */}
      <Image
        src={photo}
        alt={alt}
        quality={quality}
        priority={priority}
        fill={fill}
        className={imageStyles}
        sizes={imageSize}
      />

      {/* Animated Circular Border */}
      {showBorder && (
        <motion.svg
          className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
          fill="transparent"
          viewBox="0 0 550 550"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="275"
            cy="275"
            r="270"
            stroke={borderColor}
            strokeWidth={borderWidth}
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
      )}
    </div>
  );
};

export default Photo;
