# 🌿 Les Jardins de Wesserling — Website

A multilingual, SEO-optimised website for **Les Jardins de Wesserling**, an association dedicated to preserving and promoting the natural and cultural heritage of the Wesserling gardens.

Built with **Next.js**, **React 19**, **TypeScript**, **TailwindCSS**, and a custom **JSON-based i18n system**.  
The website presents the association, its social mission, the vegetable garden, the restaurant, festive events, partners, and ways to support or participate.

---

## ✨ Features

- 🌍 **Multilingual**
  - French (default), English, German
  - Custom JSON i18n system (no external package)
  - Localised routes under `/[locale]`

- 🧭 **Navigation**
  - Responsive desktop and mobile menus
  - Accessible navigation structure
  - Locale-aware internal links

- 🎨 **Design**
  - TailwindCSS
  - Reusable layout and content components
  - Responsive design
  - Image-focused content sections
  - Fabric and heritage-inspired visual identity

- 🖼️ **Images & Media**
  - Optimised with Next.js `<Image />`
  - SEO-friendly alt text
  - Responsive images and logos

- 📄 **Structured Content**
  - Garden presentation
  - Restaurant
  - Festive activities
  - Association pages
  - Social mission
  - Partners and funders
  - Support and participation
  - Contact page

- 🔎 **SEO-focused**
  - Localised metadata
  - Semantic HTML structure
  - Optimised heading hierarchy
  - Accessible content and links

- ♿ **Accessibility-focused**
  - Semantic HTML
  - Accessible navigation
  - Keyboard-friendly menus
  - Descriptive labels and alt texts

- 🔒 **Lightweight & Maintainable**
  - Minimal dependencies
  - Custom i18n system
  - Strong TypeScript usage
  - Server components by default

---

## 🛠️ Tech Stack

- **Next.js**
- **React 19**
- **TypeScript**
- **TailwindCSS**
- **Radix UI**
- **Custom JSON i18n**
- **Vercel deployment**

---

## 📁 Project Structure

```text
les-jardins-de-wesserling/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── page.tsx
│   │       │
│   │       ├── garden/
│   │       │   └── page.tsx
│   │       │
│   │       ├── restaurant/
│   │       │   └── page.tsx
│   │       │
│   │       ├── festive/
│   │       │   └── page.tsx
│   │       │
│   │       ├── about/
│   │       │   ├── association/
│   │       │   ├── mission/
│   │       │   ├── partners/
│   │       │   └── support-us/
│   │       │
│   │       └── contact/
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LinkButton.tsx
│   │   │
│   │   └── navbar/
│   │       ├── DesktopMenu.tsx
│   │       ├── LocaleSwitcher.tsx
│   │       ├── MobileMenu.tsx
│   │       └── Navbar.tsx
│   │
│   ├── lib/
│   │   ├── i18n.ts
│   │   └── metadata.ts
│   │
│   ├── messages/
│   │   ├── fr.json
│   │   ├── en.json
│   │   └── de.json
│   │
│   └── types/
│       └── i18n.ts
│
├── public/
│   ├── logos/
│   ├── textures/
│   └── photos/
│
└── README.md
```

---

## 🌍 Internationalisation

The project uses a custom **JSON-based i18n system**, without an external translation package.

Translations are stored in:

```text
src/messages/
├── fr.json
├── en.json
└── de.json
```

Pages use helper functions to retrieve both:

- translated content
- localised metadata

Example:

```ts
const { generateMetadata, getPageMessages } =
  createPageHelpers("restaurant");

export { generateMetadata };

const RestaurantPage = async ({ params }: PageProp) => {
  const restaurant = await getPageMessages(params);

  return <h1>{restaurant.title}</h1>;
};
```

---

## 🔎 SEO

Each page includes localised metadata:

```json
{
  "meta": {
    "title": "Page title — Les Jardins de Wesserling",
    "description": "Short and meaningful page description."
  }
}
```

### SEO Good Practices

- Use one clear `<h1>` per page
- Keep heading hierarchy semantic
- Write descriptive page titles
- Use meaningful image alt texts
- Keep descriptions concise and readable
- Ensure metadata exists for every locale
- Prefer descriptive internal link text

---

## ♿ Accessibility

Accessibility is an important part of the project.

### Recommendations

- Use semantic HTML elements
- Ensure keyboard navigation works correctly
- Preserve accessible focus states
- Use meaningful labels for links and icons
- Ensure sufficient colour contrast
- Avoid unnecessary client-side rendering

---

## 🎨 Styling

The project uses Tailwind utility classes for styling.

Common layout structure:

```tsx
<div className="page-layout">
  <h1>Page title</h1>
</div>
```

Reusable components are preferred over duplicated page-specific layouts.

---

## 🔗 Links

Internal links use Next.js navigation.

External links should include:

```tsx
target="_blank"
rel="noopener noreferrer"
```

The `LinkButton` component supports external links through the `external` prop.

Example:

```tsx
<LinkButton
  href="https://example.com"
  external
>
  External website
</LinkButton>
```

---

## 🖼️ Images

Images are stored in `public/`.

The project uses `next/image` for optimisation:

```tsx
<Image
  src="/restau-du-potager-steeve-josch.webp"
  alt="Le Resto du Potager"
  width={600}
  height={400}
/>
```

Imported logos:

```tsx
import logo from "@/public/logos/logo.png";
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Start production build locally

```bash
npm run start
```

---

## 📦 Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 🧹 Code Quality

### Recommended Practices

- Use TypeScript types consistently
- Prefer server components by default
- Avoid unnecessary `"use client"`
- Use reusable typed components
- Keep translations synchronised across locales
- Centralise shared types when possible
- Keep naming conventions consistent

### TypeScript Conventions

- Avoid `React.FC`
- Prefer typed props
- Use PascalCase for components and types
- Keep shared types reusable and explicit

---

## 🚀 Deployment

The project is intended to be deployed on **Vercel**.

Before deployment:

```bash
npm run build
```

Verify:

- all locales build correctly
- metadata is present for every page
- images load correctly
- locale-aware routing works
- external links are accessible and secure
- no TypeScript or ESLint errors remain

---

## 📌 Roadmap / TODO

### 🌍 Internationalisation

- [ ] Complete all English translations
- [ ] Complete all German translations
- [ ] Translate all image alt texts
- [ ] Ensure metadata exists for every locale

### ♿ Accessibility

- [ ] Run full accessibility audit
- [ ] Improve keyboard navigation testing
- [ ] Add automated accessibility checks

### 🧪 Testing

- [ ] Set up Vitest + React Testing Library
- [ ] Add component tests
- [ ] Add navigation tests
- [ ] Add locale routing tests
- [ ] Add accessibility-focused tests

### 🔎 SEO

- [ ] Add sitemap generation
- [ ] Add structured data
- [ ] Improve Open Graph metadata
- [ ] Improve image SEO

### 🎨 UI / UX

- [ ] Improve animations and transitions
- [ ] Add richer image galleries
- [ ] Improve mobile navigation experience

---

## 📄 Notes

This project is adapted from the architecture of the **Gîte Au fil de l’eau** website project, with the same emphasis on:

- multilingual content
- accessibility
- SEO best practices
- reusable components
- maintainable TypeScript architecture
- responsive design
- minimal and controlled dependencies