"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={
        "flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow"
      }>
      <Link className="flex items-center gap-2" href="#">
        <Image
          src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
          alt=""
          width="40"
          height="40"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="#">
          Home
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="#">
          About
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="#">
          Skills
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="#">
          Projects
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="https://riteshkokam.hashnode.dev">
          Blog
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Toggle
          aria-label="Toggle theme"
          className="hidden md:flex"
          size="sm"
          variant="outline"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme == "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Toggle>
        <Button className="md:hidden" size="icon" variant="outline">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>

    // <div
    //   style={{ backdropFilter: "blur(16px)" }}
    //   className={
    //     shadow
    //       ? "shadow-xl opacity-95 fixed w-full h-18 md:h-20 z-[100]"
    //       : "fixed w-full h-18 md:h-20 z-[100]"
    //   }>

    //   {/* Mobile View */}
    //   <div
    //     className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
    //     <div
    //       className={
    //         nav
    //           ? "fixed right-5 top-5 w-[350px] h-[450px] rounded-3xl px-8 py-8 ease-out duration-500 backdrop-blur-xl bg-[#eeeeee] dark:bg-[#111111]"
    //           : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    //       }>
    //       <div className="flex w-full items-center justify-between">
    //         <Image
    //           src={theme == "light" ? "/logo-light.png" : "/logo-dark.png"}
    //           alt=""
    //           width="35"
    //           height="35"
    //         />
    //         <div
    //           onClick={handleNav}
    //           className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer dark:shadow-black">
    //           <X className="bg-red" />
    //         </div>
    //       </div>
    //       <div className="border-b border-gray-300 my-4">
    //         <p className="w-[85%] md:w-[98%] py-4">
    //           Lets build something legendary together
    //         </p>
    //       </div>
    //       <div>
    //         <ul className="uppercase">
    //           <Link href="/#home">
    //             <li onClick={() => setNav(false)} className="pt-3 py-4 text-sm">
    //               Home
    //             </li>
    //           </Link>
    //           <Link href="/#about">
    //             <li onClick={() => setNav(false)} className="py-4 text-sm">
    //               About
    //             </li>
    //           </Link>
    //           <Link href="/#skills">
    //             <li onClick={() => setNav(false)} className="py-4 text-sm">
    //               Skills
    //             </li>
    //           </Link>
    //           <Link href="/#projects">
    //             <li onClick={() => setNav(false)} className="py-4 text-sm">
    //               Projects
    //             </li>
    //           </Link>
    //           <li className="py-4">{renderThemeChanger()}</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
