
import Link from "next/link";
import { FC } from "react";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header className="z-10 fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20 ">
          <div>
          <Link href="/">
          <span className="text-xl font-bold uppercase">Jayaru&nbsp;  Perera</span>
          </Link>
          </div>
        <div className="flex gap-4 items-center">
          <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full bg-stone-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="15" width="18" height="2" fill="currentColor" />
            <rect x="3" y="7" width="18" height="2" fill="currentColor" />
        </svg>
        </div>
        <div>

        <button className="hidden md:inline-flex relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className=" uppercase inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Contact me
        </span>

      </button>
         
        </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
