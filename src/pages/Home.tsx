import { Hero } from '../components/modules/home/Hero';
import { Technologies } from '../components/modules/home/Technologies';
import { WhyChooseUs } from '../components/modules/home/WhyChooseUs';
import { Disciplines } from '../components/modules/home/Disciplines';
import { Sponsors } from '../components/modules/home/Sponsors';
import { History } from '../components/modules/about/History';
import { Team } from '../components/modules/about/Team';
import { ContactForm } from '../components/modules/contact/ContactForm';
import { Location } from '../components/modules/contact/Location';

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-codary-darker transition-colors duration-300">
      {/* Fixed Global Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-codary-red/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-codary-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-codary-red/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <WhyChooseUs />
        <Sponsors />
        <div id="disciplines">
          <Disciplines />
        </div>
        <div id="about">
          <div id="history">
            <History />
          </div>
          <div id="team">
            <Team />
          </div>
        </div>
        <div id="contact">
          <ContactForm />
          <Location />
        </div>
      </div>
    </div>
  );
};
