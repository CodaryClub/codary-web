import { motion } from 'framer-motion';
import ReactIcon from '../../../assets/icons/react.svg?react';
import NodejsIcon from '../../../assets/icons/nodejs.svg?react';
import PostgresqlIcon from '../../../assets/icons/postgresql.svg?react';
import MysqlIcon from '../../../assets/icons/mysql.svg?react';
import DockerIcon from '../../../assets/icons/docker.svg?react';
import GithubIcon from '../../../assets/icons/github.svg?react';
import JavaIcon from '../../../assets/icons/java.svg?react';
import SpringbootIcon from '../../../assets/icons/spring.svg?react';
import VuejsIcon from '../../../assets/icons/vue.svg?react';
import TailwindIcon from '../../../assets/icons/tailwind.svg?react';
import VercelIcon from '../../../assets/icons/vercel.svg?react';
import JsIcon from '../../../assets/icons/javascript.svg?react';
import HtmlIcon from '../../../assets/icons/html.svg?react';
import CssIcon from '../../../assets/icons/css.svg?react';

const technologies = [
  { name: 'React', icon: ReactIcon, color: 'text-blue-400' },
  { name: 'Node.js', icon: NodejsIcon, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: PostgresqlIcon, color: 'text-blue-300' },
  { name: 'MySQL', icon: MysqlIcon, color: 'text-orange-400' },
  { name: 'Docker', icon: DockerIcon, color: 'text-blue-500' },
  { name: 'GitHub', icon: GithubIcon, color: 'text-gray-400' },
  { name: 'Java', icon: JavaIcon, color: 'text-red-500' },
  { name: 'Spring Boot', icon: SpringbootIcon, color: 'text-green-600' },
  { name: 'Vue.js', icon: VuejsIcon, color: 'text-green-400' },
  { name: 'Tailwind', icon: TailwindIcon, color: 'text-cyan-400' },
  { name: 'Vercel', icon: VercelIcon, color: 'text-white' },
  { name: 'JavaScript', icon: JsIcon, color: 'text-yellow-400' },
  { name: 'HTML5', icon: HtmlIcon, color: 'text-orange-500' },
  { name: 'CSS3', icon: CssIcon, color: 'text-blue-500' },
];

export const Technologies = () => {
  return (
    <section className="py-10 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 will-change-transform"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Nuestro stack <span className="text-codary-red">Tecnológico</span>
          </h2>
          <p className="text-lg text-gray-400 font-light tracking-wide">
            Elegimos solo las mejores herramientas para forjar el futuro.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex py-12 items-center will-change-transform">
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div 
              key={`${tech.name}-${index}`} 
              className="px-12 flex flex-col items-center group cursor-default"
            >
              <div className="w-24 h-24 glass-card bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-codary-red/20 border border-white/5 will-change-transform">
                <tech.icon className={`h-12 w-12 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]`} />
              </div>
              <span className="mt-6 text-md font-bold text-white group-hover:text-codary-red transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex py-12 items-center will-change-transform">
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div 
              key={`${tech.name}-dup-${index}`} 
              className="px-12 flex flex-col items-center group cursor-default"
            >
              <div className="w-24 h-24 glass-card bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl group-hover:shadow-codary-red/20 border border-white/5 will-change-transform">
                <tech.icon className={`h-12 w-12 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]`} />
              </div>
              <span className="mt-6 text-md font-bold text-white group-hover:text-codary-red transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
