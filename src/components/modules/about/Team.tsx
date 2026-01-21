import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const team = {
  frontend: [
    { name: 'Daniel Puma', role: 'Líder Frontend', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
    { name: 'Alexis Ramirez', role: 'UI/UX Designer', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
    { name: 'Sebastian Jara', role: 'React Developer', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw  ' },
  ],
  backend: [
    { name: 'Mateo Rodriguez', role: 'Líder Backend', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
    { name: 'Junior Wachapa', role: 'DevOps Engineer', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
    { name: 'José Abad', role: 'Node.js Developer', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
  ],
  transformacion: [
    { name: 'Genesis ', role: 'Estratega de Transformacion Digital', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
    { name: 'Juan Sebastian', role: 'Estratega de Transformacion Digital', image: 'https://imgs.search.brave.com/bHVdH5vDW3tZZDStUEXmc9Z0BcRQMIj-hdqJ8YXmP2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NzA4LzUyNy9zbWFs/bC9taW5pbWFsaXN0/LXVzZXItcHJvZmls/ZS1pY29uLW9uLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtcG5n/LnBuZw' },
  ]
};

const TeamMember = ({ member, index }: { member: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative bg-white dark:bg-codary-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
  >
    <div className="relative mb-4">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 dark:border-gray-800 shadow-md group-hover:scale-105 transition-transform duration-300">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-codary-black rounded-full px-2 py-1 shadow-sm border border-gray-100 dark:border-gray-700">
        <a href="#" className="text-gray-500 hover:text-codary-black dark:hover:text-white transition-colors p-1">
          <Github className="h-4 w-4" />
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors p-1">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-bold text-codary-black dark:text-white mb-1">{member.name}</h3>
      <p className="text-codary-red font-medium text-xs uppercase tracking-wide">{member.role}</p>
    </div>
  </motion.div>
);

export const Team = () => {
  return (
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-codary-black dark:text-white mb-6"
          >
            Nuestro Equipo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Conoce a las mentes apasionadas que construyen el futuro de Codary.
          </motion.p>
        </div>

        <div className="mb-20">
          <div className="flex items-center mb-10">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
            <h3 className="px-4 text-2xl font-bold text-codary-black dark:text-white">Equipo Frontend</h3>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {team.frontend.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-20">
           <div className="flex items-center mb-10">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
            <h3 className="px-4 text-2xl font-bold text-codary-black dark:text-white">Equipo Backend</h3>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {team.backend.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-10">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
            <h3 className="px-4 text-2xl font-bold text-codary-black dark:text-white">Equipo de Transformación Digital</h3>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8 lg:gap-12">
            {team.transformacion.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
