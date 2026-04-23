import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="fixed top-0 h-20 w-full z-[100] bg-header backdrop-blur-sm shadow-md shadow-black/25">
      {/* Remove min-h-screen */}
      <nav className="w-full px-10 md:px-20 h-full flex items-center justify-between">
        <a
          className="logo font-display text-2xl font-black tracking-widest logo-gradient transition-all duration-300 hover:scale-105 active:scale-95"
          href="#home"
        >
          TRP
        </a>
        {/* Desktop Container: Hide on mobile, flex on large */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-8 px-6 py-2 rounded-full">
            {navLinks.map((link, i) => (
              <a
                key={i}
                className="text-sm text-main hover:text-main/70 transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:inline-flex">
          <a
            href="#contact"
            className="w-full md:w-auto justify-center
                         px-6 py-2 rounded-full flex items-center gap-2 text-sm text-white
                         bg-cyan-700/80 border border-cyan-500/40
                         shadow-[0_0_15px_rgba(34,211,238,0.25)]
                         transition-all duration-300
                         hover:bg-cyan-600
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                         hover:-translate-y-0.5
                         active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* mobile menu button*/}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden animate-rise absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black/95 backdrop-blur-md z-[90]">
          <div className=" mx-auto px-10 py-10 flex flex-col items-center gap-6 border-t border-cyan-900/30">
            {navLinks.map((link, i) => (
              <a
                className="text-sm text-main/70 hover:text-main transition-colors"
                key={i}
                href={link.href}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="w-[80%] max-w-sm justify-center mt-2
                           px-6 py-3 rounded-full flex items-center gap-2 text-sm text-white
                           bg-cyan-700/80 border border-cyan-500/40
                           shadow-[0_0_15px_rgba(34,211,238,0.25)]
                           transition-all duration-300
                           hover:bg-cyan-600
                           hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                           hover:-translate-y-0.5
                           active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

      {/* Mobile Toggle: Move inside the flex nav */}

      {/* Mobile Menu: Animate or Absolute position this */}
    </header>
  );
};

export default Navbar;
