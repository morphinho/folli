import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcos Vinícius',
      rating: 5,
      text: 'Depois de 1 mês usando o FolliVida, a quantidade de cabelo que caía diminuiu MUITO. No ralo quase não cai mais.'
    },
    {
      name: 'Fernanda Lopes',
      rating: 5,
      text: 'Antes meu cabelo caía só de passar a mão. Hoje isso praticamente não acontece mais.'
    },
    {
      name: 'Ricardo Almeida',
      rating: 5,
      text: 'Não é milagre, mas a queda reduziu bastante. Valeu cada centavo.'
    },
    {
      name: 'Juliana Costa',
      rating: 5,
      text: 'Percebi menos cabelo no travesseiro e no banho. Já estou no segundo frasco.'
    },
    {
      name: 'Paulo Henrique',
      rating: 5,
      text: 'O FolliVida foi o que mais ajudou a segurar a queda. Chegou rápido.'
    },
    {
      name: 'Camila Rodrigues',
      rating: 5,
      text: 'No começo duvidei, mas hoje recomendo. A queda diminuiu muito.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            O que dizem nossos <span className="text-[#388E3C]">clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full mb-6"></div>

          {/* Avaliação Média */}
          <div className="inline-flex items-center gap-3 bg-[#F5F5F5] px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#3E2723]">4,8 de 5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-[#388E3C]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D4AF37] opacity-40" />
              </div>

              <p className="text-[#3E2723] leading-relaxed mb-4 min-h-[80px]">
                {testimonial.text}
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-[#3E2723]">{testimonial.name}</p>
                <p className="text-sm text-[#388E3C]">Cliente verificado</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
