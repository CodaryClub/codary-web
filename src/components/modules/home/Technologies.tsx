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
  { name: 'GitHub', icon: GithubIcon, color: 'text-gray-800' },
  { name: 'Java', icon: JavaIcon, color: 'text-red-500' },
  { name: 'Spring Boot', icon: SpringbootIcon, color: 'text-green-600' },
  { name: 'Vue.js', icon: VuejsIcon, color: 'text-green-400' },
  { name: 'Tailwind', icon: TailwindIcon, color: 'text-cyan-400' },
  { name: 'Vercel', icon: VercelIcon, color: 'text-black' },
  { name: 'JavaScript', icon: JsIcon, color: 'text-yellow-400' },
  { name: 'HTML', icon: HtmlIcon, color: 'text-orange-500' },
  { name: 'CSS', icon: CssIcon, color: 'text-blue-500' },
];

export const Technologies = () => {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-codary-black dark:text-white mb-4"
        >
          Nuestro Stack Tecnológico
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">Dominamos las herramientas que mueven el mundo.</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex py-4">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex flex-col items-center space-y-4 px-8">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-gray-700">
                <tech.icon className={`h-10 w-10 ${tech.color}`} />
              </div>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex py-4">
           {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-duplicate-${index}`} className="flex flex-col items-center space-y-4 px-8">
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-100 dark:border-gray-700">
                <tech.icon className={`h-10 w-10 ${tech.color}`} />
              </div>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
