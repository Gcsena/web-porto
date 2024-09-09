'use client';
import AudioPlayer from '../../components/AudioPlayer';
import Navbar from '../../components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
// import ReactPlayer from 'react-player';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import dynamic from 'next/dynamic'; 

// TODO: make this two param more dynamic & autoplay when entering each page
const trackIndex = 0; 
const trackTitle = "HotelPools-Limits";


export default function Home() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
      <Navbar />
      <div>
      <AudioPlayer trackIndex={trackIndex} title={trackTitle} />
    </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="HighlightText">Cakrawala, Ajaib</li>
          <li className="HighlightText">Rainbow, Ratu Kuning</li>
          <li className="HighlightText">Selamat Datang, Cakrawala</li>
        </ol>

      </main>
      <footer className="flex justify-center row-start-3 items-center gap-4 text-sm text-gray-500">
        <span>Powered by</span>
        <a
          className="font-medium text-gray-900 dark:text-white"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
      </footer>

    </div>
  );
}
