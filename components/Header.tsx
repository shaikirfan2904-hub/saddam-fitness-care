"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#060907]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center gap-3 sm:gap-4"
        >
          <img
            src="/logo/logo.png"
            alt="Saddam Fitness Care"
            className="h-16 w-16 object-contain"
          />

          <span className="font-display text-xl font-black uppercase tracking-wide text-lime-500 sm:border-l sm:border-white/20 sm:pl-4 sm:text-2xl">
            Saddam Fitness Care
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          {/* About */}

          <a
            href="#about"
            className="group relative py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-lime-500"
          >
            About

            <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Training */}

          <a
            href="#training"
            className="group relative py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-lime-500"
          >
            Training

            <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Supplements */}

          <a
            href="#supplements"
            className="group relative py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-lime-500"
          >
            Supplements

            <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Contact */}

          <a
            href="#contact"
            className="group relative py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-lime-500"
          >
            Contact

            <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
          </a>

        </nav>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white transition-colors hover:border-lime-500 hover:text-lime-500 md:hidden"
        >
          <span className="flex flex-col gap-1.5">

            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-3 bg-current transition-transform duration-300 ${
                menuOpen ? "w-5 -translate-y-2 -rotate-45" : ""
              }`}
            />

          </span>
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0B100D] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <nav className="flex flex-col px-6 py-4">

          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-lime-500"
          >
            About
          </a>

          <a
            href="#training"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-lime-500"
          >
            Training
          </a>

          <a
            href="#supplements"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-lime-500"
          >
            Supplements
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-lime-500"
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}