"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Photo from "../server/Photo";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import emekaPaul from "@/public/assets/images/photo.jpg";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Check localStorage for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(savedTheme);
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Ensure only the correct class is applied
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-50 dark:bg-gray-900/80 bg-white/80 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Photo
            containerStyles="relative w-10 h-10 mr-1"
            imageSize="40px"
            src={emekaPaul}
            r="190"
            borderWidth="8"
            alt="Logo"
          />
          <h1 className="font-[Orbitron] text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
            PaulNna
            <span className="text-gray-900 dark:text-white font-extrabold">
              .
            </span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/*Theme Toggle and Hire Me Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <SunIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>

          {/* Hire Me Button */}
          <Link
            href="/hire-me"
            className="bg-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-full hover:bg-blue-800 transition duration-300 shadow-md"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger Menu && Theme Toggle Button (Mobile) */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            ) : (
              <SunIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {/* Background Overlay (Closes Menu When Clicked) */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Slide-in Panel */}
        <div
          className={`md:hidden fixed inset-y-0 right-0 z-50 h-full w-2/4 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/*Mobile Logo and Close Menu Button */}
          <div className="flex items-center justify-between px-2 sm:px-4 py-6">
            <Link href="/" className="flex items-center gap-2">
              <Photo
                containerStyles="relative w-10 h-10 mr-1"
                imageSize="40px"
                src={emekaPaul}
                r="190"
                borderWidth="8"
                alt="Logo"
              />
              <h1 className="font-[Orbitron] text-lg sm:text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white">
                PaulNna
                <span className="text-gray-900 dark:text-white font-extrabold">
                  .
                </span>
              </h1>
            </Link>
            {/*Mobile Close Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              aria-expanded={isMenuOpen}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full p-1 sm:p-2"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-5 w-5 sm:h-6 sm:w-6"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>

          <nav className="flex flex-col items-start mt-10 pl-8 h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/hire-me"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-base font-semibold text-center hover:bg-blue-800 transition duration-300"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
