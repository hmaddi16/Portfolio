import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import {twMerge} from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: "400"
});

export const metadata: Metadata = {
  title: "My Portfolio",
<<<<<<< HEAD
  description: "Created with the help of Frontend Tribe",
=======
  description: "Created with React, Next.js, Tailwind CSS, Framer Motion",
>>>>>>> 8b5b087f96db57aa14a5106472beb77e4b4668a5
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-color-dark text-white antialiased font-sans")}
        >{children}</body>
    </html>
  );
}
