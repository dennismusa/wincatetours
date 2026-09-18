import React from "react";
import mara from "../assets/mara.jpg";
import amboseli from "../assets/amboseli.jpg";
//import nakuru from "../assets/nakuru.jpg";
//import migration from "../assets/migration.jpg";
import nairobi from "../assets/nairobi.jpg";
//import diani1 from "../assets/diani1.jpg";
import safariVehicle from "../assets/safari-vehicle.jpg";
import {
  ArrowRight,
  Check,
  MapPin,
  Users,
  ShieldCheck,
  Heart,
  Compass,
  Phone,
  MessageCircle,
} from "lucide-react";


const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      text: "We are passionate about creating meaningful journeys that allow you to discover the beauty, wildlife, culture and people of Kenya.",
    },
    {
      icon: Users,
      title: "Personal Service",
      text: "Every traveller is different. We take time to understand your interests and create experiences around what matters most to you.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      text: "From airport transfers to multi-day safaris, we focus on dependable service, clear communication and smooth travel arrangements.",
    },
    {
      icon: Compass,
      title: "Local Expertise",
      text: "Our knowledge of Kenya helps us recommend the right destinations, experiences, routes and travel options for every journey.",
    },
  ];

  const highlights = [
    "Tailor-made Kenya safaris",
    "Professional airport transfers",
    "Reliable car hire services",
    "Hotel and accommodation bookings",
    "Wildlife and cultural experiences",
    "Personalized travel planning",
  ];

  return (
    <main className="bg-white text-[#17151A]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[65vh] overflow-hidden bg-[#17151A]">
        <img
          src={mara}
          alt="Maasai Mara Kenya"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/75 to-[#17151A]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/80 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EC1676]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                About Wincate
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Travel Kenya.
              <br />
              <span className="text-[#FF72AC]">Experience More.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Wincate Tours & Travels creates memorable journeys across Kenya,
              combining local knowledge, personalized service and unforgettable
              travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / OUR STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-24 lg:py-28">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#EC1676]/10 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#EC1676]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Images */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={nairobi}
                  alt="Kenya travel experience"
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-8 border-[#FFF9F5] shadow-xl sm:block">
                <img
                  src={safariVehicle}
                  alt="Safari vehicle"
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="absolute -left-4 top-10 rounded-2xl bg-[#17151A] px-6 py-5 text-white shadow-xl sm:-left-8">
                <p className="text-3xl font-bold text-[#FF72AC]">Kenya</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Our Home
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Our Story
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#17151A] sm:text-5xl">
                Your Journey Begins
                <span className="text-[#EC1676]"> With Us</span>
              </h2>

              <p className="mt-7 text-base leading-8 text-gray-600">
                Wincate Tours & Travels is a Kenya-based travel company
                dedicated to helping travellers discover the country's
                incredible landscapes, wildlife, beaches and cultural
                experiences.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                From the dramatic plains of the Maasai Mara to the breathtaking
                views of Mount Kilimanjaro, the lakes of the Great Rift Valley
                and the tropical coast, we help our guests experience Kenya in
                a way that feels personal, comfortable and unforgettable.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Whether you are planning your first African safari, a family
                holiday, a romantic escape, a business trip or simply looking
                for a reliable travel partner, our team is here to make the
                journey easier from start to finish.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10">
                      <Check size={15} className="text-[#EC1676]" />
                    </span>

                    <span className="text-sm font-semibold text-[#17151A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              What We Do
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#17151A] sm:text-5xl">
              More Than Just a Trip
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We bring together the essential pieces of your journey so you
              can spend less time worrying about logistics and more time
              enjoying Kenya.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Plan",
                text: "We listen to your travel ideas and help shape them into a practical itinerary.",
              },
              {
                number: "02",
                title: "Customize",
                text: "Your experience can be adapted around your interests, schedule and budget.",
              },
              {
                number: "03",
                title: "Experience",
                text: "Enjoy carefully selected destinations, activities and travel arrangements.",
              },
              {
                number: "04",
                title: "Remember",
                text: "Leave with unforgettable memories and experiences worth sharing.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-[1.75rem] border border-gray-100 bg-[#FFF9F5] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm font-black text-[#EC1676]">
                  {item.number}
                </span>

                <h3 className="mt-6 font-serif text-2xl font-bold text-[#17151A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#EC1676] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#17151A] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Why Wincate
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Travel With
                <br />
                <span className="text-[#FF72AC]">Confidence.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/60">
              We believe great travel is about more than visiting beautiful
              places. It is about feeling comfortable, being well looked after
              and having someone you can rely on throughout your journey.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#EC1676]/50 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/15">
                    <Icon size={22} className="text-[#FF72AC]" />
                  </div>

                  <h3 className="mt-7 font-serif text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          KENYA EXPERIENCE
      ========================================================= */}
      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Discover Kenya
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                From Wildlife to
                <span className="text-[#EC1676]"> the Coast</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Kenya offers an incredible variety of experiences in one
                destination. Watch the Great Migration in the Maasai Mara,
                explore Amboseli beneath Mount Kilimanjaro, discover the
                landscapes of the Rift Valley or relax beside the Indian Ocean.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Our goal is to connect you with these experiences while making
                every part of your journey simple and enjoyable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/packages"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68] hover:shadow-xl"
                >
                  Explore Our Packages
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-[#17151A] transition hover:border-[#EC1676] hover:text-[#EC1676]"
                >
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={amboseli}
                  alt="Amboseli Kenya"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#17151A]/90 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-[#FF72AC]" />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Explore Kenya
                      </p>
                      <p className="text-xs text-white/55">
                        Wildlife • Culture • Coast • Adventure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EC1676] py-20 sm:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border-[60px] border-white/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[70px] border-white/10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Your Adventure Starts Here
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Discover Kenya?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Tell us what you have in mind and let Wincate Tours & Travels
            help you turn your travel plans into an unforgettable experience.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17151A] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black hover:shadow-2xl"
            >
              Plan Your Trip
              <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/254724938419"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#17151A] transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/80">
            <Phone size={15} />
            <span>0724 938419</span>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
  {/* Footer Main */}
  <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EC1676]">
            <span className="font-serif text-xl font-bold text-white">
              W
            </span>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold">
              Wincate
            </h3>
            <p className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF4C9A]">
              Tours & Travels
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
          Discover Kenya through unforgettable safaris, carefully planned
          tours, comfortable travel and experiences designed around your
          journey.
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex gap-3">
          <a
            href="wincate"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
          >
            f
          </a>

          <a
            href="wincate"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
          >
            ◎
          </a>

          <a
            href="https://wa.me/254724938419"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
          >
            W
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Explore
        </h4>

        <ul className="space-y-4 text-sm text-white/55">
          <li>
            <a href="/" className="transition hover:text-[#FF4C9A]">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="transition hover:text-[#FF4C9A]">
              About Us
            </a>
          </li>

          <li>
            <a href="/services" className="transition hover:text-[#FF4C9A]">
              Services
            </a>
          </li>

          <li>
            <a href="/packages" className="transition hover:text-[#FF4C9A]">
              Safari Packages
            </a>
          </li>

          <li>
            <a href="/contact" className="transition hover:text-[#FF4C9A]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Destinations */}
      <div>
        <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Destinations
        </h4>

        <ul className="space-y-4 text-sm text-white/55">
          <li>
            <a href="/Destinations" className="transition hover:text-[#FF4C9A]">
              Maasai Mara
            </a>
          </li>

          <li>
            <a href="/Destinations" className="transition hover:text-[#FF4C9A]">
              Amboseli
            </a>             
          </li>

          <li>
            <a href="/Destinations" className="transition hover:text-[#FF4C9A]">
              Lake Nakuru
            </a>
          </li>

          <li>
            <a href="/Destinations" className="transition hover:text-[#FF4C9A]">
              Nairobi
            </a>
          </li>

          <li>
            <a href="/Destinations" className="transition hover:text-[#FF4C9A]">
              Diani Beach
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Contact Us
        </h4>

        <div className="space-y-5 text-sm text-white/55">

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#FF4C9A]">
              Location
            </p>
            <p>
              14199-00400
              <br />
              Nairobi, Kenya
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#FF4C9A]">
              Phone
            </p>

            <a
              href="tel:0724938419"
              className="transition hover:text-[#FF4C9A]"
            >
              0724 938419
            </a>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#FF4C9A]">
              Website
            </p>

            <a
              href="https://wincatetoursandtravels.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#FF4C9A]"
            >
              wincatetoursandtravels.com
            </a>
          </div>

        </div>
      </div>
    </div>

    

    {/* Bottom Bar */}
    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

      <p>
        © {new Date().getFullYear()} Wincate Tours & Travels. All rights reserved.
      </p>

      <div className="flex gap-5">
        <a href="/" className="transition hover:text-[#FF4C9A]">
          Privacy Policy
        </a>

        <a href="/" className="transition hover:text-[#FF4C9A]">
          Terms & Conditions
        </a>
      </div>

      <p>
        Kenya • Tours • Safaris • Travel
      </p>

    </div>
  </div>
</footer>
    </main>
  );
};

export default About;