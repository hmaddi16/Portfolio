import Head from 'next/head';
import {Header} from '../sections/Header';
import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { ProjectsSection } from '@/sections/Projects';
import { ExperienceSection } from '@/sections/Experience';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}
