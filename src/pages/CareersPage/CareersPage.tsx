import React from 'react';
import JoinOurTeamSection from './JoinOurTeamSection';
import OpenPositionsSection from './OpenPositionsSection';
import ApplicationProcessSection from './ApplicationProcessSection';
import EmployeeTestimonialsCareers from './EmployeeTestimonialsCareers'



const CareersPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div /* className={styles.careersPageContainer} */ style={{ paddingTop: '80px' }}> {/* Adjust padding */}
      <JoinOurTeamSection />
      <OpenPositionsSection />
      <ApplicationProcessSection />
      <EmployeeTestimonialsCareers />
    </div>
  );
};

export default CareersPage;