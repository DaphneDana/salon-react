import React, { useState } from 'react';
import styles from './JobListingCard.module.css';

interface JobListingCardProps {
  title: string;
  location?: string; // e.g., "Glamour City Salon"
  type?: string; // e.g., "Full-time", "Part-time"
  requirements: string[];
  responsibilities: string[];
  salaryRange?: string;
  applyLink?: string; // Link to an application form or email
  cardStyle: 'cream' | 'sage'; // To alternate card background
}

const JobListingCard: React.FC<JobListingCardProps> = ({
  title,
  location,
  type,
  requirements,
  responsibilities,
  salaryRange,
  applyLink = '#', // Default to '#'
  cardStyle
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.jobCard} ${cardStyle === 'cream' ? styles.creamBg : styles.sageBg}`}>
      <div className={styles.cardHeader}>
         <h3 className={styles.jobTitle}>{title}</h3>
         {(location || type) && (
             <div className={styles.jobMeta}>
                 {location && <span className={styles.location}>{location}</span>}
                 {type && <span className={styles.jobType}>{type}</span>}
             </div>
         )}
      </div>

      <div className={`${styles.detailsWrapper} ${isExpanded ? styles.expanded : ''}`}>
        <h4>Key Responsibilities:</h4>
        <ul className={styles.list}>
          {responsibilities.slice(0, isExpanded ? responsibilities.length : 3).map((item, index) => ( // Show first 3 initially
            <li key={index}>{item}</li>
          ))}
        </ul>

        {isExpanded && (
          <>
            <h4>Requirements:</h4>
            <ul className={styles.list}>
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {salaryRange && (
              <p className={styles.salary}>
                <strong>Salary Range:</strong> {salaryRange}
              </p>
            )}
          </>
        )}
      </div>

     <div className={styles.cardFooter}>
         <button onClick={() => setIsExpanded(!isExpanded)} className={styles.detailsButton}>
             {isExpanded ? 'Show Less' : 'View Details'}
         </button>
         <a href={applyLink} className={styles.applyButton} target="_blank" rel="noopener noreferrer">
             Apply Now
         </a>
     </div>
    </div>
  );
};

export default JobListingCard;