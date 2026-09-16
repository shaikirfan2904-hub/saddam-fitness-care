"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    number: "01",
    duration: "1 Month",
    price: "₹1,500",
    perMonth: "₹1,500 / month",
  },
  {
    number: "02",
    duration: "3 Months",
    price: "₹4,000",
    perMonth: "₹1,333 / month",
  },
  {
    number: "03",
    duration: "6 Months",
    price: "₹7,000",
    perMonth: "₹1,167 / month",
  },
  {
    number: "04",
    duration: "1 Year",
    price: "₹10,000",
    perMonth: "₹833 / month",
    featured: true,
  },
];

export default function Pricing() {
  const pricingRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */

      gsap.fromTo(
        ".pricing-header",
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
            trigger: ".pricing-header",
            start: "top 85%",
            once: true,
          },
        },
      );

      /* Pricing cards */

      gsap.fromTo(
        ".pricing-card",
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
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 82%",
            once: true,
          },
        },
      );
    }, pricingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pricingRef}
      id="pricing"
      className="relative overflow-hidden border-t border-white/10 bg-[#0B100D] py-24 sm:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-500/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="pricing-header">

          {/* Simple boxed tag */}

          <div className="inline-flex items-center border border-lime-500/40 bg-[#060907] px-4 py-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime-500">
              Membership Plans
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.02em] text-white">
              Choose Your
              <br />

              <span className="text-lime-500">
                Commitment.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#7E8B83] lg:pb-2">
              Simple membership plans designed to keep you consistent with
              your training.
            </p>

          </div>

        </div>

        {/* =====================================================
            PRICING GRID
        ===================================================== */}

        <div className="pricing-grid mt-20 grid grid-cols-2 gap-4">

          {plans.map((plan) => (
            <div
              key={plan.number}
              className={`pricing-card group relative overflow-hidden rounded-xl border bg-[#060907] transition-all duration-500 ${
                plan.featured
                  ? "border-lime-500/60"
                  : "border-white/10 hover:border-lime-500/40"
              }`}
            >

              {/* Featured label */}

              {plan.featured && (
                <div className="absolute right-4 top-4 border border-lime-500/40 bg-lime-500/10 px-2 py-1">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-lime-500">
                    Best Value
                  </span>
                </div>
              )}

              {/* Number */}

              <div className="flex items-center justify-between border-b border-white/10 p-5">

                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-lime-500">
                  {plan.number}
                </span>

                <span className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-lime-500/60" />

              </div>

              {/* Main content */}

              <div className="p-6 sm:p-7">

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7E8B83]">
                  Membership
                </p>

                <h3 className="mt-4 font-display text-3xl font-black uppercase leading-none text-white">
                  {plan.duration}
                </h3>

                <div className="mt-8">

                  <span className="font-display text-5xl font-black tracking-tight text-lime-500">
                    {plan.price}
                  </span>

                </div>

                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                  {plan.perMonth}
                </p>

                {/* Divider */}

                <div className="my-7 h-px bg-white/10" />

                <p className="text-xs leading-6 text-[#7E8B83]">
                  Gym membership at Saddam Fitness Care.
                </p>

              </div>

              {/* Bottom accent */}

              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-lime-500 transition-all duration-500 ${
                  plan.featured
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}