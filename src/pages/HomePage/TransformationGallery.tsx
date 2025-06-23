// src/pages/HomePage/TransformationGallery.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import styles from './TransformationGallery.module.css';
import salonImage1 from '../../assets/images/salon1.jpeg';
import salonImage2 from '../../assets/images/salon2.jpeg';
import salonImage3 from '../../assets/images/salon3.jpeg';
import salonImage4 from '../../assets/images/salon4.jpeg';
import salonImage5 from '../../assets/images/salon5.jpeg';
import salonImage6 from '../../assets/images/salon6.jpeg';
import salonImage7 from '../../assets/images/salon7.jpeg';


// Create an array with the imported images
const actualTransformationImages: string[] = [
  salonImage1,
  salonImage2,
  salonImage3,
  salonImage4,
  salonImage5,
  salonImage6,
  salonImage7,

];

// Fallback images in case the actual imports fail or the array is empty
const fallbackImages = Array(8).fill(null).map((_, i) => `https://via.placeholder.com/600x800.png?text=Gallery+Image+${i + 1}`);

const TransformationGallery: React.FC = () => {
  // Use the array of actual imported images, or fallback if empty
  const imagesToDisplay = actualTransformationImages.length > 0
    ? actualTransformationImages
    : fallbackImages;

  return (
    <section className={`${styles.gallerySection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>See the Magic</h2>
        <p className={styles.sectionSubtitle}>
          Witness stunning transformations and the artistry of our stylists.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30} // Space between slides
          slidesPerView={1}  // Default to 1, adjust with breakpoints
          navigation // Enables navigation arrows
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={imagesToDisplay.length > 2} // Enable loop if there are enough slides
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="slide" // You can change to "fade" and uncomment 'EffectFade' related CSS if preferred
          // effect="fade"
          // fadeEffect={{ crossFade: true }} // Requires EffectFade module
          grabCursor={true}
          className={styles.swiperContainer}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {imagesToDisplay.slice(0, 10).map((imageSrc, index) => ( // Show up to 10 images from the array
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={imageSrc} alt={`Salon Work Example ${index + 1}`} className={styles.galleryImage} />
              <div className={styles.slideOverlay}>
                {/* Overlay content can go here if needed per slide */}
                {/* For example, a "View Details" button for a specific transformation */}
                {/* <button className={styles.viewDetailsButton}>View Details</button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* A general "View Details" or "View Full Gallery" button could go here */}
        {/* <button className={styles.viewFullGalleryButton}>Explore Full Gallery</button> */}
      </div>
    </section>
  );
};

export default TransformationGallery;