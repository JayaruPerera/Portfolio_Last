import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const archivo = Archivo({
  display: "swap", // Optional, default is "block"
  weight: "variable", // Optional, default is [400]
  subsets: ["latin"], // Optional, default is ["latin"]
  variable: "--font-archivo", // Optional, default is "--font-archivo"
});

export const metadata: Metadata = {
  title: "Jayaru Perera",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>{children}
      <Analytics />
      </body>
    </html>
  );
}
