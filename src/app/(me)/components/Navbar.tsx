"use client";

import { useTheme } from "@/app/_context/ThemeToggle";
import { MyPersonnalData } from "@/data/data";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { dark, toggleDark } = useTheme();

  return (
    <nav className="flex max-md:flex-col max-md:justify-center max-md:items-center items-center justify-between gap-12 px-6 py-4 rounded-b-2xl w-full">
      <div className="text-center sm:text-left w-full sm:w-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {MyPersonnalData.name}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-300">
          {MyPersonnalData.title}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 sm:justify-start w-full sm:w-auto">
          <Link
            href="mailto:your-email@example.com"
            target="_blank"
            className="text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            <Linkedin size={24} />
          </Link>

          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            title="Toggle theme"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          {MyPersonnalData.available ? (
            <span className="flex items-center justify-center space-x-2 font-semibold text-lg text-green-700 bg-green-200 dark:bg-green-600 dark:text-white p-2.5 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <span className="text-lg">✅</span>
              <span>Available For Work</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2 font-semibold text-lg text-red-700 bg-red-200 dark:bg-red-600 dark:text-white p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <span className="text-lg">❌</span>
              <span>Not Available</span>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
