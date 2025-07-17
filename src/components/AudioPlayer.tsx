import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface Track {
  url: string;
  title: string;
}

const tracks: Track[] = [
  {
    url: "/audio/HotelPools-Limits.mp3",
    title: "HotelPools-Limits"
  },
  {
    url: "/audio/SytrickaRunning.mp3",
    title: "SytrickaRunning"
  },
  {
    url: "/audio/TakingFlight.mp3",
    title: "TakingFlight"
  },
];

interface AudioPlayerProps {
  trackIndex: number;
  title: string;
}

const ACCENT = '#C353E7';
const SIZE = 120; // px
const STROKE = 8; // px
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUM = 2 * Math.PI * RADIUS;

const AudioPlayer = ({ trackIndex, title }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const knobRef = useRef<SVGSVGElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [dragging, setDragging] = useState(false);

  const track = tracks[trackIndex] || tracks[0];

  // Converts mouse/touch position to volume (0-1)
  const getVolumeFromPointer = (clientX: number, clientY: number) => {
    if (!knobRef.current) return volume;
    const rect = knobRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let angle = Math.atan2(dy, dx); // -PI to PI
    angle = angle < -Math.PI / 2 ? angle + 2 * Math.PI : angle; // Normalize so top is 0
    let percent = (angle + Math.PI / 2) / (2 * Math.PI);
    percent = Math.max(0, Math.min(1, percent));
    return percent;
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    let clientX, clientY;
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    if (clientX !== undefined && clientY !== undefined) {
      const newVol = getVolumeFromPointer(clientX, clientY);
      setVolume(newVol);
      if (audioRef.current) audioRef.current.volume = newVol;
    }
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    let clientX, clientY;
    if ('touches' in e && (e as TouchEvent).touches.length > 0) {
      clientX = (e as TouchEvent).touches[0].clientX;
      clientY = (e as TouchEvent).touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }
    if (clientX !== undefined && clientY !== undefined) {
      const newVol = getVolumeFromPointer(clientX, clientY);
      setVolume(newVol);
      if (audioRef.current) audioRef.current.volume = newVol;
    }
  };

  const handlePointerUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('touchmove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [dragging]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Failed to autoplay audio:", error);
      });
    }
  }, [trackIndex]);

  // Arc for volume
  const arcLen = CIRCUM * volume;
  const arcOffset = CIRCUM - arcLen;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none' }}>
      <svg
        ref={knobRef}
        width={SIZE}
        height={SIZE}
        style={{ cursor: 'pointer', display: 'block' }}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* Background circle */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#222"
          strokeWidth={STROKE}
          fill="none"
        />
        {/* Volume arc */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke={ACCENT}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={`${arcLen} ${CIRCUM - arcLen}`}
          strokeDashoffset={arcOffset}
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 6px #C353E7aa)' }}
        />
        {/* Volume percent text */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fontSize="18"
          fill={ACCENT}
          fontWeight="bold"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {Math.round(volume * 100)}%
        </text>
      </svg>
      {/* Play/Pause button below the SVG */}
      <button
        onClick={togglePlayPause}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(30,30,40,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px #0008',
          cursor: 'pointer',
          outline: 'none',
          transition: 'background 0.2s',
          marginTop: 16,
        }}
      >
        <FontAwesomeIcon 
          icon={isPlaying ? faPause : faPlay} 
          size="2x" 
          style={{ color: ACCENT }} 
        />
      </button>
      <audio ref={audioRef} src={track.url} />
    </div>
  );
};

export default AudioPlayer;
