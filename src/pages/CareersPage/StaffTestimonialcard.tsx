import React from 'react';
import styles from './StaffTestimonialCard.module.css';

interface StaffTestimonialCardProps {
  quote: string;
  name: string;
  position: string; // e.g., "Lead Stylist", "Salon Manager"
  avatarSrc: string;
  yearsWithCompany?: number; // Optional
}

const StaffTestimonialCard: React.FC<StaffTestimonialCardProps> = ({
  quote,
  name,
  position,
  avatarSrc,
  yearsWithCompany
}) => {
  return (
    <div className={styles.testimonialCard}>
      <img src={avatarSrc} alt={name} className={styles.avatar} />
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.authorInfo}>
        <h4 className={styles.authorName}>{name}</h4>
        <p className={styles.authorPosition}>{position}</p>
        {yearsWithCompany && (
          <p className={styles.yearsInfo}>{yearsWithCompany} Years at Total Look</p>
        )}
      </div>
    </div>
  );
};

export default StaffTestimonialCard;