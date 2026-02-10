# Design Document: ABHIPRAAY Medical Website

## Overview

The ABHIPRAAY medical website is a premium, high-end Next.js 14 application designed to convey medical authority, trustworthiness, and professionalism. The website features smooth animations, glassmorphism design elements, and a clean white + soft blue healthcare aesthetic. The architecture follows modern React patterns with the Next.js App Router, utilizing Framer Motion for animations and Tailwind CSS for styling.

The design prioritizes:
- **Premium User Experience**: Smooth scroll animations, fade-in sections, and interactive elements
- **Medical Trust**: Professional typography, clean layouts, and medical-grade visual quality
- **Performance**: Optimized images, code splitting, and efficient rendering
- **Accessibility**: Responsive design, semantic HTML, and keyboard navigation
- **SEO**: Structured data, meta tags, and medical website optimization

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js 14 App Router                 │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐ │
│  │   Layout    │  │   Metadata   │  │  Static Assets │ │
│  │  Component  │  │   Provider   │  │   (Images)     │ │
│  └─────────────┘  └──────────────┘  └────────────────┘ │
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Page Components                       │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │  │
│  │  │   Hero   │ │  About   │ │    Services      │  │  │
│  │  └──────────┘ └──────────┘ └──────────────────┘  │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │  │
│  │  │   Trust  │ │ Gallery  │ │    Contact       │  │  │
│  │  └──────────┘ └──────────┘ └──────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │           Shared Components                        │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │  │
│  │  │  Navbar  │ │  Button  │ │  ServiceCard     │  │  │
│  │  └──────────┘ └──────────┘ └──────────────────┘  │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │  │
│  │  │  Slider  │ │WhatsApp  │ │  AnimatedIcon    │  │  │
│  │  └──────────┘ └──────────┘ └──────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │         Animation & Styling Layer                  │  │
│  │  ┌──────────────┐  ┌──────────────────────────┐  │  │
│  │  │Framer Motion │  │     Tailwind CSS         │  │  │
│  │  └──────────────┘  └──────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Design Patterns

1. **Component Composition**: Reusable UI components composed together
2. **Server Components**: Default to React Server Components for static content
3. **Client Components**: Use "use client" directive for interactive elements
4. **Animation Hooks**: Custom hooks for scroll-triggered animations
5. **Responsive Design**: Mobile-first Tailwind breakpoints

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3+
- **Animations**: Framer Motion v10+
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component
- **Icons**: Lucide React or React Icons
- **Fonts**: Google Fonts (Inter/Poppins)

## Components and Interfaces

### Core Page Components

#### 1. Hero Section Component

**Purpose**: Primary landing section with headline, subtext, image slider, and action buttons

**Props Interface**:
```typescript
interface HeroSectionProps {
  headline: string;
  subtext: string;
  images: string[];
  ctaButtons: {
    label: string;
    action: 'call' | 'whatsapp' | 'email';
    href: string;
  }[];
}
```

**Key Features**:
- Auto-sliding image carousel with Ken Burns zoom effect
- Three action buttons (Call, WhatsApp, Gmail)
- Responsive text sizing
- Smooth fade-in animation on load

**Animation Behavior**:
- Images transition every 5 seconds
- Slow zoom from 100% to 110% scale over 5 seconds
- Crossfade transition between images
- Buttons have hover ripple effect

#### 2. Navigation Bar Component

**Purpose**: Sticky top navigation with blur effect and animated menu items

**Props Interface**:
```typescript
interface NavbarProps {
  menuItems: {
    label: string;
    href: string;
  }[];
  logo?: string;
}
```

**Key Features**:
- Sticky positioning with backdrop blur
- Animated underline on hover
- Smooth scroll to sections
- Mobile hamburger menu
- Glassmorphism background

**State Management**:
- Track scroll position for blur effect
- Mobile menu open/closed state
- Active section highlighting

#### 3. Service Card Component

**Purpose**: Animated card displaying individual medical service

