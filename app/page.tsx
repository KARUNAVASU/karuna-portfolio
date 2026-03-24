import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Publications />
      <Resume />
      <Contact />
      <footer className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-200 dark:border-neutral-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950"></div>
        <div className="relative text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-2">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <span className="gradient-text font-semibold">Karuna Vasu</span>
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}

