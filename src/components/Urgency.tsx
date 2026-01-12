import { AlertTriangle, TrendingDown } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-yellow-300" />
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Lotes promocionais limitados disponíveis hoje
            </h3>
            <AlertTriangle className="w-8 h-8 text-yellow-300" />
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <div className="flex items-center gap-3 text-yellow-300">
              <TrendingDown className="w-6 h-6" />
              <p className="text-lg md:text-xl font-semibold">
                Restam poucas unidades com desconto ativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
