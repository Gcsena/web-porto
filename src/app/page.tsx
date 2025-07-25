// for handle hydration error*prompt when use reactVideoPLayer
'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "./loading/page";


//handle if the user first time visit the web, it goes to loading screen first*based on localStorage
function FirstVisitWrapper({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('hasVisited');
      if (hasVisited) {
        setShowLoading(false);
      } else {
        setShowLoading(true);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    localStorage.setItem('hasVisited', 'true');
    setShowLoading(false);
  };

  if (showLoading === undefined) return null;
  if (showLoading) return <Loading onComplete={handleLoadingComplete} />;
  return <>{children}</>;
}

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    setImgLoaded(true);
  }, []);
  return (
    <FirstVisitWrapper>
      <div className={styles.container}>
        {/* Decorative dots at top */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-6 lg:left-6">
          <div className={`${styles.dotPattern} w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px]`}></div>
        </div>

        {/* Top Japanese Text */}
        <div className="absolute top-12 left-4 sm:top-16 sm:left-6 md:top-20 md:left-8 lg:left-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 hover:opacity-100 transition-opacity" style={{ color: '#C353E7' }}>
          「セナ」
        </div>

        {/* Main Content Strip */}
        <div className={`${styles.mainStrip} w-[20%] left-1/2 -translate-x-1/2 -skew-x-[15deg]`}>
          <Image
            src="/image/lucy.png"
            alt="Profile"
            fill
            className={`${styles.stripImage} ${imgLoaded ? styles.fadeInImage : ''} scale-[2] translate-x-[10%]`}
            priority
          />
          <div className={styles.stripOverlay}></div>
        </div>

        {/* Title Section */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 text-right">
          <div className="flex items-center justify-end gap-1 mb-1">
            <h1 className="text-[0.75rem] sm:text-[0.875rem] md:text-base lg:text-lg xl:text-xl font-medium tracking-[0.1em] sm:tracking-[0.15em] transition-colors" style={{ color: '#C353E7' }}>
              GARUDA
            </h1>
            <span className="text-[0.75rem] sm:text-[0.875rem] md:text-base lg:text-lg xl:text-xl ml-0.5 sm:ml-1 md:ml-2 transition-colors" style={{ color: '#C353E7' }}>
              ≫
            </span>
          </div>
          <h1 className="text-[0.75rem] sm:text-[0.875rem] md:text-base lg:text-lg xl:text-xl font-medium tracking-[0.1em] sm:tracking-[0.15em] transition-colors mb-1" style={{ color: '#C353E7' }}>
            CASASENA
          </h1>
          <p className="text-[0.375rem] sm:text-[0.5rem] md:text-[0.625rem] lg:text-[0.75rem]
                       tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em]
                       text-blue-300 hover:text-blue-200 transition-colors">
            FRONTEND ENTHUSIAST
          </p>
        </div>

        <div className="absolute top-[65%] -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 text-right">
        {/* TODO:
        1. controller: start button redirect to home
        2. mouse&key: click middle image redirect to home
        3. controller: touch middle image redirect to home 
        4. maybe hidden the start button if controller not connected & add info that this web can be used in controller*/}
        <h1
          className={"text-[0.75rem] sm:text-[0.875rem] md:text-base lg:text-lg xl:text-xl font-medium tracking-[0.1em] sm:tracking-[0.15em] transition-colors " + styles.pressStartPulse}
          style={{ color: '#DADADA' }}
        >
          PRESS START
        </h1>
          </div>

        {/* Side Japanese Text */}
        <div className={`${styles.sideJapanese} absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-10 transition-colors text-xs sm:text-sm md:text-base tracking-[1em] sm:tracking-[1.5em] md:tracking-[2em] font-light`} style={{ color: '#C353E7', opacity: 0.2 }}>
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            ガ ル ー ダ カ サ セ ナ
          </div>
        </div>
      </div>
    </FirstVisitWrapper>
  );
}
