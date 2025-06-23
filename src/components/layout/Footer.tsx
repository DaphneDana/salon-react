import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
// Placeholder for actual SVG icons later
// import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Example using react-icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerTop}`}>
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Total Look</h4>
          <p className={styles.footerText}>
            Where Beauty Meets Perfection. Experience unparalleled salon services
            and transformative results.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.footerLink}>Home</Link></li>
            <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link to="/services" className={styles.footerLink}>Services</Link></li>
            <li><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
            <li><Link to="/careers" className={styles.footerLink}>Careers</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li><address>123 Beauty Lane, Glamour City, GC 12345</address></li>
            <li><a href="tel:+15551234567" className={styles.footerLink}>(555) 123-4567</a></li>
            <li><a href="mailto:info@totallook.com" className={styles.footerLink}>info@totallook.com</a></li>
          </ul>
          <div className={styles.operatingHours}>
             <p><strong>Mon - Fri:</strong> 9am - 7pm</p>
             <p><strong>Sat:</strong> 10am - 6pm</p>
             <p><strong>Sun:</strong> Closed</p>
          </div>
        </div>

        <div className={styles.footerColumn}>
             <h4 className={styles.columnTitle}>Follow Us</h4>
             <div className={styles.socialIcons}>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                     {/* <FaInstagram /> */} 📸
                 </a>
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                     {/* <FaFacebookF /> */} 📘
                 </a>
                 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>
                     {/* <FaTiktok /> */} 🎵
                 </a>
             </div>
             {/* Optional Newsletter Signup Teaser */}
             <h4 className={`${styles.columnTitle} ${styles.newsletterTitle}`}>Newsletter</h4>
             <p className={styles.footerTextSmall}>Stay updated with our latest offers and beauty tips.</p>
             {/* Actual form can be a modal or link to a page */}
             <Link to="/newsletter-signup" className={styles.newsletterLink}>Sign Up</Link>
        </div>

      </div>

      <div className={`${styles.container} ${styles.footerBottom}`}>
        <p>© {currentYear} Total Look. All Rights Reserved.</p>
        <ul className={styles.legalLinks}>
          <li><Link to="/privacy-policy" className={styles.footerLinkSmall}>Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" className={styles.footerLinkSmall}>Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;