**Props Interface**:
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}
```

**Key Features**:
- Glassmorphism styling
- Glow border on hover
- Slide-up entrance animation
- Staggered animation delay based on index
- Rounded corners with subtle shadow

**Animation Sequence**:
1. Initial state: opacity 0, translateY(50px)
2. On viewport entry: animate to opacity 1, translateY(0)
3. Delay: index * 100ms for stagger effect
4. Hover: scale(1.02), glow border

#### 4. Image Slider Component

**Purpose**: Auto-scrolling horizontal image gallery

**Props Interface**:
```typescript
interface ImageSliderProps {
  images: string[];
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
}
```

**Key Features**:
- Infinite horizontal scroll
- Auto-scroll with configurable speed
- Pause on hover
- Smooth transitions
- Responsive image sizing

**Implementation Details**:
- Use CSS transforms for smooth scrolling
- Duplicate images for seamless loop
- RequestAnimationFrame for smooth animation
- Intersection Observer for pause/resume

#### 5. Floating WhatsApp Button Component

**Purpose**: Fixed position button for WhatsApp communication

**Props Interface**:
```typescript
interface WhatsAppButtonProps {
  phoneNumber: string;
  position?: 'bottom-right' | 'bottom-left';
}
```

**Key Features**:
- Fixed positioning (bottom right)
- Pulse animation to draw attention
- Opens WhatsApp with pre-filled number
- Mobile-friendly tap target (min 44x44px)
- Z-index above other content

### Shared UI Components

#### Button Component

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  ripple?: boolean;
}
```

**Variants**:
- **Primary**: Soft blue background, white text
- **Secondary**: White background, blue text
- **Outline**: Transparent with blue border

**Animation**: Ripple effect on click, scale on hover

#### Animated Icon Component

```typescript
interface AnimatedIconProps {
  icon: React.ReactNode;
  animation: 'float' | 'pulse' | 'bounce';
  delay?: number;
}
```

**Animations**:
- **Float**: Gentle up/down motion
- **Pulse**: Scale in/out
- **Bounce**: Spring-based bounce

### Layout Components

#### Root Layout

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppButton phoneNumber="919653326172" />
      </body>
    </html>
  );
}
```

#### Page Structure

```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
```

## Data Models

### Service Data Model

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  order: number;
}

const services: Service[] = [
  {
    id: 'ultrasound',
    title: 'Advanced Ultrasound Imaging',
    description: 'State-of-the-art ultrasound technology for precise diagnostic imaging',
    iconName: 'Activity',
    order: 1
  },
  {
    id: 'genetic',
    title: 'Genetic Screening & Consultation',
    description: 'Comprehensive genetic testing and expert consultation services',
    iconName: 'Dna',
    order: 2
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy & Anomaly Scans',
    description: 'Detailed pregnancy monitoring and anomaly detection',
    iconName: 'Baby',
    order: 3
  },
  {
    id: 'interventional',
    title: 'Interventional Procedures',
    description: 'Minimally invasive ultrasound-guided procedures',
    iconName: 'Stethoscope',
    order: 4
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Imaging',
    description: 'Comprehensive diagnostic imaging services',
    iconName: 'Scan',
    order: 5
  }
];
```

### Trust Factor Data Model

```typescript
interface TrustFactor {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

const trustFactors: TrustFactor[] = [
  {
    id: 'technology',
    title: 'Advanced Technology',
    description: 'Latest medical equipment and imaging technology',
    iconName: 'Cpu'
  },
  {
    id: 'care',
    title: 'Compassionate Patient Care',
    description: 'Patient-focused approach with personalized attention',
    iconName: 'Heart'
  },
  {
    id: 'reporting',
    title: 'Accurate Reporting',
    description: 'Precise diagnostic reports with expert analysis',
    iconName: 'FileCheck'
  },
  {
    id: 'specialists',
    title: 'Experienced Specialists',
    description: 'Highly qualified radiology and genetics team',
    iconName: 'Users'
  }
];
```

### Contact Information Model

