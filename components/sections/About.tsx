"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trainerPhotos = [
  {
    src: "/trainer/t1.jpeg",
    alt: "Shaik Saddam training at the gym",
  },
  {
    src: "/trainer/t2.jpeg",
    alt: "Shaik Saddam at Saddam Fitness Care",
  },
  {
    src: "/trainer/t3.jpeg",
    alt: "Shaik Saddam at the gym",
  },
  {
    src: "/trainer/t4.jpeg",
    alt: "Shaik Saddam",
  },
];

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  /* =========================================================
     FOUNDER SECTION SCROLL ANIMATION
  ========================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founder-heading",
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
            trigger: ".founder-section",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".founder-name",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-section",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".trainer-photo",
        {
          y: 60,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trainer-gallery",
            start: "top 85%",
            once: true,
          },
        },
      );

      /* ---------------------------------------------------------
         FOUNDER QUOTE ANIMATION
      --------------------------------------------------------- */

      gsap.fromTo(
        ".founder-quote",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founder-quote",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     OPEN LIGHTBOX
  ========================================================= */

  const openLightbox = (index: number) => {
    window.history.pushState(
      { lightbox: true },
      "",
      window.location.href,
    );

    setSelectedPhoto(index);
  };

  /* =========================================================
     CLOSE LIGHTBOX
  ========================================================= */

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  /* =========================================================
     PREVIOUS PHOTO
  ========================================================= */

  const showPrevious = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === 0
        ? trainerPhotos.length - 1
        : selectedPhoto - 1,
    );
  };

  /* =========================================================
     NEXT PHOTO
  ========================================================= */

  const showNext = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === trainerPhotos.length - 1
        ? 0
        : selectedPhoto + 1,
    );
  };

  /* =========================================================
     LIGHTBOX KEYBOARD + BACK BUTTON + SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    const handlePopState = () => {
      // Phone/browser Back button closes the lightbox first.
      setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleKeyDown);

    window.addEventListener("popstate", handlePopState);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      window.removeEventListener("popstate", handlePopState);

      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  return (
    <>
      <section
        ref={aboutRef}
        id="about"
        className="relative overflow-hidden border-t border-white/10 bg-[#0B100D] py-24 sm:py-32"
      >
        {/* Background detail */}

        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-lime-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">


          

          {/* =====================================================
              FOUNDER & TRAINER
          ===================================================== */}

          <div className="founder-section ">

            {/* Heading */}

            <div className="mb-12">

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime-500">
                The person behind SFC
              </p>

              <h3 className="founder-heading mt-4 font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.85] text-white">
                Founder
                <br />

                <span className="text-lime-500">
                  & Trainer.
                </span>
              </h3>

              <div className="mt-6 flex flex-wrap items-center gap-4">

                <span className="h-px w-10 bg-lime-500" />

                <span className="founder-name font-display text-2xl font-bold uppercase tracking-wide text-white">
                  Shaik Saddam
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-[#7E8B83]">
                  SFC
                </span>

              </div>

            </div>

            {/* =================================================
                PHOTO GALLERY — 2 × 2
            ================================================= */}

            <div className="trainer-gallery grid grid-cols-2 gap-3 sm:gap-5">

              {/* T1 */}

              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="trainer-photo group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111714] text-left"
                aria-label="Open trainer photo 1"
              >

                <img
                  src={trainerPhotos[0].src}
                  alt={trainerPhotos[0].alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                

              </button>

              {/* T2 */}

              <button
                type="button"
                onClick={() => openLightbox(1)}
                className="trainer-photo group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111714] text-left"
                aria-label="Open trainer photo 2"
              >

                <img
                  src={trainerPhotos[1].src}
                  alt={trainerPhotos[1].alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                

              </button>

              {/* T3 */}

              <button
                type="button"
                onClick={() => openLightbox(2)}
                className="trainer-photo group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111714] text-left"
                aria-label="Open trainer photo 3"
              >

                <img
                  src={trainerPhotos[2].src}
                  alt={trainerPhotos[2].alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                

              </button>

              {/* T4 */}

              <button
                type="button"
                onClick={() => openLightbox(3)}
                className="trainer-photo group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111714] text-left"
                aria-label="Open trainer photo 4"
              >

                <img
                  src={trainerPhotos[3].src}
                  alt={trainerPhotos[3].alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                

              </button>

            </div>

            {/* =================================================
                FOUNDER QUOTE
            ================================================= */}

            <div className="founder-quote mt-16 text-center">

              <div className="mx-auto mb-6 h-px w-16 bg-lime-500/50" />

              <p className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-wide text-lime-400">
                Build Your Body
                <br className="sm:hidden" />

                <span className="hidden sm:inline">
                  {" "}
                  —{" "}
                </span>

                <span className="text-white">
                  Build Your Confidence
                </span>
              </p>

              <p className="mt-5 font-display text-[clamp(1.8rem,4vw,3.5rem)] font-black uppercase tracking-[0.08em] text-white">
                Be Your Best
              </p>

              <div className="mx-auto mt-6 h-px w-16 bg-lime-500/50" />

            </div>
            
          {/* =====================================================
              ABOUT HEADER
          ===================================================== */}

          

          {/* =====================================================
              FEATURES — 2 × 2
          ===================================================== */}

          <div className="mt-8 grid grid-cols-2 border-t border-white/10">

            {/* =================================================
                01 — UNISEX GYM
            ================================================= */}

            <div className="border-b border-r border-white/10 py-8 pr-5 sm:px-6 sm:py-10 lg:first:pl-0">

              <span className="font-mono text-[10px] tracking-[0.2em] text-lime-500">
                01
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                Unisex Gym
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7E8B83]">
                A welcoming training environment for everyone.
              </p>

            </div>

            {/* =================================================
                02 — A/C FACILITY
            ================================================= */}

            <div className="border-b border-white/10 py-8 pl-5 sm:px-6 sm:py-10">

              <span className="font-mono text-[10px] tracking-[0.2em] text-lime-500">
                02
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                A/C Facility
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7E8B83]">
                Train comfortably throughout your workout.
              </p>

            </div>

            {/* =================================================
                03 — FULL EQUIPMENT
            ================================================= */}

            <div className="border-r border-white/10 py-8 pr-5 sm:px-6 sm:py-10 lg:pl-0">

              <span className="font-mono text-[10px] tracking-[0.2em] text-lime-500">
                03
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                Full Equipment
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7E8B83]">
                Equipment available for all major muscle groups.
              </p>

            </div>

            {/* =================================================
                04 — SPACIOUS
            ================================================= */}

            <div className="py-8 pl-5 sm:px-6 sm:py-10">

              <span className="font-mono text-[10px] tracking-[0.2em] text-lime-500">
                04
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
                Spacious
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7E8B83]">
                Plenty of room to train without feeling crowded.
              </p>

            </div>

          </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}

      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Trainer photo viewer"
          onClick={closeLightbox}
        >

          {/* Close */}

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500"
            aria-label="Close photo viewer"
          >
            ×
          </button>

          {/* Previous */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500 sm:left-6"
            aria-label="Previous photo"
          >
            ←
          </button>

          {/* Image */}

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={trainerPhotos[selectedPhoto].src}
              alt={trainerPhotos[selectedPhoto].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            />

            <div className="mt-3 flex items-center justify-between gap-6">

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Shaik Saddam · Founder & Trainer
              </span>

              <span className="font-mono text-[10px] text-lime-500">
                {String(selectedPhoto + 1).padStart(2, "0")} / 04
              </span>

            </div>

          </div>

          {/* Next */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500 sm:right-6"
            aria-label="Next photo"
          >
            →
          </button>

        </div>
      )}
    </>
  );
}