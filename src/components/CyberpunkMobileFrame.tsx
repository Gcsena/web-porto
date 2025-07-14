import React, { ReactNode } from "react";

interface CyberpunkMobileFrameProps {
  children: ReactNode;
  label?: string;
}

export default function CyberpunkMobileFrame({ children, label = "デモ" }: CyberpunkMobileFrameProps) {
  return (
    <div className="cyberpunk-mobile-frame">
      <div className="cyberpunk-header">アプリ</div>
      <div className="cyberpunk-content">{children}</div>
      <div className="cyberpunk-footer">{label}</div>
      <style jsx>{`
        .cyberpunk-mobile-frame {
          width: 320px;
          border-radius: 2rem;
          border: 3px solid #00fff7;
          box-shadow: 0 0 30px #00fff7, 0 0 10px #ff00ea inset;
          background: rgba(20, 20, 40, 0.85);
          overflow: hidden;
          position: relative;
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
        }
        .cyberpunk-header,
        .cyberpunk-footer {
          background: rgba(0,0,0,0.7);
          color: #fff;
          text-align: center;
          font-family: 'Geist Mono', monospace;
          letter-spacing: 0.2em;
          padding: 0.5rem 0;
          font-size: 1rem;
          z-index: 2;
        }
        .cyberpunk-header {
          border-bottom: 1px solid #00fff7;
        }
        .cyberpunk-footer {
          border-top: 1px solid #ff00ea;
        }
        .cyberpunk-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0,255,247,0.05) 0%, rgba(255,0,234,0.05) 100%);
        }
      `}</style>
    </div>
  );
} 