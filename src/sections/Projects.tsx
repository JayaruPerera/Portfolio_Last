"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/assets/images/project-1.png";
import image2 from "@/assets/images/project-2.png";
import image3 from "@/assets/images/project-3.png";
import image4 from "@/assets/images/project-4.png";
import image5 from "@/assets/images/project-5.png";


const projects = [
  {
    name: "Desha E-Mart",
    image: image1,
    description:
      "An e-commerce platform specializing in phones, laptops, and CCTV systems. It also offers repair services, allowing users to log in, track repair statuses, and manage their items conveniently",
      link:"https://github.com/JayaruPerera/Desh-E-Mart"
  },
  {
    name: "Juris Connect",
    image: image2,
    description:
      "A legal platform designed to enhance the legal knowledge of Sri Lankans. Users can connect with lawyers and access the legal assistance they need efficiently",
      link:"https://github.com/JayaruPerera/Juris-Connect"
  },
  {
    name: "Eat Me",
    image: image3,
    description:
      "A delightful website for purchasing cookies and cakes. Users can explore a variety of baked goods and place orders for their favorite treats",
      link:'https://github.com/JayaruPerera/EatMe'
  },
  {
    name: "Hotel Website",
    image: image4,
    description:
      "A hotel website enabling users to book rooms online and make secure payments, ensuring a seamless and convenient booking experience",
      link:'https://github.com/JayaruPerera/Hotel-Web'
  },
  {
    name: "MOODWAVE",
    image: image5,
    description:
      "A unique platform for music creators to analyze track emotions and for job seekers in the music industry to find opportunities and connect with professionals",
      link:'https://github.com/minuri12/MoodWave'
  },
];

const Projects: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyles, setHoverStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setHoverStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `translate(${x / 10}px, ${y / 10}px) scale(1.1)`,
      },
    }));
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    setHoverStyles((prev) => ({
      ...prev,
      [index]: {
        transform: "translate(0, 0) scale(1)",
      },
    }));
  };

  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-10 md:text-7xl lg:text-8xl">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ name, image, description, link }, index) => (
            <div
              key={name}
              className="w-full border-t border-b border-gray-200 py-8 relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-medium">{name}</h3>
                <div className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>

              <div 
                className="aspect-video w-full overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <Image
                  src={image}
                  alt={`${name} project`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={hoverStyles[index]}
                />
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 text-white max-w-2xl">
                    <h3 className="text-2xl font-medium mb-4 md:text-2xl lg:text-4xl">{name}</h3>
                    <p className="text-gray-300 md:text-xl md:mt-8 lg:text-2xl lg:mt-12">{description}</p>
                    <Link 
                      href={link}
                      target="_blank"
                      className="mt-8 inline-flex items-center text-white hover:text-gray-300 md:text-2xl lg:text-4xl lg:mt-12"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;