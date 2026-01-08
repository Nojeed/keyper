import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { dictionaries } from "../i18n/dictionaries";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Keyper | Real Estate Facilitators",
    description: "Professional real estate facilitation and advisory company.",
  };
}

export async function generateStaticParams() {
  return Object.keys(dictionaries).map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isRtl = lang === "ar";

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"}>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-[#181c21]`}
      >
        {children}
      </body>
    </html>
  );
}
