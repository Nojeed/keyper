import { getDictionary, Locale } from "../i18n/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <main className="min-h-screen">
      <Header dict={dict} lang={lang} />
      <Hero dict={dict} lang={lang} />
      <About dict={dict} />
      <Services dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} lang={lang} />
    </main>
  );
}
