import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 h-20 w-full z-100 bg-header backdrop-blur-sm shadow-md shadow-black/25">
      {/* Remove min-h-screen */}
      <nav className="w-full px-10 md:px-20 h-full flex items-center justify-between">
        <a
          className="logo font-display  text-xl font-semibold tracking-wider text-main"
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
        <div className="md:hidden animate-rise relative z-50">
          <div className="container mx-auto bg-black px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <a
                className="text-sm text-main/70 hover:text-main"
                key={i}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="w-full md:w-auto justify-center
                           px-6 py-3 rounded-full flex items-center gap-2 text-sm text-white
                           bg-cyan-700/80 border border-cyan-500/40
                           shadow-[0_0_15px_rgba(34,211,238,0.25)]
                           transition-all duration-300
                           hover:bg-cyan-600
                           hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                           hover:-translate-y-0.5
                           active:scale-95"
            >
              Get In Touch
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
