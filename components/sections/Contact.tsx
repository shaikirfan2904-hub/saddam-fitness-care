"use client";

import { useLayoutEffect, useRef } from "react";
import {
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phoneNumber = "+919948866755";
const whatsappNumber = "919948866755";

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
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
            trigger: ".contact-header",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".contact-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".contact-bottom",
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
            trigger: ".contact-bottom",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#060907] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-500/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="contact-header">

          <div className="inline-flex items-center border border-lime-500/40 bg-[#0B100D] px-4 py-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime-500">
              Contact SFC
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.02em] text-white">
              Ready To
              <br />

              <span className="text-lime-500">
                Get Stronger?
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#7E8B83] lg:pb-2">
              Visit Saddam Fitness Care or get in touch with us to begin your
              training journey.
            </p>

          </div>

        </div>

        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}

        <div className="contact-grid mt-20 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              PHONE
          ================================================= */}

          <a
            href={`tel:${phoneNumber}`}
            className="contact-card group flex items-center gap-4 border-b border-white/10 py-7 sm:border-r sm:px-6 lg:border-b-0 lg:first:pl-0"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-lime-500/50 group-hover:text-lime-500">
              <Phone size={18} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-500">
                Call
              </p>

              <p className="mt-1 truncate text-sm text-white transition-colors duration-300 group-hover:text-lime-400">
                +91 99488 66755
              </p>
            </div>
          </a>

          {/* =================================================
              WHATSAPP
          ================================================= */}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group flex items-center gap-4 border-b border-white/10 py-7 sm:px-6 lg:border-b-0 lg:border-r"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-lime-500/50 group-hover:text-lime-500">
              <MessageCircle size={18} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-500">
                WhatsApp
              </p>

              <p className="mt-1 truncate text-sm text-white transition-colors duration-300 group-hover:text-lime-400">
                +91 99488 66755
              </p>
            </div>
          </a>

          {/* =================================================
              ADDRESS
          ================================================= */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Karimulla+Electronics+Thummalapenta+Road+Vaddi+Palem+Kavali+Andhra+Pradesh+524201"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group flex items-center gap-4 border-b border-white/10 py-7 sm:border-r sm:px-6 lg:border-b-0"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-lime-500/50 group-hover:text-lime-500">
              <MapPin size={18} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-500">
                Visit
              </p>

              <p className="mt-1 text-sm text-white transition-colors duration-300 group-hover:text-lime-400">
                Vaddi Palem, Kavali
              </p>
            </div>
          </a>

          {/* =================================================
              INSTAGRAM
          ================================================= */}

          <a
            href="https://www.instagram.com/saddamgk.fit?stkn=MTMycnNwN25ncmVybA=="
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group flex items-center gap-4 py-7 sm:px-6 lg:pr-0"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-lime-500/50 group-hover:text-lime-500">
              <Camera size={18} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-lime-500">
                Instagram
              </p>

              <p className="mt-1 truncate text-sm text-white transition-colors duration-300 group-hover:text-lime-400">
                @saddamgk.fit
              </p>
            </div>
          </a>

        </div>

        {/* =====================================================
            TIMINGS
        ===================================================== */}

        <div className="contact-bottom mt-16 overflow-hidden rounded-xl border border-white/10 bg-[#0B100D]">

          <div className="border-b border-white/10 p-7 sm:p-10">

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
              Gym Timings
            </p>

            <h3 className="mt-3 font-display text-4xl font-black uppercase text-white sm:text-5xl">
              Train On Your Time.
            </h3>

          </div>

          <div className="grid sm:grid-cols-2">

            {/* =================================================
                WEEKDAYS
            ================================================= */}

            <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-10">

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Monday — Saturday
              </p>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between gap-4">

                  <span className="font-display text-xl font-bold uppercase text-white">
                    Morning
                  </span>

                  <span className="font-mono text-xs text-lime-500">
                    5:00 AM — 9:00 AM
                  </span>

                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between gap-4">

                  <span className="font-display text-xl font-bold uppercase text-white">
                    Evening
                  </span>

                  <span className="font-mono text-xs text-lime-500">
                    5:00 PM — 9:00 PM
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                SUNDAY
            ================================================= */}

            <div className="flex flex-col justify-center p-7 sm:p-10">

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Sunday
              </p>

              <p className="mt-4 font-display text-5xl font-black uppercase text-white sm:text-6xl">
                Holiday
              </p>

              <p className="mt-3 text-sm text-[#7E8B83]">
                Rest. Recover. Come back stronger.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}