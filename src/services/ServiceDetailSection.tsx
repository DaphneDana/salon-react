import React from 'react';
import styles from './ServiceDetailSection.module.css';
import { Link } from 'react-router-dom'; // For "Book This Service" CTA

interface SubService {
  subServiceTitle: string;
  description: string;
  benefits?: string[];
  duration?: string;
  price?: string;
}

interface ServiceDetailSectionProps {
  title: string;
  intro: string;
  imageSrc: string;
  details: SubService[];
  layout?: 'imageLeft' | 'imageRight'; // For alternating layout
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  title,
  intro,
  imageSrc,
  details,
  layout = 'imageLeft'
}) => {
  return (
    <section className={`${styles.serviceDetailSection} section-padding ${layout === 'imageRight' ? styles.imageRightLayout : ''}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.categoryTitle}>{title}</h2>
          <p className={styles.categoryIntro}>{intro}</p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img src={imageSrc} alt={title} className={styles.categoryImage} />
          </div>
          <div className={styles.detailsColumn}>
            {details.map((subService, index) => (
              <div key={index} className={styles.subServiceItem}>
                <h3 className={styles.subServiceTitle}>{subService.subServiceTitle}</h3>
                <p className={styles.subServiceDescription}>{subService.description}</p>
                {subService.benefits && subService.benefits.length > 0 && (
                  <ul className={styles.benefitsList}>
                    {subService.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.metaInfo}>
                  {subService.duration && <span className={styles.duration}>🕒 Approx. {subService.duration}</span>}
                  {subService.price && <span className={styles.price}>💰 {subService.price}</span>}
                </div>
                <Link to="/booking" className={styles.bookButton}> {/* Or specific booking link */}
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;