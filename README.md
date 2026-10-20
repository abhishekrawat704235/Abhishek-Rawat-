<<<<<<< HEAD
# ⚡ Abhishek Rawat — Cinematic AI Engineer Portfolio

A complete, production-ready personal portfolio website for **Abhishek Rawat (Aspiring AI Engineer & Full Stack Developer)**. Featuring a custom scroll-controlled 240-frame head-turning portrait animation powered by **React 18**, **TypeScript**, **GSAP ScrollTrigger**, and hardware-accelerated **HTML5 Canvas**.

---

## 🌟 Key Highlights

1. **Scroll-Driven 240-Frame Portrait Animation**:
   - Uses Abhishek's real photographs (`ezgif-frame-240.jpg` down to `ezgif-frame-001.jpg`).
   - Starting from a natural left-profile angle, Abhishek's face smoothly turns towards the viewer as the user scrolls down, locking into a confident frontal gaze.
   - Reversible in real-time when scrolling upwards.
   - Fluid inertia (Lerp factor `0.085`) on `requestAnimationFrame` with zero flicker, zero distorting CSS transforms, and no artificial AI replacement faces.
   - Pinned viewport with GSAP ScrollTrigger.
2. **Editable Manifest**:
   - Located at `src/data/manifest.ts` — customize frame order, reverse, or adjust frame range without modifying any animation logic.
3. **Cinematic Studio Aesthetic**:
   - Palette tailored directly to Abhishek's studio portrait lighting (Crimson / Violet / Obsidian).
   - Glassmorphism panels, subtle gradients, and crisp typography (`Plus Jakarta Sans` & `Outfit`).
