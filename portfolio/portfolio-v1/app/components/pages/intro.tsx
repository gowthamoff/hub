"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Helper functions
function calculateProgress(scrollY, elementTop, elementHeight, screenHeight) {
  const relativeY = scrollY - elementTop + screenHeight / 2;
  return Math.min(Math.max(relativeY / elementHeight, 0), 1);
}

function calculateActiveIndex(progress, numSections) {
  return Math.floor(progress * numSections);
}

// TextBlock component remains the same since it's already responsive
const TextBlock = ({ children, isActive, index, totalProgress }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: isActive ? 1 : 0.2,
      scale: isActive ? 1 : 0.95,
      transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
    });
  }, [isActive, controls]);

  return (
    <motion.div
      initial={{
        opacity: index === 0 ? 1 : 0.2,
        scale: index === 0 ? 1 : 0.95,
      }}
      animate={controls}
      style={{
        color: isActive ? "var(--color-light-h3)" : "var(--color-dark-h2)",
      }}
      transition={{
        color: { duration: 0.6 },
      }}
      className="transition-colors duration-300 select-none"
    >
      {children}
    </motion.div>
  );
};

// Updated Intro component with enhanced responsiveness
export function Intro() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const numOfSections = 3;
  const previousIndexRef = useRef(activeIndex);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const absoluteTop = top + window.scrollY;

    const totalProgress = calculateProgress(
      window.scrollY,
      absoluteTop,
      height,
      screenHeight
    );

    const newActiveIndex = calculateActiveIndex(totalProgress, numOfSections);

    if (previousIndexRef.current !== newActiveIndex) {
      previousIndexRef.current = newActiveIndex;
      setActiveIndex(newActiveIndex);
    }

    setProgress(totalProgress);
  };

  useEffect(() => {
    const handleScrollThrottled = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  const texts = [
    "I love coding.",
    "I use my passion and skills to build digital products and experiences.",
    "I'm passionate about cutting-edge, pixel perfect UI and intuitively implemented UX.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative inset-0 w-screen bg-dark-h1"
      style={{ minHeight: `${numOfSections * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-24 md:px-10 lg:px-20">
          <div className="flex flex-col gap-6 sm:gap-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
            {texts.map((text, index) => (
              <TextBlock
                key={index}
                isActive={index === activeIndex}
                index={index}
                totalProgress={progress}
              >
                {text}
              </TextBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
