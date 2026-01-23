import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const team = {
  frontend: [
    { 
      name: 'Daniel Puma', 
      role: 'Líder Frontend', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'Alexis Ramirez', 
      role: 'UI/UX Designer', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'Sebastian Jara', 
      role: 'Cloud Developer', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
  ],
  backend: [
    { 
      name: 'Mateo Pacheco', 
      role: 'Líder Backend', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: 'https://github.com/mateo-pacheco', linkedin: 'https://www.linkedin.com/in/mateo-pacheco-572312340'}
    },
    { 
      name: 'Junior Wachapa', 
      role: 'DevOps Engineer', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
    { 
      name: 'José Abad', 
      role: 'Node.js Developer', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { github: '#', linkedin: '#'}
    },
  ],
  transformacion: [
    { 
      name: 'Genesis Gaón', 
      role: 'Estratega de T. D.', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { linkedin: '#'}
    },
    { 
      name: 'Juan Sebastian', 
      role: 'Estratega de T. D.', 
      image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw',
      socials: { linkedin: '#'}
    },
  ]
};

const TeamMember = ({ member, index }: { member: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    className="group relative glass-card rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-4 cursor-pointer"
  >
    <div className="relative mb-8 flex justify-center">
      <div className="absolute inset-0 bg-codary-red/20 blur-[40px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative w-32 h-32 rounded-full overflow-hidden p-1 border-2 border-white/20 group-hover:border-codary-red transition-colors duration-500">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700" 
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
        >
          {member.socials?.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-codary-red transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.socials?.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="text-xl font-black text-codary-black dark:text-white mb-2 tracking-tight group-hover:text-codary-red transition-colors">
        {member.name}
      </h3>
      <p className="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
        {member.role}
      </p>
      <div className="w-8 h-1 bg-gray-200 dark:bg-white/10 mx-auto group-hover:w-16 group-hover:bg-codary-red transition-all duration-500" />
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
             <h2 className="text-5xl md:text-6xl font-black text-codary-black dark:text-white mb-8 tracking-tighter">
              Nuestro <span className="text-codary-red">Equipo</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
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
      <h3 className="text-base md:text-lg font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-codary-red dark:text-codary-red leading-tight">
        {title}
      </h3>
      <div className="h-px bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent flex-1 ml-8" />
    </div>
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ${centered ? 'lg:flex lg:justify-center' : ''}`}>
      {members.map((member, index) => (
        <TeamMember key={member.name} member={member} index={index} />
      ))}
    </div>
  </div>
);
