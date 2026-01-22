import { MapPin, Mail, Instagram, Github } from "lucide-react";
import { lazy, Suspense } from "react";

const InteractiveMap = lazy(() =>
  import("./InteractiveMap").then((module) => ({
    default: module.InteractiveMap,
  })),
);

export const Location = () => {
  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-codary-black dark:text-white">
              Nuestra Ubicación
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nos reunimos semanalmente en el centro de innovación tecnológica
              de la ciudad.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-pastel-blue/30 dark:bg-blue-900/30 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-codary-black dark:text-white">
                    Dirección
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vargas Machuca, Cuenca, Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pastel-mint/30 dark:bg-teal-900/30 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-codary-black dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:codary.club@gmail.com"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    codary.club@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pastel-lavender/30 dark:bg-purple-900/30 p-3 rounded-lg">
                  <Github className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-codary-black dark:text-white">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/CodaryClub"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    CodaryClub
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pastel-lavender/30 dark:bg-red-900/30 p-3 rounded-lg">
                  <Instagram className="h-6 w-6 text-purple-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-codary-black dark:text-white">
                    Instagram
                  </h3>
                  <a
                    href="https://www.instagram.com/club_codary"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    club_codary
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg relative border border-gray-100 dark:border-gray-700 z-0">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-codary-red"></div>
                </div>
              }
            >
              <InteractiveMap />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
