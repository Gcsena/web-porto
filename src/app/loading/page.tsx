'use client';
import React, { useState } from 'react';
import { tektur } from '@/lib/fonts';


export default function loading() {



  return (
    <div className="loadingMain grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <header>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="HighlightText font-tektur font-regular">LOADING - BOOTING SYSTEM...</h2>
        <div className="">
          <p className="HighlightText">Commencing System Check</p>
          <p className="HighlightText font-tektur font-regular">Loading All Brain Data</p>
          <p className="HighlightText">Initializing Thinking Log</p>
          <p className="HighlightText font-tektur font-regular">Checking Signal: Green</p>
          <p className="HighlightText font-tektur font-regular">Checking Devices: Ok</p>
          <p className="HighlightText font-tektur font-regular">Launching Brain</p>
          <p className="HighlightText font-tektur font-regular">Brain Authentication: Complete</p>
          <p className="HighlightText font-tektur font-regular">Brain Scan Complete</p>
          <p className="HighlightText font-tektur font-regular">Brain Ver. 6.23.11.C</p>
          <p className="HighlightText font-tektur font-regular">Initializing Creativity</p>
          <p className="HighlightText font-tektur font-regular">Running Logical Feature</p>
          <p className="HighlightText font-tektur font-regular">Activating Endorphin</p>
          <p className="HighlightText font-tektur font-regular">Hapiness Status: Green</p>
          <p className="HighlightText font-tektur font-regular">Activating Learning Sensors</p>
          <p className="HighlightText font-tektur font-regular">Downloading content</p>
          <p className="HighlightText font-tektur font-regular">All Systems OK.</p>
          <p className="HighlightText font-tektur font-regular">Rendering All Data</p>
          <p className="HighlightText font-tektur font-regular">Brain Preparations Complete_</p>
        </div>
      </main>
    </div>
  );
}

