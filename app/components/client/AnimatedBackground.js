"use client";

import { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 opacity-10" style={{ zIndex: -1 }}>
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "var(--primary)",
          opacity: 0.3,
          top: mousePosition.y / 10,
          left: mousePosition.x / 10,
          transform: "translate(-50%, -50%)",
          transition: "top 0.8s ease-out, left 0.8s ease-out",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "var(--primary)",
          opacity: 0.1,
          bottom: mousePosition.y / 15,
          right: mousePosition.x / 15,
          transform: "translate(50%, 50%)",
          transition: "bottom 1.2s ease-out, right 1.2s ease-out",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
