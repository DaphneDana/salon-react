import React from 'react';
import styles from './LocationDetailSection.module.css';
// Placeholder for icons
// import { FaCar, FaBus, FaLandmark, FaRoute } from 'react-icons/fa';

const LocationDetailsSection: React.FC = () => {
  return (
    <section className={`${styles.locationDetailsSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Finding Us is Easy</h2>
        <p className={styles.sectionSubtitle}>
          Detailed information to help you reach Total Look salon smoothly.
        </p>

        <div className={styles.detailsGrid}>
          {/* Directions */}
          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              {/* <FaRoute className={styles.icon} /> */}
              <span className={styles.icon}>🧭</span>
            </div>
            <h3 className={styles.detailTitle}>Directions</h3>
            <p className={styles.detailText}>
              Located in the heart of Glamour City, Total Look is easily accessible from all major routes.
              If you're coming from Downtown, head east on Main Street, turn left onto Beauty Avenue,
              and you'll find us on the right after two blocks, just past the City Park.
            </p>
            <a
               href="https://maps.google.com/?daddr=123+Beauty+Lane,Glamour+City,GC+12345" // "daddr" pre-fills destination for directions
               target="_blank"
               rel="noopener noreferrer"
               className={styles.actionLink}
             >
               Get Directions on Google Maps
             </a>
          </div>

          {/* Parking Information */}
          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              {/* <FaCar className={styles.icon} /> */}
              <span className={styles.icon}>🅿️</span>
            </div>
            <h3 className={styles.detailTitle}>Parking</h3>
            <p className={styles.detailText}>
              Ample street parking is available directly in front of the salon on Beauty Lane (metered).
              Additionally, there is a public parking garage, "Glamour City Parking," located one block west,
              at the corner of Style Street and Fashion Drive, offering hourly rates.
            </p>
          </div>

          {/* Public Transport */}
          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              {/* <FaBus className={styles.icon} /> */}
              <span className={styles.icon}>🚌</span>
            </div>
            <h3 className={styles.detailTitle}>Public Transport</h3>
            <p className={styles.detailText}>
              <strong>Bus:</strong> Routes 10, 15, and 22 stop at the "Beauty Lane & Main St" intersection, just a 2-minute walk from us.
              <br />
              <strong>Subway:</strong> The Glamour City Central station (Red & Blue lines) is a 10-minute walk or a short taxi ride away.
            </p>
          </div>

          {/* Nearby Landmarks */}
          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              {/* <FaLandmark className={styles.icon} /> */}
              <span className={styles.icon}>🏛️</span>
            </div>
            <h3 className={styles.detailTitle}>Nearby Landmarks</h3>
            <ul className={styles.landmarkList}>
              <li>City Park (across the street)</li>
              <li>The Grand Theatre (2 blocks east)</li>
              <li>Glamour City Art Museum (5-minute walk)</li>
              <li>"The Chic Boutique" shopping complex (adjacent building)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetailsSection;