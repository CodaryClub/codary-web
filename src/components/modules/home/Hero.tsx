import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import codaryLogo from '../../../assets/icons/codary.png';
import matrixGif from '../../../assets/icons/matrix-code.gif';

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] pt-32 md:pt-32 pb-20 overflow-hidden bg-transparent transition-colors duration-300">
      <div className="absolute inset-0 -z-30 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.15] transition-opacity duration-300"
          style={{ 
            backgroundImage: `url(${matrixGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'hue-rotate(250deg) saturate(250%) brightness(0.6)',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), radial-gradient(circle at center, black 25%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), radial-gradient(circle at center, black 25%, transparent 90%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-10 md:mb-16 relative mt-0 md:mt-10">
            <div className="absolute inset-0 bg-codary-red/15 blur-[80px] rounded-full transform scale-140 animate-pulse" />
            
            <motion.div 
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 will-change-transform"
            >
              <img 
                src={codaryLogo} 
                alt="Codary" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain filter drop-shadow-[0_20px_50px_rgba(230,57,70,0.4)]" 
              />
            </motion.div>
          </div>
          
          <div className="space-y-8 mb-16 md:mb-24">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-9xl font-black tracking-tighter"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-codary-red filter drop-shadow-sm">
                Codary
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-4xl text-red-100/90 max-w-4xl mx-auto font-light leading-tight tracking-tight px-6"
            >
              <span className="font-semibold text-gray-200"> Innovación en código,</span> <span className="text-codary-red font-bold text-glow">comunidad en acción</span>
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-10 md:mb-24 items-center"
          >
            <a 
              href="#technologies" 
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-codary-red text-white rounded-full font-black text-lg md:text-xl hover:bg-red-700 transition-all shadow-[0_20px_40px_rgba(230,57,70,0.3)] hover:shadow-[0_25px_50px_rgba(230,57,70,0.4)] hover:-translate-y-2 flex items-center justify-center group active:scale-95"
            >
              Descubre Más
              <ChevronRight className="ml-2 h-6 md:h-7 w-6 md:w-7 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 glass-card text-red-50 border border-white/10 rounded-full font-black text-lg md:text-xl hover:border-codary-red hover:text-codary-red transition-all hover:-translate-y-2 active:scale-95 shadow-xl"
            >
              Únete al Club
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
