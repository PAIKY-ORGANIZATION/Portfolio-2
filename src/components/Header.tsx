"use client"

import { socialLinks } from "./Social-links";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#141414] text-white p-2 z-50">
      <div className="container mx-auto flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-[#1ACCE4]">Miguel Mendez</h1>
        <nav className="flex space-x-6">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex items-center space-x-2 hover:text-blue-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.icon}
              <span className="text-base md:text-lg ">{link.label}</span>
            </a>
          ))}
          <a href="#contact">
            <button className="text-base md:text-lg bg-cyan-600 px-4 py-2 rounded-md hover:cursor-pointer font-bold"> Write Message </button>
          </a>
        </nav>
      </div>
    </header>

  );
}