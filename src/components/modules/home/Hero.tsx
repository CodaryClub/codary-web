import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import codaryLogo from '../../../assets/icons/codary.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent transition-colors duration-300">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-codary-red/10 rounded-full blur-2xl filter opacity-50 animate-pulse will-change-[filter,opacity]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-12 relative mt-24 md:mt-0">
            <div className="absolute inset-0 bg-codary-red/20 blur-3xl rounded-full transform scale-150 will-change-[filter]" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 will-change-transform"
            >
              <img src={codaryLogo} alt="Codary" className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-codary-black to-codary-red dark:from-red-400 dark:to-codary-red">
              Codary
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-3xl text-gray-600 dark:text-red-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Innovación en código, <span className="text-codary-red font-semibold">comunidad en acción</span>.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            <a href="#technologies" className="px-10 py-4 bg-codary-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-codary-red/50 hover:-translate-y-1 flex items-center justify-center group">
              Descubre Más
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-4 bg-white/10 backdrop-blur-sm dark:bg-white/5 text-codary-black dark:text-red-50 border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:border-codary-red hover:text-codary-red dark:hover:border-codary-red dark:hover:text-codary-red transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
              Únete al Club
            </a>
          </motion.div>

          {/* Key Info Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            {[
              { label: 'Miembros', value: '+500' },
              { label: 'Proyectos', value: '20+' },
              { label: 'Eventos', value: 'Semanal' },
              { label: 'Comunidad', value: 'Activa' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-codary-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-red-400 dark:to-codary-red mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-red-200/70 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
