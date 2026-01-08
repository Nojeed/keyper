"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, GlobeIcon } from "./Icons";

interface NavProps {
  dict: any;
  lang: string;
}

export default function Header({ dict, lang }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /* Mounted state for portal */
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const changeLanguage = (newLang: string) => {
    // Simple path replacement for switching language
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = newLang;
      return segments.join("/");
    }
    return `/${newLang}`;
  };

  const navLinks = [
    { name: dict.nav.home, href: `/${lang}` },
    { name: dict.nav.about, href: `/${lang}#about` },
    { name: dict.nav.services, href: `/${lang}#services` },
    { name: dict.nav.mission, href: `/${lang}#mission` },
    { name: dict.nav.contact, href: `/${lang}#contact` },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="relative z-50">
          {/* If scrolled, use black logo (if background is white). If top (transparent dark bg?), use Golden? 
               Assuming Hero has dark style or image. Let's use Golden logo on top, Black on scroll. 
           */}
          <Image
            src={scrolled ? "/black-logo.svg" : "/golden-logo.svg"}
            alt="Keyper Logo"
            width={150}
            height={60}
            className="h-10 md:h-14 w-auto transition-all"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#baa360] ${
                scrolled ? "text-[#181c21]" : "text-[#181c21] md:text-white"
              }`}
              // Note: Assuming Hero text is white. If hero is white, this needs adjustment.
              // Let's force hero to be dark/image based for luxury feel.
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative group h-full flex items-center ">
            <button
              className={`flex items-center gap-2 space-x-1 rtl:space-x-reverse py-4 ${
                scrolled ? "text-[#181c21]" : "text-white"
              }`}
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="uppercase text-xs">{lang}</span>
            </button>
            {/* Dropdown with padding bridge to prevent closing on hover gap */}
            <div className="absolute top-full -right-2 pt-2 w-32 hidden group-hover:block transition-all z-50 ">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                {["en", "ar", "fr", "es", "de"].map((l) => (
                  <Link
                    key={l}
                    href={changeLanguage(l)}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#baa360]"
                  >
                    {l === "en"
                      ? "English"
                      : l === "ar"
                      ? "العربية"
                      : l === "fr"
                      ? "Français"
                      : l === "es"
                      ? "Español"
                      : "Deutsch"}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 ${
            scrolled ? "text-[#181c21]" : "text-[#baa360]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="text-[#181c21]" /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu Portal */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
              isOpen
                ? "translate-x-0 pointer-events-auto"
                : "translate-x-full rtl:-translate-x-full pointer-events-none"
            }`}
          >
            {/* Close Button Inside Portal if needed, but we used the one in Header. 
                However, if Header is z-50 and Portal is z-[9999], Portal covers Header.
                So we need a close button inside the portal or make sure Header Toggle is visible.
                
                Option A: Add Close Button inside Portal.
                Option B: Z-Index management. If Portal is top, it covers everything.
                
                Let's add a close button inside the Portal for better UX if the header gets covered.
                Or relies on the fact that the design asks for "side window".
                
                Actually, the existing toggle is fixed in Header. 
                If we make Portal z-[40], it will be under Header (z-50).
                But user said "it appears overlayed... not as a side window".
                This implies they WANT it to cover separate from header or be full height.
                
                If I make it z-40, and header is z-50.
                When scrolled, header has white bg.
                Top of menu is covered by header.
                
                If user wants "side window", usually that means full height including over header?
                Or under header?
                "appears overlayed not as a side window" -> ambiguous.
                "Overlayed" might mean "behind it" or "weirdly mixed".
                
                If I make it z-[100], it covers header.
                Then I need a close button inside it because the header button is covered.
                
                Let's look at existing code: 
                The toggle button code:
                <button onClick={() => setIsOpen(!isOpen)} ... >

                I will add a Close Button inside the Portal to be safe, top right.
            */}
            <button
              className="absolute top-6 right-6 text-[#181c21] md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <XIcon />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-[#181c21] hover:text-[#baa360] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex space-x-4 rtl:space-x-reverse mt-8">
              {["en", "ar", "fr", "es", "de"].map((l) => (
                <Link
                  key={l}
                  href={changeLanguage(l)}
                  onClick={() => setIsOpen(false)}
                  className={`uppercase font-medium ${
                    lang === l ? "text-[#baa360]" : "text-gray-500"
                  }`}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
