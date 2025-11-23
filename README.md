# Rosendo Torres Portfolio

A modern, interactive portfolio website showcasing web development skills, 3D animations, and custom website templates.

## Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Three.js & React Three Fiber** for 3D animations
- **Framer Motion** for smooth UI animations
- **Fully Responsive** design
- **SEO Optimized**
- **Performance Optimized**

## Project Structure

```
rosendo_portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page with form
│   │   ├── demo/         # 3D Demo showcase
│   │   ├── projects/     # Projects gallery
│   │   ├── templates/    # Template showcase
│   │   │   └── [slug]/   # Dynamic template detail pages
│   │   ├── layout.tsx    # Root layout with navigation
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable components
│       ├── Navigation.tsx     # Header navigation
│       ├── Scene3D.tsx        # Basic 3D scene
│       └── AnimatedSphere.tsx # Animated 3D sphere
├── public/              # Static assets
└── next.config.ts       # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rosendo_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Pages

- **/** - Home page with hero section and featured work
- **/about** - About me and skills
- **/projects** - Project showcase
- **/templates** - Template gallery
- **/templates/[slug]** - Individual template details
- **/certifications** - Certifications and licenses showcase
- **/demo** - Interactive 3D demo
- **/contact** - Contact form

## Tech Stack

### Core
- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animation
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library

## Development

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Lint code:
```bash
npm run lint
```

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Static Export
To export as static HTML:

1. Uncomment `output: 'export'` in [next.config.ts](next.config.ts:6)
2. Run `npm run build`
3. Deploy the `out` folder to any static hosting service

## Customization

### Adding New Templates
1. Add template data to `/templates/[slug]/page.tsx`
2. Add the template to the gallery in `/templates/page.tsx`

### Adding Certifications & Licenses
1. Edit `src/app/certifications/page.tsx`
2. Add to the `certifications` or `licenses` array:
   ```typescript
   {
     id: 2,
     title: "Your Certification Name",
     issuer: "Issuing Organization",
     date: "January 2025",
     credentialId: "CERT-12345",
     description: "What this certification demonstrates",
     category: "Development",
     image: "/certificates/cert-name.png", // Optional
   }
   ```
3. Optionally add images to `public/certificates/` or `public/licenses/`
4. Uncomment the image display code in the component if using images

### Adding 3D Components
1. Create new component in `src/components/`
2. Use `"use client"` directive for client-side rendering
3. Import dynamically with `next/dynamic` for better performance

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Purple/Slate theme (customizable in Tailwind)

## Performance Tips

- 3D components are lazy-loaded with dynamic imports
- Images are automatically optimized by Next.js
- Static pages are pre-rendered for fast loading
- Code splitting is handled automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Rosendo Torres - [contact@rosendotorres.com](mailto:contact@rosendotorres.com)

Portfolio: [https://rosendotorres.com](https://rosendotorres.com)
