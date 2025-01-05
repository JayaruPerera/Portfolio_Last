import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { FC } from "react";
import ts from "@/assets/icons/ts.svg";
import js from "@/assets/icons/js.svg";
import java from "@/assets/icons/java.svg";
import py from "@/assets/icons/py.svg";
import c_sharp from "@/assets/icons/c_sharp.svg";
import next from "@/assets/icons/next.svg";
import react from "@/assets/icons/re.svg";
import ex2 from "@/assets/icons/ex2.svg";
import tail from "@/assets/icons/tail.svg";
import three from "@/assets/icons/three.svg";
import dock from "@/assets/icons/dock.svg";
import git from "@/assets/icons/git.svg";
import mysql from "@/assets/icons/mysql.svg";
import mongo from "@/assets/icons/mongodb.svg";
import vercel from "@/assets/icons/vercel.svg";

const FAQs: FC = () => {
  return (
    <section className="section ">
      <div className="container mx-auto ">
        <h2 className="text-4xl text-center  md:text-7xl lg:text-8xl mb-16 md:mb-24 lg:mb-32">
          Skills
        </h2>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {/* Programming card */}
        <CardSpotlight className="h-96 w-80  ">
          <p className="text-2xl font-bold relative z-20 mt-2 text-white">
            Programming Languages
          </p>

          {/* typescript */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={ts} alt="My Potrait" className="w-6" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              TypeScript
            </div>
          </div>

          {/* javascript */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={js} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              JavaScript
            </div>
          </div>

          {/* javascript */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={java} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Java
            </div>
          </div>

          {/* javascript */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={py} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Python
            </div>
          </div>

          {/* javascript */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={c_sharp} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              C#
            </div>
          </div>
        </CardSpotlight>

      {/* Frameworks / Libraries */}
      <CardSpotlight className="h-96 w-80  ">
          <p className="text-2xl font-bold relative z-20 mt-2 text-white">
          Frameworks / Libraries
          </p>

          {/* next.js */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={next} alt="My Potrait" className="w-6" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Next.js
            </div>
          </div>

          {/* react */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={react} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              React
            </div>
          </div>

          {/* express */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={ex2} alt="My Potrait" className="w-7 border border-white rounded-full" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4 ">
              Express
            </div>
          </div>

          {/* tailwind */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={tail} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              TailwindCSS
            </div>
          </div>

          {/* threejs */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={three} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Three.js
            </div>
          </div>
        </CardSpotlight>

        {/* Databases / Tools */}
      <CardSpotlight className="h-96 w-80  ">
          <p className="text-2xl font-bold relative z-20 mt-2 text-white">
          Databases / Tools
          </p>

          {/* mysql */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={mysql} alt="My Potrait" className="w-6" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              MySQL
            </div>
          </div>

          {/* mongodb */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={mongo} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              MongoDB
            </div>
          </div>

          {/* Github */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={git} alt="My Potrait" className="w-7 border border-white rounded-full" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4 ">
              GitHub
            </div>
          </div>

          {/* varcel */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={vercel} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Vercel
            </div>
          </div>

          {/* docker */}
          <div className="flex flex-row">
            <div className="flex items-center z-20 mt-4 ">
              <Image src={dock} alt="My Potrait" className="w-7" />
            </div>
            <div className="text-neutral-200 mt-4  z-20 font-bold tracking-widest text-xl flex items-center ml-4">
              Docker
            </div>
          </div>
        </CardSpotlight>

      </div>
    </section>
  );
};

export default FAQs;
