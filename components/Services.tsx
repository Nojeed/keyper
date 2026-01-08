import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Services({ dict }: { dict: any }) {
  const services = [
    {
      title: dict.services.residentialTitle,
      image: "/images/service-residential.jpg",
      desc: dict.services.residentialDesc,
    },
    {
      title: dict.services.commercialTitle,
      image: "/images/service-commercial.jpg",
      desc: dict.services.commercialDesc,
    },
    {
      title: dict.services.insightsTitle,
      image: "/images/service-insights.jpg",
      desc: dict.services.insightsDesc,
    },
    {
      title: dict.services.managementTitle,
      image: "/images/service-management.jpg",
      desc: dict.services.managementDesc,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#181c21]">
            {dict.services.title}
          </h2>
          <div className="w-24 h-1 bg-[#baa360] mx-auto mt-8 rounded-full"></div>
        </ScrollAnimation>

        <div className="space-y-32">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16`}
            >
              <ScrollAnimation
                animation={i % 2 === 0 ? "fade-right" : "fade-left"}
                className="w-full md:w-1/2"
              >
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation
                animation={i % 2 === 0 ? "fade-left" : "fade-right"}
                className="w-full md:w-1/2 space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-serif text-[#181c21]">
                  {s.title}
                </h3>
                <div className="w-16 h-1 bg-[#baa360]"></div>
                <p className="text-lg text-gray-600 leading-loose">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-block text-[#baa360] font-medium uppercase tracking-widest hover:text-[#181c21] transition-colors mt-4"
                >
                  {dict.contact.title}
                </a>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
