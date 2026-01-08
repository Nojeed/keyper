import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

export default function About({ dict }: { dict: any }) {
  return (
    <section
      id="about"
      className="py-24 bg-white text-[#181c21] overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#baa360]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#baa360]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <svg
        className="absolute top-20 left-10 w-64 h-64 text-[#baa360]/20 pointer-events-none opacity-40 md:opacity-100"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M40 60C60 20 140 20 160 60C180 100 20 100 40 140C60 180 140 180 160 140"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </svg>

      <svg
        className="absolute bottom-40 right-10 w-96 h-96 text-[#baa360]/15 pointer-events-none hidden md:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M50 200 Q100 50 250 200 T400 200"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="250"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#baa360]">
            {dict.about.title}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-600">
            {dict.about.description}
          </p>
          <div className="w-24 h-1 bg-[#baa360] mx-auto rounded-full"></div>
        </ScrollAnimation>

        {/* Mission Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <ScrollAnimation
              animation="fade-right"
              className="w-full md:w-1/2 space-y-6"
            >
              <h3 className="text-4xl font-serif text-[#181c21]">
                {dict.mission.title}
              </h3>
              <div className="w-16 h-1 bg-[#baa360]"></div>
              <p className="text-lg text-gray-600 leading-loose">
                {dict.mission.text}
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-placeholder.jpg"
                  alt={dict.mission.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <ScrollAnimation
              animation="fade-left"
              className="w-full md:w-1/2 space-y-6"
            >
              <h3 className="text-4xl font-serif text-[#181c21]">
                {dict.vision.title}
              </h3>
              <div className="w-16 h-1 bg-[#baa360]"></div>
              <p className="text-lg text-gray-600 leading-loose">
                {dict.vision.text}
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-right" className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vision-placeholder.jpg"
                  alt={dict.vision.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
