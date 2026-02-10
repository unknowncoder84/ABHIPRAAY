# ABHIPRAAY Medical Website - Project Structure

## Directory Structure

```
abhipraay-medical/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and Tailwind
│   └── favicon.ico        # Favicon
├── components/            # Reusable UI components
│   ├── Button.tsx
│   ├── ServiceCard.tsx
│   ├── AnimatedIcon.tsx
│   ├── ImageSlider.tsx
│   ├── WhatsAppButton.tsx
│   └── ...
├── sections/              # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── TrustSection.tsx
│   ├── GallerySection.tsx
│   └── ContactSection.tsx
├── utils/                 # Utility functions and hooks
│   ├── animations.ts      # Framer Motion variants
│   ├── hooks.ts           # Custom React hooks
│   └── constants.ts       # App constants
├── types/                 # TypeScript type definitions
│   ├── index.ts           # Shared types
│   └── data.ts            # Data model types
├── public/                # Static assets
│   └── images/
│       ├── hero/          # Hero section images
│       └── gallery/       # Gallery images
├── __tests__/             # Test files
│   ├── unit/              # Unit tests
│   ├── property/          # Property-based tests
│   └── integration/       # Integration tests
├── .kiro/                 # Kiro specs
│   └── specs/
│       └── abhipraay-medical-website/
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup file
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest, React Testing Library, fast-check, jest-axe
- **Fonts**: Google Fonts (Inter, Poppins)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run test:unit` - Run unit tests only
- `npm run test:property` - Run property-based tests only
- `npm run test:integration` - Run integration tests only
- `npm run test:a11y` - Run accessibility tests only

## Design System

### Colors
- **Primary**: Blue palette (#3b82f6 and variants)
- **Medical**: White, light blue, soft blue, trust blue
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body**: Inter

### Components
- Glassmorphism effects with backdrop blur
- Rounded containers with subtle shadows
- Smooth animations with Framer Motion
- Responsive mobile-first design

## Development Guidelines

1. **Component Structure**: Create reusable components in `components/`
2. **Section Structure**: Create page sections in `sections/`
3. **Styling**: Use Tailwind utility classes and custom classes from globals.css
4. **Animations**: Use Framer Motion variants from `utils/animations.ts`
5. **Testing**: Write both unit tests and property-based tests
6. **Accessibility**: Ensure keyboard navigation and ARIA labels
7. **Performance**: Optimize images, use lazy loading, code splitting

## Next Steps

Follow the tasks in `.kiro/specs/abhipraay-medical-website/tasks.md` to implement:
1. Design system and shared utilities (Task 2)
2. Core UI components (Task 3)
3. Background effects (Task 4)
4. Navigation bar (Task 5)
5. Hero section with image slider (Task 6)
6. Content sections (Tasks 7-12)
7. SEO and metadata (Task 16)
8. Testing and optimization (Tasks 17-21)
