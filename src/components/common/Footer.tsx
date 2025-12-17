import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-codary-black dark:bg-black text-white py-6 border-t border-gray-800 dark:border-codary-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <h3 className="text-lg font-bold mb-2">Codary</h3>
            <p className="text-sm text-gray-400 dark:text-white/60">Innovación en código, comunidad en acción.</p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-2">Enlaces Rápidos</h4>
            <ul className="space-y-1 text-sm text-gray-400 dark:text-white/60">
              <li><a href="/" className="hover:text-codary-red transition-colors">Home</a></li>
              <li><a href="/acerca" className="hover:text-codary-red transition-colors">Acerca de</a></li>
              <li><a href="/contacto" className="hover:text-codary-red transition-colors">Contáctanos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 dark:text-red/60 hover:text-codary-red transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 dark:text-red/60 hover:text-codary-red transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 dark:text-red/60 hover:text-codary-red transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 dark:text-red/60 hover:text-codary-red transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-codary-white/10 mt-4 pt-4 text-center text-gray-500 dark:text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Codary. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};