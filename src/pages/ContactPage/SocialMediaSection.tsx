import React from 'react';
import styles from './SocialMediaSection.module.css';
import galleryStyles from './TransformationGallery.module.css';
import salon1 from '../../assets/images/salon1.jpeg';
import salon2 from '../../assets/images/salon2.jpeg';
import salon3 from '../../assets/images/salon3.jpeg';
import salon4 from '../../assets/images/salon4.jpeg';


// Placeholder for social post images
const placeholderPosts = [
  { id: 1, src: salon1, alt: 'Recent salon work or event' },
  { id: 2, src: salon2, alt: 'Client testimonial graphic' },
  { id: 3, src: salon3, alt: 'Behind the scenes at Total Look' },
  { id: 4, src: salon4, alt: 'Special offer announcement' },
  
];

const SocialMediaSection: React.FC = () => {
  return (
    <section className={`${styles.socialMediaSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Connect With Us</h2>
        <p className={styles.sectionSubtitle}>
          Follow our journey, see our latest work, and stay updated on social media!
        </p>

        <div className={styles.socialIconsWrapper}>
          <a
            href="https://instagram.com/totallooksalon" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
            aria-label="Follow us on Instagram"
          >
            {/* <FaInstagram /> */} 📸
          </a>
          <a
            href="https://facebook.com/totallooksalon" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
            aria-label="Like us on Facebook"
          >
            {/* <FaFacebookF /> */} 📘
          </a>
          <a
            href="https://tiktok.com/@totallooksalon" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
            aria-label="Follow us on TikTok"
          >
            {/* <FaTiktok /> */} 🎵
          </a>
        </div>

        <h3 className={styles.feedPreviewTitle}>Our Latest Posts</h3>
        <div className={styles.socialFeedGrid}>
          {placeholderPosts.map(post => (
            <a
              key={post.id}
              href="#" // Replace with actual link to the social post if possible
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPostItem}
            >
              <img src={post.src} alt={post.alt} className={styles.socialPostImage} />
              <div className={styles.postOverlay}>
                <span>View Post</span> {/* Or an icon */}
              </div>
            </a>
          ))}
        </div>
        {/* Optionally, a button to view more on a specific platform */}
        {/* <a href="https://instagram.com/totallooksalon" target="_blank" rel="noopener noreferrer" className={styles.viewMoreButton}>
          View More on Instagram
        </a> */}
      </div>
    </section>
  );
};

export default SocialMediaSection;