import { useEffect, useRef } from "react";

export default function AnimatedText() {
  const textRef = useRef(null);

  useEffect(() => {
    const roles = [
      "Software Engineer",
      "Backend Developer",
      "Frontend Developer",
    ];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typeEffect = () => {
      const currentRole = roles[currentIndex];

      if (isDeleting) {
        currentText = currentRole.substring(0, currentText.length - 1);
      } else {
        currentText = currentRole.substring(0, currentText.length + 1);
      }

      if (textRef.current) {
        textRef.current.textContent = currentText;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 2000; // Pause at the end
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before typing next
      }

      setTimeout(typeEffect, typeSpeed);
    };

    const timeout = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-start space-x-4 mb-4">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        I'm a{" "}
        <span ref={textRef} className="text-blue-600 dark:text-blue-400">
          Software Engineer
        </span>
        <span className="text-blue-600 dark:text-blue-400 animate-pulse">
          |
        </span>
      </p>
    </div>
  );
}
