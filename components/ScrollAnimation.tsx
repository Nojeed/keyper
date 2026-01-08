"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-in" | "fade-left" | "fade-right";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return isVisible
          ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
          : "opacity-0 translate-y-10";
      case "fade-in":
        return isVisible
          ? "opacity-100 transition-opacity duration-1000 ease-out"
          : "opacity-0";
      case "slide-in": // Keeping legacy behavior if any, but "slide-in" usually implies from side. Let's make it slide from left.
        return isVisible
          ? "opacity-100 translate-x-0 transition-all duration-1000 ease-out"
          : "opacity-0 -translate-x-10";
      case "fade-right": // Comes from left
        return isVisible
          ? "opacity-100 translate-x-0 transition-all duration-1000 ease-out"
          : "opacity-0 -translate-x-10";
      case "fade-left": // Comes from right
        return isVisible
          ? "opacity-100 translate-x-0 transition-all duration-1000 ease-out"
          : "opacity-0 translate-x-10";
      default:
        return isVisible ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClass()}`}>
      {children}
    </div>
  );
}
