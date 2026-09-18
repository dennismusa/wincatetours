import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Compass,
  Sparkles,
  X,
} from "lucide-react";


import mara from "../assets/mara.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import migration from "../assets/migration.jpg";
import nairobi from "../assets/nairobi.jpg";
import diani1 from "../assets/diani1.jpg";
//import safariVehicle from "../assets/safari-vehicle.jpg";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      name: "Maasai Mara",
      region: "Southwestern Kenya",
      category: "Wildlife Safari",
      image: mara,
      description:
        "Experience Kenya's legendary wilderness, where vast savannahs, abundant wildlife and unforgettable safari moments come together.",
      highlights: [
        "Big Five encounters",
        "Great Wildebeest Migration",
        "Maasai cultural experiences",
        "Hot-air balloon safaris",
      ],
    },
    {
      name: "Amboseli",
      region: "Southern Kenya",
      category: "Wildlife & Kilimanjaro Views",
      image: amboseli,
      description:
        "Discover magnificent elephant herds against the spectacular backdrop of Mount Kilimanjaro.",
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro views",
        "Game drives",
        "African sunset experiences",
      ],
    },
    {
      name: "Lake Nakuru",
      region: "Rift Valley",
      category: "Wildlife & Birding",
      image: nakuru,
      description:
        "Explore one of Kenya's iconic Rift Valley destinations, known for wildlife, dramatic landscapes and exceptional birdlife.",
      highlights: [
        "Rhino sightings",
        "Bird watching",
        "Lake views",
        "Scenic Rift Valley landscapes",
      ],
    },
    {
      name: "Nairobi",
      region: "Central Kenya",
      category: "City & Wildlife",
      image: nairobi,
      description:
        "Combine the energy of Kenya's capital with remarkable wildlife experiences just minutes from the city centre.",
      highlights: [
        "Nairobi National Park",
        "Giraffe experiences",
        "Cultural attractions",
        "City tours",
      ],
    },
    {
      name: "Diani Beach",
      region: "Kenya Coast",
      category: "Beach Escape",
      image: diani1,
      description:
        "Relax along Kenya's beautiful Indian Ocean coastline with white sandy beaches, warm waters and tropical experiences.",
      highlights: [
        "White sandy beaches",
        "Indian Ocean",
        "Water activities",
        "Luxury beach resorts",
      ],
    },
    {
      name: "Great Migration",
      region: "Maasai Mara",
      category: "Seasonal Wildlife",
      image: migration,
      description:
        "Witness one of nature's most spectacular wildlife events as millions of wildebeest and other animals move across the ecosystem.",
      highlights: [
        "Wildebeest migration",
        "Predator encounters",
        "River crossings",
        "Seasonal game viewing",
      ],
    },
  ];

  return (
    <div className="bg-[#FFF9F5] text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[480px] overflow-hidden bg-black">
        <img
          src={mara}
          alt="Kenya safari destination"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl text-white">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF4C9A] sm:text-sm">
                Explore Kenya
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Discover
              <span className="block text-[#FF4C9A]">
                Extraordinary Places
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              From the legendary plains of the Maasai Mara to the beaches of
              Diani, discover remarkable destinations and unforgettable
              experiences across Kenya.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/packages"
                className="group inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68]"
              >
                Explore Packages

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#17151A]"
              >
                Plan Your Trip
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Where Will You Go?
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#17151A] sm:text-5xl">
                Kenya is waiting
                <span className="block text-[#EC1676]">
                  to be explored.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-black/60">
                Kenya offers an extraordinary mix of wildlife, landscapes,
                culture and coastal escapes. Whether you dream of watching
                lions on the savannah, seeing elephants beneath Mount
                Kilimanjaro or relaxing beside the Indian Ocean, Wincate Tours
                & Travels can help create a journey around your interests.
              </p>

              <p className="mt-4 text-base leading-8 text-black/60">
                Choose a destination below and discover experiences,
                attractions and safari possibilities waiting for you.
              </p>

              <div className="mt-7 flex flex-wrap gap-6">
                <div>
                  <p className="font-serif text-3xl font-bold text-[#EC1676]">
                    5+
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/45">
                    Destinations
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl font-bold text-[#EC1676]">
                    100%
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/45">
                    Tailor-Made
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl font-bold text-[#EC1676]">
                    24/7
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/45">
                    Travel Support
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={amboseli}
                  alt="Amboseli National Park"
                  className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl bg-black px-6 py-5 text-white shadow-2xl sm:-left-8">
                <div className="flex items-center gap-3">
                  <Compass className="text-[#FF4C9A]" size={23} />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/45">
                      Explore
                    </p>

                    <p className="font-serif text-lg font-bold">
                      Magical Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          DESTINATIONS
      ========================================================= */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Our Destinations
            </span>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#17151A] sm:text-5xl">
              Places Worth
              <span className="text-[#EC1676]"> Discovering</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/55 sm:text-base">
              Explore some of Kenya's most remarkable destinations and find
              the perfect setting for your next adventure.
            </p>
          </div>

          {/* Destination Grid */}
          <div className="mt-14 space-y-10">
  {destinations.map((destination, index) => (
    <article
      key={destination.name}
      className="group overflow-hidden rounded-[2rem] border border-black/5 bg-[#FFF9F5] shadow-sm transition duration-500 hover:shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* =====================================================
            IMAGE
        ===================================================== */}
        <div
          className={`relative min-h-[380px] overflow-hidden lg:min-h-[500px] ${
            index % 2 !== 0 ? "lg:order-2" : ""
          }`}
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Destination Number */}
          <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm font-bold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Category */}
          <div className="absolute right-6 top-6 rounded-full bg-[#EC1676] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg">
            {destination.category}
          </div>

          {/* Image Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

            <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/75">
              <MapPin
                size={15}
                className="text-[#FF4C9A]"
              />

              {destination.region}
            </div>

            <h3 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              {destination.name}
            </h3>

          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div
          className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${
            index % 2 !== 0 ? "lg:order-1" : ""
          }`}
        >

          {/* Small Heading */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#EC1676]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Explore Kenya
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#17151A] sm:text-4xl">
            Experience{" "}
            <span className="text-[#EC1676]">
              {destination.name}
            </span>
          </h3>

          {/* Description */}
          <p className="mt-5 text-sm leading-8 text-black/60 sm:text-base">
            {destination.description}
          </p>

          {/* Extended Description */}
          <p className="mt-4 text-sm leading-8 text-black/50">
            Discover the character of this remarkable destination through
            carefully planned game drives, scenic experiences, local
            encounters and unforgettable moments in the heart of Kenya.
            Whether you are travelling for wildlife, relaxation,
            photography or adventure, your itinerary can be tailored around
            the experiences that matter most to you.
          </p>

          {/* =================================================
              INFORMATION GRID
          ================================================= */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {/* Best For */}
            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EC1676]">
                Ideal For
              </p>

              <p className="mt-2 text-sm font-semibold text-[#17151A]">
                Wildlife, Adventure & Discovery
              </p>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EC1676]">
                Experience
              </p>

              <p className="mt-2 text-sm font-semibold text-[#17151A]">
                Guided Tours & Tailor-Made Safaris
              </p>
            </div>

          </div>

          {/* =================================================
              HIGHLIGHTS
          ================================================= */}
          <div className="mt-8">

            <h4 className="font-serif text-xl font-bold text-[#17151A]">
              Destination Highlights
            </h4>

            <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {destination.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-sm text-black/60"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EC1676]" />
                  </span>

                  {highlight}
                </div>
              ))}
            </div>

          </div>

          {/* =================================================
              FOOTER LINE
          ================================================= */}
          <div className="mt-9 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/35">
                Travel With Wincate
              </p>

              <p className="mt-1 text-sm font-medium text-[#17151A]">
                Personalised journeys across Kenya
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
            >
              Plan Your Trip

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* =========================================================
          FEATURED EXPERIENCE
      ========================================================= */}
      <section className="relative overflow-hidden bg-black px-6 py-20 lg:px-8 lg:py-24">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#EC1676]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#EC1676]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={migration}
                alt="Wildebeest Migration"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="text-white">

              <div className="mb-5 flex items-center gap-3">
                <Sparkles size={19} className="text-[#FF4C9A]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
                  Signature Experience
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Witness the
                <span className="block text-[#FF4C9A]">
                  Great Migration
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/60 sm:text-base">
                Experience one of nature's most extraordinary spectacles in
                the Maasai Mara. Follow the action across the savannah and
                experience unforgettable wildlife encounters.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-serif text-xl font-bold">
                    Wildlife
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    Exceptional game viewing
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-serif text-xl font-bold">
                    Adventure
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    Unforgettable safari moments
                  </p>
                </div>
              </div>

              <a
                href="/packages"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D80F68]"
              >
                View Safari Packages

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOM TRIP CTA
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#EC1676] px-7 py-14 text-center text-white shadow-2xl sm:px-12">

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Your Journey, Your Way
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
            Can't decide where to go?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Tell us what you want to experience and our team can help you
            create a tailor-made itinerary combining the destinations that
            interest you most.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#17151A]"
          >
            Start Planning

            <ArrowRight size={18} />
          </a>

        </div>
      </section>

      {/* =========================================================
          DESTINATION MODAL
      ========================================================= */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#EC1676]"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative h-[280px] overflow-hidden">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF4C9A]">
                  {selectedDestination.category}
                </p>

                <h3 className="font-serif text-4xl font-bold">
                  {selectedDestination.name}
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-7 sm:p-9">

              <div className="flex items-center gap-2 text-sm text-black/50">
                <MapPin size={16} className="text-[#EC1676]" />
                {selectedDestination.region}
              </div>

              <p className="mt-5 text-sm leading-8 text-black/60">
                {selectedDestination.description}
              </p>

              <h4 className="mt-7 font-serif text-2xl font-bold">
                Highlights
              </h4>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {selectedDestination.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-xl bg-[#FFF9F5] p-4 text-sm font-medium text-black/65"
                  >
                    <span className="mr-2 text-[#EC1676]">●</span>
                    {highlight}
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D80F68]"
              >
                Plan This Trip
                <ArrowRight size={18} />
              </a>

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
    </div>
  );
};

export default Destinations;