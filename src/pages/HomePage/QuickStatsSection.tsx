import React from 'react';
import styles from './QuickStatsSection.module.css';
import AnimatedCounter from '../../components/common/AnimatedCounter';

// Placeholder for icons - replace with actual SVGs or imported components
// Example: import ClientsIcon from '../../assets/icons/clients-icon.svg?react';
const IconPlaceholder = ({ text, className }: { text: string; className?: string }) => (
  <span className={`${styles.statIconPlaceholder} ${className || ''}`}>{text}</span>
);

const statsData = [
  {
    id: 1,
    icon: <IconPlaceholder text="👥" />, // Emoji for clients
    // icon: <ClientsIcon className={styles.statIcon} />,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    id: 2,
    icon: <IconPlaceholder text="📋" />, // Emoji for services list
    // icon: <ServicesIcon className={styles.statIcon} />,
    value: 50,
    suffix: '+',
    label: 'Services Offered',
  },
  {
    id: 3,
    icon: <IconPlaceholder text="⏳" />, // Emoji for experience/time
    // icon: <ExperienceIcon className={styles.statIcon} />,
    value: 5,
    suffix: '',
    label: 'Years Experience',
  },
  {
    id: 4,
    icon: <IconPlaceholder text="✂️" />, // Emoji for stylists
    // icon: <StylistsIcon className={styles.statIcon} />,
    value: 10,
    suffix: '+',
    label: 'Expert Stylists',
  },
];

const QuickStatsSection: React.FC = () => {
  return (
    <section className={`${styles.quickStatsSection} section-padding`}>
      <div className={styles.container}>
        {/* Optional: Add a subtle title for the section if desired */}
        {/* <h2 className={styles.sectionTitle}>Our Journey in Numbers</h2> */}
        <div className={styles.statsGrid}>
          {statsData.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statIconWrapper}>
                 {stat.icon}
              </div>
              <AnimatedCounter
                targetValue={stat.value}
                suffix={stat.suffix}
                duration={2500} // Animation duration in ms
                className={styles.statValue}
              />
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;