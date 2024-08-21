"use client";

import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, []);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const element = ghostRef.current;
    if (element) {
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(element);
      return () => resizeObserver.disconnect();
    }
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="fixed inset-0">
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="flex h-screen items-start"
        >
          <div className="flex-shrink-0 w-screen h-screen">
            <Hero />
          </div>
          <div className="flex-shrink-0 w-screen h-screen">
            <About />
          </div>
          <div className="flex-shrink-0 w-screen h-screen">
            <Skills />
          </div>
          <div className="flex-shrink-0 w-screen">
            <Project />
          </div>
          <div className="flex-shrink-0 w-screen h-screen">
            <Footer />
          </div>
        </motion.div>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="w-screen" />
    </div>
  );
}