import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Hero({ dict, lang }: { dict: any; lang: string }) {
  const isRtl = lang === "ar";

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-luxury.jpg"
          alt="Luxury Real Estate"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-5 gap-12 items-center">
        <div
          className={`md:col-span-3 space-y-8 ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <ScrollAnimation animation="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white leading-tight">
              {dict.hero.title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-right" className="delay-200">
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
              {dict.hero.subtitle}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" className="pt-6 delay-500">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-block bg-[#baa360] text-white px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[#181c21] transition-all duration-300 shadow-xl hover:shadow-[#baa360]/20"
              >
                {dict.hero.cta}
              </a>
              <a
                href="#contact"
                className="inline-block border border-white/30 text-white px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[#181c21] transition-all duration-300"
              >
                {dict.contact.title}
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Decorative / Image Element */}
        <div className="hidden md:block md:col-span-2 relative h-[500px] w-full">
          <ScrollAnimation animation="fade-left" className="h-full">
            <div className="relative h-full w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-[#baa360]/30 shadow-2xl skew-y-3">
              <Image
                src="/images/hero-detail.jpg"
                alt="Architecture Detail"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181c21]/80 to-transparent"></div>
            </div>
          </ScrollAnimation>
          {/* Floating Gold Detail */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#baa360] opacity-20 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-white text-[10px] uppercase tracking-[4px]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
}
