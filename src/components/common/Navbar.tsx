import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import codaryLogo from "../../assets/icons/codary.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  };

  const navLinks = [
    { name: "Inicio", id: "home" },
    { name: "Disciplinas", id: "disciplines" },
    { name: "Historia", id: "history" },
    { name: "Equipo", id: "team" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[210] transition-all duration-300 transform-gpu ${
          isScrolled || isMenuOpen
            ? "py-4 bg-codary-darker/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center gap-3 md:gap-4 group outline-none relative z-[220]"
            >
              <div className="relative flex-shrink-0 w-10 md:w-12 h-10 md:h-12">
                <div className="absolute inset-0 bg-codary-red/20 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500" />
                <img
                  src={codaryLogo}
                  alt="Codary"
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:rotate-6"
                />
              </div>
              <span className="text-xl md:text-2xl font-black text-white">
                Codary
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="relative text-[18px] lg:text-[18px] font-bold text-white hover:text-codary-red transition-colors group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-codary-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center relative z-[220]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                className="p-2 text-white hover:text-codary-red transition-colors touch-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] md:hidden bg-[#0A0A0A] flex flex-col px-10 pt-32 pb-10 overflow-y-auto"
          >
            <div className="absolute inset-0 pointer-events-none -z-10">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-codary-red/10 to-transparent opacity-30" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-codary-red/5 to-transparent opacity-30" />
            </div>

            <div className="relative z-20 flex flex-col h-full min-h-fit">
              <div className="space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="flex items-center justify-between group py-6 border-b border-white/5 active:bg-white/5 px-2"
                  >
                    <div className="flex items-center gap-6">
                      <span className="w-2 h-[2px] bg-codary-red/50 self-center" />
                      <span className="text-3xl font-black text-white group-active:text-codary-red transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight
                      className="text-codary-red opacity-0 group-active:opacity-100 transition-all"
                      size={24}
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="w-full py-5 bg-codary-red text-white rounded-2xl font-black uppercase text-center shadow-2xl active:scale-95 transition-transform"
                >
                  Únete al Club
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
