import React from 'react';
import styles from './AwardCertsSection.module.css';
import AwardItem from './AwardItem';
import salonInteriorPlaceholder from '../../assets/images/salon-interior-placeholder.jpeg';


//  let awardImages: Record<string, string> = {};
//  try {
//      const modules = import.meta.glob('/src/assets/images/awards/award*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
//      awardImages = modules;
//  } catch (error) { console.error("Error loading award images:", error); }

//  const getAwardImage = (fileName: string): string => {
//      const path = `/src/assets/images/awards/${fileName}`;
//      return awardImages[path] || 'https://via.placeholder.com/100x80.png?text=Badge';
//  };


const awardsData = [
  {
    id: 1,
    imageSrc: salonInteriorPlaceholder, 
    altText: 'Best Salon Award 2023',
    title: 'Best Regional Salon 2023',
  },
  {
    id: 2,
    imageSrc: salonInteriorPlaceholder,
    altText: 'Certified Color Professionals',
    title: 'Certified Color Experts',
  },
  {
    id: 3,
    imageSrc: salonInteriorPlaceholder,
    altText: 'Customer Choice Award 2022',
    title: 'Customer Excellence 2022',
  },
  {
    id: 4,
    imageSrc: salonInteriorPlaceholder, // Assume you have cert2.svg
    altText: 'Luxury Brand Partner',
    title: 'Premium Brand Partner',
  },
  {
    id: 5,
    imageSrc: salonInteriorPlaceholder,
    altText: 'Top Stylist Recognition 2024',
    title: 'Top Stylist Award 2024',
  },
  {
    id: 6,
    imageSrc: salonInteriorPlaceholder, // Assume you have cert3.svg
    altText: 'Eco-Friendly Salon Certification',
    title: 'Eco-Conscious Certified',
  },
];

const AwardsCertsSection: React.FC = () => {
  return (
    <section className={`${styles.awardsCertsSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Accolades & Recognition</h2>
        <p className={styles.sectionSubtitle}>
          Proudly showcasing our commitment to excellence and industry standards.
        </p>
        <div className={styles.awardsGrid}>
          {awardsData.map((award, index) => (
            <AwardItem
              key={award.id}
              imageSrc={award.imageSrc}
              altText={award.altText}
              title={award.title}
              animationDelay={`${index * 0.1}s`} // Stagger animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsCertsSection;