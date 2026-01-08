import Link from "next/link";
import Image from "next/image";

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 flex flex-col gap-3 items-center">
            <Image
              src="/golden-logo.svg"
              alt="Keyper Logo"
              width={200}
              height={56}
              className="h-18 w-auto"
            />
            <p className="text-gray-500 text-sm mt-2">
              Real Estate Facilitators & Market Experts
            </p>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link
              href={`/${lang}`}
              className="hover:text-[#baa360] transition-colors"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}#about`}
              className="hover:text-[#baa360] transition-colors"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="hover:text-[#baa360] transition-colors"
            >
              {dict.nav.services}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="hover:text-[#baa360] transition-colors"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Keyper. {dict.footer.rights}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Privary Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
