import { motion } from 'framer-motion';
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
    <section className="py-20 pt-10 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 will-change-transform"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              ¿Listo para subir al <span className="text-codary-red">Siguiente Nivel</span>?
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Estamos a una línea de código de distancia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border-white/10 relative overflow-hidden will-change-transform"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-md font-black text-gray-300 ml-1">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-500/40 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-gray-400/50"
                    placeholder="Ej. Linus Torvalds"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-md font-black text-gray-300 ml-1">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-500/40 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-gray-400/50"
                    placeholder="linustv@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-md font-black text-gray-300 ml-1">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-500/40 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-gray-400/50 resize-none"
                  placeholder="Hablemos sobre innovación..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className={`w-full text-lg font-black py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-2xl ${
                  status === 'success' ? 'bg-green-500' : 
                  status === 'error' ? 'bg-red-500' : 
                  'bg-codary-red hover:bg-red-700'
                } text-white disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative group will-change-transform`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-6 w-6" />
                    <span>¡Enviado con Éxito!</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="h-6 w-6" />
                    <span>Error en el Envío</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Background accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-codary-red/5 rounded-full blur-[80px] pointer-events-none will-change-gpu" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
