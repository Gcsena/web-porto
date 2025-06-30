import React from 'react';
import styles from './Portfolio.module.css';

const projects = [
  { id: '01', title: 'FLEX' },
  { id: '02', title: 'MOXA' },
  { id: '03', title: 'KINTO' },
  { id: '04', title: 'DEAL' },
  { id: '05', title: 'DREWHITE' },
  { id: '06', title: 'APMI' },
];

export default function Portfolio() {
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

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectNumber}>{project.id}</div>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.previewContainer}>
              <div className={styles.previewLabel}>
                PREVIEW OF THE<br />PROJECT
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 