"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen block md:flex ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className={`hidden md:grid grid-cols-1 md:w-1/3` }>
        <Navbar />
      </div>
      <div className={`flex md:hidden`}>
        <Navbar />
      </div>
      <div className=" w-full md:grid grid-cols-1 md:items-center md:justify-center mt-10 px-4 py-24 md:p-0  md:text-center md:w-full">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 p-2 bg-teal-600 text-white rounded-full">
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          <Image
            className="rounded-full shadow-lg"
            src="/photo15939773167.jpg"
            width={300}
            height={300}
            alt="profile"
          />
          <h1 className="text-center text-6xl text-teal-600">Zeinab Mostajeran</h1>
          <h5 className="text-2xl text-teal-600 text-nowrap">Web Developer</h5>
          <p className="text-center text-slate-400 text-wrap">
            Junior Front-End Developer | Software Engineer | React.js & Next.js <br />
            Specialist | Creative, Organized, and Team-Oriented | Delivering <br />
            High-Performance and User-Friendly Applications
          </p>
          <div className="flex items-center justify-center py-4 gap-x-3">
            <Link href="https://github.com/zainabmostajeran" className="bg-white rounded-full">
              <div className="bg-teal-600 p-3 rounded-full">
                <FaGithub color="white" size={20} />
              </div>
            </Link>
            <Link href="https://t.me/zmo11m" className="bg-white rounded-full">
              <div className="bg-teal-600 p-3 rounded-full">
                <BiLogoTelegram color="white" size={20} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/zainab-mostajeran-b750241a7/" className="bg-white rounded-full">
              <div className="bg-teal-600 p-3 rounded-full">
                <FaLinkedinIn color="white" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
