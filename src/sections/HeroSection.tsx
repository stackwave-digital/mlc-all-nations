import { useEffect, useRef } from 'react';
import { Facebook, Youtube, Instagram, Globe } from 'lucide-react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden flex flex-col justify-center animate-in fade-in duration-1000">
      {/* Topographic Background Pattern - Opacity turned down to let video take focus */}
      <div className="absolute inset-0 topographic-bg opacity-[0.05] pointer-events-none" />

      {/* Social Media Sidebar - Left */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-4 animate-in slide-in-from-left-8 duration-1000 delay-300 fill-mode-both hidden md:flex">
        <a
          href="https://www.facebook.com/weareMercyLifechurch"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-black hover:text-white hover:border-black transition-all"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCuwZK0Fj3Tks6tXmniPGRmA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-black hover:text-white hover:border-black transition-all"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/weareMercyLifechurch/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/80 hover:bg-black hover:text-white hover:border-black transition-all"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <div className="writing-mode-vertical text-black/80 text-[10px] font-bold tracking-[0.2em] uppercase mt-6" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Follow Us
        </div>
      </div>

      {/* Globe & Cross - Right Side */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center animate-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both hidden md:flex">
        <div className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center mb-6 bg-white/50 backdrop-blur-sm shadow-sm">
          <Globe className="w-5 h-5 text-black globe-rotate" strokeWidth={1.5} />
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-black/50 to-transparent" />
        {/* Abstract minimalist cross */}
        <div className="relative mt-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-black/60" />
          <div className="w-[1px] h-12 bg-black/60 mx-auto" />
        </div>
      </div>

      {/* Main Content Container - Matches Reference Full Box Layout */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 md:px-24 pt-32 pb-8 flex flex-col items-center flex-1 justify-center">
        {/* Contained Video Box */}
        <div className="relative w-full aspect-[21/9] md:aspect-video bg-[#0a0a0a] border border-white/10 rounded-md overflow-hidden shadow-2xl shadow-black animate-in zoom-in-[0.98] fade-in duration-[1.5s] delay-150 fill-mode-both group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2s] ease-out"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
          >
            {/* The actual video file path */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      </div>

      {/* Scrolling Text - Directly Beneath Video Block */}
      <div className="w-full overflow-hidden border-y border-black/5 bg-white/60 backdrop-blur-md py-5 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both shadow-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="flex items-center text-black/70 hover:text-black transition-colors text-xl md:text-2xl lg:text-3xl font-black tracking-[0.2em] uppercase cursor-default px-8">
              MERCYLIFE CHURCH 
              <span className="text-teal-600/50 mx-8 flex items-center">
                <Globe className="w-6 h-6 animate-pulse" />
              </span> 
              A PLACE OF HOPE
            </span>
          ))}
        </div>
      </div>

      {/* Floating CTA Button - Bottom Left */}
      <div className="absolute bottom-8 left-4 md:left-8 z-30 animate-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
        <a
          href="/welcome"
          className="flex items-center bg-black hover:bg-black/90 text-white px-5 py-2.5 rounded-sm font-bold transition-all shadow-xl group border border-transparent hover:border-black"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-teal-700 transition-colors">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xs tracking-[0.2em] uppercase pt-0.5">New here? Visit MercyLife</span>
        </a>
      </div>
    </section>
  );
}
