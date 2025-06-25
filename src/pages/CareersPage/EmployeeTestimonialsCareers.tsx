// src/pages/CareersPage/EmployeeTestimonialsCareers.tsx
import React from 'react';
import styles from './EmployeeTestimonialsCareers.module.css';
import StaffTestimonialCard from './StaffTestimonialcard'; 
import staffAvatar1 from '../../assets/images/salon4.jpeg'; 
import staffAvatar2 from '../../assets/images/salon5.jpeg'; 
import staffAvatar3 from '../../assets/images/salon6.jpeg'; 


const staffTestimonialsData = [
  {
    id: 1,
    quote: "Working at Total Look has been an incredible journey. The supportive team and opportunities for creative growth are unparalleled. I love coming to work every day!",
    name: "Daphne Dana", 
    position: "Senior Stylist",
    avatarSrc: staffAvatar1, 
    yearsWithCompany: 4,
  },
  {
    id: 2,
    quote: "The management truly invests in our development and well-being. It's a positive and inspiring atmosphere where client satisfaction is always the top priority.",
    name: "Martha DML",
    position: "Salon Coordinator",
    avatarSrc: staffAvatar2, 
    yearsWithCompany: 2,
  },
  {
    id: 3,
    quote: "I've learned so much since joining Total Look. The commitment to using premium products and staying updated with the latest trends makes it an exciting place to build a career in beauty.",
    name: "Whitney Namukasa",
    position: "Junior Colorist",
    avatarSrc: staffAvatar3, 
    yearsWithCompany: 1,
  },

];

const EmployeeTestimonialsCareers: React.FC = () => {
  return (
    <section className={`${styles.employeeTestimonialsSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Hear From Our Team</h2>
        <p className={styles.sectionSubtitle}>
          Discover why Total Look is a fantastic place to grow your career in the beauty industry.
        </p>
        {staffTestimonialsData.length > 0 ? (
             <div className={styles.testimonialsGrid}>
             {staffTestimonialsData.map((testimonial) => (
                 <StaffTestimonialCard
                 key={testimonial.id}
                 {...testimonial} 
                 />
             ))}
             </div>
        ) : (
         <p className={styles.noTestimonialsMessage}>
             More team insights coming soon!
         </p>
        )}
      </div>
    </section>
  );
};

export default EmployeeTestimonialsCareers;