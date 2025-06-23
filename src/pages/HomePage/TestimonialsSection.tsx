import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'; // EffectCoverflow for a nice look

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './TestimonialsSection.module.css';
import TestimonialCard from './TestimonialCard';

// Placeholder avatar imports (adjust paths and names)
// Using import.meta.glob similar to the gallery
 let avatarImages: Record<string, string> = {};
 try {
     const modules = import.meta.glob('/src/assets/images/avatars/avatar*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
     avatarImages = modules; // This will give paths like /src/assets/images/avatars/avatar1.png as keys
 } catch (error) {
     console.error("Error loading avatar images:", error);
 }

 const getAvatar = (fileName: string): string => {
     const path = `/src/assets/images/avatars/${fileName}`;
     return avatarImages[path] || 'https://via.placeholder.com/80x80.png?text=User';
 };


const testimonialsData = [
  {
    id: 1,
    quote: "Total Look completely transformed my hair! I've never felt more confident. The stylists are true artists.",
    author: "Sarah L.",
    role: "Regular Client",
    avatarSrc: getAvatar('avatar1.png'), // Or direct path if not using getAvatar
    rating: 5,
  },
  {
    id: 2,
    quote: "The bridal package was a dream. They took care of everything and made me feel like a princess on my wedding day. Exceptional service!",
    author: "Jessica M.",
    role: "Bride",
    avatarSrc: getAvatar('avatar2.jpg'),
    rating: 5,
  },
  {
    id: 3,
    quote: "I always come here for my manicures and pedicures. The attention to detail is amazing, and the atmosphere is so relaxing.",
    author: "Emily R.",
    role: "Nail Care Enthusiast",
    avatarSrc: getAvatar('avatar3.png'),
    rating: 4.5,
  },
  {
    id: 4,
    quote: "My skin has never looked better after their facial treatments. Highly recommend their skincare experts!",
    author: "Olivia B.",
    role: "Skincare Client",
    avatarSrc: getAvatar('avatar4.jpeg'),
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className={`${styles.testimonialsSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Words From Our Clients</h2>
        <p className={styles.sectionSubtitle}>
          Hear what our valued clients have to say about their Total Look experience.
        </p>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'} // 'auto' works well with coverflow
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 40,      // Slide rotate in degrees
            stretch: 0,      // Stretch space between slides (in px)
            depth: 100,      // Depth offset in px (slides translate in Z axis)
            modifier: 1,     // Effect multipler
            slideShadows: true // Enables slides shadows
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className={styles.swiperContainer}
          breakpoints={{
             320: { // Mobile
                 slidesPerView: 1,
                 spaceBetween: 20,
                 coverflowEffect: {
                     rotate: 0,
                     stretch: 0,
                     depth: 100,
                     modifier: 2.5,
                     slideShadows: false,
                 },
             },
             768: { // Tablet
                 slidesPerView: 2,
                 spaceBetween: 30,
             },
             1024: { // Desktop
                 slidesPerView: 'auto', // Or 3, but auto is good for coverflow
                 // Keep coverflowEffect from base for larger screens or customize
             }
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatarSrc={testimonial.avatarSrc}
                rating={testimonial.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;