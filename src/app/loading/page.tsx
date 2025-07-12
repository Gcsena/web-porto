'use client';
import React, { useEffect, useState } from 'react';
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

function TypewriterEffect({ onComplete }: { onComplete: () => void }) {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>(Array(loadingMessages.length).fill(''));
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentMsg >= loadingMessages.length) {
      onComplete(); // Notify parent when done
      return;
    }
    const msg = loadingMessages[currentMsg].text;
    if (charIndex < msg.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[currentMsg] = msg.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, 20); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // Move to next message after a short delay
      const nextTimeout = setTimeout(() => {
        setCurrentMsg((m) => m + 1);
        setCharIndex(0);
      }, 200); // delay between messages
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, currentMsg, onComplete]);

  return (
    <div>
      {loadingMessages.map((msg, i) => (
        <p
          key={i}
          className={`HighlightText${msg.tektur ? ' font-tektur font-regular' : ''}`}
        >
          {displayed[i]}
        </p>
      ))}
    </div>
  );
}

export default function Loading({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="loadingMain grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <header>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="HighlightText font-tektur font-regular">LOADING - BOOTING SYSTEM...</h2>
        <TypewriterEffect onComplete={onComplete} />
      </main>
    </div>
  );
}

