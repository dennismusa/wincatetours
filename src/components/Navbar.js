
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Destinations",
      href: "/Destinations",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Packages",
      href: "/packages",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#17151A]/95 shadow-xl backdrop-blur-xl"
            : "bg-[#17151A]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-[70px]" : "h-[82px]"
            }`}
          >

            {/* =================================================
                LOGO
            ================================================== */}
            <a
              href="/"
              onClick={closeMobile}
              className="flex shrink-0 items-center gap-3"
            >
              {/* Temporary W logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EC1676] text-white shadow-lg shadow-pink-900/30">
                <span className="font-serif text-xl font-bold">
                  W
                </span>
              </div>

              <div className="leading-none">
                <span className="block font-serif text-[21px] font-bold tracking-tight text-white sm:text-[23px]">
                  WINCATE
                </span>

                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                  Tours & Travels
                </span>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:text-[#FF4C9A]"
                >
                  {link.name}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#EC1676] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================== */}
            <div className="hidden items-center gap-3 lg:flex">

              {/* Phone */}
              <a
                href="tel:0724938419"
                className="hidden items-center gap-2 text-xs font-semibold text-white xl:flex"
              >
                <Phone
                  size={15}
                  className="text-[#FF4C9A]"
                />

                0724 938419
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254724938419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Wincate on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[#EC1676] hover:bg-[#EC1676]"
              >
                <MessageCircle size={18} />
              </a>

              {/* Main CTA */}
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#EC1676] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-pink-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D80F68]"
              >
                Plan Your Trip

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EC1676] lg:hidden"
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* Pink accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#EC1676] to-transparent opacity-70" />
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobile}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-[390px] overflow-y-auto bg-[#17151A] shadow-2xl transition-transform duration-500 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex min-h-full flex-col px-6 pb-8 pt-24">

            {/* Mobile Header */}
            <div className="mb-8 border-b border-white/10 pb-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EC1676] text-white">
                  <span className="font-serif text-xl font-bold">
                    W
                  </span>
                </div>

                <div>
                  <div className="font-serif text-xl font-bold text-white">
                    WINCATE
                  </div>

                  <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                    Tours & Travels
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/50">
                Discover Kenya through unforgettable
                tours, safaris and travel experiences.
              </p>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================== */}
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#EC1676]">
                      0{index + 1}
                    </span>

                    <span className="text-lg font-semibold text-white transition-colors group-hover:text-[#FF4C9A]">
                      {link.name}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF4C9A]"
                  />
                </a>
              ))}
            </nav>

            {/* =================================================
                MOBILE CTA
            ================================================== */}
            <div className="mt-8">
              <a
                href="/contact"
                onClick={closeMobile}
                className="group flex items-center justify-center gap-3 rounded-full bg-[#EC1676] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-pink-950/30 transition hover:bg-[#D80F68]"
              >
                Plan Your Trip

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                CONTACT BUTTONS
            ================================================== */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:0724938419"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition hover:border-[#EC1676]/50 hover:bg-[#EC1676]/10"
              >
                <Phone
                  size={19}
                  className="text-[#FF4C9A]"
                />

                <span className="text-xs font-bold text-white">
                  Call Us
                </span>

                <span className="text-[10px] text-white/40">
                  0724 938419
                </span>
              </a>

              <a
                href="https://wa.me/254724938419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition hover:border-green-500/40 hover:bg-green-500/10"
              >
                <MessageCircle
                  size={19}
                  className="text-green-400"
                />

                <span className="text-xs font-bold text-white">
                  WhatsApp
                </span>

                <span className="text-[10px] text-white/40">
                  Chat with us
                </span>
              </a>
            </div>

            {/* =================================================
                MOBILE BRAND FOOTER
            ================================================== */}
            <div className="mt-auto pt-12 text-center">
              <div className="font-serif text-lg font-bold text-white">
                WINCATE
              </div>

              <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                Tours & Travels
              </div>

              <p className="mt-4 text-xs text-white/30">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

