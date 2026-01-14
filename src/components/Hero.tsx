import { useState, useEffect } from 'react';
import { AlertTriangle, Eye } from 'lucide-react';

export default function Hero() {
  const [viewers, setViewers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 20) - 10;
      setViewers(prev => {
        const newValue = prev + variation;
        return Math.max(1200, Math.min(1350, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-[#F5F5F5]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#3E2723] mb-4 md:mb-6 leading-tight px-2">
          Queda de cabelo pode estar ligada à falta de nutrientes no organismo, e não ao uso de shampoo, dizem especialistas.
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-[#5D4037] mb-4 md:mb-6 font-medium px-2">
          Descubra o segredo de cabelos e unhas fortes que eles querem esconder de você
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#8D6E63] mb-6 md:mb-8 animate-pulse px-2">
          <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
            ASSISTA AGORA — IGNORAR ISSO PODE FAZER SEU CABELO CONTINUAR CAINDO TODOS OS DIAS
          </p>
        </div>

        {/* VSL Player */}
        <div className="relative max-w-3xl mx-auto mb-6">
          <div className="relative aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
            {/* Overlay de Atenção */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10">
              <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm md:text-base font-bold">
                <AlertTriangle className="w-5 h-5" />
                ATENÇÃO: este vídeo pode sair do ar a qualquer momento
              </div>
            </div>

          </div>

          {/* Indicador de Visualizações */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[#3E2723]">
            <Eye className="w-5 h-5 text-[#5D4037]" />
            <p className="font-semibold">
              Pessoas assistindo agora: <span className="text-[#5D4037] font-bold">+{viewers.toLocaleString('pt-BR')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
