# Karuna Vasu - Portfolio

A modern, professional portfolio website showcasing my work as a Full-Stack Python Developer specializing in automation platforms, AI-assisted workflows, and scalable backend systems.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Theme Toggle**: Dark and light mode support with system preference detection
- **Fast**: Built with Next.js 14 and optimized for performance
- **SEO Optimized**: Proper metadata and structure
- **Resume Section**: Download and view resume directly from the portfolio
- **Mobile Menu**: Hamburger menu for mobile navigation

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **next-themes** (theme management)
- **Vercel** (deployment)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd karuna-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

Your portfolio will be live at `https://karuna-portfolio.vercel.app`

### Custom Domain

You can add a custom domain later in Vercel settings.

## 📝 Customization

### Update Contact Information

Edit `app/components/Contact.tsx` and replace:
- Email address
- GitHub username
- LinkedIn profile URL

### Update Projects

Edit the `projects` array in `app/components/Projects.tsx`

### Update Experience

Edit `app/components/Experience.tsx`

### Update Skills

Edit the `skillCategories` array in `app/components/Skills.tsx`

### Add Resume PDF

1. Create a `public` folder in the root directory if it doesn't exist
2. Add your resume PDF file named `resume.pdf` to the `public` folder
3. The Resume section will automatically link to it

### Theme Customization

The portfolio supports both dark and light themes. Users can toggle between themes using the theme toggle button in the navigation. The theme preference is saved and persists across sessions.

### Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 📄 License

This project is open source and available under the MIT License.

