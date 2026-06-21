# Premium SaaS Landing Page

A production-ready, high-performance landing page built with modern web technologies. Designed to showcase products and services with stunning animations, responsive design, and excellent user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.2-blue)
![Vite](https://img.shields.io/badge/vite-5-purple)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.3-blue)

## ✨ Features

- **🚀 Lightning Fast**: Built with Vite for instant HMR and optimized builds
- **🎨 Modern Design**: Stunning animations with Framer Motion
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🌙 Dark/Light Mode**: Theme support with persistent storage
- **♿ Accessible**: WCAG 2.1 compliance with semantic HTML
- **🔍 SEO Optimized**: Meta tags, structured data, and best practices
- **⚡ Performance**: Code splitting, lazy loading, and optimized assets
- **📦 Reusable Components**: Well-organized, modular component architecture
- **🎭 Smooth Animations**: Beautiful scroll and hover animations

## 🎯 Components Included

### Core Sections

- **Navbar** - Fixed navigation with theme toggle and responsive mobile menu
- **Hero** - Eye-catching landing section with CTA buttons
- **Features** - Showcase your key features with icons
- **Services** - Numbered list of services with descriptions
- **Pricing** - Flexible pricing tables with highlighted popular option
- **Testimonials** - Customer testimonials with ratings and trust badges
- **FAQ** - Expandable FAQ section with smooth animations
- **CTA** - Call-to-action section to drive conversions
- **Footer** - Comprehensive footer with links and social media

## 🛠 Tech Stack

| Technology    | Purpose    | Version  |
| ------------- | ---------- | -------- |
| React         | UI Library | ^18.2.0  |
| Vite          | Build Tool | ^5.0.0   |
| Tailwind CSS  | Styling    | ^3.3.0   |
| Framer Motion | Animations | ^10.16.4 |
| Lucide React  | Icons      | ^0.263.1 |

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- Git

### Quick Start

1. **Clone or extract the project**

```bash
cd "nexsoft intern"
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**

```bash
npm run dev
```

The site will open at `http://localhost:3000` with hot module replacement enabled.

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── Features.jsx    # Features showcase
│   ├── Services.jsx    # Services list
│   ├── Pricing.jsx     # Pricing tables
│   ├── Testimonials.jsx # Customer testimonials
│   ├── FAQ.jsx         # FAQ section
│   ├── CTA.jsx         # Call-to-action
│   └── Footer.jsx      # Footer
├── context/            # React Context providers
│   └── ThemeContext.jsx # Dark/Light mode context
├── hooks/              # Custom React hooks
│   └── useScroll.js    # Scroll detection hook
├── utils/              # Utility functions
│   └── animations.js   # Framer Motion animations
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles

index.html              # HTML template
tailwind.config.ts      # Tailwind configuration
vite.config.js          # Vite configuration
postcss.config.js       # PostCSS configuration
package.json            # Dependencies and scripts
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:

```js
colors: {
  primary: {
    500: '#9483ff',  // Change primary color
    600: '#755eff',
    // ... other shades
  }
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add the section to the page

Example:

```jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <>
      <Hero />
      <NewSection />
      <Footer />
    </>
  );
}
```

### Update Content

All content is hardcoded in components. To update:

1. Open the component file (e.g., `Features.jsx`)
2. Modify the content arrays or text
3. Changes reflect instantly with HMR

### Modify Animations

Framer Motion animations are defined in `src/utils/animations.js`:

```js
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
```

## 🌙 Dark Mode

The site includes automatic dark mode support:

- **Auto Detection**: Respects system preferences
- **Manual Toggle**: Theme button in navbar
- **Persistent**: Preference saved to localStorage
- **Smooth Transitions**: CSS transitions between modes

## 📱 Responsive Design

The design is mobile-first and fully responsive:

- **Mobile** (< 640px): Single column, optimized touch targets
- **Tablet** (640px - 1024px): 2-column layouts
- **Desktop** (> 1024px): Full multi-column layouts

Use Tailwind's breakpoints in components:

```typescript
<div className="md:grid-cols-2 lg:grid-cols-3">
```

## ♿ Accessibility

Features implemented:

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators for keyboard users
- Alt text for images
- Screen reader friendly

## ⚡ Performance Optimization

Techniques used:

- **Code Splitting**: Automatic vendor chunk separation
- **Tree Shaking**: Unused code removed during build
- **Minification**: Gzip compression in production

### Build Size

```
dist/index.html              2.5 kB / gzip: 1.2 kB
dist/assets/main-xxx.js      150 kB / gzip: 45 kB
dist/assets/vendor-xxx.js    200 kB / gzip: 60 kB
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Update `vite.config.js` with your repo name
2. Build: `npm run build`
3. Deploy `dist/` folder

## 📊 SEO Configuration

The site is pre-configured for SEO:

- **Meta Tags**: Title, description, and OG tags in `index.html`
- **Semantic HTML**: Proper use of heading hierarchy
- **Mobile Friendly**: Responsive design with viewport meta
- **Fast Loading**: Optimized bundle size

Add to Google Search Console and Bing Webmaster Tools.

## 🔍 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙋 Support

For help and questions:

- Create an issue on GitHub
- Check existing documentation
- Review component examples

---

Built with ❤️ for developers who care about quality.
