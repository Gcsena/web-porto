import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>DARN IT.....</h1>
        <h1 className={styles.heading}>U GOT 404</h1>

        <p className={styles.paragraph}>HERE'S ELLEN JOE TO KEEP U ACCOMPANY</p>
        <div className={styles.imageContainer}>
          <Image 
            src="/image/chibi-ellen.gif" 
            alt="Chibi Ellen" 
            width={200} 
            height={200}
            priority 
            className={styles.image}
          />
        </div>
        <Link href="/" className={styles.button}>
          <button className={styles.button}>Go back to Home</button>
        </Link>
      </div>
    </div>
  );
}
