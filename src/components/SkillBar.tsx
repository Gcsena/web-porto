import React from 'react';

interface SkillBarProps {
  label: string;
  percent: number; // 0-100
}

const ACCENT = '#C353E7';
const DARK = '#18141c';
const BAR_HEIGHT = 18;
const DOT_SIZE = 2;

// SVG dither pattern as data URI (pink dots on transparent)
const ditherPattern = `url('data:image/svg+xml;utf8,<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="2" height="2" fill="%23C353E7"/><rect x="2" y="2" width="2" height="2" fill="%23C353E7"/></svg>')`;
const ditherDarkPattern = `url('data:image/svg+xml;utf8,<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="2" height="2" fill="%2318141c"/><rect x="2" y="2" width="2" height="2" fill="%2318141c"/></svg>')`;

const SkillBar: React.FC<SkillBarProps> = ({ label, percent }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Geist Mono, monospace',
        color: ACCENT,
        background: 'none',
        fontSize: 20,
        margin: '8px 0',
      }}
    >
      <span style={{ marginRight: 8 }}>[ {label} </span>
      <div
        style={{
          flex: 1,
          height: BAR_HEIGHT,
          background: ditherDarkPattern,
          borderRadius: 2,
          margin: '0 8px',
          position: 'relative',
          overflow: 'hidden',
          minWidth: 80,
          maxWidth: 320,
          boxShadow: '0 0 4px #000a',
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            background: ditherPattern,
            position: 'absolute',
            left: 0,
            top: 0,
            transition: 'width 0.4s cubic-bezier(.7,0,.3,1)',
            boxShadow: '0 0 8px #C353E7aa',
          }}
        />
      </div>
      <span style={{ marginLeft: 8 }}>{percent}% ]</span>
    </div>
  );
};

export default SkillBar; 