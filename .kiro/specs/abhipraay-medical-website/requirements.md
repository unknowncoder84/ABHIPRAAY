# Requirements Document

## Introduction

ABHIPRAAY – Centre for Advanced Ultrasound Guided Interventions and Genetic Clinic requires a high-end, modern, premium medical website built with Next.js 14. The website must convey medical authority, trustworthiness, and professionalism through smooth animations, clean design, and a healthcare-focused aesthetic (white + soft blue color scheme). The design should match the premium quality of established medical brands like Apollo, Cloudnine, and Practo.

## Glossary

- **Website**: The ABHIPRAAY medical website application
- **Hero_Section**: The primary landing section with headline and image slider
- **Navigation_Bar**: The sticky top navigation component
- **Service_Card**: Individual animated card displaying a medical service
- **Image_Slider**: Auto-scrolling image carousel component
- **Contact_Form**: User interface for contact information and communication
- **Animation_System**: Framer Motion-based animation framework
- **Responsive_Layout**: Mobile-first responsive design system
- **WhatsApp_Button**: Floating action button for WhatsApp communication
- **Gallery_Slider**: Horizontal auto-scrolling image gallery

## Requirements

### Requirement 1: Hero Section with Image Slider

**User Story:** As a website visitor, I want to see an engaging hero section with smooth image transitions, so that I immediately understand the clinic's premium positioning and services.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the headline "Advanced Ultrasound & Genetic Care with Precision and Trust"
2. THE Hero_Section SHALL display the subtext "Premium diagnostic care with advanced ultrasound-guided interventions"
3. WHEN the Hero_Section loads, THE Image_Slider SHALL automatically cycle through images from the provided Google Photos source
4. WHILE the Image_Slider is active, THE Website SHALL apply a slow zoom effect (Ken Burns style) to each image
5. THE Hero_Section SHALL display three action buttons: "Call Now", "WhatsApp Redirect", and "Gmail Redirect"
6. WHEN a user clicks the WhatsApp button, THE Website SHALL redirect to https://wa.me/919653326172
7. WHEN a user clicks the Gmail button, THE Website SHALL open mailto:drmoves@gmail.com
8. WHEN a user clicks the Call Now button, THE Website SHALL initiate a phone call action

### Requirement 2: Navigation System

**User Story:** As a website visitor, I want a smooth, professional navigation experience, so that I can easily access different sections of the website.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL remain sticky at the top of the viewport during scrolling
2. WHILE scrolling occurs, THE Navigation_Bar SHALL apply a blur effect to its background
3. WHEN a user hovers over menu items, THE Navigation_Bar SHALL display animated underline effects
4. THE Navigation_Bar SHALL maintain transparency with glassmorphism styling
5. THE Navigation_Bar SHALL remain fully functional and visible on all screen sizes

### Requirement 3: About Section Content

**User Story:** As a potential patient, I want to learn about the clinic's expertise and approach, so that I can trust their medical services.

#### Acceptance Criteria

1. THE About_Section SHALL display content in a professional, trustworthy, medical authority tone
2. THE About_Section SHALL highlight advanced ultrasound-guided procedures
3. THE About_Section SHALL highlight genetic diagnostic care capabilities
4. THE About_Section SHALL highlight patient-focused approach
5. THE About_Section SHALL highlight advanced medical equipment
6. THE About_Section SHALL highlight experienced radiology team
7. WHEN the About_Section enters the viewport, THE Animation_System SHALL apply fade-in animations

### Requirement 4: Services Display

**User Story:** As a website visitor, I want to see available medical services in an organized, visually appealing way, so that I can quickly understand what the clinic offers.

#### Acceptance Criteria

1. THE Website SHALL display five service categories: Advanced Ultrasound Imaging, Genetic Screening & Consultation, Pregnancy & Anomaly Scans, Interventional Procedures, and Diagnostic Imaging
2. WHEN a user hovers over a Service_Card, THE Animation_System SHALL apply a glow border effect
3. WHEN a Service_Card enters the viewport, THE Animation_System SHALL apply a slide-up entrance animation
4. THE Service_Card SHALL use glassmorphism styling with rounded containers
5. THE Service_Card SHALL display relevant medical icons for each service

### Requirement 5: Trust Building Section

**User Story:** As a potential patient, I want to understand why I should choose this clinic, so that I feel confident in their medical expertise.

#### Acceptance Criteria

1. THE Website SHALL display four trust factors: Advanced Technology, Compassionate Patient Care, Accurate Reporting, and Experienced Specialists
2. WHEN trust factor icons are displayed, THE Animation_System SHALL apply a soft float effect
3. THE Website SHALL use animated medical icons for each trust factor
4. WHEN the trust section enters the viewport, THE Animation_System SHALL apply fade-in animations

