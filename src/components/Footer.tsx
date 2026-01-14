import { MessageCircle, Mail, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3E2723] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <img 
              src="/logo-folli-br.webp" 
              alt="FolliVida - Cabelos e Unhas" 
              className="h-auto max-w-[200px] mb-2"
            />
          </div>

          {/* Central de Atendimento */}
          <div>
            <h3 className="text-lg font-bold mb-4">CENTRAL DE ATENDIMENTO</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5515988370486" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(15) 98837-0486</span>
              </a>
              <a 
                href="mailto:contato@follivida.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@follivida.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="space-y-3">
              <a 
                href="#rastrear" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                  <Info className="w-3 h-3" />
                </div>
                <span>Rastrear Pedido</span>
              </a>
              <a 
                href="#privacidade" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                  <Info className="w-3 h-3" />
                </div>
                <span>Política de Privacidade</span>
              </a>
              <a 
                href="#termos" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                  <Info className="w-3 h-3" />
                </div>
                <span>Termos de Uso</span>
              </a>
              <a 
                href="#troca" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center flex-shrink-0">
                  <Info className="w-3 h-3" />
                </div>
                <span>Troca e Devolução</span>
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <img 
              src="/formas-de-pagamento-300x90-1-1.webp" 
              alt="Formas de Pagamento" 
              className="h-auto max-w-full"
            />
          </div>
        </div>

        {/* Bottom Section - Legal Disclaimers */}
        <div className="border-t border-white/20 pt-8 space-y-4 text-sm text-white/80 leading-relaxed">
          <p>
            Copyright © 2025 Follivida. Todos os direitos reservados. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veiculados são de propriedade exclusiva do Follivida.
          </p>
          <p>
            É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei. Informamos que o FolliVida é um tratamento. Seu resultado pode variar de pessoa para pessoa.
          </p>
          <p>
            Os preços dos produtos estão sujeitos a alteração sem aviso prévio.
          </p>
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </div>
    </footer>
  );
}
