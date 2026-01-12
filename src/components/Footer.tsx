import { Shield, Lock, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3E2723] to-[#2E1B17] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Aviso Legal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-[#FFD700] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Aviso Importante</h3>
              <p className="text-white/90 leading-relaxed">
                Este produto é um suplemento alimentar e não substitui orientação médica ou tratamento dermatológico.
              </p>
            </div>
          </div>
        </div>

        {/* Links Legais */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <a
            href="#termos"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-200"
          >
            <FileText className="w-4 h-4" />
            Termos de uso
          </a>
          <span className="text-white/40">•</span>
          <a
            href="#privacidade"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-200"
          >
            <Lock className="w-4 h-4" />
            Política de privacidade
          </a>
          <span className="text-white/40">•</span>
          <a
            href="#seguranca"
            className="flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-200"
          >
            <Shield className="w-4 h-4" />
            Página segura
          </a>
        </div>

        {/* Direitos */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-white/70 text-sm">
            2024 FolliVida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
