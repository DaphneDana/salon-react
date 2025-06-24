import React from 'react';
// We will import section components here as we create them
import OurStorySection from './OurStorySection';
import MeetTheTeamSection from './MeetTheTeamSection';
import SalonFeaturesSection from './SalonFeaturesSection';
import AwardsCertsSection from './AwardCertsSection';

// Optional: Page-specific global styles or layout adjustments
// import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  // Ensure header doesn't overlap content.
  // This can also be handled globally or in App.tsx if all pages need it.
  React.useEffect(() => {
     window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div /* className={styles.aboutPageContainer} */ style={{ paddingTop: '80px' }}> {/* Adjust padding if header height varies */}
      <OurStorySection />
      <MeetTheTeamSection />
      <SalonFeaturesSection />
      <AwardsCertsSection />
    </div>
  );
};

export default AboutPage;