import React, { useEffect, useRef } from "react";
import cn from "classnames";

interface InfiniteMovingCardsProps {
  items: { name: string; content: string; image: string }[];
  start: boolean;
  pauseOnHover: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ items, start, pauseOnHover, className }) => {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const handleScroll = () => {
        if (scroller.scrollWidth - scroller.scrollLeft <= scroller.clientWidth) {
          scroller.scrollLeft = 0;
        }
      };
      scroller.addEventListener("scroll", handleScroll);
      return () => scroller.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-transparent via-white to-transparent",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            key={`${item.name}-${idx}`}
          >
            <blockquote className="relative z-20 text-white relative z-30">
              {/* Overlay (Optional) */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-30 flex flex-col h-full justify-end">
                <p className="text-lg">{item.content}</p>
                <footer className="mt-4">
                  <cite className="not-italic">{item.name}</cite>
                </footer>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;