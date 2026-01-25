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
    <section className="py-5 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 will-change-transform"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Alianzas <span className="text-codary-red">Estratégicas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Respaldados por Líderes de la Industria
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1 
              }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="glass-card group flex relative p-10 rounded-3xl overflow-hidden cursor-pointer will-change-transform"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none will-change-[opacity]" />
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className="h-14 md:h-16 object-contain relative z-10 filter transition-all duration-700 will-change-[filter]" 
                  loading="lazy"
                />
              </div>
              <div className="ml-8 border-l border-white/10 pl-8">
                <span className="block text-xl font-black text-codary-red mb-1">
                  {sponsor.type}
                </span>
                <span className="text-xl font-bold text-white">
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
