'use client';
import AudioPlayer from '../../components/AudioPlayer';
import HolographicNavbar from '../../components/HolographicNavbar';
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
      <HolographicNavbar />
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
        
        <h2 className="font-mplus-1p font-bold">JAPAN TEST, お探しのページは見つかりませんでした。ホームページにお戻りください</h2>
        <h2 className="font-mplus-1p font-black">JAPAN TEST, お探しのページは見つかりませんでした。ホームページにお戻りください</h2>

        <p className="font-sawarabi-mincho">japan test, お探しのページは見つかりませんでした。ホームページにお戻りください</p>
        <p className="font-public-sans font-thin">public sans test, FRONTEND ENTHUSIAST</p>
        <p className="font-public-sans font-regular">public sans test, FRONTEND ENTHUSIAST</p>
        <p className="font-orbitron font-medium">NAME</p>
        <h2 className="HighlightText font-medium text-base">Who I Am</h2>
          <li className="font-tektur font-normal">I’m a high school graduate with a humble beginning. Coming from a family that couldn’t afford college, I set out to carve my own path. I started a small business—a shoe laundry service, helping people take care of their favorite footwear. Afterward, I spent three years working in the Food and Beverage industry in various blue-collar roles. It was during this time that my life took a new direction. I reconnected with an old friend who introduced me to the world of software engineering, and from that moment, everything changed.</li>
          <h2 className="HighlightText font-medium text-base">How I Got Interested in Software Engineering</h2>
          <li className="font-tektur font-bold">The spark that ignited my passion for software engineering came from a conversation with one of my best friends, a full-stack engineer with a computer science degree. He opened my eyes to the endless possibilities of software development—describing it as a blank canvas where you can create anything you imagine. That idea resonated deeply with me, and I knew I wanted to pursue this path. I became his student, eager to learn and embark on a new journey.</li>
          <h2 className="HighlightText font-medium text-base">Coding Journey: Starting with an Android Phone</h2>
          <li className="HighlightText">When I first began learning to code with my mentor, I didn’t have a personal laptop. Determined to pursue my goal of becoming a software engineer, I found a way to use my Android phone for coding. I used apps like Termux as my command line interface and a code editor as my IDE. Coding on a phone wasn’t easy, but my determination was stronger than the challenges. Eventually, I was able to buy a second-hand laptop with just 1GB of RAM and no graphics card. It came with Windows 8, but the specs weren’t enough to run it properly. So, I adapted by installing Linux distributions like Zorin OS and Ubuntu, which allowed me to continue coding. I also started using Geany as my IDE, since heavier editors would freeze the system. This experience not only strengthened my coding skills but also gave me valuable hands-on experience with Linux.</li>
          <h2 className="HighlightText font-medium text-base">Learning Software Engineering</h2>
          <li className="HighlightText">For six months, I dedicated myself to learning under the guidance of my mentor. He taught me not only the technical skills required to thrive but also the importance of staying current with market trends and technologies. I learned how to adapt quickly to new environments and tools, which prepared me for the ever-evolving tech landscape. As I grew more confident, I started assisting my mentor with freelance projects, gaining real-world experience. Eventually, my mentor told me, "You're ready to find your own path." With that, I set out on my own, and my journey as a software engineer began.</li>
        </ol>


        <h1>MY SKILLS</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h2 className="HighlightText font-medium text-base">DESIGN</h2>
          <li className="HighlightText">I have the ability to build websites and native apps from scratch, as well as update existing ones using templates or custom designs.</li>
          <li className="HighlightText">I specialize in responsive, mobile-first design that ensures compatibility across search engines and platforms.</li>
          <li className="HighlightText">With a keen eye for UI/UX, I can collaborate effectively with designers using tools like Figma to create engaging designs and animations.</li>
          <li className="HighlightText">I focus on maintaining and improving app and website performance, with a strong understanding of Lighthouse metrics, SEO, and SEM optimization.</li>
        </ol>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h2 className="HighlightText font-medium text-base">SOFT SKILLS</h2>
          <li className="HighlightText"><p className='font-extrabold inline'>Adaptability:</p>I adapt quickly to different working environments and technologies, ensuring seamless collaboration with teams and clients.</li>
          <li className="HighlightText"><p className='font-extrabold inline'>Collaboration:</p>With experience in a software house vendor, I’ve honed my ability to respond promptly and be available during urgent matters.</li>
          <li className="HighlightText"><p className='font-extrabold inline'>Problem-Solving:</p>My problem-solving skills are well-developed, and I’ve successfully tackled complex issues, even in high-pressure situations, to ensure timely and effective solutions.</li>
          <li className="HighlightText"><p className='font-extrabold inline'>Adaptability:</p></li>
          <li className="HighlightText"><p className='font-extrabold inline'>Adaptability:</p></li>
          <li className="HighlightText"><p className='font-extrabold inline'>Adaptability:</p></li>
        </ol>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h2 className="HighlightText font-medium text-base">Frontend Features</h2>
          <li className="HighlightText">Proficient in working with REST APIs, I collaborate closely with backend teams to ensure smooth API functionality and efficient debugging using platforms like Postman.</li>
          <li className="HighlightText">I’m capable of building fully functional, production-ready features such as forms, role management systems, login authentication, and dashboards—if you name it, I can most likely build it.</li>
          <li className="HighlightText"></li>
          <li className="HighlightText"></li>
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
