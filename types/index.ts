/**
 * Core TypeScript type definitions for ABHIPRAAY Medical Website
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  order: number;
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  phone: string;
  email: string;
  whatsapp: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface HeroImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export interface CTAButton {
  label: string;
  action: 'call' | 'whatsapp' | 'email';
  href: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
}
