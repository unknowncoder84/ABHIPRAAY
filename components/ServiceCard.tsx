'use client';

import { motion } from 'framer-motion';
import { slideUpVariant, glowHoverVariant } from '@/utils/animations';
import { Activity, Dna, Baby, Stethoscope, Scan } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const iconMap: Record<string, any> = {
  Activity,
  Dna,
  Baby,
  Stethoscope,
  Scan,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName, index }) => {
  const Icon = iconMap[iconName] || Activity;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideUpVariant}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group bg-white/90 backdrop-blur-lg border border-primary-100 shadow-lg hover:shadow-2xl rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          variants={glowHoverVariant}
          className="mb-4 inline-block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700" />
          </div>
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-semibold font-poppins text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-base font-inter text-neutral-600 leading-relaxed">
          {description}
        </p>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};
