import { Hero } from '../components/modules/home/Hero';
import { Technologies } from '../components/modules/home/Technologies';
import { WhyChooseUs } from '../components/modules/home/WhyChooseUs';
import { Disciplines } from '../components/modules/home/Disciplines';
import { Sponsors } from '../components/modules/home/Sponsors';
import { History } from '../components/modules/about/History';
import { Team } from '../components/modules/about/Team';
import { ContactForm } from '../components/modules/contact/ContactForm';
import { Location } from '../components/modules/contact/Location';
import { Discover } from '../components/modules/home/Discover';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-codary-darker transition-colors duration-300">
      <div 
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(230, 57, 70, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 40%, rgba(230, 57, 70, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 20% 100%, rgba(230, 57, 70, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10">
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        <Discover />
        <div id="technologies" className="scroll-mt-20">
          <Technologies />
        </div>
        <WhyChooseUs />
        <Sponsors />
        <div id="disciplines" className="scroll-mt-20">
          <Disciplines />
        </div>
        <div id="about">
          <div id="history" className="scroll-mt-20">
            <History />
          </div>
          <div id="team" className="scroll-mt-20">
            <Team />
          </div>
        </div>
        <div id="contact" className="scroll-mt-20">
          <ContactForm />
          <Location />
        </div>
      </div>
    </div>
  );
};