### Requirement 6: Image Gallery

**User Story:** As a website visitor, I want to see the clinic's facilities and environment, so that I can visualize the medical setting.

#### Acceptance Criteria

1. THE Gallery_Slider SHALL automatically scroll horizontally through clinic images
2. WHEN a user hovers over the Gallery_Slider, THE Gallery_Slider SHALL pause automatic scrolling
3. WHEN the hover ends, THE Gallery_Slider SHALL resume automatic scrolling
4. THE Gallery_Slider SHALL display images with smooth transitions
5. THE Gallery_Slider SHALL maintain medical clinic aesthetic

### Requirement 7: Contact Information and Communication

**User Story:** As a potential patient, I want multiple ways to contact the clinic, so that I can reach them through my preferred communication method.

#### Acceptance Criteria

1. THE Contact_Section SHALL display the address "Shop No.35, Ground Floor, B Wing, Pranik Chambers, Saki Naka, Andheri East, Mumbai – 400072"
2. THE Website SHALL display a floating WhatsApp button in the bottom right corner
3. WHEN a user clicks the floating WhatsApp button, THE Website SHALL redirect to https://wa.me/919653326172
4. THE Contact_Section SHALL display a Gmail icon button
5. THE Contact_Section SHALL display a Call button
6. THE Contact_Section SHALL include an embedded Google Map showing the clinic location
7. THE WhatsApp_Button SHALL remain visible and accessible on all screen sizes

### Requirement 8: Animation and Visual Effects

**User Story:** As a website visitor, I want smooth, professional animations throughout the site, so that the experience feels premium and polished.

#### Acceptance Criteria

1. WHEN sections enter the viewport, THE Animation_System SHALL apply smooth fade-in animations
2. WHEN buttons are hovered, THE Animation_System SHALL apply ripple effects
3. THE Animation_System SHALL apply smooth scroll reveal effects to content sections
4. THE Website SHALL display floating gradient blobs in the background
5. THE Website SHALL display subtle medical particle effects in the background
6. THE Animation_System SHALL use Framer Motion for all animations
7. THE Website SHALL maintain smooth performance with 60fps animation targets

### Requirement 9: Design System and Styling

**User Story:** As a website visitor, I want a cohesive, premium visual design, so that the website reflects the high-quality medical services offered.

#### Acceptance Criteria

1. THE Website SHALL use a white and soft blue color scheme as the primary palette
2. THE Website SHALL use Inter or Poppins font families for typography
3. THE Website SHALL apply glassmorphism effects to card components
4. THE Website SHALL use rounded containers throughout the design
5. THE Website SHALL apply subtle shadow depth to elevated elements
6. THE Website SHALL use professional medical icons
7. THE Website SHALL NOT use cartoonish styling, loud colors, or generic template aesthetics
8. THE Website SHALL convey a high-end healthcare brand feeling

### Requirement 10: Responsive Design

**User Story:** As a mobile user, I want the website to work perfectly on my device, so that I can access information and contact the clinic from anywhere.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL adapt to mobile, tablet, and desktop screen sizes
2. WHEN viewed on mobile devices, THE Navigation_Bar SHALL remain functional and accessible
3. WHEN viewed on mobile devices, THE Hero_Section SHALL maintain readability and visual appeal
4. WHEN viewed on mobile devices, THE Service_Card components SHALL stack vertically
5. WHEN viewed on mobile devices, THE WhatsApp_Button SHALL remain visible and easily tappable
6. THE Responsive_Layout SHALL use mobile-first design principles

### Requirement 11: Technical Implementation

**User Story:** As a developer, I want the website built with modern, maintainable technologies, so that it performs well and is easy to update.

#### Acceptance Criteria

1. THE Website SHALL be built using Next.js 14 with App Router
2. THE Website SHALL use Tailwind CSS for styling
3. THE Website SHALL use Framer Motion for animations
4. THE Website SHALL implement SEO optimization for medical website structure
5. THE Website SHALL include proper meta tags, structured data, and semantic HTML
6. THE Website SHALL load efficiently with optimized images and code splitting
7. THE Website SHALL be deployed as a static or server-rendered application

### Requirement 12: Content Management

**User Story:** As a clinic administrator, I want the website content to be accurate and up-to-date, so that patients receive correct information.

#### Acceptance Criteria

1. THE Website SHALL source hero images from https://share.google/qw3cUtucM8mDzuXzj
2. THE Website SHALL display accurate contact information including phone number, email, and physical address
3. THE Website SHALL maintain consistent medical terminology and professional language
4. THE Website SHALL display service descriptions that accurately reflect clinic capabilities
