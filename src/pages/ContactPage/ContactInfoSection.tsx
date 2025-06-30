import React from 'react';
import styles from './ContactInfoSection.module.css';
// You can uncomment these and use them if you install react-icons
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => {
  return (
    <section className={`${styles.contactInfoSection} section-padding`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            We're here to answer your questions and help you book your transformation.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.infoDetails}>
            <div className={styles.infoItem}>
              {/* <FaMapMarkerAlt className={styles.icon} /> */}
              <span className={styles.icon}>📍</span>
              <div>
                <h3 className={styles.itemTitle}>Our Address</h3>
                <address>123 Beauty Lane, Glamour City, GC 12345</address>
                <a
                  href="https://maps.google.com/?q=123+Beauty+Lane,Glamour+City,GC+12345" // Replace with actual address
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  View on Map
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              {/* <FaPhone className={styles.icon} /> */}
              <span className={styles.icon}>📞</span>
              <div>
                <h3 className={styles.itemTitle}>Call Us</h3>
                <a href="tel:+15551234567" className={styles.contactLink}>(555) 123-4567</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              {/* <FaEnvelope className={styles.icon} /> */}
              <span className={styles.icon}>✉️</span>
              <div>
                <h3 className={styles.itemTitle}>Email Us</h3>
                <a href="mailto:info@totallook.com" className={styles.contactLink}>info@totallook.com</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              {/* <FaClock className={styles.icon} /> */}
              <span className={styles.icon}>🕒</span>
              <div>
                <h3 className={styles.itemTitle}>Operating Hours</h3>
                <ul className={styles.hoursList}>
                  <li><span>Mon - Fri:</span> 9:00 AM - 7:00 PM</li>
                  <li><span>Saturday:</span> 10:00 AM - 6:00 PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.mapPlaceholder}>
            {/* Replace this with your actual Google Maps Iframe or a map component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25986792271961!3d40.69767006363094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621876793867!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Total Look Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;