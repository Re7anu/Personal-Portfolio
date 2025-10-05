# Software Requirements Specification - Rehan Hussain Portfolio

## Problem Statement
Rehan Hussain, CS student at NUST and Data Scientist, needs a professional portfolio website to showcase technical skills, projects, and experience to recruiters and collaborators.

## Tech Stack
Next.js 15, React, TypeScript, Tailwind CSS v4, Framer Motion, Supabase, Resend API

## Functional Requirements

**FR1: Navigation** - Fixed navbar with smooth scroll, dark/light theme toggle, active section highlighting, mobile responsive  
**FR2: Hero** - Name/title display, animated background, CTA buttons (View Work, Download Resume), social links  
**FR3: About** - Professional bio, skills grid (Python, JavaScript, C++, Java, SQL, TensorFlow, AWS, etc.)  
**FR4: Projects** - 4 project cards with title, description, tech tags, GitHub/demo links (ML Portfolio Optimizer, CT Scan Classifier, DSAchain, News App)  
**FR5: Resume** - Timeline of experience, education (NUST, Dubai Gem), awards, certifications, download button  
**FR6: Contact Form** - Name/email/message fields, validation, Supabase storage, dual emails via Resend (notification to Rehan + confirmation to sender)  
**FR7: Footer** - Copyright, quick links, social icons

## Non-Functional Requirements

**Performance:** Page load <3s, Lighthouse score >90, optimized images, code splitting  
**Responsive:** Mobile-first 320px-4K, touch-friendly (44x44px targets), cross-browser tested  
**Accessibility:** WCAG 2.1 AA, semantic HTML, keyboard nav, ARIA labels, 4.5:1 contrast  
**Security:** Environment variables for API keys, server-side validation, HTTPS, SQL injection prevention, rate limiting  
**Design:** Deep purple accent (#6B21A8), soft gray background (#F3F4F6), Manrope/Inter fonts, pill buttons with gradients, wavy dividers, scroll animations  
**Scalability:** Supabase handles 10K+ submissions, Resend 3K emails/month, static generation, serverless

## Data Model
**contact_submissions:** id (UUID), name (TEXT), email (TEXT), message (TEXT), created_at (TIMESTAMP)

## Environment Variables
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`

## Success Criteria
Cross-browser/device compatibility, functional contact form with email notifications, correct personal info, persistent theme, working resume download, valid external links, Lighthouse scores >90
