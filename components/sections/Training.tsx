"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trainingPrograms = [
  {
    number: "01",
    title: "Strength",
    subtitle: "Training",
  },
  {
    number: "02",
    title: "Cardio",
    subtitle: "Fitness",
  },
  {
    number: "03",
    title: "Weight",
    subtitle: "Training",
  },
  {
    number: "04",
    title: "Personal",
    subtitle: "Training",
  },
  {
    number: "05",
    title: "Diet &",
    subtitle: "Nutrition",
  },
];

export default function Training() {
  const trainingRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         SECTION HEADER
      ===================================================== */

      gsap.fromTo(
        ".training-header",
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
            trigger: ".training-header",
            start: "top 85%",
            once: true,
          },
        },
      );

      /* =====================================================
         TRAINING TABLE
      ===================================================== */

      gsap.fromTo(
        ".training-row",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".training-table",
            start: "top 82%",
            once: true,
          },
        },
      );
    }, trainingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={trainingRef}
      id="training"
      className="relative overflow-hidden border-t border-white/10 bg-[#060907] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-lime-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-lime-500/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="training-header">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-lime-500" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
              What We Do
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.02em] text-white">
              Train
              <br />

              <span className="text-lime-500">
                With Purpose.
              </span>
            </h2>

            

          </div>

        </div>

        {/* =====================================================
            TRAINING TABLE
        ===================================================== */}

        <div className="training-table mt-20 border-y border-white/10">

          {/* TABLE HEADER */}

          <div className="hidden border-b border-white/10 px-6 py-4 sm:grid sm:grid-cols-[80px_1fr] lg:px-8">

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
              No.
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
              Training Type
            </span>

          </div>

          {/* =================================================
              TRAINING ROWS
          ================================================= */}

          {trainingPrograms.map((program) => (
            <div
              key={program.number}
              className="training-row group relative grid min-h-[105px] grid-cols-[55px_1fr] items-center border-b border-white/10 px-5 transition-colors duration-500 last:border-b-0 hover:bg-[#0B100D] sm:min-h-[120px] sm:grid-cols-[80px_1fr] sm:px-6 lg:px-8"
            >

              {/* Hover accent */}

              <div className="absolute left-0 top-0 h-full w-[2px] origin-bottom scale-y-0 bg-lime-500 transition-transform duration-500 group-hover:scale-y-100" />

              {/* Number */}

              <span className="font-mono text-[10px] tracking-[0.2em] text-lime-500">
                {program.number}
              </span>

              {/* Training Name */}

              <div className="flex items-center">

                <h3 className="font-display text-[clamp(2rem,4vw,3.8rem)] font-black uppercase leading-[0.85] text-white transition-transform duration-500 group-hover:translate-x-3">

                  {program.title}

                  <span className="ml-2 text-white/30 transition-colors duration-500 group-hover:text-lime-500/60 sm:ml-4">
                    {program.subtitle}
                  </span>

                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}