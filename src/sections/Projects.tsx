"use client";
import { FC, useState } from "react";
import image1 from "@/assets/images/project-1.png";
import image2 from "@/assets/images/project-2.png";
import image3 from "@/assets/images/project-3.png";
import image4 from "@/assets/images/project-4.png";
import image5 from "@/assets/images/project-5.png";
import Link from "next/link";
import Image from "next/image";

const projects = [
  { name: "Desha E-Mart", image: image1, description: "An e-commerce platform specializing in phones, laptops, and CCTV systems. It also offers repair services, allowing users to log in, track repair statuses, and manage their items conveniently" },
  { name: "Juris Connect", image: image2, description: "A legal platform designed to enhance the legal knowledge of Sri Lankans. Users can connect with lawyers and access the legal assistance they need efficiently" },
  { name: "Eat Me", image: image3, description: "A delightful website for purchasing cookies and cakes. Users can explore a variety of baked goods and place orders for their favorite treats" },
  { name: "Hotel Website", image: image4, description: "A hotel website enabling users to book rooms online and make secure payments, ensuring a seamless and convenient booking experience" },
  { name: "MOODWAVE", image: image5, description: "A unique platform for music creators to analyze track emotions and for job seekers in the music industry to find opportunities and connect with professionals" },
];

const Projects: FC = () => {
  const [hoverStyles, setHoverStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setHoverStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `translate(${x / 20}px, ${y / 20}px) scale(1.1)`,
      },
    }));
  };

  const handleMouseLeave = (index: number) => {
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
        <h2 className="text-4xl text-center mb-10 md:text-7xl lg:text-8xl">Projects</h2>
        <div className="mt-10 flex flex-col gap-8 md:mt-16 lg:mt-20">
          {projects.map(({ name, image, description }, index) => (
            <Link
              href="/"
              key={name}
              className="flex flex-col border-t border-stone-400 py-6 border-dotted last:border-b md:py-8 lg:py-10"
            >
              <div
                className="relative aspect-video overflow-hidden md:hidden"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Image
                  src={image}
                  alt={`${name} image`}
                  className="w-full h-full object-cover transition-transform duration-300 md:hidden"
                  style={hoverStyles[index]}
                />
                <div className="md:hidden absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg items-center mx-2 md:mx-6 lg:mx-10">{description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8 md:mt-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;