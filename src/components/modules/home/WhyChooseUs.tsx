import { motion } from 'framer-motion';
import { Users, Zap, Award, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Élite Colaborativa',
    description: 'Únete a un núcleo de desarrolladores apasionados que iteran y comparten conocimiento en tiempo real.',
    icon: Users,
    color: '#3b82f6',
    delay: 0.1
  },
  {
    title: 'Velocidad Radical',
    description: 'Metodologías de alto rendimiento diseñadas para que domines tecnologías complejas antes que el resto.',
    icon: Zap,
    color: '#10b981',
    delay: 0.2
  },
  {
    title: 'Impacto Real',
    description: 'No hacemos demos. Construimos soluciones de ingeniería que resuelven problemas reales del ecosistema.',
    icon: Rocket,
    color: '#a855f7',
    delay: 0.3
  },
  {
    title: 'Prestigio Codary',
    description: 'Obtén el reconocimiento de una marca que simboliza excelencia técnica y compromiso con la calidad.',
    icon: Award,
    color: '#f59e0b',
    delay: 0.4
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 pt-10 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-codary-black dark:text-white mb-8 tracking-tighter"
          >
            ¿Por qué <span className="text-codary-red">Codary</span>?
          </motion.h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Más que un club, somos el acelerador de partículas para tu carrera en la ingeniería de software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12 }}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group border-white/10"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-codary-black dark:text-white tracking-tight group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>

              <div 
                className="absolute top-0 right-0 w-1 h-0 group-hover:h-full transition-all duration-700"
                style={{ backgroundColor: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
