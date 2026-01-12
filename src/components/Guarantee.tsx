import { Shield, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#E8F5E9] via-white to-[#FFF8E1]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            Sua Segurança em <span className="text-[#388E3C]">Primeiro Lugar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-4 border-[#FFD700] hover:shadow-2xl transition-shadow duration-300 flex">
            <div className="flex flex-col items-center text-center justify-between w-full">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] shadow-lg mb-6">
                  <Shield className="w-10 h-10 text-[#3E2723]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-6">
                  Garantia de Satisfação
                </h3>

                <div className="space-y-4 mb-6">
                  <p className="text-[#5D4037] text-lg leading-relaxed">
                    Teste o <strong className="text-[#388E3C]">FolliVida</strong> conforme indicado.
                  </p>
                  <p className="text-[#5D4037] text-lg leading-relaxed">
                    Caso não fique satisfeito, entre em contato com nosso suporte.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-[#388E3C] rounded-full px-6 py-3 mt-6">
                <CheckCircle className="w-6 h-6 text-[#388E3C]" />
                <span className="text-[#388E3C] font-bold">Sua satisfação é nossa prioridade</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 flex">
            <div className="flex flex-col items-center text-center justify-between w-full">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg mb-6">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-6">
                  Cuidado com Falsificações
                </h3>

                <div className="space-y-4 mb-6">
                  <p className="text-[#5D4037] text-lg leading-relaxed">
                    O <strong className="text-[#388E3C]">FolliVida</strong> é vendido{' '}
                    <strong>exclusivamente neste site oficial</strong>.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 bg-[#E8F5E9] border-2 border-[#388E3C] rounded-2xl px-6 py-4 mt-6">
                <ShieldCheck className="w-8 h-8 text-[#388E3C] flex-shrink-0" />
                <p className="text-[#388E3C] font-bold text-left">
                  Compre apenas pelo site oficial para garantir produto original e suporte adequado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
