import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O FolliVida realmente ajuda na queda de cabelo?',
      answer: 'Sim. O FolliVida auxilia na redução da queda de cabelo causada por deficiência nutricional, fortalecendo os fios com o uso contínuo.'
    },
    {
      question: 'Em quanto tempo vejo resultados?',
      answer: 'Muitas pessoas relatam redução da queda nas primeiras semanas, com melhora progressiva ao longo do uso.'
    },
    {
      question: 'O FolliVida faz o cabelo crescer?',
      answer: 'O FolliVida não é medicamento. Ele auxilia na saúde capilar e na redução da queda, favorecendo o crescimento natural.'
    },
    {
      question: 'Como devo usar?',
      answer: 'Uso diário, conforme indicado na embalagem. Não exceder a dose recomendada.'
    },
    {
      question: 'Tem contraindicações?',
      answer: 'Gestantes, lactantes ou pessoas com condições específicas devem consultar um profissional de saúde.'
    },
    {
      question: 'Quantas cápsulas vêm no frasco?',
      answer: 'Cada frasco contém 60 cápsulas de 500mg.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-[#388E3C]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723]">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F5F5] transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#3E2723] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#388E3C] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 bg-[#F9F9F9]">
                  <p className="text-[#5D4037] leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
