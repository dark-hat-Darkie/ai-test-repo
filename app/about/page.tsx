import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutMission from '../components/AboutMission';
import AboutValues from '../components/AboutValues';
import TeamBentoGrid from '../components/TeamBentoGrid';
import AboutStats from '../components/AboutStats';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'About Us | X-Force',
  description: 'Learn about the team and mission behind X-Force — the AI-powered development automation platform.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main>
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <TeamBentoGrid />
        <AboutStats />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
