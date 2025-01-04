"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.jpeg";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import { useScroll, motion, useTransform, AnimatePresence} from "framer-motion";
import Tournament from "@/components/Tournament";



const tournaments = [
  {
    name: "HackX",
    company: "At Kalaniya University",
    role: "2022",
    quote:
      "Our team made it to the semi-finals of the Inter-University Hackathon 2022 organized by Kelaniya University! 🎉 We pitched a problem-solving website in round one and battled against 30+ teams in the semi-finals.",
    image: image1,
    imagePositionY: 0.5,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.5,
  },
  {
    name: "PearlHack 2.0",
    company: "At SUSL",
    role: "2024",
    quote:
      "Proud to have led the logistics team and been part of this amazing journey at PearlHack 2.0! 🚚✨",
    image: image4,
    imagePositionY: 0.55,
  },
];

const Tournaments: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop =useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);   //when scrolling 0-1, top span need to move from 0-15
  const transformBottom =useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);   //when scrolling 0-1, bottom span need to move from 0-15

  const [tournamentsIndex, setTournamentIndex] = useState(0);

  const handleClickPrev = () => { 
    setTournamentIndex((curr) => {
      if (curr === 0) {
        return tournaments.length-1;
      }
      return curr -1;
    });
    };

    const handleClickNext = () => {
      setTournamentIndex(curr => {
        if (curr === tournaments.length-1) return 0; 
        return curr + 1;
      });
    }

  return (

    // header part
    <section className="section" id="tournaments">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap lg:tracking-normal" style={{
          x: transformTop,
        }}>
          Tournaments that I have participated
        </motion.span>
        <motion.span className="whitespace-nowrap self-end bg-black text-white lg:tracking-normal" style={{
          x: transformBottom,
        }}>
          Tournaments that I have participated
        </motion.span>
      </h2>

        {/* image part */}
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
          {tournaments.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              index === tournamentsIndex && (
                <Tournament name={name} company={company} role={role} quote={quote} image={image} imagePositionY={imagePositionY} key={name}/>
              )
            )}
            </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-gradient-to-r from-indigo-500 to-purple-500  hover:text-white hover:border-purple-500 transition-all duration-300" onClick={handleClickPrev}>
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-gradient-to-r from-indigo-500 to-purple-500  hover:text-white hover:border-purple-500 transition-all duration-300" onClick={handleClickNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
