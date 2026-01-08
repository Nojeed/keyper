import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

export default function About({ dict }: { dict: any }) {
  return (
    <section
      id="about"
      className="py-24 bg-white text-[#181c21] overflow-hidden"
    >
      <div className="container mx-auto px-6">
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
                {dict.nav.mission}
              </h3>
              <div className="w-16 h-1 bg-[#baa360]"></div>
              <p className="text-lg text-gray-600 leading-loose">
                To empower our clients with transparent, data-driven real estate
                solutions that simplify decision-making, maximize value, and
                build lasting trust. We strive to redefine the property
                experience through unwavering dedication and expert guidance.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-placeholder.jpg"
                  alt={dict.nav.mission}
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
