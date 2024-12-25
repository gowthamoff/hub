"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      {/* Base background */}
      <div className="absolute inset-0 bg-darkh1" />

      {/* Sharp diagonal split */}
      <div
        className="absolute inset-0 bg-lighth1"
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
              className="h-2 w-2 rounded-full bg-lighth2"
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
              className="h-2 w-2 rounded-full bg-darkh1 hover:bg-li"
            />
          ))}
      </div>

      {/* Text content */}
      <div className="absolute inset-0">
        <div className="flex flex-col justify-center h-screen">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[4.5rem] sm:text-[3.5rem] md:text-[9rem] lg:text-[12rem] hover:text-lighth2  text-lighth1 leading-tight tracking-tighter"
          >
            FRONT END
          </motion.h1>
          <div className="flex items-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[6rem] sm:text-[7rem] md:text-[14rem] lg:text-[20rem] hover:text-lighth2  text-darkh1 leading-none tracking-[-28px]"
            >
              DEV
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[10rem]  hover:text-lighth2  text-darkh1 leading-tight tracking-tighter flex justify-center w-full"
            >
              GOWTHAM
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
