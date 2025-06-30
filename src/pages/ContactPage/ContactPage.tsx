import React from 'react';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import LocationDetailsSection from './LocationDetailSection';
import SocialMediaSection from './SocialMediaSection'; 


const ContactPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div /* className={styles.contactPageContainer} */ style={{ paddingTop: '80px' }}> {/* Adjust padding if header height varies */}
      <ContactInfoSection />
      <ContactFormSection />
      <LocationDetailsSection />
      <SocialMediaSection />
    </div>
  );
};

export default ContactPage;