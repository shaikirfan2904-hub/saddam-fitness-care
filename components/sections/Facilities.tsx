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

const galleryPhotos = Array.from({ length: 14 }, (_, index) => ({
  src: `/gallery/g${index + 1}.jpg`,
  number: String(index + 1).padStart(2, "0"),
  alt: `Saddam Fitness Care gym facility ${index + 1}`,
}));

export default function Facilities() {
  const facilitiesRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoScrollPosition = useRef(0);

  /* =========================================================
     SECTION + GALLERY SCROLL ANIMATION
  ========================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */

      gsap.fromTo(
        ".facilities-header",
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
            trigger: ".facilities-header",
            start: "top 85%",
            once: true,
          },
        },
      );

      /* Gallery */

      gsap.fromTo(
        ".facility-photo",
        {
          y: 60,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".facilities-gallery",
            start: "top 82%",
            once: true,
          },
        },
      );

      /* Video */

      gsap.fromTo(
        ".facilities-video",
        {
          y: 50,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".facilities-video",
            start: "top 88%",
            once: true,
          },
        },
      );
    }, facilitiesRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     VIDEO AUTOPLAY WHEN SCROLLED INTO VIEW
  ========================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     OPEN PHOTO LIGHTBOX
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
     CLOSE PHOTO LIGHTBOX
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
        ? galleryPhotos.length - 1
        : selectedPhoto - 1,
    );
  };

  /* =========================================================
     NEXT PHOTO
  ========================================================= */

  const showNext = () => {
    if (selectedPhoto === null) return;

    setSelectedPhoto(
      selectedPhoto === galleryPhotos.length - 1
        ? 0
        : selectedPhoto + 1,
    );
  };

  /* =========================================================
     OPEN VIDEO
  ========================================================= */
    const openVideo = () => {
      videoScrollPosition.current = window.scrollY;

      window.history.pushState({ sfcVideo: true }, "", window.location.href);
      setVideoOpen(true);
    };

  /* =========================================================
     CLOSE VIDEO
  ========================================================= */

    const closeVideo = () => {
    if (window.history.state?.sfcVideo) {
      window.history.back();
    } else {
      setVideoOpen(false);
    }
  };

  /* =========================================================
     LIGHTBOX KEYBOARD + BACK BUTTON + SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedPhoto === null && !videoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (videoOpen) {
          closeVideo();
        } else {
          closeLightbox();
        }
      }

      if (selectedPhoto !== null) {
        if (event.key === "ArrowLeft") {
          showPrevious();
        }

        if (event.key === "ArrowRight") {
          showNext();
        }
      }
    };

        const handlePopState = () => {
      setSelectedPhoto(null);
      setVideoOpen(false);

      if (videoScrollPosition.current > 0) {
        requestAnimationFrame(() => {
          window.scrollTo(0, videoScrollPosition.current);
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);

      document.body.style.overflow = "";
    };
  }, [selectedPhoto, videoOpen]);

  /* =========================================================
     VIDEO MODAL PLAY FROM START
  ========================================================= */

  useEffect(() => {
    if (!videoOpen) return;

    const timer = window.setTimeout(() => {
      const modalVideo = document.getElementById(
        "sfc-video-modal",
      ) as HTMLVideoElement | null;

      if (modalVideo) {
        modalVideo.currentTime = 0;
        modalVideo.play().catch(() => {});
      }
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [videoOpen]);

  return (
    <>
      <section
        ref={facilitiesRef}
        id="facilities"
        className="relative overflow-hidden border-t border-white/10 bg-[#0B100D] py-24 sm:py-32"
      >
        {/* =====================================================
            BACKGROUND DETAILS
        ===================================================== */}

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-500/5 blur-[140px]" />

        <div className="pointer-events-none absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-500/[0.025] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="facilities-header">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-lime-500" />

              <span className="font-mono text-[15px] uppercase tracking-[0.3em] text-lime-500">
                Inside SFC
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">

              

              

            </div>

          </div>

          {/* =====================================================
              GYM PHOTO GALLERY — 2 × 2
          ===================================================== */}

          <div className="facilities-gallery mt-8 grid grid-cols-2 gap-3 sm:gap-5">

            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openLightbox(index)}
                className="facility-photo group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#111714] text-left"
                aria-label={`Open gym photo ${photo.number}`}
              >

                {/* Image */}

                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}

                <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white">
                  {photo.number}
                </span>

                {/* Corner accent */}

                <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-lime-500/0 transition-all duration-500 group-hover:border-lime-500/70" />

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-500 transition-all duration-500 group-hover:w-full" />

              </button>
            ))}

          </div>

          {/* =====================================================
              GYM VIDEO
          ===================================================== */}

          <div className="facilities-video group relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#060907]">

            <button
              type="button"
              onClick={openVideo}
              className="relative block aspect-video w-full overflow-hidden rounded-xl text-left"
              aria-label="Open Saddam Fitness Care gym video"
            >

              <video
                ref={videoRef}
                src="/gallery/gym-video-web.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />

              {/* Dark overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Video label */}

              <div className="pointer-events-none absolute bottom-5 left-5 sm:bottom-7 sm:left-7">

                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lime-500">
                  Inside SFC
                </p>

                <p className="mt-2 font-display text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
                  Gym Tour
                </p>

              </div>

              

              {/* Bottom accent */}

              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-lime-500 transition-all duration-500 group-hover:w-full" />

            </button>

          </div>

        </div>
      </section>

      {/* =========================================================
          PHOTO LIGHTBOX
      ========================================================= */}

      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gym photo viewer"
          onClick={closeLightbox}
        >

          {/* Close */}

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-sm border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500"
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
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500 sm:left-6"
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
              src={galleryPhotos[selectedPhoto].src}
              alt={galleryPhotos[selectedPhoto].alt}
              className="max-h-[82vh] max-w-[90vw] rounded-xl object-contain"
            />

            <div className="mt-3 flex items-center justify-between gap-6">

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                Saddam Fitness Care · Facilities
              </span>

              <span className="font-mono text-[10px] text-lime-500">
                {String(selectedPhoto + 1).padStart(2, "0")} / 14
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
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-sm border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500 sm:right-6"
            aria-label="Next photo"
          >
            →
          </button>

        </div>
      )}

      {/* =========================================================
          VIDEO LIGHTBOX
      ========================================================= */}

      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Saddam Fitness Care gym video"
          onClick={closeVideo}
        >

          {/* Close */}

          <button
            type="button"
            onClick={closeVideo}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-sm border border-white/20 bg-black/50 text-2xl text-white transition-colors hover:border-lime-500 hover:text-lime-500"
            aria-label="Close video"
          >
            ×
          </button>

          {/* Video */}

          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-xl"
            onClick={(event) => event.stopPropagation()}
          >

            <video
              id="sfc-video-modal"
              src="/gallery/gym-video-web.mp4"
              autoPlay
              muted
              controls
              playsInline
              className="max-h-[88vh] w-full rounded-xl object-contain"
            />

          </div>

        </div>
      )}
    </>
  );
}