import React from 'react';
import StarRating from '../../components/common/StarRating'; // Import StarRating
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string; 
  avatarSrc: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarSrc,
  rating,
}) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.cardHeader}>
        <img src={avatarSrc} alt={author} className={styles.avatar} />
        <div className={styles.authorInfo}>
          <h4 className={styles.authorName}>{author}</h4>
          {role && <p className={styles.authorRole}>{role}</p>}
        </div>
      </div>
      <div className={styles.ratingWrapper}>
         <StarRating rating={rating} />
      </div>
      <p className={styles.quote}>"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;