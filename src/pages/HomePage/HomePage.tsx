import React from 'react';
import HeroSection from './HeroScetion'; // Import the HeroSection component
import ServicesPreview from './ServicesPreview'; // Import the new component
// import styles from './HomePage.module.css';
import TransformationGallery  from './TransformationGallery';
import TestimonialsSection from './TestimonialsSection';
import QuickStatsSection from './QuickStatsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview /> {/* Add the ServicesPreview section */}
      <TransformationGallery /> {/* Add the TransformationGallery section */}
      <TestimonialsSection /> {/* Add the TestimonialsSection */}
      <QuickStatsSection /> {/* Add the QuickStatsSection */}
      {/* Temporary content to test scrolling, remove/replace later
      <div style={{ height: '50vh', background: 'lightgoldenrodyellow', padding: '20px' }}>
        <h2>Further Home Page Content Starts Here</h2>
        <p>This is placeholder content below the services section.</p>
      </div> */}
    </>
  );
};

export default HomePage;