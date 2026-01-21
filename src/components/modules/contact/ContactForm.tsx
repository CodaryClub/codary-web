import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

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

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-codary-black p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
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
                name="user_email"
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
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-codary-dark text-codary-black dark:text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all"
                placeholder="Cuéntanos cómo podemos ayudarte..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg ${
                status === 'success' ? 'bg-green-500 hover:bg-green-600' : 
                status === 'error' ? 'bg-red-500 hover:bg-red-600' : 
                'bg-codary-red hover:bg-red-700'
              } text-white disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  <span>¡Mensaje Enviado!</span>
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="h-5 w-5" />
                  <span>Error al enviar</span>
                </>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
