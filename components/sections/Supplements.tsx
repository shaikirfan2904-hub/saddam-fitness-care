"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const supplements = [
  {
    number: "01",
    name: "Whey Protein",
    description: "Protein supplement for your daily training routine.",
    image: "/supplements/whey.png",
  },
  {
    number: "02",
    name: "Mass Gainer",
    description: "A convenient supplement for supporting your calorie intake.",
    image: "/supplements/mass-gainer.png",
  },
  {
    number: "03",
    name: "Pre-Workout",
    description: "Designed to complement your workout routine.",
    image: "/supplements/pre-workout.png",
  },
  {
    number: "04",
    name: "BCAA",
    description: "A popular supplement for people following an active lifestyle.",
    image: "/supplements/bcaa.png",
  },
  {
    number: "05",
    name: "Creatine",
    description: "A staple supplement for strength and training routines.",
    image: "/supplements/creatine.png",
  },
  {
    number: "06",
    name: "Fish Oil",
    description: "A convenient source of fish oil for your daily routine.",
    image: "/supplements/fish-oil.png",
  },
  {
    number: "07",
    name: "Multivitamin",
    description: "A daily vitamin and mineral supplement.",
    image: "/supplements/multivitamin.png",
  },
  {
    number: "08",
    name: "Peanut Butter",
    description: "A convenient food option for active lifestyles.",
    image: "/supplements/peanut-butter.png",
  },
];

export default function Supplements() {
  const supplementsRef = useRef<HTMLElement>(null);

  /* =========================================================
     SCROLL ANIMATIONS
  ========================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* Header */

      gsap.fromTo(
        ".supplements-header",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".supplements-header",
            start: "top 85%",
            once: true,
          },
        },
      );

      /* Product cards */

      gsap.fromTo(
        ".supplement-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".supplements-grid",
            start: "top 82%",
            once: true,
          },
        },
      );

      /* Bottom statement */

      gsap.fromTo(
        ".supplements-statement",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".supplements-statement",
            start: "top 85%",
            once: true,
          },
        },
      );

    }, supplementsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={supplementsRef}
      id="supplements"
      className="relative overflow-hidden border-t border-white/10 bg-[#060907] py-24 sm:py-32"
    >

      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-500/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="supplements-header">

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-lime-500" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
              MAXN Supplements
            </span>

          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.02em] text-white">

              Fuel Your
              <br />

              <span className="text-lime-500">
                Training.
              </span>

              <br />

              Support Your
              <br />

              <span className="text-white/35">
                Goals.
              </span>

            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#7E8B83] lg:pb-2">
              Explore the MAXN supplements available at Saddam Fitness Care
              for your training and nutrition routine.
            </p>

          </div>

        </div>

        {/* =====================================================
            SUPPLEMENT GRID
        ===================================================== */}

        <div className="supplements-grid mt-20 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {supplements.map((product) => (
            <div
              key={product.number}
              className="supplement-card group relative overflow-hidden rounded-xl border border-white/10 bg-[#0B100D] transition-all duration-500 hover:border-lime-500/40"
            >

              {/* =================================================
                  PRODUCT IMAGE
              ================================================= */}

              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#111714]">

                {/* Subtle glow */}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.08),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="relative z-10 h-[78%] w-[78%] object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Number */}

                <span className="absolute left-4 top-4 z-20 font-mono text-[10px] tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-lime-500">
                  {product.number}
                </span>

                {/* Corner accent */}

                <div className="absolute right-4 top-4 h-7 w-7 border-r border-t border-lime-500/0 transition-all duration-500 group-hover:border-lime-500/70" />

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-500 transition-all duration-500 group-hover:w-full" />

              </div>

              {/* =================================================
                  PRODUCT INFORMATION
              ================================================= */}

              <div className="border-t border-white/10 p-5 sm:p-6">

                <h3 className="font-display text-xl font-bold uppercase leading-none text-white sm:text-2xl">
                  {product.name}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#7E8B83]">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center gap-2">

                  <span className="h-px w-6 bg-lime-500 transition-all duration-300 group-hover:w-10" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                    MAXN
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="supplements-statement relative mt-20 overflow-hidden rounded-xl border border-white/10 bg-[#0B100D] p-8 sm:p-12">

          {/* Decorative circle */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-lime-500/10" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/5" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
                Train Hard & recover 
              </p>

              <h3 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.88] text-white">

                Available at
                <br />

                <span className="text-lime-500">
                  SFC
                </span>

                <br />


              </h3>

            </div>

            {/* MAXN badge */}

            <div className="relative shrink-0">

              <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-lime-500/30 bg-[#060907]">

                <span className="font-display text-2xl font-black tracking-wide text-lime-500">
                  MAXN
                </span>

              </div>

              <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-lime-500/50" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}