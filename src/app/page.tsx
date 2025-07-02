// for handle hydration error*prompt when use reactVideoPLayer
// "use client";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Decorative dots at top */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6">
        <div
          className={`${styles.dotPattern} w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px]`}
        ></div>
      </div>

      {/* Top Japanese Text */}
      <div
        className="absolute top-12 left-4 sm:top-16 sm:left-6 md:top-20 md:left-8 lg:left-10 
                    text-fuchsia-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light
                    opacity-90 hover:opacity-100 transition-opacity"
      >
        「セナ」
      </div>

      {/* Main Content Strip */}
      <div
        className={`absolute h-screen 
                    w-[25%] sm:w-[22%] md:w-[20%] lg:w-[18%] 
                    left-1/2 -translate-x-1/2 
                    -skew-x-[12deg] sm:-skew-x-[15deg] 
                    overflow-hidden ${styles.strip}`}
      >
        <div
          className="w-full h-full relative 
                      skew-x-[12deg] sm:skew-x-[15deg] 
                      transform"
        >
          <Image
            src="/image/lucy.png"
            alt="Profile"
            fill
            className="object-cover object-center 
                     scale-[1.8] sm:scale-[2] md:scale-[2.2] lg:scale-[2.5]
                     transform -translate-x-[15%] sm:-translate-x-[10%]
                     transition-transform duration-700 ease-out"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t 
                        from-black/50 via-transparent to-black/30
                        pointer-events-none"
          ></div>
        </div>
      </div>

      {/* Title Section */}
      <div
        className="absolute bottom-[10%] sm:bottom-[12%] md:bottom-[15%] 
                    right-3 sm:right-4 md:right-6 lg:right-8
                    text-right"
      >
        <div className="flex items-center justify-end gap-1 mb-0.5 sm:mb-1 md:mb-2">
          <h1
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                       font-medium tracking-[0.15em] text-fuchsia-500
                       hover:text-fuchsia-400 transition-colors"
          >
            GARUDA
          </h1>
          <span
            className="text-fuchsia-500 
                        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                        ml-0.5 sm:ml-1 md:ml-2
                        hover:text-fuchsia-400 transition-colors"
          >
            ≫
          </span>
        </div>
        <h1
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                     font-medium tracking-[0.15em] text-fuchsia-500 
                     mb-1 sm:mb-1.5 md:mb-2 lg:mb-3
                     hover:text-fuchsia-400 transition-colors"
        >
          CASASENA
        </h1>
        <p
          className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm 
                    tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] 
                    text-blue-300 hover:text-blue-200 transition-colors"
        >
          FRONTEND ENTHUSIAST
        </p>
      </div>

      {/* Side Japanese Text */}
      <div
        className="absolute top-1/2 -translate-y-1/2 
                    left-4 sm:left-6 md:left-8 lg:left-10
                    text-fuchsia-500/20 hover:text-fuchsia-500/30 transition-colors
                    text-xs sm:text-sm md:text-base
                    tracking-[1em] sm:tracking-[1.5em] md:tracking-[2em] 
                    writing-vertical font-light"
      >
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          ガ ル ー ダ カ サ セ ナ
        </div>
      </div>
    </div>
  );
}
