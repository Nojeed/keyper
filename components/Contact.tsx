import Image from "next/image";
import { ScrollAnimation } from "./ScrollAnimation";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact({ dict }: { dict: any }) {
  return (
    <section
      id="contact"
      className="py-24 bg-[#181c21] text-white overflow-hidden relative"
    >
      {/* Background Decor / Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#baa360] opacity-[0.03] skew-x-12 transform translate-x-32 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <ScrollAnimation animation="fade-right">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-[#baa360]">
              {dict.contact.title}
            </h2>
            <div className="space-y-10 text-lg font-light">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#baa360]/30 flex items-center justify-center group-hover:bg-[#baa360] transition-colors duration-500 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">
                    {dict.contact.office}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {dict.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#baa360]/30 flex items-center justify-center group-hover:bg-[#baa360] transition-colors duration-500 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">
                    {dict.contact.phone}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    +20 115 599 8455
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#baa360]/30 flex items-center justify-center group-hover:bg-[#baa360] transition-colors duration-500 flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">
                    {dict.contact.email}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    info@keyperrealestate.com
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animation="fade-left"
            className="bg-white/[0.02] backdrop-blur-xl p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl relative"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#baa360]/30"></div>

            <h3 className="text-3xl font-serif mb-10 text-white">
              {dict.contact.sendMessageTitle}
            </h3>
            <form className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder={dict.contact.namePlaceholder}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#baa360] transition-all duration-500 font-light placeholder:text-white/40"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder={dict.contact.emailPlaceholder}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#baa360] transition-all duration-500 font-light placeholder:text-white/40"
                />
              </div>
              <div className="relative group">
                <textarea
                  rows={4}
                  placeholder={dict.contact.messagePlaceholder}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#baa360] transition-all duration-500 font-light resize-none placeholder:text-white/40"
                ></textarea>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  className="w-full bg-[#baa360] text-white font-serif tracking-[4px] py-5 rounded-sm hover:bg-white hover:text-[#181c21] transition-all duration-500 shadow-xl hover:shadow-[#baa360]/20"
                >
                  {dict.contact.sendButton}
                </button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
