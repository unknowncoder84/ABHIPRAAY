/**
 * Unit tests for TypeScript data models and constants
 * Task 2.4: Create TypeScript interfaces for data models
 * Requirements: 4.1, 5.1, 7.1, 12.2
 */

import {
  Service,
  TrustFactor,
  ContactInfo,
  HeroImage,
  CTAButton,
  NavMenuItem,
} from '@/types';
import {
  SERVICES,
  TRUST_FACTORS,
  CONTACT_INFO,
  HERO_IMAGES,
  NAV_MENU_ITEMS,
  HERO_HEADLINE,
  HERO_SUBTEXT,
  WHATSAPP_URL,
  EMAIL_URL,
  PHONE_URL,
} from '@/utils/constants';

describe('Data Models - TypeScript Interfaces', () => {
  describe('Service Interface', () => {
    it('should have correct structure for Service type', () => {
      const service: Service = {
        id: 'test',
        title: 'Test Service',
        description: 'Test description',
        iconName: 'TestIcon',
        order: 1,
      };

      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('title');
      expect(service).toHaveProperty('description');
      expect(service).toHaveProperty('iconName');
      expect(service).toHaveProperty('order');
    });

    it('should validate SERVICES constant has 5 services (Requirement 4.1)', () => {
      expect(SERVICES).toHaveLength(5);
    });

    it('should have all required service categories (Requirement 4.1)', () => {
      const serviceIds = SERVICES.map((s) => s.id);
      expect(serviceIds).toContain('ultrasound');
      expect(serviceIds).toContain('genetic');
      expect(serviceIds).toContain('pregnancy');
      expect(serviceIds).toContain('interventional');
      expect(serviceIds).toContain('diagnostic');
    });

    it('should have correct service titles', () => {
      const serviceTitles = SERVICES.map((s) => s.title);
      expect(serviceTitles).toContain('Advanced Ultrasound Imaging');
      expect(serviceTitles).toContain('Genetic Screening & Consultation');
      expect(serviceTitles).toContain('Pregnancy & Anomaly Scans');
      expect(serviceTitles).toContain('Interventional Procedures');
      expect(serviceTitles).toContain('Diagnostic Imaging');
    });

    it('should have valid icon names for all services', () => {
      SERVICES.forEach((service) => {
        expect(service.iconName).toBeTruthy();
        expect(typeof service.iconName).toBe('string');
      });
    });

    it('should have sequential order numbers', () => {
      const orders = SERVICES.map((s) => s.order).sort((a, b) => a - b);
      expect(orders).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('TrustFactor Interface', () => {
    it('should have correct structure for TrustFactor type', () => {
      const trustFactor: TrustFactor = {
        id: 'test',
        title: 'Test Factor',
        description: 'Test description',
        iconName: 'TestIcon',
      };

      expect(trustFactor).toHaveProperty('id');
      expect(trustFactor).toHaveProperty('title');
      expect(trustFactor).toHaveProperty('description');
      expect(trustFactor).toHaveProperty('iconName');
    });

    it('should validate TRUST_FACTORS constant has 4 factors (Requirement 5.1)', () => {
      expect(TRUST_FACTORS).toHaveLength(4);
    });

    it('should have all required trust factors (Requirement 5.1)', () => {
      const factorIds = TRUST_FACTORS.map((f) => f.id);
      expect(factorIds).toContain('technology');
      expect(factorIds).toContain('care');
      expect(factorIds).toContain('reporting');
      expect(factorIds).toContain('specialists');
    });

    it('should have correct trust factor titles', () => {
      const factorTitles = TRUST_FACTORS.map((f) => f.title);
      expect(factorTitles).toContain('Advanced Technology');
      expect(factorTitles).toContain('Compassionate Patient Care');
      expect(factorTitles).toContain('Accurate Reporting');
      expect(factorTitles).toContain('Experienced Specialists');
    });

    it('should have valid icon names for all trust factors', () => {
      TRUST_FACTORS.forEach((factor) => {
        expect(factor.iconName).toBeTruthy();
        expect(typeof factor.iconName).toBe('string');
      });
    });
  });

  describe('ContactInfo Interface', () => {
    it('should have correct structure for ContactInfo type', () => {
      const contactInfo: ContactInfo = {
        address: {
          line1: 'Test Line 1',
          line2: 'Test Line 2',
          city: 'Test City',
          state: 'Test State',
          pincode: '123456',
        },
        phone: '+911234567890',
        email: 'test@example.com',
        whatsapp: '911234567890',
        coordinates: {
          lat: 0,
          lng: 0,
        },
      };

      expect(contactInfo).toHaveProperty('address');
      expect(contactInfo.address).toHaveProperty('line1');
      expect(contactInfo.address).toHaveProperty('line2');
      expect(contactInfo.address).toHaveProperty('city');
      expect(contactInfo.address).toHaveProperty('state');
      expect(contactInfo.address).toHaveProperty('pincode');
      expect(contactInfo).toHaveProperty('phone');
      expect(contactInfo).toHaveProperty('email');
      expect(contactInfo).toHaveProperty('whatsapp');
      expect(contactInfo).toHaveProperty('coordinates');
      expect(contactInfo.coordinates).toHaveProperty('lat');
      expect(contactInfo.coordinates).toHaveProperty('lng');
    });

    it('should have correct clinic address (Requirement 7.1)', () => {
      expect(CONTACT_INFO.address.line1).toBe('Shop No.35, Ground Floor, B Wing');
      expect(CONTACT_INFO.address.line2).toBe('Pranik Chambers, Saki Naka');
      expect(CONTACT_INFO.address.city).toBe('Andheri East, Mumbai');
      expect(CONTACT_INFO.address.state).toBe('Maharashtra');
      expect(CONTACT_INFO.address.pincode).toBe('400072');
    });

    it('should have correct contact details (Requirement 12.2)', () => {
      expect(CONTACT_INFO.phone).toBe('+919653326172');
      expect(CONTACT_INFO.email).toBe('drmoves@gmail.com');
      expect(CONTACT_INFO.whatsapp).toBe('919653326172');
    });

    it('should have valid coordinates', () => {
      expect(typeof CONTACT_INFO.coordinates.lat).toBe('number');
      expect(typeof CONTACT_INFO.coordinates.lng).toBe('number');
      expect(CONTACT_INFO.coordinates.lat).toBeGreaterThan(0);
      expect(CONTACT_INFO.coordinates.lng).toBeGreaterThan(0);
    });
  });

  describe('HeroImage Interface', () => {
    it('should have correct structure for HeroImage type', () => {
      const heroImage: HeroImage = {
        id: 'test',
        url: '/test.jpg',
        alt: 'Test image',
        order: 1,
      };

      expect(heroImage).toHaveProperty('id');
      expect(heroImage).toHaveProperty('url');
      expect(heroImage).toHaveProperty('alt');
      expect(heroImage).toHaveProperty('order');
    });

    it('should have hero images defined (Requirement 12.1)', () => {
      expect(HERO_IMAGES.length).toBeGreaterThan(0);
    });

    it('should have correct image paths', () => {
      HERO_IMAGES.forEach((image) => {
        expect(image.url).toMatch(/^\/images\/hero\//);
        expect(image.url).toMatch(/\.(jpg|jpeg|png|webp)$/);
      });
    });

    it('should have descriptive alt text for all images', () => {
      HERO_IMAGES.forEach((image) => {
        expect(image.alt).toBeTruthy();
        expect(image.alt.length).toBeGreaterThan(10);
      });
    });

    it('should have sequential order numbers', () => {
      const orders = HERO_IMAGES.map((img) => img.order).sort((a, b) => a - b);
      const expectedOrders = Array.from({ length: HERO_IMAGES.length }, (_, i) => i + 1);
      expect(orders).toEqual(expectedOrders);
    });
  });

  describe('Additional Interfaces', () => {
    it('should have correct structure for CTAButton type', () => {
      const button: CTAButton = {
        label: 'Test Button',
        action: 'call',
        href: 'tel:+911234567890',
      };

      expect(button).toHaveProperty('label');
      expect(button).toHaveProperty('action');
      expect(button).toHaveProperty('href');
    });

    it('should validate CTAButton action types', () => {
      const validActions: Array<CTAButton['action']> = ['call', 'whatsapp', 'email'];
      validActions.forEach((action) => {
        const button: CTAButton = {
          label: 'Test',
          action,
          href: 'test',
        };
        expect(['call', 'whatsapp', 'email']).toContain(button.action);
      });
    });

    it('should have correct structure for NavMenuItem type', () => {
      const menuItem: NavMenuItem = {
        label: 'Test',
        href: '#test',
      };

      expect(menuItem).toHaveProperty('label');
      expect(menuItem).toHaveProperty('href');
    });

    it('should have navigation menu items defined', () => {
      expect(NAV_MENU_ITEMS.length).toBeGreaterThan(0);
    });
  });

  describe('Application Constants', () => {
    it('should have correct hero headline (Requirement 1.1)', () => {
      expect(HERO_HEADLINE).toBe(
        'Advanced Ultrasound & Genetic Care with Precision and Trust'
      );
    });

    it('should have correct hero subtext (Requirement 1.2)', () => {
      expect(HERO_SUBTEXT).toBe(
        'Premium diagnostic care with advanced ultrasound-guided interventions'
      );
    });

    it('should have correct WhatsApp URL (Requirement 1.6, 7.3)', () => {
      expect(WHATSAPP_URL).toBe('https://wa.me/919653326172');
    });

    it('should have correct email URL (Requirement 1.7)', () => {
      expect(EMAIL_URL).toBe('mailto:drmoves@gmail.com');
    });

    it('should have correct phone URL (Requirement 1.8)', () => {
      expect(PHONE_URL).toBe('tel:+919653326172');
    });
  });

  describe('Data Integrity', () => {
    it('should have unique IDs for all services', () => {
      const ids = SERVICES.map((s) => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have unique IDs for all trust factors', () => {
      const ids = TRUST_FACTORS.map((f) => f.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have unique IDs for all hero images', () => {
      const ids = HERO_IMAGES.map((img) => img.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have non-empty descriptions for all services', () => {
      SERVICES.forEach((service) => {
        expect(service.description).toBeTruthy();
        expect(service.description.length).toBeGreaterThan(20);
      });
    });

    it('should have non-empty descriptions for all trust factors', () => {
      TRUST_FACTORS.forEach((factor) => {
        expect(factor.description).toBeTruthy();
        expect(factor.description.length).toBeGreaterThan(20);
      });
    });
  });
});
