import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 dark:bg-codary-darker/95 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-codary-red/10' 
          : 'bg-white/0 dark:bg-codary-black/0 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center space-x-2 group">
            <img src={codaryLogo} alt="Codary" className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
            <span className={`text-2xl font-bold transition-colors ${isScrolled || isMenuOpen ? 'text-codary-black dark:text-white' : 'text-codary-black dark:text-white'}`}>
              Codary
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                className={`font-medium transition-colors hover:text-codary-red dark:hover:text-codary-red cursor-pointer ${
                  isScrolled ? 'text-gray-600 dark:text-white/80' : 'text-gray-800 dark:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-codary-red/10 text-gray-600 dark:text-red-100/80' 
                  : 'bg-white/20 text-gray-800 dark:text-white hover:bg-white/30'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-codary-red/10 text-gray-600 dark:text-red-100/80' 
                  : 'bg-white/20 text-gray-800 dark:text-white'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? 'text-gray-600 dark:text-red-100/80' : 'text-gray-800 dark:text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-codary-darker/95 backdrop-blur-md border-t border-gray-100 dark:border-codary-red/10 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }} 
                  className="block w-full text-left px-4 py-3 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-codary-red dark:hover:text-codary-red hover:bg-gray-50 dark:hover:bg-codary-red/5 rounded-xl transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
