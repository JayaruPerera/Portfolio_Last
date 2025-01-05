"use client";

import { FC, useEffect, useRef } from "react";
import heroImage from "@/assets/images/hero-image.jpeg";
import Image from "next/image";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start start", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll("span"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [titleAnimate]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl mt-40 md:mt-0 md:text-6xl lg:text-7xl"
              ref={titleScope}
            >
              Dedicated tech enthusiast leveraging technology to solve
              real-world challenges.
            </motion.h1>

            <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 3.0,
                }}
              >
                <Link href={"#projects"}>
                  <button className="p-[3px] relative">
                    <div className=" absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-6 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent inline-flex gap-2">
                      PROJECTS
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </motion.div>

              {/* <button className="inline-flex border border-red-500 uppercase h-11 px-6 items-center gap-2"><span>Projects</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
              </button> */}
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 3.25,
                }}
              >
                <a href="/assets/Jayaru_Perera_SE_CV.pdf"
                    download="Jayaru_Perera_SE_CV.pdf.pdf" // This works only if the file is directly downloadable
                    className="p-[3px] relative"
                  >
                    <button className="p-[3px] relative">
                      <div className=" absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-6 py-2  bg-stone-200 rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent inline-flex gap-2">
                        DOWNLOAD CV
                      </div>
                    </button>
                </a>
              </motion.div>

              {/* <button className="uppercase inline-flex h-11 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Download CV
              </button> */}
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              alt="My Potrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
