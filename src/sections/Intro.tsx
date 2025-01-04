"use client";

import { FC, useEffect, useRef } from "react";
// import SplitType from "split-type"; // Import SplitType for text animation splitting
import { useInView } from "framer-motion";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
 const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {      // Set up intersection observer with useInView hook
    once: true,                          // Only trigger animation once when element comes into view
  });

  useEffect(() => {
    if(inView) {
    entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  
  return (
    <section
      className="mt-12 md-mt-16 lg:mt-20 section"
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h1 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
          Driven by curiosity for web development, mobile apps, cloud solutions, and AI advancements
        </h1>
      </div>
    </section>
  );
};

export default Intro;
