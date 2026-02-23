import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, User, BookOpen, Code2, Rocket, MessageSquare, ChevronDown, Check, Mail, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

type TabType = 'questions' | 'join';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<TabType>('questions');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'validation-error'>('idle');
  const [validationMessage, setValidationMessage] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  // Close select when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsCourseOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty) 
        : [...prev, specialty]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Custom Validation for 'Join' tab
    if (activeTab === 'join') {
      if (!selectedCourse) {
        setStatus('validation-error');
        setValidationMessage('Por favor selecciona tu semestre');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }
      if (selectedSpecialties.length === 0) {
        setStatus('validation-error');
        setValidationMessage('Por favor elige al menos una especialidad');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }
    }

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = activeTab === 'questions' 
      ? (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '')
      : (import.meta.env.VITE_EMAILJS_JOIN_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''); 
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setSelectedSpecialties([]);
        setSelectedCourse(''); // Clear custom course selection
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const courses = [
    '1er Semestre', '2do Semestre', '3er Semestre', '4to Semestre', 
    '5to Semestre', '6to Semestre', '7mo Semestre', '8vo Semestre', 
    '9no Semestre', '10mo Semestre', 'Graduado/Alumni'
  ];

  const specialties = [
    'Frontend', 'Backend', 'Mobile Development', 'UI/UX Design', 
    'Inteligencia Artificial', 'Ciberseguridad', 'Cloud & DevOps', 'Videojuegos'
  ];

  return (
    <section className="py-20 pt-10 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 will-change-transform"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ¿Listo para subir al <span className="text-codary-red">Siguiente Nivel</span>?
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Elige cómo quieres conectar con nosotros.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12 px-4">
            <div className="grid grid-cols-2 p-1 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 relative w-full max-w-md shadow-2xl">
              <button
                type="button"
                onClick={() => { setActiveTab('questions'); setStatus('idle'); }}
                className={`flex items-center justify-center space-x-2 px-3 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all relative z-10 ${
                  activeTab === 'questions' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Preguntas</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('join'); setStatus('idle'); }}
                className={`flex items-center justify-center space-x-2 px-3 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all relative z-10 ${
                  activeTab === 'join' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Rocket className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Unirse al Club</span>
              </button>
              
              <motion.div
                className="absolute bg-codary-red rounded-xl shadow-[0_0_20px_rgba(230,57,70,0.4)] z-0"
                initial={false}
                animate={{
                  x: activeTab === 'questions' ? '0%' : '100%',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  width: 'calc(50% - 6px)',
                  height: 'calc(100% - 8px)',
                  top: '4px',
                  left: '4px',
                }}
              />
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border-white/10 relative overflow-hidden will-change-transform"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              <AnimatePresence mode="wait">
                {activeTab === 'questions' ? (
                  <motion.div
                    key="questions-fields"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-md font-black text-white ml-1 flex items-center gap-2">
                          <User className="w-4 h-4" /> Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="full_name"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                          placeholder="Ej. Linus Torvalds"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-md font-black text-white ml-1 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Tu Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                            placeholder="linustv@gmail.com"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-md font-black text-white ml-1 flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Teléfono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="user_phone"
                            className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                            placeholder="+51 123 456 789"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-md font-black text-white ml-1 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Tu Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40 resize-none"
                        placeholder="Hablemos sobre innovación..."
                        required
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="join-fields"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="full_name" className="text-md font-black text-white ml-1 flex items-center gap-2">
                          <User className="w-4 h-4" /> Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          name="full_name"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                          placeholder="Ej. Ada Lovelace"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="course" className="text-md font-black text-white ml-1 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> Curso Actual
                        </label>
                        <div className="relative" ref={selectRef}>
                          {/* Hidden input for EmailJS */}
                          <input type="hidden" name="course" value={selectedCourse} required />
                          
                          <div 
                            onClick={() => setIsCourseOpen(!isCourseOpen)}
                            className={`w-full px-6 py-4 rounded-2xl border-2 bg-black text-white flex items-center justify-between cursor-pointer transition-all ${
                              isCourseOpen ? 'border-codary-red' : 'border-white/20 hover:border-white/40'
                            }`}
                          >
                            <span className={selectedCourse ? 'text-white' : 'text-white/40'}>
                              {selectedCourse || 'Selecciona tu semestre'}
                            </span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                              isCourseOpen ? 'rotate-180 text-codary-red' : 'text-white/40'
                            }`} />
                          </div>

                          <AnimatePresence>
                            {isCourseOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-[100] top-full mt-2 left-0 w-full bg-[#1A1A1A] border-2 border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                              >
                                <div className="max-h-60 overflow-y-auto scrollbar-hide py-2">
                                  {courses.map(course => (
                                    <div
                                      key={course}
                                      onClick={() => {
                                        setSelectedCourse(course);
                                        setIsCourseOpen(false);
                                      }}
                                      className={`px-6 py-3.5 text-sm font-medium transition-colors cursor-pointer flex items-center justify-between group ${
                                        selectedCourse === course 
                                          ? 'bg-codary-red/10 text-codary-red' 
                                          : 'text-white hover:bg-white/5'
                                      }`}
                                    >
                                      <span>{course}</span>
                                      {selectedCourse === course && <Check className="w-4 h-4" />}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="join_email" className="text-md font-black text-white ml-1 flex items-center gap-2">
                          <Mail className="w-4 h-4" /> Tu Email
                        </label>
                        <input
                          type="email"
                          id="join_email"
                          name="user_email"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                          placeholder="ada@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="join_phone" className="text-md font-black text-white ml-1 flex items-center gap-2">
                          <Phone className="w-4 h-4" /> Teléfono
                        </label>
                        <input
                          type="tel"
                          id="join_phone"
                          name="user_phone"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40"
                          placeholder="+51 987 654 321"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-md font-black text-white ml-1 flex items-center gap-2">
                        <Code2 className="w-4 h-4" /> Áreas de Especialidad
                      </label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-2">
                        {specialties.map(specialty => {
                          const isSelected = selectedSpecialties.includes(specialty);
                          return (
                            <div 
                              key={specialty} 
                              onClick={() => toggleSpecialty(specialty)}
                              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer select-none group ${
                                isSelected 
                                  ? 'border-codary-red bg-codary-red/10 text-white' 
                                  : 'border-white/20 bg-black/20 text-white hover:border-white/30 hover:text-white'
                              }`}
                            >
                              <span className={`text-sm ${isSelected ? 'text-white font-bold' : 'text-white/40'}`}>{specialty}</span>
                              <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                                isSelected 
                                  ? 'border-codary-red bg-codary-red' 
                                  : 'border-white/20'
                              }`}>
                                {isSelected && <Check className="w-5 h-5 text-white" />}
                              </div>
                              <input 
                                type="checkbox" 
                                name="specialties" 
                                value={specialty}
                                checked={isSelected}
                                onChange={() => {}}
                                className="hidden"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projects" className="text-md font-black text-white ml-1 flex items-center gap-2">
                        <Rocket className="w-4 h-4" /> Proyectos
                      </label>
                      <textarea
                        id="projects"
                        name="projects"
                        rows={3}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40 resize-none"
                        placeholder="Links a repositorios o descripción de tus mejores proyectos..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="motivation" className="text-md font-black text-white ml-1 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> ¿Por qué quieres unirte?
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={4}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/20 text-white focus:ring-2 focus:ring-codary-red focus:border-transparent outline-none transition-all placeholder:text-white/40 resize-none"
                        placeholder="Cuéntanos qué te motiva y qué puedes aportar al club..."
                        required
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                  (status === 'error' || status === 'validation-error') ? 'bg-red-500' : 
                  'bg-codary-red hover:bg-red-700'
                } text-white disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative group will-change-transform font-bold`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-6 w-6" />
                    <span>¡Postulación Enviada!</span>
                  </>
                ) : status === 'validation-error' ? (
                  <>
                    <AlertCircle className="h-6 w-6" />
                    <span>{validationMessage}</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="h-6 w-6" />
                    <span>Error en el Envío</span>
                  </>
                ) : (
                  <>
                    <span>{activeTab === 'questions' ? 'Enviar Mensaje' : 'Enviar Postulación'}</span>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="absolute -top-24 -right-24 w-48 h-48 bg-codary-red/5 rounded-full blur-[80px] pointer-events-none will-change-gpu" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
