// Enable client-side interactivity for this component
"use client";

import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import HolographicNavbar from '../../components/HolographicNavbar';

const projects = [
  { id: '01', title: 'FLEX' },
  { id: '02', title: 'MOXA' },
  { id: '03', title: 'KINTO' },
  { id: '04', title: 'DEAL' },
  { id: '05', title: 'DREWHITE' },
  { id: '06', title: 'APMI' },
];

const projectTitleToKatakana: Record<string, string> = {
  FLEX: 'フレックス',
  MOXA: 'モクサ',
  KINTO: 'キント',
  DEAL: 'ディール',
  DREWHITE: 'ドレホワイト',
  APMI: 'エーピーエムアイ',
};

export default function Portfolio() {
  // Track which project card is currently hovered (by id)
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <HolographicNavbar />
      <div className={styles.titleSection}>
        <h1 className={styles.title}>
          <span className={styles.bracket}>[</span>
          PORTFOLIO
          <span className={styles.bracket}>]</span>
        </h1>
        <div className={styles.scrollingText}>
          個人のポートフォリオ・個人のポートフォリオ・個人のポートフォリオ
        </div>
      </div>

      {/* Grid of project cards */}
      <div className={styles.projectsGrid}>
        {projects.map((project) => {
          // Map project titles to their correct hrefs
          let href = `/projects/${project.title.toLowerCase()}`;

          return (
            // Each card is a link to its project page
            <a
              key={project.id}
              href={href}
              className={styles.projectCard}
              tabIndex={0}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Project number (e.g., 01, 02, ...) */}
              <div className={styles.projectNumber}>{project.id}</div>
              {/* Project title: switches to Katakana on hover */}
              <div className={styles.projectTitle}>
                {hovered === project.id
                  ? projectTitleToKatakana[project.title] || project.title
                  : project.title}
              </div>
              <div className={styles.projectInfoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
} 