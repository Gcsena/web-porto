import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
// import { useLocation } from 'react-router-dom'; // Import useLocation if you're using React Router

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

const AudioPlayer = ({ trackIndex, title }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const track = tracks[trackIndex] || tracks[0];

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Failed to autoplay audio:", error);
      });
    }
  }, [trackIndex]);

  return (
    <div style={styles.audioPlayerContainer}>
      <h3 style={styles.title}>{title}</h3>
      <button onClick={togglePlayPause} style={styles.button}>
        <FontAwesomeIcon 
          icon={isPlaying ? faPause : faPlay} 
          size="xs" 
          style={{ color: "#B197FC" }} 
        />
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        style={styles.slider}
      />
      <audio ref={audioRef} src={track.url} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  audioPlayerContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f3f3f3',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: '0 10px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'transparent', 
  },
  slider: {
    width: '100px',
    cursor: 'pointer',
  },
};

export default AudioPlayer;
