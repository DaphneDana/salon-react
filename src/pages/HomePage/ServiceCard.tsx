import React from 'react';
import styles from './ServiceCard.module.css';
// import { Link } from 'react-router-dom'; // If "Learn More" links to a specific page

interface ServiceCardProps {
  icon: React.ReactNode; // Can be an SVG component, an <img>, or even text/emoji
  title: string;
  description: string;
  learnMoreLink?: string; // Optional: if each service has its own page
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, learnMoreLink }) => {
  const learnMoreButton = (
    <button className={styles.learnMoreButton}>
      Learn More
    </button>
  );

  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {/* {learnMoreLink ? <Link to={learnMoreLink}>{learnMoreButton}</Link> : learnMoreButton} */}
      {/* For now, just a button, no actual link functionality */}
      {learnMoreButton}
    </div>
  );
};

export default ServiceCard;