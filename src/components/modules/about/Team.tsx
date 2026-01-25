import { motion } from 'framer-motion';
import alexisImg from '../../../assets/icons/team/alexis.jpeg';
import danielImg from '../../../assets/icons/team/daniel.jpeg';
import sebastianImg from '../../../assets/icons/team/sebastian.jpeg';
import andresImg from '../../../assets/icons/team/andres.jpeg';
import mateoImg from '../../../assets/icons/team/mateo.jpeg';
import genesisImg from '../../../assets/icons/team/genesis.jpeg';
import juanImg from '../../../assets/icons/team/juan.jpeg';

const team = {
  frontend: [
    { 
      name: 'Daniel Puma', 
      role: 'Líder Frontend', 
      image: danielImg,
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'Alexis Ramirez', 
      role: 'UI/UX Designer', 
      image: alexisImg,
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'Sebastian Jara', 
      role: 'Cloud Developer', 
      image: sebastianImg,
      socials: { github: '#', linkedin: '#'}
    },
  ],
  backend: [
    { 
      name: 'Mateo Pacheco', 
      role: 'Líder Backend', 
      image: mateoImg,
      socials: { github: 'https://github.com/mateo-pacheco', linkedin: 'https://www.linkedin.com/in/mateo-pacheco-572312340'}
    },
    { 
      name: 'Junior Wachapa', 
      role: 'DevOps Engineer', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'Andrés Abad', 
      role: 'Node.js Developer', 
      image: andresImg,
      socials: { github: '#', linkedin: '#'}
    },
  ],
  transformacion: [
    { 
      name: 'Genesis Gaón', 
      role: 'Estratega de T. D.', 
      image: genesisImg,
      socials: { linkedin: '#'}
    },
    { 
      name: 'Juan Sebastian', 
      role: 'Estratega de T. D.', 
      image: juanImg,
      socials: { linkedin: '#'}
    },
  ]
};

const TeamMember = ({ member, index }: { member: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
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
    <div className="relative mb-8 flex justify-center">
      <div className="absolute inset-0 bg-codary-red/20 blur-[30px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-[opacity]" />
      
      <div className="relative w-60 h-50 rounded-full overflow-hidden p-1 border-2 border-white/10 group-hover:border-codary-red transition-colors duration-500">
        <img 
          src={member.image} 
          alt={member.name} 
          className="object-cover rounded-full transition-transform duration-700 group-hover:scale-110" 
          loading="lazy"
        />
      </div>

      
    </div>
    
    <div className="text-center">
      <h3 className="text-xl font-black text-white mb-2 transition-colors">
        {member.name}
      </h3>
      <p className="text-md font-black text-codary-red mb-4">
        {member.role}
      </p>
      <div className="w-8 h-1 bg-white/10 mx-auto group-hover:w-16 group-hover:bg-codary-red transition-all duration-500" />
    </div>
  </motion.div>
);

export const Team = () => {
  return (
    <section className="py-20 pt-10 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Nuestro <span className="text-codary-red">Equipo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Un colectivo de visionarios dedicados a romper las barreras de lo convencional a través del código.
            </p>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div className="space-y-32">
          <CategoryGroup title="Equipo Frontend" members={team.frontend} />
          <CategoryGroup title="Equipo Backend" members={team.backend} />
          <CategoryGroup title="Equipo de Transformación" members={team.transformacion} centered />
        </div>
      </div>
    </section>
  );
};

const CategoryGroup = ({ title, members, centered = false }: { title: string, members: any[], centered?: boolean }) => (
  <div className="relative">
    <div className="flex items-center mb-16">
      <h3 className="text-2xl md:text-2xl font-black text-white leading-tight">
        {title}
      </h3>
      <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1 ml-8" />
    </div>
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ${centered ? 'lg:flex lg:justify-center' : ''}`}>
      {members.map((member, index) => (
        <TeamMember key={member.name} member={member} index={index} />
      ))}
    </div>
  </div>
);