```typescript
interface ContactInfo {
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

const contactInfo: ContactInfo = {
  address: {
    line1: 'Shop No.35, Ground Floor, B Wing',
    line2: 'Pranik Chambers, Saki Naka',
    city: 'Andheri East, Mumbai',
    state: 'Maharashtra',
    pincode: '400072'
  },
  phone: '+919653326172',
  email: 'drmoves@gmail.com',
  whatsapp: '919653326172',
  coordinates: {
    lat: 19.1076, // Approximate coordinates for Saki Naka
    lng: 72.8856
  }
};
```

### Hero Image Data Model

```typescript
interface HeroImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

// Images will be sourced from: https://share.google/qw3cUtucM8mDzuXzj
// These will be downloaded and optimized for Next.js Image component
const heroImages: HeroImage[] = [
  {
    id: 'hero-1',
    url: '/images/hero/clinic-1.jpg',
    alt: 'ABHIPRAAY medical facility exterior',
    order: 1
  },
  {
    id: 'hero-2',
    url: '/images/hero/clinic-2.jpg',
    alt: 'Advanced ultrasound equipment',
    order: 2
  },
  {
    id: 'hero-3',
    url: '/images/hero/clinic-3.jpg',
    alt: 'Professional medical consultation',
    order: 3
  }
];
```

## Design System

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  primary: {
    50: '#eff6ff',   // Very light blue
    100: '#dbeafe',  // Light blue
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Main blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  medical: {
    white: '#ffffff',
    lightBlue: '#f0f9ff',
    softBlue: '#e0f2fe',
    trustBlue: '#0ea5e9',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
};
```

### Typography

```typescript
// Font configuration
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Typography scale
const typography = {
  h1: 'text-5xl md:text-6xl lg:text-7xl font-bold font-poppins',
  h2: 'text-4xl md:text-5xl lg:text-6xl font-bold font-poppins',
  h3: 'text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins',
  h4: 'text-2xl md:text-3xl font-semibold font-poppins',
  h5: 'text-xl md:text-2xl font-medium font-poppins',
  body: 'text-base md:text-lg font-inter',
  small: 'text-sm md:text-base font-inter',
};
```

### Spacing and Layout

```typescript
const spacing = {
  section: 'py-16 md:py-24 lg:py-32',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  cardPadding: 'p-6 md:p-8',
  gap: {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  }
};
```

### Glassmorphism Styles

```typescript
const glassmorphism = {
  card: 'bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl',
  navbar: 'bg-white/70 backdrop-blur-md border-b border-white/20',
  overlay: 'bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm',
};
```

### Shadow System

```typescript
const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  glowHover: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]',
};
```

## Animation Specifications

### Framer Motion Variants

#### Fade In Variant

```typescript
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
```

#### Slide Up Variant

```typescript
const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};
```

#### Float Animation

```typescript
const floatVariant = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
```

#### Ken Burns Effect (Image Zoom)

```typescript
const kenBurnsVariant = {
  initial: { scale: 1 },
  animate: {
    scale: 1.1,
    transition: {
      duration: 5,
      ease: 'linear',
    },
  },
};
```

#### Glow Border Hover

```typescript
const glowHoverVariant = {
  rest: {
    boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
    transition: {
      duration: 0.3,
    },
  },
};
```

### Scroll-Triggered Animations

```typescript
// Custom hook for scroll animations
function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}
```

### Navbar Blur Effect

```typescript
function useNavbarBlur() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
}

// Apply blur class based on scroll
const navbarClass = isScrolled
  ? 'bg-white/70 backdrop-blur-md'
  : 'bg-white/50 backdrop-blur-sm';
```

## Background Effects

### Floating Gradient Blobs

```typescript
// Animated gradient blobs in background
const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
```

### Medical Particle Background

```typescript
// Subtle medical-themed particles
const MedicalParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
```

## Responsive Breakpoints

```typescript
// Tailwind breakpoints
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
};

