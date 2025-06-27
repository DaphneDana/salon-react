import React from 'react';
import ServiceDetailSection from './ServiceDetailSection'; 
import styles from './ServicesPage.module.css';
import image2 from '../assets/images/image2.jpeg';
import image1 from '../assets/images/image1.jpeg';
import chat from '../assets/images/chat.png';


const servicesData = [
  { 
    id: 'hair-styling',
    title: 'Luxury Hair Styling',
    category: 'Hair Care',
    intro: 'Transform your look with our expert cutting, styling, and treatment services, tailored to your unique personality and lifestyle.',
    imageSrc:chat, // Replace with actual image
    details: [
      {
        subServiceTitle: 'Signature Haircut & Style',
        description: 'Includes a personalized consultation, relaxing shampoo, precision cut, and professional blowout. Experience a style designed just for you.',
        benefits: ['Personalized to suit face shape', 'Expert styling advice', 'Premium products used'],
        duration: '60-90 mins',
        price: 'From $75',
      },
      {
        subServiceTitle: 'Elegant Updos & Event Styling',
        description: 'Perfect for weddings, proms, or any special occasion. Our stylists create stunning, long-lasting updos and formal styles.',
        benefits: ['Sophisticated and modern looks', 'Long-lasting hold', 'Consultation included'],
        duration: '45-120 mins',
        price: 'From $90',
      },
      {
        subServiceTitle: 'Deep Conditioning Treatments',
        description: 'Revitalize and nourish your hair with our range of intensive conditioning treatments, addressing concerns like dryness, damage, or frizz.',
        benefits: ['Restores moisture and shine', 'Strengthens hair fibers', 'Customized to hair type'],
        duration: '30-45 mins (add-on)',
        price: 'From $40',
      },
    ]
  },
  {
    id: 'hair-coloring',
    title: 'Expert Hair Coloring',
    category: 'Hair Care',
    intro: 'Achieve your dream hair color with our master colorists, from subtle enhancements to bold transformations.',
    imageSrc:image2, // Replace
    details: [
     {
         subServiceTitle: 'Full Color & Root Touch-Up',
         description: 'Achieve a uniform, vibrant new color or seamlessly blend roots with your existing shade using premium, gentle formulas.',
         benefits: ['Rich, even color results', '100% gray coverage', 'Ammonia-free options available'],
         duration: '90-120 mins',
         price: 'From $100',
     },
     {
         subServiceTitle: 'Balayage & Ombre',
         description: 'Experience the art of hand-painted highlights for a natural, sun-kissed look or a dramatic gradient effect. Customized to your preference.',
         benefits: ['Low maintenance, natural grow-out', 'Customized placement', 'Adds dimension and depth'],
         duration: '180-240 mins',
         price: 'From $250',
     },
     {
         subServiceTitle: 'Highlights & Lowlights (Partial/Full)',
         description: 'Add beautiful dimension and contrast to your hair with expertly placed foils for highlights or lowlights.',
         benefits: ['Brightens and enhances natural color', 'Adds texture and movement', 'Customizable intensity'],
         duration: '120-180 mins',
         price: 'From $150 (Partial) / $200 (Full)',
     },
    ]
  },
  // ... Add detailed data for Makeup, Nail Care, Facial Treatments, Bridal Packages
  // For example:
  {
     id: 'makeup-artistry',
     title: 'Professional Makeup Artistry',
     category: 'Beauty Services',
     intro: 'Enhance your natural beauty or create a show-stopping look with our skilled makeup artists.',
     imageSrc: image1,
     details: [
         {
             subServiceTitle: 'Special Occasion Makeup',
             description: 'Flawless makeup application for weddings, proms, galas, or any event where you want to look your best. Includes optional lash application.',
             benefits: ['Long-lasting, photo-ready finish', 'Personalized to your features and outfit', 'High-quality, professional products'],
             duration: '60-90 mins',
             price: 'From $120',
         },
         {
             subServiceTitle: 'Makeup Lesson & Consultation',
             description: 'Learn pro tips and techniques tailored to your face shape, skin tone, and desired looks. Perfect for elevating your everyday makeup routine.',
             benefits: ['Personalized instruction', 'Product recommendations', 'Hands-on practice'],
             duration: '90-120 mins',
             price: 'From $150',
         },
     ]
  },
  // ... and so on for the other 3 main services.
];


const ServicesPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.servicesPage} style={{ paddingTop: '80px' }}> {/* Adjust padding */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <h1 className={styles.pageTitle}>Our Exquisite Services</h1>
          <p className={styles.pageSubtitle}>
            Indulge in a world of beauty and transformation. Our expert team is dedicated to providing
            you with personalized treatments that enhance your natural radiance and style.
          </p>
        </div>
      </header>

      <main className={styles.mainContent}>
        {servicesData.map((serviceCategory, index) => (
          <ServiceDetailSection
            key={serviceCategory.id}
            title={serviceCategory.title}
            intro={serviceCategory.intro}
            imageSrc={serviceCategory.imageSrc}
            details={serviceCategory.details}
            // Alternate layout for visual variety
            layout={index % 2 === 0 ? 'imageLeft' : 'imageRight'}
          />
        ))}
      </main>
    </div>
  );
};

export default ServicesPage;