// for handle hydration error*prompt when use reactVideoPLayer
// "use client";
import Image from "next/image";
import React from 'react';
import ReactPlayer from 'react-player'
import Navbar from '../components/Navbar';


export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header><Navbar /></header>
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
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="HighlightText">IKAN IKAN APA???????</li>
          {/* <ReactPlayer className="bungkusMicin" url="/video/micin.mp4" controls={true} /> */}
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>

          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>

          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          <li>HEHE</li>
          

        </ol>



      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
