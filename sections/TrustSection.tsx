'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant, floatVariant } from '@/utils/animations';
import { TRUST_FACTORS } from '@/utils/constants';
import { Cpu, Heart, FileCheck, Users } from 'lucide-react';

const iconMap: Record<string, any> = {
  Cpu,
  Heart,
  FileCheck,
  Users,
};

export const TrustSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="trust" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-4">
            Why Choose ABHIPRAAY
          </h2>
          <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
            Excellence in medical care with a commitment to your health
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_FACTORS.map((factor) => {
            const Icon = iconMap[factor.iconName] || Cpu;
            return (
              <motion.div
                key={factor.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                className="text-center"
              >
                <motion.div
                  variants={floatVariant}
                  animate="animate"
                  className="inline-block mb-4"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold font-poppins text-neutral-900 mb-2">
                  {factor.title}
                </h3>
                <p className="text-base font-inter text-neutral-600">
                  {factor.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
