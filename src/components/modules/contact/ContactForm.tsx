import { Send } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-codary-black dark:text-white mb-4">Contáctanos</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              ¿Tienes alguna duda o quieres unirte? Escríbenos.
            </p>
          </div>

          <form className="space-y-6 bg-white dark:bg-codary-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-codary-dark text-codary-black dark:text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-codary-dark text-codary-black dark:text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-codary-dark text-codary-black dark:text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all"
                placeholder="Cuéntanos cómo podemos ayudarte..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-codary-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enviar Mensaje</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
