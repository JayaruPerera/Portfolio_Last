import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-stone-200 text-stone-900">{children}</body>
    </html>
  );
}
