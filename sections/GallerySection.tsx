'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant } from '@/utils/animations';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/clinic-1.jpg', alt: 'Clinic Signage' },
  { src: '/images/gallery/clinic-2.jpg', alt: 'Examination Room' },
  { src: '/images/gallery/clinic-3.jpg', alt: 'Medical Office' },
  { src: '/images/gallery/clinic-4.jpg', alt: 'Clinic Entrance' },
  { src: '/images/gallery/clinic-5.jpg', alt: 'Laboratory Equipment' },
  { src: '/images/gallery/clinic-6.jpg', alt: 'Waiting Area' },
  { src: '/images/gallery/clinic-7.jpg', alt: 'Imaging Room' },
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
            Our <span className="text-blue-600">Facility</span>
          </h2>
          <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
            Take a look at our modern, well-equipped medical facility
          </p>
        </motion.div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 snap-center"
              >
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold font-poppins text-neutral-900 mb-2">
              Modern Equipment
            </h3>
            <p className="text-neutral-600 font-inter">
              Latest ultrasound and diagnostic technology for accurate results
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
