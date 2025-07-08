// Enable client-side interactivity for this component
"use client";

import React, { useRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Image from 'next/image';

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
          let imagePath = '';
          let imageAlt = `${project.title} project preview`;
          let href = `/projects/${project.title.toLowerCase()}`;

          switch (project.title) {
            case 'FLEX':
              imagePath = '/image/Flex/flex1.png';
              break;
            case 'MOXA':
              imagePath = '/image/moxa/moxa1.jpeg';
              break;
            case 'KINTO':
              imagePath = '/image/kinto/kinto1.jpg';
              break;
            case 'DEAL':
              imagePath = '/image/Deal/deal1.jpg';
              break;
            case 'DREWHITE':
              imagePath = '/image/ewhite/ewhite1.png';
              break;
            case 'APMI':
              imagePath = '/image/APMI/apmi1.jpg';
              break;
            default:
              imagePath = '';
          }

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
              <div className={styles.previewContainer}>
                {imagePath ? (
                  <Image
                    src={imagePath}
                    alt={imageAlt}
                    width={400}
                    height={300}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.previewLabel}>
                    PREVIEW OF THE<br />PROJECT
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
} 