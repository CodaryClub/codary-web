import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export const Discover = () => {
  return (
    <section id="discover" className="py-20 pt-0 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Descubre <span className="text-codary-red">Codary</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Nacimos para desafiar lo convencional. Somos el punto de encuentro entre la curiosidad técnica y la ejecución magistral.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'Nuestra Misión',
              description: 'Forjar un ecosistema de aprendizaje radical donde el dominio técnico se encuentra con la creatividad sin filtros.',
              icon: Target,
              color: 'text-codary-red',
              glow: 'bg-codary-red/10'
            },
            {
              title: 'Nuestra Visión',
              description: 'Convertirnos en el estándar global de excelencia para la formación de arquitectos digitales y líderes de impacto.',
              icon: Lightbulb,
              color: 'text-amber-500',
              glow: 'bg-amber-500/10'
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 rounded-[3rem] relative overflow-hidden group border-white/10"
            >
              <div className={`w-16 h-16 ${item.glow} rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight">{item.title}</h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                {item.description}
              </p>
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${item.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
