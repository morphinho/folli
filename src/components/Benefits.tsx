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
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            Por que o <span className="text-[#388E3C]">FolliVida</span> funciona
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full mb-6"></div>
          <p className="text-[#5D4037] text-lg md:text-xl max-w-2xl mx-auto">
            Uma abordagem nutricional para cuidar da saúde capilar de dentro para fora
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#388E3C] group"
              >
                <div className="flex flex-col md:flex-row items-start gap-3 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#388E3C] to-[#2E7D32] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-[#3E2723] mb-2 md:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-base text-[#5D4037] leading-relaxed">
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
