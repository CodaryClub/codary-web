import { ContactForm } from '../components/modules/contact/ContactForm';
import { Location } from '../components/modules/contact/Location';
import { FAQ } from '../components/modules/contact/FAQ';

export const Contact = () => {
  return (
    <div className="bg-codary-darker min-h-screen">
      <ContactForm />
      <FAQ />
      <Location />
    </div>
  );
};
