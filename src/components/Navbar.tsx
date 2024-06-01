"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    const closeMenu = (e: any) => {
      if (!e.target.closest(".menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ToggleBtn = () => {
    return (
      <Toggle
        aria-label="Toggle theme"
        size="sm"
        variant="outline"
        pressed={theme === "dark"}
        onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme == "light" ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </Toggle>
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "flex items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-950 backdrop-blur-lg",
        shadow
          ? "shadow-xl opacity-95 fixed w-full h-18 md:h-20 z-[100]"
          : "fixed w-full h-14 md:h-16 z-[100]"
      )}>
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
          href="#/project">
          Projects
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          href="https://riteshkokam.hashnode.dev">
          Blog
        </Link>
      </nav>
      <div className="hidden md:flex">
        <ToggleBtn />
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden">
        <Button
          className="md:hidden menu"
          size="icon"
          variant="outline"
          onClick={toggleMenu}>
          <HamburgerMenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isMenuOpen && (
          <div className="menu absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-950">
            <nav className="py-1">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#">
                Home
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#">
                About
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#">
                Skills
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#/project">
                Projects
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="#">
                Blog
              </Link>
            </nav>
            <div className="block px-4 pb-2">
              <ToggleBtn />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
