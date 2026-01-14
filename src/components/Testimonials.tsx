import { Star, Play } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set());

  // Vídeos estão na pasta public/videos - servidos diretamente pelo Vite
  const videoTestimonials = [
    {
      id: 1,
      video: '/videos/01.mp4',
      name: 'Maria Silva',
      age: 34
    },
    {
      id: 2,
      video: '/videos/02.mp4',
      name: 'Ana Paula Santos',
      age: 28
    },
    {
      id: 3,
      video: '/videos/03.mp4',
      name: 'Juliana Costa',
      age: 42
    }
  ];

  const handleVideoClick = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#3E2723] mb-3 md:mb-4">
            O que dizem nossos <span className="text-[#5D4037]">clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto rounded-full mb-4 md:mb-6"></div>

          {/* Avaliação Média */}
          <div className="inline-flex items-center gap-2 md:gap-3 bg-[#F5F5F5] px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full">
            <div className="flex gap-0.5 md:gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723]">4,8 de 5</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#5D4037] w-full sm:w-fit max-w-full sm:max-w-none"
            >
              <div className="relative bg-transparent rounded-t-2xl overflow-hidden group cursor-pointer flex items-center justify-center w-fit mx-auto" onClick={() => handleVideoClick(testimonial.id)}>
                {videoErrors.has(testimonial.id) ? (
                  <div className="flex flex-col items-center justify-center text-[#3E2723] p-4">
                    <Play className="w-16 h-16 mb-4 opacity-50" />
                    <p className="text-sm text-center">Vídeo em carregamento...</p>
                  </div>
                ) : playingVideo === testimonial.id ? (
                  <video
                    src={testimonial.video}
                    controls
                    autoPlay
                    className="h-auto max-h-[600px] object-contain block"
                    onEnded={() => setPlayingVideo(null)}
                    onError={() => {
                      setVideoErrors(prev => new Set(prev).add(testimonial.id));
                      setPlayingVideo(null);
                    }}
                  >
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <>
                    <video
                      src={testimonial.video}
                      className="h-auto max-h-[600px] object-contain block"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onError={() => {
                        setVideoErrors(prev => new Set(prev).add(testimonial.id));
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform pointer-events-auto">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-[#5D4037] ml-1" fill="#5D4037" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
                  <div className="flex gap-0.5 md:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                </div>

                <div className="pt-3 md:pt-4 border-t border-gray-200">
                  <div className="flex items-baseline gap-1 md:gap-2 mb-1">
                    <p className="font-bold text-[#3E2723] text-base md:text-lg">{testimonial.name}</p>
                    <span className="text-[#5D4037] text-xs md:text-sm">•</span>
                    <p className="text-[#5D4037] text-xs md:text-sm font-semibold">{testimonial.age} anos</p>
                  </div>
                  <p className="text-xs text-[#5D4037] font-medium">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
