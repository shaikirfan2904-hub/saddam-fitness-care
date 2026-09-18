"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
interface HeroProps {
  introComplete: boolean;
}
export default function Hero({ introComplete }: HeroProps){
  const heroRef = useRef<HTMLElement>(null);

useLayoutEffect(() => {
  if (!introComplete) return;

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".hero-eyebrow",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        },
      )
      .fromTo(
        ".hero-title",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power4.out",
        },
        "-=0.2",
      )
      .fromTo(
        ".hero-description",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.35",
      )
      .fromTo(
        ".hero-actions",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.25",
      )
      .fromTo(
        ".hero-stats",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.25",
      )
      .fromTo(
        ".hero-plate",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.8",
      );
  }, heroRef);

  return () => ctx.revert();
}, [introComplete]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#060907] pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-[140px]" />

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative weight plate */}
      <div className="hero-plate pointer-events-none opacity-0 absolute right-[-180px] top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 lg:block">
        <div className="absolute inset-0 rounded-full border border-lime-500/20" />
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full border border-lime-500/10" />
        <div className="absolute inset-32 rounded-full border border-white/10" />

        <div className="absolute inset-[42%] rounded-full border-2 border-lime-500/30" />

        <div className="absolute inset-[47%] rounded-full bg-lime-500/10" />

        <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-lime-500/20" />
        <div className="absolute bottom-0 left-1/2 h-8 w-px -translate-x-1/2 bg-lime-500/20" />
        <div className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-lime-500/20" />
        <div className="absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 bg-lime-500/20" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div className="hero-eyebrow mb-6 flex items-center gap-3 opacity-0">
            <span className="h-px w-10 bg-lime-500" />

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-500">
              Saddam Fitness Care
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-title opacity-0 font-display text-[clamp(3.4rem,17vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.03em] text-white">
            Forge Your
            <br />
            <span className="text-lime-500">Strongest</span>
            <br />
            Self.
          </h1>

          {/* Description */}
          <p className="hero-description opacity-0 mt-8 max-w-xl text-sm leading-7 text-[#9AA69F] sm:text-base">
            Train harder. Build stronger. Become the best version of yourself at Saddam Fitness Care, a unisex A/C gym in Kavali.
            at Saddam Fitness Care.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions opacity-0 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center bg-lime-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#060907] transition-all duration-300 hover:bg-lime-400"
            >
              Explore Training
              <span className="ml-3">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-lime-500 hover:text-lime-500"
            >
              Get In Touch
            </a>
          </div>

          {/* Bottom stats */}
          <div className="hero-stats opacity-0 mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-6">
            <div>
              <p className="font-display text-3xl font-bold text-white">
                10+
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#7E8B83]">
                Years Experience
              </p>
            </div>

            <div>
              <p className="font-display text-3xl font-bold text-white">
                100%
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#7E8B83]">
                Dedication
              </p>
            </div>

            <div>
              <p className="font-display text-3xl font-bold text-white">
                24/7
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#7E8B83]">
                Commitment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 lg:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7E8B83]">
          Scroll to train
        </span>

        <span className="h-10 w-px bg-lime-500/60" />
      </div>
    </section>
  );
}