"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationItem = {
  name: string;
  href: string;
  japaneseName: string;
  className: string;
};

const navigation: NavigationItem[] = [
  { name: 'About Me', href: '/about', japaneseName: '私について', className: 'NavbarItem--about' },
  { name: 'Portfolio', href: '/portfolio', japaneseName: 'ポートフォリオ', className: 'NavbarItem--portfolio' },
  { name: 'Projects', href: '#', japaneseName: 'プロジェクト', className: 'NavbarItem--projects' },
  { name: 'Calendar', href: '#', japaneseName: 'カレンダー', className: 'NavbarItem--calendar' },
];

export default function HolographicNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Animate in the navbar
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemTouch = (itemName: string) => {
    if (isTouchDevice) {
      setActiveItem(itemName);
      // Clear active item after a short delay for touch feedback
      setTimeout(() => setActiveItem(null), 300);
    }
  };

  return (
    <nav className={`holographic-navbar ${isVisible ? 'visible' : ''}`}>
      <div className={`terminal-container ${isOpen ? 'open' : 'closed'}`}>
        {/* Terminal Header */}
        <div className="terminal-header" onClick={toggleNavbar}>
          <div className="terminal-title">
            <span className="bracket">[</span>
            TERMINAL
            <span className="bracket">]</span>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className={`navigation-grid ${isOpen ? 'visible' : 'hidden'}`}>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isHovered = activeItem === item.name;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-item ${item.className} ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => !isTouchDevice && setActiveItem(item.name)}
                onMouseLeave={() => !isTouchDevice && setActiveItem(null)}
                onTouchStart={() => handleNavItemTouch(item.name)}
              >
                <div className="nav-item-content">
                  <div className="nav-item-main">
                    <span className="nav-number">[{(navigation.indexOf(item) + 1).toString().padStart(2, '0')}]</span>
                    <span className="nav-name">{item.name}</span>
                  </div>
                  <div className="nav-item-japanese">
                    {isHovered ? item.japaneseName : ''}
                  </div>
                  <div className="nav-item-indicator">
                    {isActive ? '≫' : '>'}
                  </div>
                </div>
                <div className="nav-item-glow"></div>
              </Link>
            );
          })}
        </div>

        {/* Terminal Footer */}
        <div className={`terminal-footer ${isOpen ? 'visible' : 'hidden'}`}>
          <div className="status-line">
            <span className="info-item">STATUS:</span>
            <span className="status-value">ONLINE</span>
            <span className="status-dot"></span>
          </div>
          <div className="system-info">
            <span className="info-item">SYSTEM: CYBERPUNK_v2.1</span>
            <span className="info-item">USER: GARUDA_CASASENA</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 