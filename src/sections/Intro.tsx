"use client";

import { FC, useEffect } from "react";
import SplitType from "split-type"; // Import SplitType for text animation splitting
import { useAnimate, useInView, stagger } from "framer-motion";

const Intro: FC = () => {
  const [scope, animate] = useAnimate(); // Create scope and animate function using useAnimate hook
  const inView = useInView(scope, {      // Set up intersection observer with useInView hook
    once: true,                          // Only trigger animation once when element comes into view
  });

  useEffect(() => {
    if (scope.current) { // Ensure scope.current is not null
      const targetElement = scope.current.querySelector("h1"); // Target the correct element
      if (targetElement) {
        new SplitType(targetElement, {
          types: "lines,words", // Split text into lines and words
          tagName: "span",       // Wrap split text in span elements
        });
      } else {
        console.error("No <h1> element found inside scope.");
      }
    }
  }, [scope]);

  useEffect(() => {
    if (inView && scope.current) { // Ensure scope.current is not null
      const words = scope.current.querySelectorAll(".word");
      if (words.length > 0) {
        animate(
          words,
          {
            transform: "translateY(0%)", // Move words up
          },
          {
            duration: 0.5,               // Animation duration
            delay: stagger(0.2),        // Stagger each word's animation
          }
        );
      } else {
        console.error("No elements with the class 'word' found.");
      }
    }
  }, [inView, animate, scope]);


  return (
    <section
      className="mt-12 md-mt-16 lg:mt-20 section"
      id="intro"
      ref={scope}
    >
      <div className="container">
        <h1 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Driven by curiosity for web development, mobile apps, cloud solutions, and AI advancements
        </h1>
      </div>
    </section>
  );
};

export default Intro;
