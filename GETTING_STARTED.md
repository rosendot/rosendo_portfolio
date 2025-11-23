# Getting Started with Your Portfolio

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Start customizing!**

## What's Included

### Pages (Ready to Customize)

- **Home** ([src/app/page.tsx](src/app/page.tsx)) - Hero section and featured work
- **About** ([src/app/about/page.tsx](src/app/about/page.tsx)) - Your bio and skills
- **Projects** ([src/app/projects/page.tsx](src/app/projects/page.tsx)) - Showcase your work
- **Templates** ([src/app/templates/page.tsx](src/app/templates/page.tsx)) - Template gallery
- **Certifications** ([src/app/certifications/page.tsx](src/app/certifications/page.tsx)) - Certifications and licenses
- **3D Demo** ([src/app/demo/page.tsx](src/app/demo/page.tsx)) - Interactive 3D showcase
- **Contact** ([src/app/contact/page.tsx](src/app/contact/page.tsx)) - Contact form

### Components

- **Navigation** ([src/components/Navigation.tsx](src/components/Navigation.tsx)) - Responsive nav bar
- **Scene3D** ([src/components/Scene3D.tsx](src/components/Scene3D.tsx)) - Basic 3D scene example
- **AnimatedSphere** ([src/components/AnimatedSphere.tsx](src/components/AnimatedSphere.tsx)) - Animated 3D object

## First Steps to Customize

### 1. Update Your Information

**In [src/app/page.tsx](src/app/page.tsx:10):**
- Change "Rosendo Torres" to your name
- Update the tagline and description

**In [src/app/about/page.tsx](src/app/about/page.tsx):**
- Add your bio
- Update skills and offerings
- Customize the content to match your experience

### 2. Add Your Projects

**In [src/app/projects/page.tsx](src/app/projects/page.tsx:5):**
Replace the example projects array with your actual projects:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Description of your project",
    technologies: ["React", "Next.js", "etc"],
    status: "Completed",
  },
  // Add more projects...
];
```

### 3. Customize Templates

**In [src/app/templates/page.tsx](src/app/templates/page.tsx:5):**
Update the templates array with your actual templates.

**In [src/app/templates/[slug]/page.tsx](src/app/templates/[slug]/page.tsx:7):**
Add details for each template.

### 4. Update Contact Information

**In [src/app/contact/page.tsx](src/app/contact/page.tsx):**
- Update email address
- Add your social media links
- Implement form submission (currently just console logs)

### 5. Customize Colors

The site uses a purple/slate color scheme. To change it:

**In [tailwind.config.ts](tailwind.config.ts):**
Add custom colors in the theme.extend section.

**Or replace throughout the codebase:**
- `purple-600` → your primary color
- `slate-900` → your dark background
- Search and replace across all files

## Adding Certifications & Licenses

**In [src/app/certifications/page.tsx](src/app/certifications/page.tsx:5):**

Add new certifications to the array:
```typescript
const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "January 2025",
    credentialId: "AWS-12345",
    description: "Demonstrates ability to develop and maintain applications on AWS",
    category: "Cloud",
    image: "/certificates/aws-developer.png", // Optional
  },
  // Add more...
];
```

Add new licenses to the array:
```typescript
const licenses = [
  {
    id: 1,
    title: "Professional Engineer License",
    issuer: "State Engineering Board",
    date: "January 2025",
    licenseNumber: "PE-12345",
    expiryDate: "January 2028",
    description: "Licensed to practice professional engineering",
    category: "Professional",
    image: "/licenses/pe-license.png", // Optional
  },
  // Add more...
];
```

**To add certificate/license images:**
1. Place images in `public/certificates/` or `public/licenses/`
2. Add the `image` property to your certification/license object
3. Uncomment the image display code in the page

## Adding 3D Content

### Create a New 3D Component

1. Create a file in `src/components/` (e.g., `MyScene.tsx`)
2. Use the `"use client"` directive at the top
3. Import from `@react-three/fiber` and `@react-three/drei`
4. Example:

```typescript
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function MyScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
```

### Use the Component

Import it dynamically for better performance:

```typescript
import dynamic from "next/dynamic";

const MyScene = dynamic(() => import("@/components/MyScene"), {
  ssr: false,
  loading: () => <div>Loading 3D...</div>,
});
```

## Deployment

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Option 2: Static Export

1. In [next.config.ts](next.config.ts:6), uncomment:
   ```typescript
   output: 'export',
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out` folder to:
   - GitHub Pages
   - Netlify
   - Any static hosting service

## Common Tasks

### Add a New Page

1. Create a folder in `src/app/` (e.g., `blog`)
2. Add a `page.tsx` file inside
3. Update [src/components/Navigation.tsx](src/components/Navigation.tsx:12) to add the link

### Implement Contact Form

The contact form currently logs to console. To make it functional:

**Option 1: Use a service like Formspree or EmailJS**

**Option 2: Create an API route:**
1. Create `src/app/api/contact/route.ts`
2. Implement POST handler
3. Update form submission in [src/app/contact/page.tsx](src/app/contact/page.tsx:14)

### Add Images

1. Place images in the `public/` folder
2. Use Next.js Image component:
   ```typescript
   import Image from "next/image";

   <Image src="/your-image.jpg" alt="Description" width={500} height={300} />
   ```

## Tips

- **Hot Reload:** Changes auto-update in the browser
- **TypeScript:** Use types for better development experience
- **3D Performance:** Lazy load heavy 3D components
- **Mobile:** Test on mobile devices - everything is responsive
- **SEO:** Update metadata in each `page.tsx` file

## Need Help?

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Three.js Docs: [threejs.org/docs](https://threejs.org/docs)
- React Three Fiber: [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Next Steps

1. Customize the content with your information
2. Add your actual projects and work
3. Create custom 3D animations
4. Deploy to production
5. Share your portfolio with the world!

Happy coding! 🚀
