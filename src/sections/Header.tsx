
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
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20 ">
          <div>
          <Link href="/">
          <span className="text-xl font-bold uppercase">Jayaru&nbsp;  Perera</span>
          </Link>
          </div>
        <div className="flex gap-4 items-center">
          <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="15" width="18" height="2" fill="currentColor" />
            <rect x="3" y="7" width="18" height="2" fill="currentColor" />
        </svg>
        </div>
        <div>
          <button className="bg-[#023047] text-white uppercase px-4 rounded-xl border border-[#023047] h-11 hidden md:inline-flex items-center ">Download CV</button>
        </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
