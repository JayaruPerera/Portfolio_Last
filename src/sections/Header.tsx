'use client';

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import {motion, useAnimate} from 'motion/react';

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Tournaments",
    href: "#tournaments",
  },
  // {
  //   label: "FAQs",
  //   href: "#faqs",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
const [navScope, navAnimate] = useAnimate();


  useEffect (() => {
    if(isOpen) {
      // top dash animation when opening the hamburger menu
      topLineAnimate([
        [
        topLineScope.current,
        {
          translateY: 4,
        },
      ],
      [
        topLineScope.current,
        {
          rotate:45,
        },
      ],
    ]);

    // bottom dash animation when opening the hamburger menu
    bottomLineAnimate([
      [
      bottomLineScope.current,
      {
        translateY: -4,
      },
    ],
    [
      bottomLineScope.current,
      {
        rotate:-45,
      },
    ],
  ]);
  
    // open hamburger menue
    navAnimate(
      navScope.current,
      {
        height:"100%",
      },
      {
        duration: 0.7,
      }
    );
    }
    // bring back the two dashes to their default places
  else{
    topLineAnimate(
      [
        [
          topLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          topLineScope.current,
          {
            translateY: 0
          }
        ],
      ]);

      bottomLineAnimate(
        [
          [
            bottomLineScope.current,
            {
              rotate: 0
            }
          ],
          [
            bottomLineScope.current,
            {
              translateY: 0
            }
          ],
        ]);
            
        // close hamburger menue
        navAnimate(
          navScope.current,
          {
            height:0,
          },
        );
  }
  }, [isOpen, topLineAnimate, topLineScope, bottomLineAnimate, bottomLineScope, navScope, navAnimate]);
  
  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  
    const url = new URL(e.currentTarget.href);
    // Remove the leading '#' from the hash
    const hash = url.hash.replace('#', '');
  
    // Exit if no hash or invalid
    if (!hash) return;
  
    // Use ID selector format
    const target = document.getElementById(hash);
  
    if (!target) return;
    
    // Close mobile menu if open
    setIsOpen(false);
  
    // Scroll to target
    target.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };


//   const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
//   e.preventDefault();
//   setIsOpen(false);

//   const url = new URL(e.currentTarget.href);
//   const hash = url.hash;

//   const target = document.querySelector(hash);

//   if(!target) return;
//   target.scrollIntoView({behavior: 'smooth'})
// };

  return (
    <header>

      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-50" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({label,href}) => 
              <Link href={href} key={label} className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate" onClick={handleClickMobileNavItem} >

                <div className="!max-w-full container flex items-center justify-between">
                  <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
                  <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500 ">{label} </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </Link>
          )}
        </nav>
      </div>
      {/* left side navbar - my name */}
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-50">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20 ">
            <div>
              <Link href="/">
                <span className="text-xl font-bold uppercase text-white">Jayaru&nbsp;  Perera</span>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* right side navbar - hamburger menue and the button */}
      <div className=" fixed top-0 left-0 w-full z-50">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex gap-4 items-center">
         
              {/* hamburger menue */}
                <div className="cursor-pointer inline-flex items-center justify-center size-11 border border-stone-400 rounded-full bg-stone-200" onClick={() => setIsOpen(!isOpen)}>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* top dash */}
                    <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" 
                    ref={topLineScope}
                    style={{
                      transformOrigin:"12px 8px",  
                    }} />
                    {/* bottom dash */}  
                    <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" 
                    ref={bottomLineScope}
                    style={{
                      transformOrigin:"12px 16px",  
                    }}/>
                  </svg>
                </div>

                {/* contact me button */}
              <div>
                <Link href="#contact">
                <button className="hidden md:inline-flex relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className=" uppercase inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Contact me
                  </span>
                </button>
                </Link>
              </div>
          </div>
          </div>
          </div>
      </div>
      
    </header>
  );
};

export default Header;
