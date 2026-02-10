'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/hooks';
import { fadeInVariant } from '@/utils/animations';
import { Button } from '@/components/Button';
import { CONTACT_INFO, WHATSAPP_URL, EMAIL_URL, PHONE_URL } from '@/utils/constants';
import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from 'lucide-react';

export const ContactSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-medical-lightBlue to-blue-50 relative overflow-hidden">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 font-inter max-w-2xl mx-auto">
            Visit us or reach out for appointments and inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariant}
            className="bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold font-poppins text-neutral-900 mb-8 flex items-center gap-3">
              <Navigation className="w-7 h-7 text-primary-600" />
              Visit Our Clinic
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-neutral-900 mb-1 text-lg">Address</p>
                  <p className="text-neutral-600 leading-relaxed">
                    {CONTACT_INFO.address.line1}<br />
                    {CONTACT_INFO.address.line2}<br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}<br />
                    {CONTACT_INFO.address.pincode}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-neutral-900 mb-1 text-lg">Phone</p>
                  <a href={PHONE_URL} className="text-primary-600 hover:text-primary-700 text-lg font-medium">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-neutral-900 mb-1 text-lg">Email</p>
                  <a href={EMAIL_URL} className="text-primary-600 hover:text-primary-700 text-lg font-medium break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-neutral-900 mb-1 text-lg">Working Hours</p>
                  <p className="text-neutral-600">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-4 font-medium">Quick Contact</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={PHONE_URL} variant="primary" className="flex-1 shadow-lg hover:shadow-xl">
                  <Phone className="inline-block mr-2" size={18} />
                  Call Now
                </Button>
                <Button href={WHATSAPP_URL} variant="secondary" className="flex-1 shadow-lg hover:shadow-xl">
                  <MessageCircle className="inline-block mr-2" size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInVariant}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-2xl overflow-hidden h-[500px] lg:h-full min-h-[500px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8!2d${CONTACT_INFO.coordinates.lng}!3d${CONTACT_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzI3LjQiTiA3MsKwNTMnMDguMiJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABHIPRAAY Location"
              className="grayscale-0 hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
