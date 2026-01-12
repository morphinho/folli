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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 leading-tight">
          Seu cabelo está caindo cada vez mais?
          <br />
          <span className="text-[#388E3C]">
            O problema pode não ser shampoo, e sim o que está faltando no seu corpo.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-[#5D4037] mb-4 font-medium">
          Descubra como nutrir o organismo de dentro para fora pode ajudar a reduzir a queda capilar.
        </p>

        <div className="flex items-center justify-center gap-2 text-red-600 mb-8 animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          <p className="text-base md:text-lg font-semibold">
            Assista ao vídeo abaixo antes que ele seja removido.
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

            {/* Placeholder para o vídeo */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3E2723] to-[#5D4037]">
              <div className="text-center text-white p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-xl font-semibold">Vídeo VSL</p>
                <p className="text-sm opacity-80 mt-2">Insira seu vídeo de vendas aqui</p>
              </div>
            </div>
          </div>

          {/* Indicador de Visualizações */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[#3E2723]">
            <Eye className="w-5 h-5 text-[#388E3C]" />
            <p className="font-semibold">
              Pessoas assistindo agora: <span className="text-[#388E3C] font-bold">+{viewers.toLocaleString('pt-BR')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
