'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { HERO_HEADLINE, HERO_SUBTEXT, WHATSAPP_URL, EMAIL_URL, PHONE_URL } from '@/utils/constants';
import { fadeInVariant } from '@/utils/animations';
import { Phone, MessageCircle, Mail, Award, Clock, Shield } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32 bg-gradient-to-br from-medical-lightBlue via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
        >
          <Award className="w-5 h-5 text-primary-600" />
          <span className="text-sm font-semibold text-neutral-700">
            Premier Diagnostic Care Centre
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-neutral-900 mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            ABHIPRAAY
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {HERO_HEADLINE}
          </span>
        </motion.h1>
        
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl font-inter text-neutral-600 mb-8 max-w-3xl mx-auto"
        >
          {HERO_SUBTEXT}
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Shield className="w-5 h-5 text-primary-600" />
            <span className="text-sm md:text-base font-medium text-neutral-700">
              Advanced Technology
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-sm md:text-base font-medium text-neutral-700">
              Expert Team
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-primary-600" />
            <span className="text-sm md:text-base font-medium text-neutral-700">
              Quick Results
            </span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href={PHONE_URL} variant="primary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
            <Phone className="inline-block mr-2" size={20} />
            Call Now
          </Button>
          <Button href={WHATSAPP_URL} variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
            <MessageCircle className="inline-block mr-2" size={20} />
            WhatsApp
          </Button>
          <Button href={EMAIL_URL} variant="outline" size="lg" className="w-full sm:w-auto">
            <Mail className="inline-block mr-2" size={20} />
            Email Us
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
