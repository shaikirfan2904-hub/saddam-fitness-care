"use client";

import { useEffect, useRef, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  const completed = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const finishIntro = () => {
    if (completed.current) return;

    completed.current = true;

    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }

    setClosing(true);

    window.setTimeout(() => {
      onComplete();
    }, 700);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((value) => {
        const next = Math.min(value + 5, 100);

        if (next === 100) {
          if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
          }

          window.setTimeout(finishIntro, 300);
        }

        return next;
      });
    }, 100);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050706] transition-opacity duration-700 ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.03) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">

        {/* Top label */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rotate-45 bg-lime-500" />

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7E8B83]">
            Elite Performance System
          </span>

          <span className="h-2 w-2 rotate-45 bg-lime-500" />
        </div>

       {/* Logo */}
        <div className="relative mb-7 h-44 w-44 border border-[#1F2C24] bg-black/50 p-2">

          <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-lime-500" />
          <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-lime-500" />
          <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-lime-500" />
          <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-lime-500" />

          <div className="flex h-full items-center justify-center">
            <img
              src="/logo/logo.png"
              alt="Saddam Fitness Care"
              className="h-[120%] w-[120%] object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl font-black uppercase tracking-wider text-white">
          SADDAM <span className="text-lime-500">FITNESS</span> CARE
        </h1>

        <p className="mb-8 mt-2 text-xs uppercase tracking-[0.25em] text-[#7E8B83]">
          Forge Your Strongest Self
        </p>

        {/* Progress */}
        <div className="w-full">

          <div className="relative mb-3 h-[4px] overflow-hidden bg-[#111714]">
            <div
              className="h-full bg-lime-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest">
            <span className="text-[#7E8B83]">
              Initializing Arena
            </span>

            <span className="text-lime-500">
              {progress}%
            </span>
          </div>

        </div>

        {/* Skip */}
        <button
          type="button"
          onClick={finishIntro}
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          className="mt-8 cursor-pointer border border-[#1F2C24] bg-transparent px-5 py-2 font-mono text-[10px] uppercase tracking-widest text-[#7E8B83] transition-all duration-300 hover:border-lime-500 hover:text-white active:scale-95"
        >
          Skip Intro
          <span className="ml-2 text-lime-500">→</span>
        </button>

      </div>
    </div>
  );
}