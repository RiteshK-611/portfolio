"use client";

import React, { useEffect, useRef, useState } from "react";

const RotatingCircle = () => {
  const [isInView, setIsInView] = useState(false);
  const circleRef = useRef(null);
  const boxes = Array.from({ length: 24 }, (_, i) => i);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="absolute inset-0 w-full h-full flex justify-center items-center -z-10"
    >
      <div className="absolute w-full h-full flex justify-center items-center bottom-[25%]">
        {boxes.map((index) => (
          <div
            key={index}
            className="absolute w-[110px] h-[110px] bg-white/10 rounded-[15px] backdrop-blur-[10px] border border-white/20"
            style={{
              transformOrigin: "center 650px",
              transform: `rotate(calc(360deg / 24 * ${index}))`,
              opacity: isInView ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 0.1}s, transform 1s ease ${index * 0.1}s`,
              animation: isInView ? `rotate 30s linear infinite ${index * -1.25}s` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCircle;

{/*

  "use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RotatingCircle = () => {
  const controls = useAnimation();
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true, amount: 0.3 });
  const boxes = Array.from({ length: 24 }, (_, i) => i);

  if (isInView) {
    controls.start("visible");
  }

  return (
    <div
      ref={circleRef}
      className="absolute inset-0 w-full h-full flex justify-center items-center -z-10">
      <div className="absolute w-full h-full flex justify-center items-center bottom-[25%]">
        {boxes.map((index) => (
          <motion.div
            key={index}
            className="absolute w-[110px] h-[110px] bg-white/10 rounded-[15px] backdrop-blur-[10px] border border-white/20"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {
                opacity: 0,
                rotate: 0,
              },
              visible: {
                opacity: 1,
                rotate: [0, 360],
                transition: {
                  opacity: { delay: index * 0.1, duration: 0.5 },
                  rotate: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                    delay: index * -1.25,
                  },
                },
              },
            }}
            style={{
              transformOrigin: "center 650px",
              transform: `rotate(calc(360deg / 24 * ${index}))`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCircle;

*/}