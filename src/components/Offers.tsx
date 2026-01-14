import { Truck, Star, Zap } from 'lucide-react';
import bottles12 from '../assets/12_bottles_folli.png';
import bottles6 from '../assets/6_bottles_folli.png';
import bottles3 from '../assets/3_bottles.png';

export default function Offers() {
  const offers = [
    {
      badge: 'MAIS VENDIDO',
      title: 'COMPRE 4 LEVE 6',
      subtitle: 'TRATAMENTO PARA 6 MESES',
      bottles: 6,
      image: bottles6,
      oldPrice: 'R$542,00',
      installments: '12x de R$47,01',
      cashPrice: 'R$457,00',
      savings: 'R$145,00',
      highlight: true,
      checkoutUrl: 'https://app.keedpay.com.br/checkout/woW8ha7LASm'
    },
    {
      badge: null,
      title: 'COMPRE 6 LEVE 12',
      subtitle: 'TRATAMENTO PARA 1 ANO',
      bottles: 12,
      image: bottles12,
      oldPrice: 'R$952,00',
      installments: '12x de R$71,70',
      cashPrice: 'R$697,00',
      savings: 'R$255,00',
      highlight: false,
      checkoutUrl: 'https://app.keedpay.com.br/checkout/xywp8HdYauD'
    },
    {
      badge: null,
      title: 'COMPRE 2 LEVE 3',
      subtitle: 'TRATAMENTO PARA 3 MESES',
      bottles: 3,
      image: bottles3,
      oldPrice: 'R$406,00',
      installments: '12x de R$34,65',
      cashPrice: 'R$337,00',
      savings: 'R$109,00',
      highlight: false,
      checkoutUrl: 'https://app.keedpay.com.br/checkout/UvdeDvbkX3X'
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] mb-3 md:mb-4">
            Escolha seu <span className="text-[#5D4037]">Tratamento</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden transition-all duration-300 ${
                offer.highlight
                  ? 'transform md:-translate-y-2 lg:-translate-y-4 border-2 md:border-4 border-[#FFD700] shadow-xl md:shadow-2xl'
                  : 'border border-gray-200 hover:shadow-xl md:hover:shadow-2xl'
              }`}
            >
              {offer.badge && (
                <div className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#3E2723] text-center py-2 md:py-3 px-3 md:px-4 font-bold text-sm md:text-base lg:text-lg flex items-center justify-center gap-1 md:gap-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  {offer.badge}
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
              )}

              <div className="p-4 md:p-5 lg:p-6">
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723] mb-1 md:mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-[#5D4037] font-semibold text-sm md:text-base lg:text-lg">
                    {offer.subtitle}
                  </p>
                </div>

                {/* Imagem dos Frascos */}
                <div className="flex items-center justify-center mb-4 md:mb-6 py-2 md:py-4">
                  <img
                    src={offer.image}
                    alt={`${offer.bottles} frascos FolliVida`}
                    className="w-full max-w-[180px] md:max-w-[220px] lg:max-w-[280px] h-auto object-contain"
                  />
                </div>

                {/* Preços */}
                <div className="text-center mb-4 md:mb-6">
                  <p className="text-gray-500 line-through text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                    De {offer.oldPrice} por
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3E2723] mb-1 md:mb-2">
                    {offer.installments}
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-[#5D4037] font-semibold mb-2 md:mb-3">
                    Ou {offer.cashPrice} à vista
                  </p>
                  <div className="inline-flex items-center gap-1 md:gap-2 bg-[#EFEBE9] text-[#5D4037] px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm">
                    <Zap className="w-3 h-3 md:w-4 md:h-4" />
                    Economia de {offer.savings}
                  </div>
                </div>

                {/* Botão */}
                <a
                  href={offer.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#3E2723] to-[#5D4037] hover:from-[#2E1B17] hover:to-[#4E342E] text-white font-bold text-sm md:text-base lg:text-lg py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-3 md:mb-4 text-center"
                >
                  COMPRAR AGORA!
                </a>

                {/* Frete Grátis */}
                <div className="flex items-center justify-center gap-1 md:gap-2 text-[#5D4037] font-semibold text-xs md:text-sm">
                  <Truck className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Frete grátis para todo o Brasil</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
