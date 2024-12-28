"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TailwindButton: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200",
        className
      )}
    >
      {children}
    </button>
  );
};
