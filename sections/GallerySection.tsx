'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant } from '@/utils/animations';
import { ImageGallery } from '@/components/ImageGallery';

const galleryImages = [
  '/images/gallery/clinic-1.jpg',
  '/images/gallery/clinic-2.jpg',
  '/images/gallery/clinic-3.jpg',
  '/images/gallery/clinic-4.jpg',
  '/images/gallery/clinic-5.jpg',
  '/images/gallery/clinic-6.jpg',
  '/images/gallery/clinic-7.jpg',
];

export const GallerySection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="gallery" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-4">
            Our Facility
          </h2>
          <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art medical facility
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.2 }}
        >
          <ImageGallery images={galleryImages} autoPlayInterval={4000} />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
            <h3 className="text-xl font-semibold font-poppins text-neutral-900 mb-2">
              Modern Equipment
            </h3>
            <p className="text-neutral-600 font-inter">
              Latest ultrasound and diagnostic technology for accurate results
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold font-poppins text-neutral-900 mb-2">
              Comfortable Environment
            </h3>
            <p className="text-neutral-600 font-inter">
              Clean, spacious, and welcoming facility designed for patient comfort
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-semibold font-poppins text-neutral-900 mb-2">
              Expert Team
            </h3>
            <p className="text-neutral-600 font-inter">
              Experienced radiologists and genetic counselors at your service
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
