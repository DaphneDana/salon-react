import React from 'react';
import styles from './OpenPositionsSection.module.css';
import JobListingCard from './JobListingCard';

// Placeholder data for job listings
const jobListings = [
  {
    id: 1,
    title: 'Senior Hair Stylist',
    location: 'Glamour City Salon',
    type: 'Full-time',
    requirements: [
      '5+ years experience in a high-end salon',
      'Expertise in modern cutting, coloring, and styling techniques',
      'Strong consultation and communication skills',
      'Valid cosmetology license',
    ],
    responsibilities: [
      'Provide a full range of hair care services to clients',
      'Consult with clients to understand their needs and preferences',
      'Stay updated on latest industry trends and techniques',
      'Mentor junior stylists (optional)',
    ],
    salaryRange: '$60,000 - $80,000 per year (plus commission & tips)',
    applyLink: '/apply/senior-stylist', // Placeholder link
  },
  {
    id: 2,
    title: 'Makeup Artist (Part-Time)',
    location: 'Glamour City Salon',
    type: 'Part-time (Weekends)',
    requirements: [
      'Proven experience as a makeup artist (portfolio required)',
      'Knowledge of makeup application for various occasions (bridal, events, photoshoots)',
      'Excellent customer service skills',
      'Ability to work flexible hours, including weekends',
    ],
    responsibilities: [
      'Apply makeup for clients according to their needs and preferences',
      'Provide makeup consultations and product recommendations',
      'Maintain a clean and organized makeup station and kit',
      'Keep up-to-date with makeup trends and products',
    ],
    salaryRange: '$25 - $40 per hour (based on experience)',
    applyLink: '/apply/makeup-artist',
  },
  {
     id: 3,
     title: 'Salon Receptionist / Front Desk Coordinator',
     location: 'Glamour City Salon',
     type: 'Full-time',
     requirements: [
       'Previous experience in a customer service or receptionist role (salon experience a plus)',
       'Excellent organizational and multitasking abilities',
       'Proficient with booking software and basic office applications',
       'Friendly, professional, and welcoming demeanor',
     ],
     responsibilities: [
       'Greet clients and manage appointment scheduling',
       'Answer phone calls and respond to email inquiries',
       'Process payments and manage client records',
       'Maintain a tidy and welcoming reception area',
       'Assist with retail sales and inventory management',
     ],
     salaryRange: '$18 - $22 per hour',
     applyLink: '/apply/receptionist',
   },
  // Add more job listings as needed
];

const OpenPositionsSection: React.FC = () => {
  return (
    <section id="open-positions" className={`${styles.openPositionsSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Current Openings</h2>
        <p className={styles.sectionSubtitle}>
          Find your place at Total Look. We're looking for passionate individuals to join our growing team.
        </p>
        {jobListings.length > 0 ? (
          <div className={styles.jobGrid}>
            {jobListings.map((job, index) => (
              <JobListingCard
                key={job.id}
                {...job}
                cardStyle={index % 2 === 0 ? 'cream' : 'sage'} // Alternate card styles
              />
            ))}
          </div>
        ) : (
          <p className={styles.noOpeningsMessage}>
            We currently do not have any open positions. Please check back later or send us your resume for future consideration!
          </p>
        )}
      </div>
    </section>
  );
};

export default OpenPositionsSection;