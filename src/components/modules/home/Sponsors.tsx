import logoCato from "../../../assets/icons/logo-cato.png";

const sponsors = [
  {
    name: "Universidad Católica de Cuenca",
    color: "bg-red-500",
    logo: logoCato,
  },
];

export const Sponsors = () => {
  return (
    <section className="py-0 pt-20 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-8">
          Con el apoyo de líderes de la industria
        </h3>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center transition-all duration-500">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <img src={sponsor.logo} alt="" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
