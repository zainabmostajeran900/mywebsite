"use client";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineContactPhone } from "react-icons/md";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineExperiment,
} from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [darkMode] = useState(false);
  return (
    <nav
      className={`
        fixed  w-full p-2 flex flex-row items-center justify-center ${darkMode ? "bg-white text-teal-600":"bg-teal-600 text-white"}
        md:sticky md:top-0 md:flex md:flex-col md:items-center md:justify-center md:min-h-screen md:p-0
      `}
    >
      <div className="flex flex-row md:flex-col py-4 md:py-0 md:gap-y-10 items-center justify-center space-x-4 md:space-x-0">
        <NavItem href="/" icon={<TiHomeOutline size={30} />} label="Home" />
        <NavItem
          href="/Navbar/Experience"
          icon={<AiOutlineExperiment size={30} />}
          label="Experience"
        />
        <NavItem
          href="/Navbar/Project"
          icon={<AiOutlineFundProjectionScreen size={30} />}
          label="Projects"
        />
        <NavItem
          href="/Navbar/Contact"
          icon={<MdOutlineContactPhone size={30} />}
          label="Contact"
        />
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  return (
    <div className="group flex flex-col items-center justify-center text-lg relative">
      <div className="block md:hidden">{icon}</div>
      <Link
        href={href}
        className="font-semibold sm:text-3xl flex items-center justify-center gap-x-7 transition-all duration-300"
      >
        <span className="hidden md:inline text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <FaArrowRight />
        </span>
        {label}
      </Link>
    </div>
  );
};

export default Navbar;