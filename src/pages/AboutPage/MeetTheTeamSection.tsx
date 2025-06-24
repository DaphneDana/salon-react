import React from 'react';
import styles from './MeetTheTeam.module.css';
import TeamMemberCard from './TeamMemberCard';
import salonInteriorPlaceholder from '../../assets/images/salon-interior-placeholder.jpeg';
import image1 from '../../assets/images/image1.jpeg'; 
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg';

// Placeholder data - In a real app, this might come from an API or CMS
// Import images (ensure paths are correct)
// Using import.meta.glob for convenience
//  let teamImages: Record<string, string> = {};
//  try {
//      const modules = import.meta.glob('/src/assets/images/team/member*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
//      teamImages = modules;
//  } catch (error) {
//      console.error("Error loading team images:", error);
//  }

//  const getTeamImage = (fileName: string): string => {
//      const path = `/src/assets/images/${fileName}`;
//      return teamImages[path] || 'https://via.placeholder.com/150x150.png?text=Member';
//  };


const teamMembersData = [
  {
    id: 1,
    name: 'Nansubuga Betty',
    specialty: 'Lead Hair Stylist',
    bio: 'With over 10 years of experience, Betty specializes in creative cuts and transformative color.',
    fullBio: 'Betty is a visionary stylist known for an impeccable eye for detail and a passion for pushing creative boundaries. Trained at the Vidal Sassoon Academy, Alex brings a wealth of knowledge in modern cutting techniques and avant-garde styling.',
    imageSrc: image1,
  },
  {
    id: 2,
    name: 'Nakamyuka Daphne',
    specialty: 'Master Colorist',
    bio: 'Daphne is a wizard with color, creating stunning balayage, vibrant hues, and perfect blends.',
    fullBio: 'Daphne believes that hair color is an art form. She continuously educates herself on the latest trends and techniques to provide clients with personalized, breathtaking results that enhance their natural beauty.',
    imageSrc: image2,
  },
  {
    id: 3,
    name: 'Namyuimbwa Martha',
    specialty: 'Barber & Men\'s Grooming',
    bio: 'Martha offers precision cuts and classic barbering services with a modern touch.',
    fullBio: 'A specialist in men\'s grooming, David provides a bespoke experience, from sharp haircuts to luxurious hot towel shaves. His dedication to craftsmanship ensures every client leaves looking and feeling their best.',
    imageSrc: image3,
  },
  {
    id: 4,
    name: 'Namukasa Whitney',
    specialty: 'Makeup Artist & Bridal Expert',
    bio: 'Whitney crafts flawless makeup looks for all occasions, specializing in bridal beauty.',
    fullBio: 'Whitney\'s artistic touch and understanding of facial aesthetics allow her to create stunning makeup looks that range from natural to glamorous. She is particularly sought after for her ability to make brides radiate confidence.',
    imageSrc: image4,
  },
  {
     id: 5,
     name: 'Nalwanga Olivia',
     specialty: 'Nail Art Specialist',
     bio: 'Olivia turns nails into miniature masterpieces with her intricate designs and techniques.',
     fullBio: 'Olivia is a passionate nail technician with a flair for creativity. From elegant classics to bold, artistic statements, she uses high-quality products to ensure beautiful, long-lasting results for every client.',
     imageSrc: image5,
   },
   {
     id: 6,
     name: 'Namuyimbwa Martha',
     specialty: 'Esthetician & Skincare Guru',
     bio: 'Martha provides rejuvenating facials and personalized skincare advice for a healthy glow.',
     fullBio: 'With a deep understanding of skin health, Martha offers a range of advanced facial treatments tailored to individual needs. Sam is committed to helping clients achieve radiant, youthful skin through expert care and education.',
     imageSrc: salonInteriorPlaceholder, 
   }
 
];

const MeetTheTeamSection: React.FC = () => {
  return (
    <section className={`${styles.meetTheTeamSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Meet Our Creative Stylists</h2>
        <p className={styles.sectionSubtitle}>
          The talented professionals dedicated to making you look and feel extraordinary.
        </p>
        <div className={styles.teamGrid}>
          {teamMembersData.map((member) => (
            <TeamMemberCard
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              specialty={member.specialty}
              bio={member.bio}
              fullBio={member.fullBio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;