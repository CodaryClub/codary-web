import { motion } from 'framer-motion';
import { Calendar, Target, Lightbulb } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'El Inicio',
    description: 'Nacimos con la convicción de que el código es el lenguaje del futuro. Un pequeño grupo de estudiantes con una gran visión.',
    icon: Calendar,
  },
  {
    year: 'Misión',
    title: 'Empoderar',
    description: 'Nuestra misión es formar a la próxima generación de líderes tecnológicos a través de educación práctica y mentoría.',
    icon: Target,
  },
  {
    year: 'Visión',
    title: 'Innovar',
    description: 'Aspiramos a ser el ecosistema de talento más influyente de la región, donde la creatividad no tiene límites.',
    icon: Lightbulb,
  },
];

export const History = () => {
  return (
    <section className="py-20 bg-transparent transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-codary-black dark:text-white mb-6">
            Nuestra <span className="text-codary-red">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            De una idea en una cafetería a una comunidad vibrante de desarrolladores.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-100 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full md:w-auto">
                  <div className={`p-8 rounded-2xl bg-white dark:bg-codary-black border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-3 rounded-lg bg-codary-red/10 dark:bg-codary-red/20">
                        <item.icon className="h-6 w-6 text-codary-red" />
                      </div>
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-codary-black dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center w-8 md:w-12">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-codary-red border-4 border-white dark:border-codary-darker z-10 shadow-lg" />
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
