import { FC } from "react";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.jpeg";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
// import test from "node:test";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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
  const tournamentsIndex = 0;
  return (
  <section className="section"> 
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
      <span className="whitespace-nowrap">Tournaments that I have participated</span>
      <span className="whitespace-nowrap self-end bg-black text-white">Tournaments that I have participated</span>
    </h2>
    <div className="container">
      <div className="mt-20">
        {tournaments.map(({ name, company, role, quote, image, imagePositionY }, index) => index === tournamentsIndex && (
          <div key={name} className="grid md:grid-cols-5 md:gap-8  lg:gap-16 md:items-center">
            <div className="aspect-square md:aspect-[9/16] md:col-span-2">
              <Image src={image} alt={name} className="size-full object-cover " style={{ objectPosition:`50% ${imagePositionY * 100}%`,}} />
            </div>
            <blockquote className="md:col-span-3" >
              <div className="text-3xl md:text-5xl  lg:text-6xl mt-8 md:mt-0 ">
              <span >{quote}</span>
              </div>
              <cite className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic block">{name}, {company}, {role}</cite>
            </blockquote>
          </div>
        ))}
      </div>
    <div className="flex gap-4 mt-6 lg:mt-10">
    <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
    </button>
    <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </button>
    </div>
    </div>

  </section>
  )
};

export default Tournaments;
