import React from 'react';
import styles from './HeroSection.module.css';
// import heroBg from '../../assets/images/hero-bg-placeholder.jpg'; // Uncomment when you have an image

// Placeholder for floating icons data
const floatingIcons = [
  { id: 1, text: '💄', delay: '0s' }, // Using emojis as placeholders
  { id: 2, text: '✂️', delay: '0.5s' },
  { id: 3, text: '💅', delay: '1s' },
  { id: 4, text: '🌿', delay: '0.2s' }, // Represents natural products/facials
  { id: 5, text: '✨', delay: '0.7s' }, // Represents sparkle/glamour
];

const HeroSection: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      // style={{ backgroundImage: `url(${heroBg})` }} // Uncomment when you have heroBg image
    >
      <div className={styles.gradientOverlay}></div>
      <div className={styles.content}>
        <h1 className={styles.animatedTitle}>
          <span>T</span>
          <span>o</span>
          <span>t</span>
          <span>a</span>
          <span>l</span>
          <span> </span>
          <span>L</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
        </h1>
        <p className={styles.tagline}>Where Beauty Meets Perfection</p>
        <button className={styles.ctaButton}>Book Your Transformation</button>
      </div>
      <div className={styles.floatingIconsContainer}>
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className={styles.floatingIcon}
            style={{ animationDelay: icon.delay }}
          >
            {icon.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;