import { AlertTriangle, Droplets, TrendingDown, Users, AlertCircle } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    {
      icon: Droplets,
      text: 'Cabelo caindo no banho ou ao pentear'
    },
    {
      icon: TrendingDown,
      text: 'Fios cada vez mais finos e fracos'
    },
    {
      icon: AlertCircle,
      text: 'Começo de falhas no couro cabeludo'
    },
    {
      icon: AlertTriangle,
      text: 'Medo constante de ficar careca'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 px-4 md:px-8 py-3 md:py-4 rounded-full mb-4 md:mb-6 border border-red-200 shadow-lg">
            <AlertTriangle className="w-5 h-5 md:w-7 md:h-7 animate-pulse" />
            <span className="font-bold text-base md:text-xl">Isso está acontecendo com você?</span>
          </div>
          <p className="text-[#5D4037] text-sm md:text-lg max-w-2xl mx-auto mt-4">
            Você não está sozinho. Milhares de pessoas enfrentam esses problemas diariamente
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          {pains.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-50"></div>
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start gap-3 md:gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                    </div>
                    <p className="text-[#3E2723] text-xs md:text-lg font-semibold leading-relaxed">
                      {pain.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] to-[#4E342E] rounded-2xl md:rounded-3xl opacity-10 blur-xl"></div>
          <div className="relative bg-gradient-to-r from-[#3E2723] via-[#5D4037] to-[#3E2723] text-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-[#5D4037]">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-xl">
                  <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-[#3E2723]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-2xl font-bold leading-relaxed">
                  O cabelo cai no espelho… mas o problema começa{' '}
                  <span className="text-[#FFD700] underline decoration-wavy decoration-2">dentro do corpo</span>
                </p>
                <p className="text-sm md:text-base text-gray-300 mt-3 md:mt-4">
                  FolliVida age de dentro para fora, fornecendo os nutrientes que seu cabelo realmente precisa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
