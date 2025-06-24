import React from 'react';
import styles from './SalonFeaturesSection.module.css';

// Placeholder for icons - replace with actual SVGs or imported components
// Example: import EquipmentIcon from '../../assets/icons/features/equipment-icon.svg?react';
const IconPlaceholder = ({ text, className }: { text: string; className?: string }) => (
  <span className={`${styles.featureIconPlaceholder} ${className || ''}`}>{text}</span>
);

const featuresData = [
  {
    id: 1,
    icon: <IconPlaceholder text="🛠️" />, // Emoji for modern equipment
    // icon: <EquipmentIcon className={styles.featureIcon} />,
    title: 'State-of-the-Art Equipment',
    description: 'We invest in the latest salon technology and tools to provide you with cutting-edge services and precision results.',
  },
  {
    id: 2,
    icon: <IconPlaceholder text="🧴" />, // Emoji for premium products
    // icon: <ProductsIcon className={styles.featureIcon} />,
    title: 'Premium Quality Products',
    description: 'Only the finest, industry-leading hair and beauty products are used, ensuring luxurious treatments and lasting effects.',
  },
  {
    id: 3,
    icon: <IconPlaceholder text="🌿" />, // Emoji for relaxing atmosphere
    // icon: <AtmosphereIcon className={styles.featureIcon} />,
    title: 'Relaxing & Elegant Atmosphere',
    description: 'Our salon is designed to be a tranquil escape, offering a sophisticated and comfortable environment for your pampering.',
  },
  {
    id: 4,
    icon: <IconPlaceholder text="💬" />, // Emoji for consultation
    // icon: <ConsultationIcon className={styles.featureIcon} />,
    title: 'Expert Consultations',
    description: 'Receive personalized advice and tailored recommendations from our experienced stylists to achieve your perfect look.',
  },
  {
    id: 5,
    icon: <IconPlaceholder text="☕" />, // Emoji for refreshments
    // icon: <RefreshmentsIcon className={styles.featureIcon} />,
    title: 'Complimentary Wi-Fi & Refreshments',
    description: 'Enjoy seamless connectivity and a selection of beverages while you relax and rejuvenate during your visit.',
  },
  {
    id: 6,
    icon: <IconPlaceholder text="🌟" />, // Emoji for hygiene
    // icon: <HygieneIcon className={styles.featureIcon} />,
    title: 'Impeccable Hygiene Standards',
    description: 'Your health and safety are paramount. We adhere to the strictest hygiene protocols for a clean and safe experience.',
  },
];

const SalonFeaturesSection: React.FC = () => {
  return (
    <section className={`${styles.salonFeaturesSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience the Difference</h2>
        <p className={styles.sectionSubtitle}>
          Discover the amenities and commitments that make Total Look a premier beauty destination.
        </p>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonFeaturesSection;