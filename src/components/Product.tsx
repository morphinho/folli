import { Package, Leaf, Clock, Award } from 'lucide-react';
import productImage from '../assets/produto-para-formula_(1).webp';

export default function Product() {
  const highlights = [
    { icon: Package, text: '60 cápsulas por frasco' },
    { icon: Award, text: '500mg por cápsula' },
    { icon: Clock, text: 'Uso diário' },
    { icon: Leaf, text: 'Suplemento alimentar em cápsulas' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            Conheça o <span className="text-[#5D4037]">FolliVida</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem do Produto */}
          <div className="order-2 md:order-1">
            <div className="flex items-center justify-center">
              <img
                src={productImage}
                alt="FolliVida - Suplemento para Cabelo"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="order-1 md:order-2">
            <p className="text-[#3E2723] text-lg md:text-xl leading-relaxed mb-8">
              O <strong className="text-[#5D4037]">FolliVida</strong> é um suplemento alimentar em cápsulas desenvolvido para{' '}
              <strong>auxiliar na redução da queda de cabelo</strong>, fortalecendo os fios por meio de uma nutrição adequada ao organismo.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#F5F5F5] p-4 rounded-xl hover:bg-[#EFEBE9] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5D4037] to-[#4E342E] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[#3E2723] font-semibold text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