// Usage in components
const responsiveClasses = {
  heroText: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  container: 'px-4 sm:px-6 lg:px-8',
  grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  spacing: 'py-12 sm:py-16 md:py-20 lg:py-24',
};
```

## SEO and Metadata

### Page Metadata

```typescript
// app/layout.tsx or app/page.tsx
export const metadata: Metadata = {
  title: 'ABHIPRAAY - Advanced Ultrasound & Genetic Care | Mumbai',
  description: 'Premium diagnostic care with advanced ultrasound-guided interventions and genetic screening. Expert radiology team in Andheri East, Mumbai.',
  keywords: [
    'ultrasound clinic Mumbai',
    'genetic screening',
    'pregnancy scans',
    'interventional radiology',
    'diagnostic imaging',
    'Andheri East',
    'ABHIPRAAY',
  ],
  authors: [{ name: 'ABHIPRAAY Medical Centre' }],
  openGraph: {
    title: 'ABHIPRAAY - Advanced Ultrasound & Genetic Care',
    description: 'Premium diagnostic care with advanced ultrasound-guided interventions',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ABHIPRAAY',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Structured Data (JSON-LD)

```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'ABHIPRAAY - Centre for Advanced Ultrasound Guided Interventions and Genetic Clinic',
  description: 'Premium diagnostic care with advanced ultrasound-guided interventions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No.35, Ground Floor, B Wing, Pranik Chambers, Saki Naka',
    addressLocality: 'Andheri East',
    addressRegion: 'Mumbai',
    postalCode: '400072',
    addressCountry: 'IN',
  },
  telephone: '+919653326172',
  email: 'drmoves@gmail.com',
  medicalSpecialty: [
    'Radiology',
    'Genetic Counseling',
    'Obstetrics',
    'Interventional Radiology',
  ],
};
```

## Performance Optimization

### Image Optimization Strategy

1. **Next.js Image Component**: Use for all images with automatic optimization
2. **Lazy Loading**: Load images as they enter viewport
3. **Responsive Images**: Serve appropriate sizes for different devices
4. **WebP Format**: Convert images to WebP for better compression
5. **Priority Loading**: Mark hero images as priority

```typescript
<Image
  src="/images/hero/clinic-1.jpg"
  alt="ABHIPRAAY medical facility"
  width={1920}
  height={1080}
  priority
  className="object-cover"
  sizes="100vw"
/>
```

### Code Splitting

- Use dynamic imports for heavy components
- Lazy load sections below the fold
- Split animation libraries per component

```typescript
const GallerySection = dynamic(() => import('@/components/GallerySection'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
```

### Animation Performance

- Use CSS transforms (translate, scale) instead of position properties
- Utilize `will-change` CSS property for animated elements
- Limit simultaneous animations
- Use `requestAnimationFrame` for smooth scrolling

```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU acceleration */
}
```



## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Button Action Routing

*For any* action button (Call, WhatsApp, Gmail) in the application, clicking the button should trigger navigation or action to the correct destination URL or protocol handler.

**Validates: Requirements 1.6, 1.7, 1.8, 7.3**

**Testing Approach**: Generate test cases for each button type, simulate clicks, and verify that the correct href attribute or navigation function is called with the expected URL format (tel:, mailto:, https://wa.me/).

### Property 2: Scroll-Triggered Animation Activation

*For any* content section with scroll-triggered animations, when the section enters the viewport (crosses the intersection threshold), the animation system should transition the section from hidden state to visible state.

**Validates: Requirements 3.7, 4.3, 5.4, 8.1, 8.3**

**Testing Approach**: For each animated section, mock the Intersection Observer, trigger viewport entry, and verify that animation controls transition from 'hidden' to 'visible' variant.

### Property 3: Hover Interaction Effects

*For any* interactive element with hover effects (navigation menu items, service cards, buttons), hovering over the element should apply the designated visual effect (underline, glow, ripple, scale).

**Validates: Requirements 2.3, 4.2, 8.2**

**Testing Approach**: For each hoverable element type, simulate mouseenter event and verify that the appropriate CSS classes or animation states are applied.

### Property 4: Auto-Scroll Behavior

*For any* auto-scrolling component (hero image slider, gallery slider), the component should automatically advance to the next item at regular intervals when not paused.

**Validates: Requirements 1.3, 6.1**

**Testing Approach**: Render slider components, advance time using fake timers, and verify that the active index or scroll position changes at the expected intervals.

### Property 5: Pause on Hover Round-Trip

*For any* auto-scrolling component, hovering over the component should pause automatic scrolling, and removing hover should resume automatic scrolling from where it paused.

**Validates: Requirements 6.2, 6.3**

**Testing Approach**: Start auto-scroll, simulate hover (pause), verify scrolling stops, simulate hover end, verify scrolling resumes. This is a round-trip property testing state transitions.

### Property 6: Ken Burns Zoom Effect

*For any* image in the hero slider, while the image is active, the scale transform should gradually increase from 1.0 to 1.1 over the display duration.

**Validates: Requirements 1.4**

**Testing Approach**: Render hero slider, check initial scale value, advance animation time, verify scale increases toward 1.1.

### Property 7: Sticky Navbar Positioning

*For any* scroll position, the navigation bar should remain fixed at the top of the viewport with sticky or fixed positioning.

**Validates: Requirements 2.1**

**Testing Approach**: Render navbar, simulate scroll events at various positions, verify that navbar remains in viewport with correct CSS positioning.

### Property 8: Navbar Blur on Scroll

*For any* scroll position greater than threshold (50px), the navigation bar should apply backdrop-blur styling; for scroll positions below threshold, blur should be reduced.

**Validates: Requirements 2.2**

**Testing Approach**: Render navbar, simulate scroll to various positions, check computed styles or CSS classes for backdrop-blur values.

### Property 9: Responsive Layout Adaptation

*For any* viewport width (mobile: <640px, tablet: 640-1024px, desktop: >1024px), the layout should apply appropriate responsive styles including grid columns, font sizes, and spacing.

**Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5**

**Testing Approach**: Render components at different viewport widths, verify that responsive CSS classes are applied and layouts change appropriately (e.g., service cards stack vertically on mobile).

### Property 10: Minimum Tap Target Size on Mobile

*For any* interactive element on mobile viewports (<640px), the element should have a minimum tap target size of 44x44 pixels for accessibility.

**Validates: Requirements 10.5**

**Testing Approach**: Render interactive elements at mobile viewport width, measure computed dimensions, verify minimum size requirements are met.

### Property 11: Required Content Presence

*For any* page render, all required content sections (Hero, About, Services, Trust, Gallery, Contact) should be present in the DOM with their designated content.

**Validates: Requirements 1.1, 1.2, 1.5, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 5.1, 7.1, 7.2, 7.4, 7.5, 7.6, 12.2**

**Testing Approach**: Render the page, query for each section by test ID or role, verify presence and check for specific text content or child elements.

### Property 12: Design System Consistency

*For any* card component, the component should apply glassmorphism styling including backdrop-blur, semi-transparent background, border, and rounded corners.

**Validates: Requirements 2.4, 4.4, 9.3, 9.4, 9.5**

**Testing Approach**: Render card components, check computed styles for backdrop-filter, background-color opacity, border-radius, and box-shadow properties.

### Property 13: Typography System Application

*For any* text element, the element should use either Inter or Poppins font family as specified in the design system.

**Validates: Requirements 9.2**

**Testing Approach**: Render text elements, check computed font-family values, verify they match Inter or Poppins.

### Property 14: Color Palette Compliance

*For any* colored element, the element should use colors from the defined medical color palette (white, soft blue shades, primary blue).

**Validates: Requirements 9.1**

**Testing Approach**: Render components, extract color values from computed styles, verify they match the defined palette values.

### Property 15: SEO Metadata Presence

*For any* page in the application, the page should include proper meta tags (title, description, keywords), Open Graph tags, and structured data (JSON-LD) for medical clinic schema.

**Validates: Requirements 11.4, 11.5**

**Testing Approach**: Render page, query document head for meta tags, verify presence and content of required SEO elements and structured data script.

### Property 16: Background Effects Rendering

*For any* page render, the background should include floating gradient blob elements and medical particle elements with appropriate animations.

**Validates: Requirements 8.4, 8.5**

**Testing Approach**: Render page, query for background effect elements, verify they exist and have animation properties applied.

### Property 17: Image Source Configuration

*For any* hero image, the image source should point to optimized local assets (originally sourced from the provided Google Photos link).

**Validates: Requirements 12.1**

**Testing Approach**: Render hero section, check image src attributes, verify they point to expected local paths in /images/hero/ directory.

## Error Handling

### Client-Side Error Boundaries

Implement React Error Boundaries to catch and handle rendering errors gracefully:

```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service (e.g., Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Something went wrong
            </h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Image Loading Errors

Handle image loading failures with fallback images:

```typescript
const ImageWithFallback = ({ src, fallback, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallback || '/images/placeholder.jpg');
      }}
    />
  );
};
```

### Animation Performance Degradation

Detect and disable animations on low-performance devices:

```typescript
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Usage in components
const shouldAnimate = !useReducedMotion();
```

### Network Request Failures

Handle external resource loading failures (Google Maps, fonts):

```typescript
// Graceful font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Show fallback font while loading
  fallback: ['system-ui', 'arial'],
});

