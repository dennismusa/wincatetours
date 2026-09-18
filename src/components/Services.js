import React from "react";
import mara from "../assets/mara.jpg";
//import amboseli from "../assets/amboseli.jpg";
//import nakuru from "../assets/nakuru.jpg";
//import migration from "../assets/migration.jpg";
import nairobi from "../assets/nairobi.jpg";
import diani1 from "../assets/diani1.jpg";
import safariVehicle from "../assets/safari-vehicle.jpg";
import {
  ArrowRight,
  Plane,
  Car,
  Hotel,
  Compass,
  Map,
  CalendarCheck,
  ShieldCheck,
  Phone,
  MessageCircle,
  Check,
} from "lucide-react";



const Services = () => {
  const services = [
    {
      number: "01",
      icon: Compass,
      title: "Tours & Safaris",
      description:
        "Discover Kenya through carefully planned wildlife safaris, city excursions, cultural experiences and unforgettable adventures.",
      image: mara,
      features: [
        "Maasai Mara safaris",
        "Wildlife experiences",
        "Cultural excursions",
        "Private & group tours",
      ],
    },
    {
      number: "02",
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Start and end your journey comfortably with reliable airport transfers between Nairobi's airports, hotels and other destinations.",
      image: nairobi,
      features: [
        "Airport pickups",
        "Airport drop-offs",
        "Private transfers",
        "Professional service",
      ],
    },
    {
      number: "03",
      icon: Car,
      title: "Car Hire",
      description:
        "Choose a convenient vehicle solution for business, leisure, road trips and exploring Kenya at your own pace.",
      image: safariVehicle,
      features: [
        "Flexible vehicle options",
        "Short & long-term hire",
        "Self-drive options",
        "Chauffeur services",
      ],
    },
    {
      number: "04",
      icon: Hotel,
      title: "Hotel Bookings",
      description:
        "We help you find and arrange comfortable accommodation that matches your destination, travel style and budget.",
      image: diani1,
      features: [
        "Hotels & lodges",
        "Safari camps",
        "Beach resorts",
        "Accommodation planning",
      ],
    },
    {
      number: "05",
      icon: Map,
      title: "Excursions",
      description:
        "Experience Kenya's attractions through memorable day trips and excursions designed around your interests.",
      image: nairobi,
      features: [
        "Nairobi National Park",
        "City experiences",
        "Nature excursions",
        "Cultural experiences",
      ],
    },
    {
      number: "06",
      icon: CalendarCheck,
      title: "Travel Planning",
      description:
        "Let us handle the details. We help organize your itinerary, transport, accommodation and experiences into one smooth journey.",
      image: mara,
      features: [
        "Custom itineraries",
        "Trip coordination",
        "Transport planning",
        "Travel assistance",
      ],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      text: "We focus on dependable arrangements and clear communication throughout your journey.",
    },
    {
      icon: Compass,
      title: "Local Knowledge",
      text: "Our understanding of Kenya helps you discover the right destinations and experiences.",
    },
    {
      icon: CalendarCheck,
      title: "Flexible Planning",
      text: "Your trip can be adjusted around your schedule, interests and travel requirements.",
    },
    {
      icon: MessageCircle,
      title: "Personal Support",
      text: "From your first enquiry to the end of your trip, we're here to assist you.",
    },
  ];

  return (
    <main className="bg-white text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[60vh] overflow-hidden bg-[#17151A]">
        <img
          src={mara}
          alt="Kenya safari"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/75 to-[#17151A]/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/85 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Our Services
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Everything You Need
              <br />
              <span className="text-[#FF72AC]">for Your Journey.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From unforgettable safaris and airport transfers to car hire,
              accommodation and excursions, Wincate Tours & Travels makes
              exploring Kenya simple, comfortable and memorable.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-24">

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#EC1676]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Travel Made Simple
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Your Journey,
              <span className="text-[#EC1676]"> Our Expertise</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Whether you're visiting Kenya for a safari, holiday, business
              trip or short excursion, we provide the essential travel
              services needed to make your experience smooth from beginning
              to end.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/85 via-transparent to-transparent" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#EC1676] text-sm font-black text-white shadow-lg">
                      {service.number}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#EC1676] shadow-xl">
                      <Icon size={22} />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-7">

                    <h3 className="font-serif text-2xl font-bold text-[#17151A]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-3">

                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10">
                            <Check
                              size={13}
                              className="text-[#EC1676]"
                            />
                          </span>

                          <span className="text-sm font-semibold text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}

                    </div>

                    <a
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676] transition group-hover:gap-3"
                    >
                      Enquire Now
                      <ArrowRight size={16} />
                    </a>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          FEATURE BANNER
      ========================================================= */}
      <section className="px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#17151A]">

          <img
            src={mara}
            alt="Kenya safari experience"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#17151A] via-[#17151A]/90 to-[#17151A]/45" />

          <div className="relative grid min-h-[430px] items-center lg:grid-cols-2">

            <div className="px-7 py-14 sm:px-12 lg:px-16">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Tailor-Made Travel
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Your Trip Should Feel
                <span className="text-[#FF72AC]"> Like Yours.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                Tell us where you want to go, what you want to experience and
                how you want to travel. We'll help put the pieces together
                into a journey designed around you.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68] hover:shadow-xl"
              >
                Start Planning
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#17151A] py-20 text-white sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                The Wincate Difference
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Travel With
                <br />
                <span className="text-[#FF72AC]">Confidence.</span>
              </h2>

            </div>

            <p className="max-w-2xl text-base leading-8 text-white/60">
              We believe good travel service is about being available,
              dependable and attentive to the details that matter.
            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#EC1676]/50"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/15">
                    <Icon
                      size={22}
                      className="text-[#FF72AC]"
                    />
                  </div>

                  <h3 className="mt-7 font-serif text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {benefit.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICE PROCESS
      ========================================================= */}
      <section className="bg-[#FFF9F5] py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              How It Works
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              From Enquiry to Adventure
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Tell Us Your Plans",
                text: "Share your destination, dates, interests and travel requirements with our team.",
              },
              {
                number: "02",
                title: "We Plan Your Trip",
                text: "We'll help arrange the services, accommodation, transport and experiences you need.",
              },
              {
                number: "03",
                title: "Enjoy the Journey",
                text: "Travel with confidence knowing that your arrangements have been carefully planned.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-[2rem] bg-white p-8 shadow-sm"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EC1676] font-black text-white">
                  {step.number}
                </div>

                <h3 className="mt-7 font-serif text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EC1676] py-20 sm:py-24">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border-[60px] border-white/10" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[70px] border-white/10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Let's Plan Together
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Where Will Your Journey Take You?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Whether you need a safari, airport transfer, car hire,
            accommodation or a complete travel package, we're ready to help.
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

export default Services;