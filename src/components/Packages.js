import React, { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
  Star,
  Check,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import mara from "../assets/mara.jpg";
import migration from "../assets/migration.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import diani from "../assets/diani.jpg";
import safariVehicle from "../assets/safari-vehicle.jpg";

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      category: "Safari",
      image: mara,
      duration: "3 Days / 2 Nights",
      location: "Maasai Mara",
      title: "Maasai Mara Wildlife Escape",
      description:
        "Experience the legendary Maasai Mara with exciting game drives across one of Kenya's most celebrated wildlife destinations.",
      price: "From USD 450",
      rating: "5.0",
      guests: "Private & Small Groups",
      highlights: [
        "Game drives",
        "Big Five wildlife",
        "Professional safari guide",
        "Comfortable accommodation",
      ],
    },
    {
      id: 2,
      category: "Safari",
      image: migration,
      duration: "4 Days / 3 Nights",
      location: "Maasai Mara",
      title: "Great Migration Safari",
      description:
        "Witness one of nature's greatest spectacles as thousands of wildebeest and other wildlife move across the Mara ecosystem.",
      price: "From USD 650",
      rating: "5.0",
      guests: "Private & Small Groups",
      highlights: [
        "Wildebeest migration",
        "Game drives",
        "Predator sightings",
        "Expert safari guide",
      ],
    },
    {
      id: 3,
      category: "Safari",
      image: amboseli,
      duration: "3 Days / 2 Nights",
      location: "Amboseli",
      title: "Amboseli Kilimanjaro Safari",
      description:
        "Discover Amboseli's famous elephant herds while enjoying spectacular views of Mount Kilimanjaro.",
      price: "From USD 420",
      rating: "4.9",
      guests: "Private & Small Groups",
      highlights: [
        "Elephant encounters",
        "Mount Kilimanjaro views",
        "Game drives",
        "Scenic landscapes",
      ],
    },
    {
      id: 4,
      category: "Safari",
      image: nakuru,
      duration: "2 Days / 1 Night",
      location: "Lake Nakuru",
      title: "Lake Nakuru Adventure",
      description:
        "A short but rewarding safari combining beautiful Rift Valley scenery with exceptional wildlife viewing.",
      price: "From USD 280",
      rating: "4.9",
      guests: "Private & Small Groups",
      highlights: [
        "Lake Nakuru National Park",
        "Rhino sightings",
        "Bird watching",
        "Game drives",
      ],
    },
    {
      id: 5,
      category: "Beach",
      image: diani,
      duration: "4 Days / 3 Nights",
      location: "Diani Beach",
      title: "Diani Beach Escape",
      description:
        "Relax on Kenya's stunning Indian Ocean coast with white-sand beaches, warm waters and tropical experiences.",
      price: "From USD 520",
      rating: "4.9",
      guests: "Couples & Families",
      highlights: [
        "Beach accommodation",
        "Indian Ocean",
        "Relaxation",
        "Optional excursions",
      ],
    },
    {
      id: 6,
      category: "Adventure",
      image: safariVehicle,
      duration: "5 Days / 4 Nights",
      location: "Kenya",
      title: "Best of Kenya Safari",
      description:
        "Combine some of Kenya's most memorable wildlife destinations in one exciting multi-destination safari.",
      price: "From USD 850",
      rating: "5.0",
      guests: "Private & Small Groups",
      highlights: [
        "Multiple destinations",
        "Wildlife viewing",
        "Scenic drives",
        "Tailor-made itinerary",
      ],
    },
  ];

  const categories = ["All", "Safari", "Beach", "Adventure"];

  const filteredPackages =
    activeFilter === "All"
      ? packages
      : packages.filter((item) => item.category === activeFilter);

  return (
    <main className="bg-white text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[62vh] overflow-hidden bg-[#17151A]">

        <img
          src={migration}
          alt="Wildebeest migration safari"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/70 to-[#17151A]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/90 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 lg:px-10">

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Safari Packages
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Journeys Worth
              <br />
              <span className="text-[#FF72AC]">Remembering.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore our selection of Kenya safari, beach and adventure
              packages — carefully designed to make your journey unforgettable.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#FFF9F5] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Find Your Experience
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Choose Your
                <span className="text-[#EC1676]"> Adventure</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Browse our featured packages or contact us to create a
                completely personalized itinerary around your interests,
                schedule and budget.
              </p>

            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    activeFilter === category
                      ? "bg-[#EC1676] text-white shadow-lg"
                      : "bg-white text-[#17151A] hover:bg-[#EC1676]/10"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PACKAGES GRID
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/85 via-transparent to-transparent" />

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    {pkg.category}
                  </span>

                  {/* Duration */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-white">
                    <CalendarDays size={16} />
                    {pkg.duration}
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#17151A]">
                    <Star
                      size={13}
                      fill="currentColor"
                      className="text-[#EC1676]"
                    />
                    {pkg.rating}
                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EC1676]">
                    <MapPin size={14} />
                    {pkg.location}
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">
                    {pkg.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {pkg.description}
                  </p>

                  {/* Details */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Users size={15} />
                    {pkg.guests}
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-6">

                    <div>
                      <p className="text-xs text-gray-400">
                        Package
                      </p>

                      <p className="mt-1 text-lg font-black text-[#17151A]">
                        {pkg.price}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17151A] text-white transition hover:bg-[#EC1676]"
                      aria-label={`View ${pkg.title}`}
                    >
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CUSTOM PACKAGE BANNER
      ========================================================= */}
      <section className="px-6 pb-20 sm:px-8 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#17151A]">

          <img
            src={mara}
            alt="Maasai Mara safari"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#17151A] via-[#17151A]/90 to-[#17151A]/40" />

          <div className="relative px-7 py-16 sm:px-12 lg:px-16 lg:py-20">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Prefer Something Different?
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Create Your
                <br />
                <span className="text-[#FF72AC]">Perfect Safari.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                Our packages are just a starting point. Tell us your preferred
                destinations, travel dates, accommodation style and activities,
                and we'll help design a journey around you.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68] hover:shadow-xl"
              >
                Build My Safari
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY BOOK WITH US
      ========================================================= */}
      <section className="bg-[#17151A] py-20 text-white sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
              The Wincate Difference
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Why Travel With Us?
            </h2>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Personalized travel planning",
              "Local destination knowledge",
              "Comfortable safari vehicles",
              "Reliable travel support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EC1676]/15">
                  <Check
                    size={18}
                    className="text-[#FF72AC]"
                  />
                </div>

                <p className="mt-5 text-sm font-bold leading-6 text-white/85">
                  {item}
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

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Ready When You Are
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Let's Plan Your Adventure
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Have a package in mind or want something completely customized?
            Speak to our team and start planning your journey today.
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
            0724 938419
          </div>

        </div>

      </section>

      {/* =========================================================
          PACKAGE MODAL
      ========================================================= */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17151A]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPackage(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#17151A]/80 text-white transition hover:bg-[#EC1676]"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 overflow-hidden sm:h-80">

              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">

                <span className="rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {selectedPackage.category}
                </span>

                <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                  {selectedPackage.title}
                </h3>

              </div>

            </div>

            {/* Modal Content */}
            <div className="p-7 sm:p-9">

              <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-500">

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#EC1676]" />
                  {selectedPackage.duration}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#EC1676]" />
                  {selectedPackage.location}
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#EC1676]" />
                  {selectedPackage.guests}
                </div>

              </div>

              <p className="mt-7 leading-8 text-gray-600">
                {selectedPackage.description}
              </p>

              <h4 className="mt-8 font-serif text-xl font-bold">
                Package Highlights
              </h4>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                {selectedPackage.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl bg-[#FFF9F5] p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10">
                      <Check
                        size={14}
                        className="text-[#EC1676]"
                      />
                    </span>

                    <span className="text-sm font-semibold">
                      {highlight}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#EC1676] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#D80F68]"
                >
                  Enquire About This Package
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://wa.me/254724938419"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17151A] px-6 py-4 text-sm font-bold text-white transition hover:bg-black"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>
      )}
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

export default Packages;