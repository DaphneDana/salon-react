import React from 'react';
import styles from './StarRating.module.css';
// You might want an actual star SVG icon later
// import StarIcon from '../../assets/icons/star.svg?react';

interface StarRatingProps {
  rating: number; // e.g., 4.5, 5
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      {[...Array(fullStars)].map((_, i) => (
        // <StarIcon key={`full-${i}`} className={`${styles.star} ${styles.fullStar}`} />
        <span key={`full-${i}`} className={`${styles.star} ${styles.fullStar}`}>★</span>
      ))}
      {hasHalfStar && (
        // <StarIcon key="half" className={`${styles.star} ${styles.halfStar}`} /> // More complex for half star SVG
        <span key="half" className={`${styles.star} ${styles.halfStar}`}>★</span> // Simple CSS can create half effect
      )}
      {[...Array(emptyStars)].map((_, i) => (
        // <StarIcon key={`empty-${i}`} className={`${styles.star} ${styles.emptyStar}`} />
        <span key={`empty-${i}`} className={`${styles.star} ${styles.emptyStar}`}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;