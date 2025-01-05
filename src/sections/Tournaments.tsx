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
      "Our team reached the Inter-University Hackathon 2022 semi-finals with a problem-solving website! 🎉",
    image: image1,
    imagePositionY: 0.5,
  },
  {
    name: "Hacktron",
    company: "by SLTC",
    role: "2021",
    quote:
      "We won 1st place in the 2021 Inter University Game Trailer Contest, creating our game in two weeks with Unity and Blender. Unforgettable experience! ❤️",
    image: image2,
    imagePositionY: 0.5,
  },
  {
    name: "Codefest",
    company: "by SLIIT",
    role: "2022",
    quote:
      "Our team made it to the finals of the Inter-University Hackathon 2022 by SLIIT, building a website in a thrilling 12-hour challenge. It was an incredible journey of teamwork and creativity! 💡",
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
        <motion.span className="whitespace-nowrap self-end bg-gradient-to-r from-indigo-500 to-purple-500 text-white lg:tracking-normal" style={{
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


        {/* left right button */}
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
