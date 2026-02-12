'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant } from '@/utils/animations';
import { Target, Users, Award, Heart } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { BEFORE_AFTER_IMAGES } from '@/utils/constants';

export const AboutSection = () => {
  const { ref, controls } = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Providing exceptional diagnostic care with precision and compassion',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced radiologists and genetic counselors',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Highest standard of diagnostic imaging services',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Personalized attention for every patient',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #4A90E2 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full mx-auto" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-6">
            About ABHIPRAAY
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-neutral-700 font-inter">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="leading-relaxed"
            >
              ABHIPRAAY – Centre for Advanced Ultrasound Guided Interventions and Genetic Clinic is a premier medical facility dedicated to providing exceptional diagnostic care with precision and compassion.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="leading-relaxed"
            >
              Our state-of-the-art facility specializes in <strong className="text-primary-600">advanced ultrasound-guided procedures</strong> and <strong className="text-primary-600">comprehensive genetic diagnostic care</strong>. We combine cutting-edge technology with expert medical knowledge to deliver accurate, reliable results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="leading-relaxed"
            >
              With a <strong className="text-primary-600">patient-focused approach</strong>, our experienced radiology and genetics team ensures personalized attention and care for every patient. We utilize the latest <strong className="text-primary-600">advanced medical equipment</strong> to provide the highest standard of diagnostic imaging services.
            </motion.p>
          </div>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-3">
              See the Difference
            </h3>
            <p className="text-neutral-600 font-inter">
              Experience the quality of our diagnostic imaging
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <BeforeAfterSlider
              beforeImage={BEFORE_AFTER_IMAGES.before}
              afterImage={BEFORE_AFTER_IMAGES.after}
              beforeLabel="Before"
              afterLabel="After"
            />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 font-inter">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
