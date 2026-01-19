import { motion } from 'framer-motion';
import { Users, Zap, Award, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Comunidad Activa',
    description: 'Únete a más de 500 desarrolladores apasionados que comparten conocimientos diariamente.',
    icon: Users,
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    iconText: 'text-blue-600 dark:text-blue-300',
  },
  {
    title: 'Aprendizaje Acelerado',
    description: 'Nuestra metodología práctica te permite dominar nuevas tecnologías en tiempo récord.',
    icon: Zap,
    bg: 'bg-teal-100 dark:bg-teal-900/30',
    iconText: 'text-teal-600 dark:text-teal-300',
  },
  {
    title: 'Proyectos Reales',
    description: 'Construye portafolio trabajando en soluciones para problemas del mundo real.',
    icon: Rocket,
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    iconText: 'text-purple-600 dark:text-purple-300',
  },
  {
    title: 'Certificación',
    description: 'Obtén reconocimiento por tus logros y habilidades demostradas en el club.',
    icon: Award,
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconText: 'text-yellow-600 dark:text-yellow-300',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-codary-black dark:text-white mb-4"
          >
            ¿Por qué elegir Codary?
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            No somos solo un club, somos tu plataforma de lanzamiento al éxito profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }} 
              className="p-6 rounded-2xl bg-white dark:bg-codary-black border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`h-7 w-7 ${feature.iconText}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-codary-black dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};