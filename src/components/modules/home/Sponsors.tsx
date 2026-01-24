import { motion } from 'framer-motion';
import logoCato from "../../../assets/icons/logo-cato.png";

const sponsors = [
  {
    name: "Universidad Católica de Cuenca",
    image: logoCato,
    type: "Partner Académico"
  },
];

export const Sponsors = () => {
  return (
    <section className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-lg font-black uppercase tracking-[0.2em] text-codary-red mb-4 block">
            Alianzas Estratégicas
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            Respaldados por Líderes de la Industria
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
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
              className="glass-card group flex relative p-10 rounded-3xl overflow-hidden cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/50 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={sponsor.image} alt={sponsor.name} className="h-12 md:h-16 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="ml-8 border-l border-white/10 pl-8">
                <span className="block text-xs font-black text-codary-red uppercase tracking-widest mb-1">
                  {sponsor.type}
                </span>
                <span className="text-xl font-bold text-gray-200">
                  {sponsor.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
