import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import codaryLogo from '../../assets/icons/codary.png';

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Disciplinas', id: 'disciplines' },
    { name: 'Historia', id: 'history' },
    { name: 'Equipo', id: 'team' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-gray-100/80 dark:bg-codary-darker/70 backdrop-blur-xl border-2 border-gray-500/10 shadow-2xl shadow-black/5' 
          : 'py-8 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-codary-red/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              <img src={codaryLogo} alt="Codary" className="h-10 w-10 md:h-12 md:w-12 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
            </div>
            <span className="text-2xl font-bold text-codary-black dark:text-white">
              Codary
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                className="relative text-sm font-black uppercase tracking-[0.2em] text-codary-black/80 dark:text-white/80 hover:text-codary-red transition-colors group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-codary-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-2" />

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-white/5 border border-gray-500/10 hover:bg-gray-500/10 text-codary-black dark:text-white transition-all shadow-sm"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-white/5 border border-white/5 text-codary-black dark:text-white"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-codary-black dark:text-white"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] md:hidden bg-white dark:bg-codary-darker flex flex-col justify-center px-12"
          >
            <div className="space-y-12">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                  className="flex items-center justify-between group py-4 border-b border-gray-100 dark:border-white/5"
                >
                  <span className="text-4xl font-black uppercase tracking-tighter text-codary-black dark:text-white group-hover:text-codary-red transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight className="text-codary-red opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center text-xs font-black uppercase tracking-[0.3em] text-gray-400">
               <span>Codary Elite Club</span>
               <div className="flex gap-4">
                  <span className="w-8 h-px bg-codary-red" />
                  <span className="text-codary-red">2026</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
