"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  const getScreenEdgePosition = (letter) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const positions = {
      F: { x: -screenWidth, y: 0 },
      D: { x: screenWidth, y: 0 },
      T: { x: 0, y: -screenHeight },
      H: { x: 0, y: screenHeight },
      default: {
        x: Math.random() > 0.5 ? -screenWidth : screenWidth,
        y: Math.random() > 0.5 ? -screenHeight : screenHeight,
      },
    };
    return positions[letter.toUpperCase()] || positions.default;
  };

  const AnimatedText = ({ text, delay = 0 }) => {
    const textRef = useRef(null);

    useEffect(() => {
      const letters = textRef.current.children;

      Array.from(letters).forEach((letter, index) => {
        const pos = getScreenEdgePosition(text[index]);
        gsap.set(letter, {
          opacity: 0,
          rotation: Math.random() * 360,
          x: pos.x,
          y: pos.y,
        });
      });

      gsap.to(letters, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 3,
        ease: "power2.out",
        stagger: 0.3,
        delay,
      });
    }, []);

    return (
      <div ref={textRef} className="flex overflow-hidden w-full h-screen">
        {text.split("").map((letter, index) => (
          <span key={index} className="text-6xl md:text-8xl font-bold mx-1">
            {letter}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col justify-center items-center h-screen bg-customPurple text-lightPurple"
    >
      <AnimatedText text="FRONT END" delay={0} />
      <AnimatedText text="DEV" delay={1} />
      <AnimatedText text="GOWTHAM" delay={2} />
    </div>
  );
};

export default Hero;
