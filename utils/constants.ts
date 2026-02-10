/**
 * Application constants and data models
 */

import { Service, TrustFactor, ContactInfo, HeroImage, NavMenuItem } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'ultrasound',
    title: 'Advanced Ultrasound Imaging',
    description: 'State-of-the-art ultrasound technology for precise diagnostic imaging',
    iconName: 'Activity',
    order: 1,
  },
  {
    id: 'genetic',
    title: 'Genetic Screening & Consultation',
    description: 'Comprehensive genetic testing and expert consultation services',
    iconName: 'Dna',
    order: 2,
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy & Anomaly Scans',
    description: 'Detailed pregnancy monitoring and anomaly detection',
    iconName: 'Baby',
    order: 3,
  },
  {
    id: 'interventional',
    title: 'Interventional Procedures',
    description: 'Minimally invasive ultrasound-guided procedures',
    iconName: 'Stethoscope',
    order: 4,
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Imaging',
    description: 'Comprehensive diagnostic imaging services',
    iconName: 'Scan',
    order: 5,
  },
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: 'technology',
    title: 'Advanced Technology',
    description: 'Latest medical equipment and imaging technology',
    iconName: 'Cpu',
  },
  {
    id: 'care',
    title: 'Compassionate Patient Care',
    description: 'Patient-focused approach with personalized attention',
    iconName: 'Heart',
  },
  {
    id: 'reporting',
    title: 'Accurate Reporting',
    description: 'Precise diagnostic reports with expert analysis',
    iconName: 'FileCheck',
  },
  {
    id: 'specialists',
    title: 'Experienced Specialists',
    description: 'Highly qualified radiology and genetics team',
    iconName: 'Users',
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: {
    line1: 'Shop No.35, Ground Floor, B Wing',
    line2: 'Pranik Chambers, Saki Naka',
    city: 'Andheri East, Mumbai',
    state: 'Maharashtra',
    pincode: '400072',
  },
  phone: '+919653326172',
  email: 'drmoves@gmail.com',
  whatsapp: '919653326172',
  coordinates: {
    lat: 19.1076,
    lng: 72.8856,
  },
};

export const HERO_IMAGES: HeroImage[] = [
  {
    id: 'hero-1',
    url: '/images/hero/clinic-1.jpg',
    alt: 'ABHIPRAAY medical facility exterior',
    order: 1,
  },
  {
    id: 'hero-2',
    url: '/images/hero/clinic-2.jpg',
    alt: 'Advanced ultrasound equipment',
    order: 2,
  },
  {
    id: 'hero-3',
    url: '/images/hero/clinic-3.jpg',
    alt: 'Professional medical consultation',
    order: 3,
  },
];

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#trust' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_HEADLINE = 'Advanced Ultrasound & Genetic Care with Precision and Trust';
export const HERO_SUBTEXT = 'Premium diagnostic care with advanced ultrasound-guided interventions';

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;
export const EMAIL_URL = `mailto:${CONTACT_INFO.email}`;
export const PHONE_URL = `tel:${CONTACT_INFO.phone}`;
