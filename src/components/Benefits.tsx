import { Heart, TrendingUp, Shield, Clock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Nutrição direcionada para os fios',
      description: 'Fornece nutrientes essenciais que o organismo precisa para manter os fios saudáveis'
    },
    {
      icon: TrendingUp,
      title: 'Apoio ao ciclo natural do cabelo',
      description: 'Ajuda a manter o ciclo capilar funcionando de forma equilibrada'
    },
    {
      icon: Shield,
      title: 'Auxilia no fortalecimento capilar',
      description: 'Contribui para fios mais resistentes e com menos quebra'
    },
    {
      icon: Clock,
      title: 'Resultados progressivos com uso contínuo',
      description: 'A melhora acontece gradualmente com o uso regular do produto'
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24 px-4 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#3E2723] mb-3 md:mb-4">
            Por que o <span className="text-[#5D4037]">FolliVida</span> funciona
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-[#5D4037] text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto px-2">
            Uma abordagem nutricional para cuidar da saúde capilar de dentro para fora
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5D4037] group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 lg:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-[#5D4037] to-[#4E342E] flex items-center justify-center shadow-md md:shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#3E2723] mb-2 md:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-[#5D4037] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
