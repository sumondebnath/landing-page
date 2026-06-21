<!-- Workspace-specific Copilot instructions for the Premium SaaS Landing Page project -->

## Project Overview

This is a production-ready premium SaaS landing page built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: Lucide React

### Key Features
- Fully responsive mobile-first design
- Dark/light mode support
- Smooth animations and transitions
- Reusable component architecture
- Full TypeScript support
- SEO optimized
- Production-ready

## Component Architecture

### Core Components
Located in `src/components/`:

- **Navbar.tsx** - Fixed navigation with theme toggle
- **Hero.tsx** - Landing hero section
- **Features.tsx** - Feature showcase grid
- **Services.tsx** - Numbered services list
- **Pricing.tsx** - Pricing tables with highlights
- **Testimonials.tsx** - Customer testimonials
- **FAQ.tsx** - Expandable FAQ section
- **CTA.tsx** - Call-to-action section
- **Footer.tsx** - Comprehensive footer

### Supporting Files

**Context** (`src/context/`):
- ThemeContext.tsx - Dark/light mode management

**Hooks** (`src/hooks/`):
- useScroll.ts - Scroll detection hook

**Utils** (`src/utils/`):
- animations.ts - Framer Motion animation variants

**Styles**:
- src/index.css - Global styles with Tailwind
- tailwind.config.ts - Tailwind configuration
- postcss.config.js - PostCSS setup

## Development Guidelines

### Adding New Components
1. Create file in `src/components/` with .tsx extension
2. Use TypeScript interfaces for props
3. Apply animations from `src/utils/animations.ts`
4. Follow the naming convention: PascalCase for components
5. Add proper ARIA labels for accessibility

### Styling Approach
- Use Tailwind CSS utility classes
- Avoid custom CSS when possible
- Use dark mode class selector (`dark:`)
- Custom animations in `tailwind.config.ts`

### Animation Standards
- Use Framer Motion for complex animations
- Keep animations smooth (0.3-0.8s duration)
- Use viewport detection for scroll animations
- Apply stagger effects to lists

### Dark Mode Implementation
- Use `dark:` prefix for dark mode styles
- Theme context handles class management
- Preference persisted to localStorage
- Smooth transitions between modes

## Customization Points

### Colors
Edit `tailwind.config.ts`:
- Primary color: `primary-*` shade range
- Dark colors: `dark-*` shade range

### Content
Edit individual component files:
- Features in `Features.tsx`
- Services in `Services.tsx`
- Pricing plans in `Pricing.tsx`
- FAQs in `FAQ.tsx`
- Testimonials in `Testimonials.tsx`

### Fonts
Add custom fonts in `index.html` or `index.css`

## Build & Deployment

### Development
```bash
npm install
npm run dev  # Starts on http://localhost:3000
```

### Production Build
```bash
npm run build  # Creates optimized dist/
npm run preview  # Preview build locally
```

### Deployment Targets
- Vercel: `vercel`
- Netlify: `netlify deploy --prod --dir=dist`
- GitHub Pages: Deploy dist/ folder
- Traditional hosting: Upload dist/ folder

## Performance Tips

- Components use React.FC for type safety
- Lazy animations with whileInView
- Viewport detection prevents unnecessary re-renders
- Optimized bundle splitting in vite.config.ts
- Minification enabled for production

## Common Tasks

### Update Navbar Links
Edit `menuItems` array in `Navbar.tsx`

### Change Primary Color
Edit `primary-*` color values in `tailwind.config.ts`

### Add New Section
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to JSX before Footer

### Enable Analytics
Add tracking code to `index.html` or `main.tsx`

## Accessibility Standards

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast WCAG AA
- Focus indicators visible
- Screen reader friendly

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Guide](https://vitejs.dev)
