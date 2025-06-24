import React from 'react';
import styles from './OurStorySection.module.css';
import salonInteriorPlaceholder from '../../assets/images/salon-interior-placeholder.jpeg'; 

// Placeholder for timeline items - this part was correct
const timelineEvents = [
  { year: '2018', title: 'Grand Opening', description: 'Total Look opens its doors, bringing a new vision of beauty to the city.' },
  { year: '2020', title: 'Expanded Services', description: 'Introduced advanced skincare and luxury nail art services.' },
  { year: '2022', title: 'Community Award', description: 'Recognized for excellence in customer service and community involvement.' },
  { year: '2024', title: 'Stylist Team Growth', description: 'Welcomed new top-tier stylists, enhancing our creative capacity.' },
];

const OurStorySection: React.FC = () => {
  return (
    <section className={`${styles.ourStorySection} section-padding`}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>Our Journey to Radiance</h2>
            <div className={styles.roseGoldLine}></div>
            <p className={styles.introText}>
              Welcome to Total Look, where our passion for beauty and dedication to perfection
              have been transforming looks and inspiring confidence since our inception.
            </p>

            <div className={styles.storyBlock}>
              <h3>Founding Story</h3>
              <p>
                Founded in 2018 by a team of visionary stylists, Total Look was born from a desire to create a sanctuary
                where artistry, innovation, and personalized care converge. We envisioned a salon that not only delivered
                exceptional results but also nurtured a sense of well-being and self-assurance in every client.
              </p>
            </div>

            <div className={styles.storyBlock}>
              <h3>Our Mission</h3>
              <p>
                To empower individuals by enhancing their natural beauty through exceptional, personalized salon services,
                delivered by passionate professionals in an elegant and welcoming environment.
              </p>
            </div>

            <div className={styles.storyBlock}>
              <h3>Our Vision</h3>
              <p>
                To be the leading luxury beauty destination, renowned for our innovative techniques, commitment to quality,
                and our ability to make every client look and feel their absolute best.
              </p>
            </div>

            <div className={styles.storyBlock}>
              <h3>Our Values</h3>
              <ul>
                <li><strong>Excellence:</strong> Striving for the highest standards in every service.</li>
                <li><strong>Creativity:</strong> Embracing innovation and artistic expression.</li>
                <li><strong>Integrity:</strong> Operating with honesty and transparency.</li>
                <li><strong>Client-Centric:</strong> Placing our clients' needs and satisfaction first.</li>
                <li><strong>Passion:</strong> Infusing genuine enthusiasm into everything we do.</li>
              </ul>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <img
              src={salonInteriorPlaceholder} // Make sure this path is correct
              alt="Elegant interior of Total Look salon"
              className={styles.salonImage}
            />
          </div>
        </div>

        {/* Timeline of Achievements */}
        <div className={styles.timelineSection}>
            <h3 className={styles.timelineTitle}>Milestones of Excellence</h3>
            <div className={styles.roseGoldLineSmall}></div>
            <div className={styles.timeline}>
                {timelineEvents.map((event, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineYear}>{event.year}</div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <h4 className={styles.timelineEventTitle}>{event.title}</h4>
                            <p className={styles.timelineEventDesc}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default OurStorySection;