"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const renderTextWithHover = (text, baseColor, hoverColor) =>
    text.split("").map((letter, index) => (
      <motion.span
        key={index}
        transition={{
          duration: 1.3,
          delay: index * 0.4,
        }}
        initial={{
          opacity: 0,
          scale: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        style={{
          color: `var(${baseColor})`,
        }}
        whileHover={{
          color: `var(${hoverColor})`,
          transition: { duration: 0.3 },
        }}
        className={`inline-block cursor-pointer`}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));

  return (
    <div className="relative h-screen w-full">
      {/* Base background */}
      <div className="absolute inset-0 bg-dark-h1" />

      {/* Sharp diagonal split */}
      <div
        className="absolute inset-0 bg-light-h1"
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
        }}
      />

      {/* Top-left dots grid */}
      <div className="absolute top-3 left-3 grid grid-cols-4 gap-4">
        {Array(16)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={`dot-top-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: i * 0.1 }}
              className="h-2 w-2 rounded-full bg-light-h2"
            />
          ))}
      </div>

      {/* Bottom-right dots grid */}
      <div className="absolute bottom-3 right-3 grid grid-cols-4 gap-4">
        {Array(16)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={`dot-bottom-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: i * 0.1 + 1 }}
              className="h-2 w-2 rounded-full bg-dark-h1"
            />
          ))}
      </div>

      {/* Text content */}
      <div className="relative flex max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start h-screen w-full xl:px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="leading-tight tracking-tighter whitespace-nowrap overflow-hidden"
            style={{
              fontSize: "clamp(3rem, 18.5vw, 11rem)",
            }}
          >
            {renderTextWithHover(
              "FRONT END",
              "--color-light-h1",
              "--color-light-h2"
            )}
          </motion.h1>

          <div className="flex items-center max-xl:flex-col w-full xl:top-20 relative">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="  leading-none xl:tracking-[-28px] flex"
              style={{
                fontSize: "clamp(12rem, 18.5vw, 24rem)",
              }}
            >
              {renderTextWithHover(
                "DEV",
                "--color-light-h3",
                "--color-light-h2"
              )}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
              className="text-[5rem] xl:text-[8rem] leading-tight tracking-tighter flex justify-center w-full"
            >
              {renderTextWithHover(
                "GOWTHAM",
                "--color-dark-h1",
                "--color-dark-h2"
              )}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
