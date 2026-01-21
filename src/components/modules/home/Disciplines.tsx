import { motion } from 'framer-motion';
import { Globe, Smartphone, BrainCircuit } from 'lucide-react';

const disciplines = [
  {
    title: 'Desarrollo Web',
    description: 'Domina el frontend y backend con tecnologías modernas como React, Node.js y Next.js.',
    icon: Globe,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    title: 'Apps Móviles',
    description: 'Crea experiencias nativas y multiplataforma para iOS y Android usando React Native y Flutter.',
    icon: Smartphone,
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-100'
  },
  {
    title: 'IA & Machine Learning',
    description: 'Explora el futuro con Python, TensorFlow y algoritmos de aprendizaje automático.',
    icon: BrainCircuit,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  }
];

export const Disciplines = () => {
  return (
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-codary-black dark:text-white mb-4">Nuestras Disciplinas</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explora las áreas tecnológicas donde nuestros miembros desarrollan su potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {disciplines.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border ${item.border} dark:border-gray-800 hover:shadow-xl transition-all duration-300 bg-white dark:bg-codary-black group`}
            >
              <div className={`w-14 h-14 ${item.bg} dark:bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-7 w-7 ${item.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-codary-black dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
