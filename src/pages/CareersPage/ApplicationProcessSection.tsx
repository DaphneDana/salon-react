import React from 'react';
import styles from './ApplicationProcessSection.module.css';
// Example: import SubmitIcon from '../../assets/icons/process/submit-icon.svg?react';

const processSteps = [
  {
    id: 1,
    // icon: <SubmitIcon />,
    iconText: '1',
    title: 'Submit Your Application',
    description: 'Browse our open positions and submit your application online with your resume and cover letter. Ensure all details are accurate and highlight your relevant experience.',
  },
  {
    id: 2,
    // icon: <ScreeningIcon />,
    iconText: '2',
    title: 'Initial Screening',
    description: 'Our HR team will review your application. If your profile matches our requirements, we\'ll contact you for a brief initial discussion or to schedule an interview.',
  },
  {
    id: 3,
    // icon: <InterviewIcon />,
    iconText: '3',
    title: 'Interview(s)',
    description: 'You may have one or more interviews with our hiring managers and team members. This is a chance for us to learn more about you and for you to learn about us. Be prepared to discuss your skills, experience, and passion for the beauty industry.',
  },
  {
    id: 4,
    // icon: <OfferIcon />,
    iconText: '4',
    title: 'Offer & Onboarding',
    description: 'If you\'re selected, we\'ll extend an offer of employment. Upon acceptance, we\'ll guide you through our smooth onboarding process to welcome you to the Total Look family!',
  },
];

const ApplicationProcessSection: React.FC = () => {
  return (
    <section className={`${styles.applicationProcessSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Hiring Journey</h2>
        <p className={styles.sectionSubtitle}>
          Here’s what you can expect when you apply for a role at Total Look.
        </p>

        <div className={styles.processTimeline}>
          {processSteps.map((step, index) => (
            <div key={step.id} className={styles.processStep}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIcon}>
                  {step.iconText || '❖'} {/* Fallback if no iconText */}
                </div>
                {/* Connector line for all but the last item */}
                {index < processSteps.length - 1 && <div className={styles.stepConnector}></div>}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalInfo}>
          <h4>What to Expect During Interviews:</h4>
          <ul className={styles.infoList}>
            <li>Be prepared to showcase your portfolio (if applicable).</li>
            <li>Share specific examples of your past work and achievements.</li>
            <li>Ask questions! We want you to understand our culture and the role.</li>
            <li>Professionalism and enthusiasm are highly valued.</li>
          </ul>
          <h4>General Timeline:</h4>
          <p>
            The entire hiring process typically takes between 2 to 4 weeks, depending on the role and
            number of applicants. We strive to keep all candidates informed of their status.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;