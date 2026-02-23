import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Codary?",
    answer:
      "Codary es un club de desarrollo y tecnología donde estudiantes apasionados se reúnen para colaborar en proyectos reales, aprender nuevas tecnologías y prepararse para el mundo laboral a través de retos prácticos y mentorías.",
  },
  {
    question: "¿Qué tipo de proyectos desarrollan?",
    answer:
      "Desarrollamos una amplia gama de soluciones digitales: desde aplicaciones web modernas y plataformas de e-commerce, hasta aplicaciones móviles nativas/híbridas, integración de Inteligencia Artificial y auditorías de ciberseguridad.",
  },
  {
    question: "¿Aceptan proyectos externos o de clientes?",
    answer:
      "¡Sí! Colaboramos con emprendedores y organizaciones para transformar sus ideas en productos digitales mínimos viables (MVP) o soluciones a medida. Esto permite a nuestros miembros trabajar en entornos profesionales reales bajo estándares de la industria.",
  },
  {
    question: "¿Cuáles son las áreas de especialidad del club?",
    answer:
      "Cubrimos diversas áreas incluyendo Desarrollo Web (Frontend/Backend), Desarrollo Mobile, UI/UX Design, Inteligencia Artificial, Ciberseguridad y Cloud/DevOps.",
  },
  {
    question: "¿Cómo es el proceso de selección?",
    answer:
      "Tras enviar tu postulación revisamos tu perfil y motivación. Buscamos personas con actitud proactiva, ganas de aprender y espíritu de equipo. No nos enfocamos solo en tus habilidades técnicas actuales.",
  },
  {
    question: "¿Cómo puedo proponer una colaboración o servicio?",
    answer:
      "Puedes escribirnos a través de la sección de contacto eligiendo 'Preguntas sobre Codary' o enviarnos un correo directamente. Estaremos encantados de agendar una reunión para analizar cómo podemos ayudarte con tu proyecto tecnológico.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Resolvemos tus{" "}
            <span className="text-codary-red text-glow">Dudas</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Todo lo que necesitas saber sobre Codary y cómo formar parte de
            nuestra comunidad.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden border-white/5 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white/[0.08] border-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left outline-none"
              >
                <span
                  className={`text-lg font-bold transition-colors duration-300 ${
                    activeIndex === index ? "text-codary-red" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-codary-red text-white rotate-0"
                      : "bg-white/5 text-gray-400 rotate-180"
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-light">
                      <div className="pt-2 border-t border-white/5">
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-codary-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[400px] h-[400px] bg-codary-red/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