// Google Maps error handling
const MapWithErrorHandling = () => {
  const [mapError, setMapError] = useState(false);

  if (mapError) {
    return (
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <p>Map temporarily unavailable</p>
      </div>
    );
  }

  return (
    <iframe
      src="https://maps.google.com/..."
      onError={() => setMapError(true)}
      className="w-full h-64"
    />
  );
};
```

### Form Validation Errors

Validate contact form inputs and display clear error messages:

```typescript
interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone || !/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}
```

### Accessibility Errors

Ensure keyboard navigation and screen reader support:

```typescript
// Trap focus in mobile menu
function useFocusTrap(isOpen: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return containerRef;
}
```

## Testing Strategy

### Dual Testing Approach

The ABHIPRAAY medical website will employ both unit testing and property-based testing to ensure comprehensive coverage and correctness:

**Unit Tests**: Focus on specific examples, edge cases, and integration points
- Component rendering with specific props
- User interaction flows (clicks, hovers, form submissions)
- Edge cases (empty states, error states, loading states)
- Accessibility compliance (ARIA labels, keyboard navigation)
- Responsive behavior at specific breakpoints

**Property-Based Tests**: Verify universal properties across all inputs
- Animation behavior across different timing values
- Responsive layout adaptation across viewport ranges
- Button routing for all action types
- Scroll-triggered animations for all sections
- Design system consistency across all components

### Testing Framework Configuration

**Framework**: Jest + React Testing Library + fast-check (for property-based testing)

```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
};
```

### Property-Based Testing Configuration

Each property test will run a minimum of 100 iterations to ensure comprehensive input coverage:

```typescript
import fc from 'fast-check';

