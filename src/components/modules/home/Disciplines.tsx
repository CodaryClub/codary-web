import { motion } from 'framer-motion';
import { Globe, Smartphone, BrainCircuit, Code2, Database, Shield } from 'lucide-react';

const disciplines = [
  {
    title: 'Arquitectura Web',
    description: 'Ingeniería de alto rendimiento con ecosistemas modernos como React, Node.js y Next.js.',
    icon: Globe,
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.2)'
  },
  {
    title: 'Ecosistemas Móviles',
    description: 'Experiencias nativas fluidas y multiplataforma optimizadas para el usuario moderno.',
    icon: Smartphone,
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.2)'
  },
  {
    title: 'IA & Análisis Viral',
    description: 'Transformamos datos en decisiones inteligentes usando algoritmos de aprendizaje profundo.',
    icon: BrainCircuit,
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.2)'
  },
  {
    title: 'Backend Scalability',
    description: 'Construimos el motor invisible que sostiene aplicaciones de millones de usuarios.',
    icon: Database,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.2)'
  },
  {
    title: 'Seguridad Digital',
    description: 'Blindamos el código y la privacidad con los estándares de encriptación más robustos.',
    icon: Shield,
    color: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.2)'
  },
  {
    title: 'Clean Code',
    description: 'No solo escribimos código, creamos arte legible, mantenible y eficiente.',
    icon: Code2,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.2)'
  }
];

export const Disciplines = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Nuestros <span className="text-codary-red">Pilares</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Dominamos las tecnologías que están redefiniendo el mundo digital, impulsando proyectos con visión de futuro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              className="glass-card group relative p-10 rounded-3xl overflow-hidden cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-opacity opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg]"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
