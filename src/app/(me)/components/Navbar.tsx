import { MyPersonnalData } from "@/data/data";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-12 px-6 py-4  rounded-b-2xl">
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800">
          {MyPersonnalData.name}
        </h1>
        <p className="text-md text-gray-600">{MyPersonnalData.title}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex items-center space-x-6">
          <Link
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 bg-white border-2 border-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            <Linkedin size={24} />
          </Link>
        </div>

        {MyPersonnalData.available ? (
          <span className="flex items-center space-x-1 font-semibold text-lg text-green-600">
            <span>✅</span>
            <span>Available For Work</span>
          </span>
        ) : (
          <span className="text-red-500 text-lg font-semibold">
            Not Available
          </span>
        )}
      </div>
    </nav>
  );
}
