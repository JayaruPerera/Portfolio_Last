import { FC } from "react";
import heroImage from "@/assets/images/hero-image.jpeg";
import Image from "next/image";


const Hero: FC = () => {
  return (
    <section>
      <div className="container !max-w-full">
        <h1 className="text-5xl mt-40">Dedicated tech enthusiast leveraging technology to solve real-world challenges.</h1>
        <button><span>Projects</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
        </button>
        <button>Download CV</button>
      </div>
      <div>
        <Image src={heroImage} alt="My Potrait" />
      </div>
  </section>
);
};

export default Hero;
