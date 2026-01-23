import { motion, useScroll, useSpring } from 'framer-motion';
import { Target, Lightbulb, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    tag: 'Génesis',
    title: 'El Big Bang del Código',
    description: 'Nacimos con la convicción de que el código no es solo lógica, sino el lenguaje que esculpe el futuro de la humanidad.',
    icon: Sparkles,
  },
  {
    year: 'Misión',
    tag: 'Impacto',
    title: 'Arquitectura de Talento',
    description: 'Nuestra misión es forjar a los líderes tecnológicos del mañana a través de una inmersión radical en proyectos de alto impacto.',
    icon: Target,
  },
  {
    year: 'Visión',
    tag: 'Futuro',
    title: 'Ecosistema Global',
    description: 'Aspiramos a ser el epicentro de innovación más influyente, donde cada línea de código sea una semilla de cambio real.',
    icon: Lightbulb,
  },
];

export const History = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-20 pt-10 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-black text-codary-black dark:text-white mb-8 tracking-tighter">
            Nuestra <span className="text-codary-red">Historia</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Un viaje desde la curiosidad pura hasta la creación de un ecosistema tecnológico sin fronteras.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gray-100 dark:bg-white/5" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-codary-red via-red-400 to-transparent z-10" 
          />

          <div className="space-y-24 md:space-y-40">
            {milestones.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full pl-12 md:pl-0">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`glass-card p-10 rounded-[2.5rem] relative overflow-hidden group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-4 rounded-2xl bg-codary-red/10 text-codary-red group-hover:bg-codary-red group-hover:text-white transition-all duration-500">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-codary-red transition-colors">
                        {item.tag} — {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-codary-black dark:text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-codary-red/5 rounded-full blur-3xl group-hover:bg-codary-red/10 transition-colors" />
                  </motion.div>
                </div>
                
                <div className="absolute left-[20px] md:static md:flex items-center justify-center w-0 md:w-20">
                   <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-20"
                   >
                     <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white dark:bg-codary-darker border-4 border-codary-red shadow-[0_0_20px_rgba(230,57,70,0.5)]" />
                   </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
