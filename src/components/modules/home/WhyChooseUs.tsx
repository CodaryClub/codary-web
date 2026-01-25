import { motion } from "framer-motion";
import { Users, Zap, Award, Rocket } from "lucide-react";

const features = [
  {
    title: "Élite Colaborativa",
    description:
      "Únete a un núcleo de desarrolladores apasionados que iteran y comparten conocimiento en tiempo real.",
    icon: Users,
    color: "#3b82f6",
    delay: 0.1,
  },
  {
    title: "Velocidad Radical",
    description:
      "Metodologías de alto rendimiento diseñadas para que domines tecnologías complejas antes que el resto.",
    icon: Zap,
    color: "#10b981",
    delay: 0.2,
  },
  {
    title: "Impacto Real",
    description:
      "No hacemos demos. Construimos soluciones de ingeniería que resuelven problemas reales del ecosistema.",
    icon: Rocket,
    color: "#a855f7",
    delay: 0.3,
  },
  {
    title: "Prestigio Codary",
    description:
      "Obtén el reconocimiento de una marca que simboliza excelencia técnica y compromiso con la calidad.",
    icon: Award,
    color: "#f59e0b",
    delay: 0.4,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 pt-10 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20 will-change-transform"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              ¿Por qué <span className="text-codary-red">Codary</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Más que un club, somos el acelerador de partículas para tu carrera
              en la ingeniería de software.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: feature.delay,
              }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group border-white/10 cursor-pointer will-change-transform"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 will-change-transform"
                style={{
                  backgroundColor: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                <feature.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>

              <div
                className="absolute top-0 right-0 w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                style={{ backgroundColor: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
