'use client';
import React from 'react';
import { tektur } from '@/lib/fonts';

// Array of loading messages
const loadingMessages = [
  { text: 'Commencing System Check', tektur: false },
  { text: 'Loading All Brain Data', tektur: true },
  { text: 'Initializing Thinking Log', tektur: false },
  { text: 'Checking Signal: Green', tektur: true },
  { text: 'Checking Devices: Ok', tektur: true },
  { text: 'Launching Brain', tektur: true },
  { text: 'Brain Authentication: Complete', tektur: true },
  { text: 'Brain Scan Complete', tektur: true },
  { text: 'Brain Ver. 6.23.11.C', tektur: true },
  { text: 'Initializing Creativity', tektur: true },
  { text: 'Running Logical Feature', tektur: true },
  { text: 'Activating Endorphin', tektur: true },
  { text: 'Hapiness Status: Green', tektur: true },
  { text: 'Activating Learning Sensors', tektur: true },
  { text: 'Downloading content', tektur: true },
  { text: 'All Systems OK.', tektur: true },
  { text: 'Rendering All Data', tektur: true },
  { text: 'Brain Preparations Complete_', tektur: true },
];

export default function Loading() {
  return (
    <div className="loadingMain grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <header>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="HighlightText font-tektur font-regular">LOADING - BOOTING SYSTEM...</h2>
        <div className="">
          {loadingMessages.map((msg, i) => (
            <p
              key={i}
              className={`HighlightText${msg.tektur ? ' font-tektur font-regular' : ''}`}
            >
              {msg.text}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

