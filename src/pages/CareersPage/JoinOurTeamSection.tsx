
import React from 'react';
import styles from './JoinOurTeamSection.module.css';


const benefits = [
    "Competitive Salary & Benefits",
    "Continuous Learning & Development",
    "Creative & Inspiring Work Environment",
    "Opportunities for Growth & Advancement",
    "Supportive & Passionate Team",
    "Employee Discounts on Services & Products"
];

const JoinOurTeamSection: React.FC = () => {
  return (
    <section
      className={`${styles.joinTeamSection} section-padding`}
      // style={careersHeroBg ? { backgroundImage: `url(${careersHeroBg})` } : {}}
    >
      <div className={styles.gradientOverlay}></div> {/* Gradient overlay */}
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Elevate Your Career at Total Look</h1>
        <p className={styles.sectionSubtitle}>
          Become part of a passionate team dedicated to artistry, innovation, and making every client feel extraordinary.
          We're looking for talented individuals who share our vision for excellence in beauty.
        </p>

        <div className={styles.contentGrid}>
            <div className={styles.contentBlock}>
                <h3 className={styles.blockTitle}>Why Join Total Look?</h3>
                <p>
                    At Total Look, we believe our team is our greatest asset. We foster a culture of creativity,
                    collaboration, and continuous growth. Here, you're not just an employee; you're a valued member
                    of a family that supports your aspirations and celebrates your successes.
                </p>
            </div>

            <div className={styles.contentBlock}>
                <h3 className={styles.blockTitle}>Our Culture</h3>
                <ul className={styles.cultureList}>
                    <li>✨ Passion for Beauty & Excellence</li>
                    <li>🤝 Collaborative & Supportive Teamwork</li>
                    <li>💡 Innovation & Continuous Learning</li>
                    <li>💖 Client-Focused & Results-Driven</li>
                    <li>😊 Positive & Uplifting Atmosphere</li>
                </ul>
            </div>
        </div>


        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>Perks of Being on Our Team</h3>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✔️</span> {/* Simple checkmark */}
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        {/* Optional: A call to action button to scroll to open positions */}
        {/* <button className={styles.ctaButton} onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}>
            View Open Positions
        </button> */}
      </div>
    </section>
  );
};

export default JoinOurTeamSection;
