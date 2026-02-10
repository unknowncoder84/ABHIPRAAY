'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { fadeInVariant } from '@/utils/animations';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/utils/constants';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-medical-lightBlue">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
              Comprehensive diagnostic and medical services with advanced technology and expert care
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
                serviceId={service.id}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
