# KAISEZLE Company Website

A modern, responsive company website for KAISEZLE, showcasing software solutions and premium consumer goods. Built with React, TypeScript, and Tailwind CSS for a fast, beautiful user experience.

## Overview

This is the official website for KAISEZLE, a company that operates at the intersection of technology and lifestyle. The website features:

- **Hero Section**: Eye-catching landing area with company branding
- **Software Solutions**: Showcase of software products and services
- **Products Section**: Display of premium consumer goods
- **About Section**: Company mission, values, and story
- **Contact Section**: Functional contact form with EmailJS integration
- **Navigation & Footer**: Seamless site navigation and company information

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Contact form email service
- **Supabase** - Backend services (configured)
- **Lucide React** - Modern icon library

## Features

- 🎨 Modern, responsive design with gradient backgrounds and smooth animations
- 📱 Fully mobile-responsive layout
- 📧 Contact form with EmailJS integration (sends to info@kaisezle.com)
- ⚡ Fast performance with Vite's optimized build
- 🔒 Type-safe codebase with TypeScript
- 🎯 SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webpage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see [EmailJS Setup Guide](./EMAILJS_SETUP.md)):
```bash
cp .env.example .env
# Edit .env with your EmailJS credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
webpage/
├── src/
│   ├── components/        # React components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProductsSection.tsx
│   │   └── SoftwareSection.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

## EmailJS Configuration

The contact form uses EmailJS to send emails. See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed setup instructions.

## Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory, ready to be deployed to any static hosting service.

## License

Private - All rights reserved