// Example property test configuration
describe('Property Tests', () => {
  it('Property 1: Button Action Routing', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('call', 'whatsapp', 'email'),
        (buttonType) => {
          // Test implementation
          // Feature: abhipraay-medical-website, Property 1: Button Action Routing
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Test Organization

```
tests/
├── unit/
│   ├── components/
│   │   ├── HeroSection.test.tsx
│   │   ├── Navbar.test.tsx
│   │   ├── ServiceCard.test.tsx
│   │   ├── ImageSlider.test.tsx
│   │   └── WhatsAppButton.test.tsx
│   ├── sections/
│   │   ├── AboutSection.test.tsx
│   │   ├── ServicesSection.test.tsx
│   │   ├── TrustSection.test.tsx
│   │   ├── GallerySection.test.tsx
│   │   └── ContactSection.test.tsx
│   └── utils/
│       ├── animations.test.ts
│       └── responsive.test.ts
├── property/
│   ├── button-routing.property.test.tsx
│   ├── scroll-animations.property.test.tsx
│   ├── hover-effects.property.test.tsx
│   ├── auto-scroll.property.test.tsx
│   ├── responsive-layout.property.test.tsx
│   └── design-system.property.test.tsx
├── integration/
│   ├── page-navigation.test.tsx
│   ├── contact-flow.test.tsx
│   └── accessibility.test.tsx
└── e2e/
    └── user-journey.spec.ts
```

### Property Test Tagging

Each property-based test must include a comment tag referencing the design document property:

```typescript
/**
 * Feature: abhipraay-medical-website
 * Property 2: Scroll-Triggered Animation Activation
 * 
 * For any content section with scroll-triggered animations, when the section
 * enters the viewport, the animation system should transition from hidden to visible.
 */
it('should activate animations when sections enter viewport', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('about', 'services', 'trust', 'gallery'),
      (sectionId) => {
        // Test implementation
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Test Examples

**Example 1: Hero Section Content**
```typescript
describe('HeroSection', () => {
  it('should display required headline and subtext', () => {
    render(<HeroSection />);
    
    expect(screen.getByText(/Advanced Ultrasound & Genetic Care/i)).toBeInTheDocument();
    expect(screen.getByText(/Premium diagnostic care/i)).toBeInTheDocument();
  });

  it('should render three action buttons', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('button', { name: /call now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /gmail/i })).toBeInTheDocument();
  });
});
```

**Example 2: Responsive Behavior**
```typescript
describe('ServiceCard Responsive', () => {
  it('should stack vertically on mobile viewports', () => {
    global.innerWidth = 375; // Mobile width
    global.dispatchEvent(new Event('resize'));
    
    render(<ServicesSection />);
    
    const container = screen.getByTestId('services-grid');
    expect(container).toHaveClass('grid-cols-1');
  });

  it('should display grid on desktop viewports', () => {
    global.innerWidth = 1280; // Desktop width
    global.dispatchEvent(new Event('resize'));
    
    render(<ServicesSection />);
    
    const container = screen.getByTestId('services-grid');
    expect(container).toHaveClass('lg:grid-cols-3');
  });
});
```

**Example 3: Animation Triggers**
```typescript
describe('Scroll Animations', () => {
  it('should trigger fade-in when section enters viewport', () => {
    const { container } = render(<AboutSection />);
    
    // Mock Intersection Observer
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    
    // Simulate viewport entry
    const [callback] = mockIntersectionObserver.mock.calls[0];
    callback([{ isIntersecting: true }]);
    
    expect(container.firstChild).toHaveClass('animate-fade-in');
  });
});
```

### Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should support keyboard navigation', () => {
    render(<Navbar />);
    
    const firstLink = screen.getAllByRole('link')[0];
    firstLink.focus();
    
    expect(document.activeElement).toBe(firstLink);
    
    // Simulate Tab key
    userEvent.tab();
    
    const secondLink = screen.getAllByRole('link')[1];
    expect(document.activeElement).toBe(secondLink);
  });
});
```

### Performance Testing

```typescript
describe('Performance', () => {
  it('should load hero images with priority', () => {
    render(<HeroSection />);
    
    const heroImage = screen.getByAltText(/ABHIPRAAY medical facility/i);
    expect(heroImage).toHaveAttribute('loading', 'eager');
    expect(heroImage).toHaveAttribute('priority', 'true');
  });

  it('should lazy load gallery images', () => {
    render(<GallerySection />);
    
    const galleryImages = screen.getAllByRole('img');
    galleryImages.slice(3).forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });
});
```

### Integration Testing

```typescript
describe('Contact Flow Integration', () => {
  it('should allow user to contact via multiple channels', () => {
    render(<ContactSection />);
    
    // Test WhatsApp button
    const whatsappBtn = screen.getByRole('link', { name: /whatsapp/i });
    expect(whatsappBtn).toHaveAttribute('href', 'https://wa.me/919653326172');
    
    // Test email button
    const emailBtn = screen.getByRole('link', { name: /email/i });
    expect(emailBtn).toHaveAttribute('href', 'mailto:drmoves@gmail.com');
    
    // Test call button
    const callBtn = screen.getByRole('link', { name: /call/i });
    expect(callBtn).toHaveAttribute('href', 'tel:+919653326172');
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage
- **Property Test Coverage**: All 17 correctness properties implemented
- **Integration Test Coverage**: All user flows tested
- **Accessibility Coverage**: All interactive elements tested with axe
- **Visual Regression**: Snapshot tests for critical components

### Continuous Integration

```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:property
      - run: npm run test:integration
      - run: npm run test:a11y
      - uses: codecov/codecov-action@v3
```
