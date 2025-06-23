import React from 'react';
import styles from './ServicesPreview.module.css';
import ServiceCard from './ServiceCard';
import HairStylingIcon from '../../assets/icons/hair-styling.svg';

// Placeholder icons (replace with actual SVGs or imported images)
// Example: import HairStylingIcon from '../../assets/icons/hair-styling.svg?react';
// (using ?react suffix for vite-plugin-svgr if you set it up)
const IconPlaceholder = ({ text } : {text: string}) => <span style={{ fontSize: '2.5rem' }}>{text}</span>;


const servicesData = [
  {
    id: 1,
    // icon: <HairStylingIcon />, // Example with actual SVG
    icon: <IconPlaceholder text="✂️" />,
    title: 'Hair Styling',
    description: 'Expert cuts, blowouts, and elegant updos for any occasion.',
    learnMoreLink: '/services/hair-styling', // Example link
  },
  {
    id: 2,
    icon: <IconPlaceholder text="🎨" />, // Represents coloring palette
    title: 'Hair Coloring',
    description: 'Vibrant colors, balayage, highlights, and corrective coloring by specialists.',
    learnMoreLink: '/services/hair-coloring',
  },
  {
    id: 3,
    icon: <IconPlaceholder text="💄" />,
    title: 'Makeup Artistry',
    description: 'Professional makeup for events, photoshoots, or a stunning everyday look.',
    learnMoreLink: '/services/makeup',
  },
  {
    id: 4,
    icon: <IconPlaceholder text="💅" />,
    title: 'Nail Care',
    description: 'Luxurious manicures, pedicures, and artistic nail designs.',
    learnMoreLink: '/services/nail-care',
  },
  {
    id: 5,
    icon: <IconPlaceholder text="🌿" />, // Represents natural/facial
    title: 'Facial Treatments',
    description: 'Rejuvenating facials tailored to your skin type for a radiant glow.',
    learnMoreLink: '/services/facial-treatments',
  },
  {
    id: 6,
    icon: <IconPlaceholder text="👰" />, // Represents bridal
    title: 'Bridal Packages',
    description: 'Comprehensive beauty packages to make your special day perfect.',
    learnMoreLink: '/services/bridal-packages',
  },
];

const ServicesPreview: React.FC = () => {
  return (
    <section className={`${styles.servicesPreviewSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Signature Services</h2>
        <p className={styles.sectionSubtitle}>
          Discover the artistry and expertise that define Total Look.
        </p>
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              // learnMoreLink={service.learnMoreLink} // Pass if you implement routing for these
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;