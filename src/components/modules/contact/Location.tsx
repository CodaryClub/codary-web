import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Github, Loader2 } from "lucide-react";
import { lazy, Suspense } from "react";

const InteractiveMap = lazy(() =>
  import("./InteractiveMap").then((module) => ({
    default: module.InteractiveMap,
  })),
);

export const Location = () => {
  const contactInfo = [
    {
      label: 'Dirección',
      value: 'Vargas Machuca, Cuenca, Ecuador',
      icon: MapPin,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      link: 'https://maps.google.com/?q=Vargas+Machuca,+Cuenca,+Ecuador'
    },
    {
      label: 'Email',
      value: 'codary.club@gmail.com',
      icon: Mail,
      color: 'text-teal-500',
      bg: 'bg-teal-500/10',
      link: 'mailto:codary.club@gmail.com'
    },
    {
      label: 'GitHub',
      value: 'CodaryClub',
      icon: Github,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      link: 'https://github.com/CodaryClub'
    },
    {
      label: 'Instagram',
      value: '@club_codary',
      icon: Instagram,
      color: 'text-codary-red',
      bg: 'bg-codary-red/10',
      link: 'https://www.instagram.com/club_codary'
    }
  ];

  return (
    <section className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8 }}
              className="will-change-transform"
            >
              <span className="text-2xl font-black text-codary-red mb-4 block">
                Presencia Física
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Nuestra <span className="text-codary-red">Ubicación</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                El epicentro donde las ideas cobran vida. Únete a nuestras sesiones semanales en el corazón de Cuenca.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
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
                  className="glass-card group relative p-10 rounded-3xl overflow-hidden cursor-pointer will-change-transform"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform duration-500 will-change-transform`}>
                      <info.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="h-[500px] glass-card rounded-[3rem] overflow-hidden shadow-2xl relative border-white/10 z-0 p-2 will-change-transform"
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/5">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-black/20">
                    <div className="flex flex-col items-center space-y-4">
                      <Loader2 className="h-10 w-10 animate-spin text-codary-red" />
                      <span className="text-xs font-black uppercase tracking-widest text-gray-500">Cargando Mapa...</span>
                    </div>
                  </div>
                }
              >
                <InteractiveMap />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