4. **Complete Multi-Section Layout**:
   - **Navigation**: Floating glass navbar with mobile drawer and smooth anchor scroll.
   - **Hero**: Pinned canvas portrait animation with narrative overlay and interactive scroll indicator.
   - **About Me**: Academic background (BCA at Manipal University Jaipur), interests, and career goals.
   - **Technical Skills**: Structured categories with proficiency tags (Python, Java, React, TypeScript, Spring Boot, MySQL, MongoDB, Git).
   - **Featured Projects**: Interactive project cards with technology pills, GitHub links, and live previews.
   - **Education & Experience**: Structured credentials and competitive programming milestones.
   - **Certificates**: Interactive accreditation gallery with full-screen modal preview.
   - **Contact**: Functional contact form UI and direct email, GitHub, and LinkedIn links.
   - **Footer**: Brand signoff, social icons, and smooth scroll to top.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: Ensure Node.js (v18 or higher) is installed. You can check by opening PowerShell or Command Prompt and running:
  ```bash
  node -v
  ```
  If not installed, download from [nodejs.org](https://nodejs.org).

### 2. Opening in VS Code
1. Open Visual Studio Code.
2. Go to **File** > **Open Folder...**
3. Select the `my-portfolio` folder (`c:\Users\Abhishek Rawat\OneDrive\Desktop\MY APP\my-portfolio`).

### 3. Installing Dependencies
In the VS Code integrated terminal (`Ctrl + ~`):

```bash
npm install
```
*(Windows Note: If PowerShell shows a script execution policy notice, run `npm.cmd install` instead).*

### 4. Running the Website Locally
To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Vite will start the server at:
👉 **`http://localhost:5173`**

Click the link or open it in your browser to interact with the smooth scroll animation!

### 5. Building for Production
To generate an optimized production bundle:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 📁 Project Folder Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg                       # Personal branded favicon
│   └── images/
│       ├── portrait/                     # 240 HD portrait animation frames
│       │   ├── ezgif-frame-001.jpg       # Direct front view (Frame 1)
│       │   ├── ...                       # Intermediate turning angles
│       │   └── ezgif-frame-240.jpg       # Left profile (Frame 240)
│       ├── projects/                     # High-res project preview graphics
│       │   ├── project-neuralmotion.svg
│       │   ├── project-ecommerce.svg
│       │   ├── project-ml.svg
│       │   └── project-algo.svg
│       └── certificates/                 # Certificate preview graphics
│           ├── cert-ai.svg
│           ├── cert-react.svg
│           └── cert-java.svg
│
├── src/
│   ├── animations/
│   │   └── PortraitScrollAnimation.tsx   # Canvas + GSAP ScrollTrigger engine
│   ├── components/
│   │   ├── Navbar.tsx                    # Floating frosted navigation bar
│   │   ├── HeroContent.tsx               # Hero typography and scroll prompts
│   │   ├── SectionHeading.tsx            # Reusable section header
│   │   └── Footer.tsx                    # Footer with back-to-top button
│   ├── data/
│   │   ├── manifest.ts                   # 🌟 Editable image sequence manifest
│   │   └── portfolioData.ts              # 🌟 All personal details, bio, skills & projects
│   ├── sections/
│   │   ├── HeroSection.tsx               # Hero wrapper
│   │   ├── AboutSection.tsx              # About & Academic background
│   │   ├── SkillsSection.tsx             # Technical skill categories
│   │   ├── ProjectsSection.tsx           # Featured project showcase
│   │   ├── ExperienceSection.tsx         # Education & Experience timeline
│   │   ├── CertificatesSection.tsx       # Certificate gallery with modal
│   │   └── ContactSection.tsx            # Contact channels & interactive form
│   ├── styles/
│   │   └── index.css                     # Tailwind CSS and cinematic glassmorphism
│   ├── App.tsx                           # Master application component
│   └── main.tsx                          # React DOM entry point
│
├── index.html                            # HTML entry point with Google Fonts
├── package.json                          # Scripts & dependencies
├── tsconfig.json                         # TypeScript configuration
├── vite.config.ts                        # Vite bundler configuration
└── tailwind.config.js                    # Custom palette & cinematic tokens
```

---

## 🎨 How to Customize Your Portfolio

### 1. Modifying the Head-Turning Animation Sequence
Open `src/data/manifest.ts`:
- The default sequence iterates from `ezgif-frame-240.jpg` down to `ezgif-frame-001.jpg`.
- You can change the starting angle, reverse the direction, or sample every 2nd frame by modifying this array.
- The canvas engine reads directly from this manifest and automatically synchronizes with GSAP ScrollTrigger.

### 2. Updating Your Name, Bio & Social Links
Open `src/data/portfolioData.ts`:
- Under `portfolioData.personal`:
  - `name`: Change your display name.
  - `title`: Update your professional headline.
  - `email`, `phone`, `github`, `linkedin`: Update your contact details.
  - `tagline` & `bio`: Edit your elevator pitch.

### 3. Adding or Updating Projects
Open `src/data/portfolioData.ts`:
- Scroll to `portfolioData.projects`:
  - Add or modify items in the array.
  - Specify `title`, `description`, `technologies`, `githubUrl`, and `liveUrl`.
  - Drop your project screenshot in `public/images/projects/` and reference it in the `image` property.

### 4. Updating Skills & Education
Open `src/data/portfolioData.ts`:
- Update `portfolioData.skills` to adjust proficiency levels (`Proficient`, `Intermediate`, `Exploring`).
- Update `portfolioData.education` to add degrees, coursework, or academic milestones.

### 5. Connecting the Contact Form to a Backend
The contact form in `src/sections/ContactSection.tsx` includes complete front-end validation. To send real emails:
- **Option A (Formspree)**: Create a free account at [formspree.io](https://formspree.io) and replace the form action with your Formspree endpoint.
- **Option B (EmailJS)**: Install `@emailjs/browser` and trigger `emailjs.sendForm()` on submission.

---

## 🛠️ Troubleshooting Common Questions

| Issue | Solution |
| :--- | :--- |
| **`npm : File npm.ps1 cannot be loaded...`** | In Windows PowerShell, run `npm.cmd install` or execute `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` in PowerShell. |
| **Port 5173 is already in use** | Vite automatically picks the next available port (e.g. `5174`). You can specify a port in `vite.config.ts` or run `npm run dev -- --port 3000`. |
| **Images not updating after replacing files** | Hard refresh your browser (`Ctrl + Shift + R`) to clear browser cache. |

---

Built with ❤️ for **Abhishek Rawat**
=======
# Abhishek-Rawat-
THIS IS MY  PORTFOLIO WEB SITE 
>>>>>>> 78d614704b76d8adaf17a60ebce843661a67b216
