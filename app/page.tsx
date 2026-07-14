import type { Metadata } from "next";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import Projects from "./components/sections/Projects";
import Publications from "./components/sections/Publications";
import Resume from "./components/sections/Resume";
import TechStack from "./components/sections/TechStack";
import SiteNav from "./components/ui/SiteNav";
import StatusMarquee from "./components/ui/StatusMarquee";
import { publications } from "./data/publications";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  channelLinks,
  locationMeta,
  productUrls,
} from "./data/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-container-max bg-deep-black">
      <SiteNav />
      <Hero />
      <About />
      <Experience />
      <Projects botvetaLiveUrl={productUrls.botvetaLive} />
      <TechStack />
      <Publications publication={publications[0]} />
      <Resume />
      <StatusMarquee />
      <Contact channelLinks={channelLinks} locationMeta={locationMeta} />
      <Footer />
    </main>
  );
}
