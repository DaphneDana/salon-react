import React, { useState, useEffect, useRef } from 'react';
import styles from './AwardItem.module.css';

interface AwardItemProps {
  imageSrc: string;
  altText: string;
  title?: string; // Optional title to display below/on hover
  animationDelay?: string; // e.g., '0.1s', '0.2s'
}

const AwardItem: React.FC<AwardItemProps> = ({ imageSrc, altText, title, animationDelay = '0s' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' } // Trigger when 20% visible, start a bit before fully in view
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${styles.awardItem} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay }}
      title={title || altText} // Tooltip
    >
      <img src={imageSrc} alt={altText} className={styles.awardImage} />
      {title && <p className={styles.awardTitle}>{title}</p>}
    </div>
  );
};

export default AwardItem;