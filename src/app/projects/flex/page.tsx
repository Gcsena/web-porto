"use client";
import React from "react";
import CyberpunkMobileFrame from "@/components/CyberpunkMobileFrame";

export default function FlexProjectPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>FLEX Project</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. FLEX project details go here.</p>
      <CyberpunkMobileFrame>
        <img
          src="/image/Flex/flex4.jpg"
          alt="FLEX App Screenshot"
          style={{ width: '90%', borderRadius: '1rem' }}
        />
      </CyberpunkMobileFrame>
    </div>
  );
} 