import { Github, Instagram, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import codaryLogo from '../../assets/icons/codary.png';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-codary-darker text-gray-900 dark:text-white pt-12 pb-12 border-t border-gray-100 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-codary-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-10">
          
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <img src={codaryLogo} alt="Codary" className="h-12 w-12" />
              <span className="text-3xl text-gray-900 dark:text-white/80 font-black tracking-tighter">Codary</span>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-sm">
              Innovación en código, <span className="text-codary-red font-bold">comunidad en acción.</span>
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, link: "https://github.com/CodaryClub" },
                { icon: Instagram, link: "https://www.instagram.com/club_codary" },
                { icon: Mail, link: "mailto:codary.club@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-400 hover:text-codary-red dark:hover:text-white transition-all border border-transparent hover:border-codary-red/30 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-codary-red">Explora</h4>
            <ul className="space-y-4">
              {[
                { name: 'Inicio', id: 'home' },
                { name: 'Disciplinas', id: 'disciplines' },
                { name: 'Tecnologías', id: 'technologies' },
                { name: 'Nuestra Historia', id: 'history' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-gray-500 dark:text-gray-400 hover:text-codary-red transition-colors text-lg font-bold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="glass-card p-8 rounded-[2rem] border-white/10 relative overflow-hidden group">
               <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-6 relative z-10 leading-relaxed">
                 ¿Listo para hackear tu futuro? Únete a nuestras sesiones de alto impacto y escala tu carrera técnica.
               </p>
               <a href="#contact" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-codary-red group-hover:gap-4 gap-2 transition-all relative z-10">
                 Enviar Solicitud <ArrowUp className="rotate-45" size={16} />
               </a>
               <div className="absolute inset-0 bg-codary-red/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-black text-gray-400 dark:text-gray uppercase">
            &copy; {new Date().getFullYear()} Codary Elite Club. 
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-sm font-black text-gray-400 hover:text-codary-red transition-colors"
          >
            Volver Arriba
            <div className="p-3 rounded-full bg-gray-50 dark:bg-white/5 border border-transparent group-hover:border-codary-red/30 transition-all shadow-sm">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
