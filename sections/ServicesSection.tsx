'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant } from '@/utils/animations';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/utils/constants';

export const ServicesSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 lg:py-32 bg-medical-lightBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
            Comprehensive diagnostic and medical services with advanced technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
