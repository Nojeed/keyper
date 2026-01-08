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
    <section
      id="services"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-full h-full pointer-events-none opacity-50">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full text-[#baa360]/15 stroke-current fill-none"
        >
          <path
            d="M-100,500 C150,200 350,800 500,500 C650,200 850,800 1100,500"
            strokeWidth="2"
          />
          <path
            d="M-100,600 C150,300 350,900 500,600 C650,300 850,900 1100,600"
            strokeWidth="1"
            strokeDasharray="10 20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                <div className="relative group/img">
                  {/* Decorative Rotated Cards behind image */}
                  <div
                    className={`absolute -inset-4 md:-inset-8 border border-[#baa360]/20 rounded-2xl ${
                      i % 2 === 0 ? "rotate-3" : "-rotate-3"
                    } transition-transform duration-700 group-hover/img:rotate-0 -z-10`}
                  ></div>
                  <div
                    className={`absolute -inset-2 md:-inset-4  bg-[#baa360]/60 rounded-2xl ${
                      i % 2 === 0 ? "-rotate-2" : "rotate-2"
                    } transition-transform duration-700 group-hover/img:rotate-0 -z-10`}
                  ></div>

                  <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
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
