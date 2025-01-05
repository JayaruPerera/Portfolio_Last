import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";       // Import necessary hooks and types from React
import { twMerge } from "tailwind-merge"; // Import twMerge for merging Tailwind CSS classes
import { usePresence, motion } from "framer-motion"; // Import usePresence and motion from Framer Motion for animations
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation"; // Import custom hook for text reveal animations

// Define the Tournament component with props
const Tournament = (       
  props: {
    quote: string;
    name: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    company,
    imagePositionY,
    image,
    className,
    ...rest
  } = props;

   // Use custom hook for quote text reveal animation
  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  // Use custom hook for cite text reveal animation
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  // Use presence hook to handle component mount and unmount animations
  const [isPresent, safeToRemove] = usePresence();

  // Use effect to handle entrance and exit animations
  useEffect(() => {
    if (isPresent) {
      // Run entrance animations when component is present
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      // Run exit animations when component is not present
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    quoteExitAnimation,
    citeEntranceAnimation,
    citeExitAnimation,
    safeToRemove,
  ]);

  // Combine the default grid layout styles with any additional className passed via props
  return (
    <div  
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8  lg:gap-16 md:items-center",
        className
      )}
      {...rest} // Spread any additional props onto the container
    >
      {/* Image container with aspect ratio for responsiveness */}
      <div className="aspect-square md:aspect-[16/16] md:col-span-2 relative">
      {/* Motion div for an animated overlay effect */}
        <motion.div 
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }} // Animation starts with full width
          animate={{ width: 0 }} // Animates to zero width
          exit={{ width: "100%" }} // Reverts back to full width on exit
          transition={{ duration: 0.5 }}
        ></motion.div>
        {/* Image component with dynamic positioning based on imagePositionY */}
        <Image   
          src={image}
          alt={name}
          className="size-full object-cover "  // Ensures the image covers the container
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }} // Dynamically sets the vertical position of the image
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-xl md:text-2xl  lg:text-4xl mt-8 md:mt-0 "
          ref={quoteScope}
        >
          {quote}
        </div>
        <cite
          className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic block"
          ref={citeScope}
        >
          {name}, {company}, {role}
        </cite>
      </blockquote>
    </div>
  );
};

export default Tournament;
