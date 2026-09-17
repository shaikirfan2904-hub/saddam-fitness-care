"use client";

import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  Camera,
  MapPin,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phoneNumber = "+919948866755";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden border-t border-white/10 bg-[#060907]"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-lime-500/[0.04] blur-[140px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-lime-500/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            TOP CTA
        ===================================================== */}

        <div className="footer-reveal border-b border-white/10 py-16 sm:py-20">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
                Saddam Fitness Care
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.02em] text-white">
                Forge Your
                <br />

                <span className="text-lime-500">
                  Strongest Self.
                </span>
              </h2>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 border border-lime-500 bg-lime-500 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#060907] transition-all duration-300 hover:bg-lime-400"
            >
              Start Training

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER CONTENT
        ===================================================== */}

        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-reveal">

            <a
            href="#"
            className="group flex w-fit items-center gap-6"
            >
            <img
                src="/logo/logo.png"
                alt="Saddam Fitness Care"
                className="h-24 w-24 object-contain"
            />

            <div className="border-l border-white/15 pl-6">
                <p className="font-display text-4xl font-black uppercase leading-none text-lime-500">
                Saddam
                </p>

                <p className="font-display text-4xl font-black uppercase leading-none text-white">
                Fitness Care
                </p>
            </div>
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#7E8B83]">
              A premium unisex A/C gym built for strength, fitness and
              transformation. Train with purpose. Build confidence. Become
              stronger.
            </p>

            {/* Social / Contact Icons */}

            <div className="mt-7 flex items-center gap-3">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/saddamgk.fit?stkn=MTMycnNwN25ncmVybA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-lime-500/50 hover:text-lime-500"
              >
                <Camera size={17} strokeWidth={1.5} />
              </a>

              {/* Phone */}

              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call Saddam Fitness Care"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-lime-500/50 hover:text-lime-500"
              >
                <Phone size={17} strokeWidth={1.5} />
              </a>

            </div>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-reveal">

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
              Find Us
            </p>

            <div className="mt-6 space-y-5">

              {/* Phone */}

              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-lime-500"
                />

                <span className="text-sm leading-6 text-white/60 transition-colors duration-300 group-hover:text-white">
                  +91 99488 66755
                </span>
              </a>

              {/* Address */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Karimulla+Electronics+Thummalapenta+Road+Vaddi+Palem+Kavali+Andhra+Pradesh+524201"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-lime-500"
                />

                <span className="text-sm leading-6 text-white/60 transition-colors duration-300 group-hover:text-white">
                  Karimulla Electronics, c/o,
                  <br />
                  Thummalapenta Rd,
                  <br />
                  Vaddi Palem, Kavali,
                  <br />
                  Andhra Pradesh 524201
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-xs text-white/40">
            © 2026 Saddam Fitness Care.   All Rights Reserved.
          </p>

          <p className="text-xs text-white/40">
            Designed and Developed by " i "
          </p>
        </div>

      </div>
    </footer>
  );
}