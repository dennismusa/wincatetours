import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Compass,
  Sparkles,
  X,
} from "lucide-react";

import mara3 from "../assets/mara3.jpg";
import mara from "../assets/mara.jpg";
import kenya1 from "../assets/kenya1.jpg";
import abadare from "../assets/abadare.jpg";
import africasafari from "../assets/africasafari.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import watamu1 from "../assets/watamu1.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import nakuru3 from "../assets/nakuru3.jpg";
//import migration from "../assets/migration.jpg";
import nairobi from "../assets/nairobi.jpg";
import diani1 from "../assets/diani1.jpg";
import diani5 from "../assets/diani5.jpg";
import east from "../assets/east.jpg";
import wilderbeast1 from "../assets/wilderbeast1.jpg";
//import safariVehicle from "../assets/safari-vehicle.jpg";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

 const destinations = [
  {
    name: "Maasai Mara",
    region: "Southwestern Kenya",
    category: "Wildlife Safari",
    image: mara3,
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
    image: nakuru3,
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
    image: wilderbeast1,
    description:
      "Witness one of nature's most spectacular wildlife events as millions of wildebeest and other animals move across the ecosystem.",
    highlights: [
      "Wildebeest migration",
      "Predator encounters",
      "River crossings",
      "Seasonal game viewing",
    ],
  },

  {
    name: "Samburu",
    region: "Northern Kenya",
    category: "Wildlife & Culture",
    image: africasafari,
    description:
      "Journey into Kenya's dramatic northern landscapes, where rugged scenery, unique wildlife and rich Samburu culture create an unforgettable safari experience.",
    highlights: [
      "Samburu Special Five",
      "Samburu cultural experiences",
      "Game drives",
      "Dramatic northern landscapes",
    ],
  },

  

  {
    name: "Tsavo West",
    region: "Southeastern Kenya",
    category: "Wildlife & Landscapes",
    image: east,
    description:
      "Discover a diverse landscape of volcanic hills, lava flows, springs and wildlife within one of Kenya's most fascinating safari regions.",
    highlights: [
      "Mzima Springs",
      "Elephant sightings",
      "Volcanic landscapes",
      "Wildlife photography",
    ],
  },

  {
    name: "Mount Kenya",
    region: "Central Kenya",
    category: "Mountain Adventure",
    image: kenya1,
    description:
      "Experience the spectacular landscapes surrounding Mount Kenya through mountain adventures, scenic walks and wildlife experiences.",
    highlights: [
      "Mountain trekking",
      "Scenic landscapes",
      "High-altitude adventures",
      "Wildlife experiences",
    ],
  },

  {
    name: "Laikipia",
    region: "Central Kenya",
    category: "Conservation & Wildlife",
    image: mara,
    description:
      "Discover Kenya's Laikipia region, where private conservancies, wildlife conservation and authentic wilderness experiences come together.",
    highlights: [
      "Private conservancies",
      "Wildlife conservation",
      "Horseback experiences",
      "Exclusive safari experiences",
    ],
  },

  {
    name: "Ol Pejeta",
    region: "Laikipia",
    category: "Wildlife & Conservation",
    image: nakuru,
    description:
      "Explore one of Kenya's leading wildlife conservation destinations, offering memorable encounters and opportunities to learn about conservation.",
    highlights: [
      "Rhino conservation",
      "Chimpanzee sanctuary",
      "Big Five wildlife",
      "Conservation experiences",
    ],
  },

  {
    name: "Lake Naivasha",
    region: "Great Rift Valley",
    category: "Nature & Adventure",
    image: nakuru,
    description:
      "Enjoy the peaceful beauty of Lake Naivasha, surrounded by dramatic Rift Valley scenery and a variety of outdoor experiences.",
    highlights: [
      "Boat rides",
      "Bird watching",
      "Crescent Island",
      "Rift Valley scenery",
    ],
  },

  {
    name: "Hell's Gate",
    region: "Great Rift Valley",
    category: "Adventure & Nature",
    image: hellsgate,
    description:
      "Experience one of Kenya's most adventurous landscapes with dramatic cliffs, gorges, cycling routes and spectacular scenery.",
    highlights: [
      "Cycling adventures",
      "Rock climbing",
      "Hiking",
      "Dramatic gorges",
    ],
  },

  {
    name: "Aberdare",
    region: "Central Kenya",
    category: "Forest & Wildlife",
    image: abadare,
    description:
      "Escape into the cool highlands of the Aberdare region, known for lush forests, mountain scenery and diverse wildlife.",
    highlights: [
      "Mountain forests",
      "Elephant sightings",
      "Waterfalls",
      "Highland landscapes",
    ],
  },

  {
    name: "Lamu",
    region: "Kenya Coast",
    category: "Culture & Beach",
    image: diani5,
    description:
      "Step into the historic atmosphere of Lamu, where Swahili culture, traditional architecture and the Indian Ocean create a unique coastal escape.",
    highlights: [
      "Lamu Old Town",
      "Swahili culture",
      "Dhow sailing",
      "Indian Ocean beaches",
    ],
  },

  {
    name: "Watamu",
    region: "Kenya Coast",
    category: "Beach & Marine Life",
    image: watamu1,
    description:
      "Enjoy the beautiful coastline of Watamu with its white beaches, clear waters and diverse marine experiences.",
    highlights: [
      "Marine experiences",
      "Snorkelling",
      "White sandy beaches",
      "Watamu Marine National Park",
    ],
  },

  {
    name: "Malindi",
    region: "Kenya Coast",
    category: "Beach & Culture",
    image: diani1,
    description:
      "Discover Malindi's blend of tropical beaches, Swahili heritage, marine experiences and relaxed coastal atmosphere.",
    highlights: [
      "Indian Ocean beaches",
      "Marine excursions",
      "Swahili culture",
      "Coastal relaxation",
    ],
  },
];
  return (
    <div className="bg-[#FFF9F5] text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[#17151A]">
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
                src={wilderbeast1}
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
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EC1676] shadow-lg shadow-[#EC1676]/20">
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

        {/* =====================================================
            ANIMATED SOCIAL ICONS
        ===================================================== */}
       <div className="mt-7 flex gap-3">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/WincateToursAndTravels"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-[#1877F2]/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
            </svg>
          </a>
          {/* TikTok */}
          <a
         href="https://www.Tiktok.com/WincateToursAndTravels"
    target="_blank"
    rel="noreferrer"
    aria-label="TikTok"
    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:border-[#FF0050] hover:bg-black hover:text-white hover:shadow-lg hover:shadow-[#FF0050]/30"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.88V2h-3.54v13.5a2.91 2.91 0 1 1-2-2.76v-3.6a6.45 6.45 0 1 0 5.54 6.36V8.67a8.3 8.3 0 0 0 4.86 1.56V6.69h-1.09Z" />
    </svg>
  </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/WincateToursAndTravels"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-2 hover:-rotate-3 hover:border-[#E4405F] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white hover:shadow-lg hover:shadow-[#E4405F]/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254724938419"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.03 0C5.53 0 .24 5.29.24 11.79c0 2.08.54 4.11 1.56 5.9L.17 24l6.46-1.69a11.76 11.76 0 0 0 5.4 1.3h.01c6.49 0 11.78-5.29 11.78-11.79 0-3.14-1.22-6.1-3.3-8.34ZM12.04 21.6h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.84 1 1.03-3.74-.24-.38a9.78 9.78 0 1 1 8.4 4.69Zm5.36-7.33c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
            </svg>
          </a>



        </div>

        {/* Small animated line */}
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#EC1676]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Follow Wincate
          </span>
        </div>
      </div>

      {/* =====================================================
          QUICK LINKS
      ===================================================== */}
      <div>
        <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Explore
        </h4>

        <ul className="space-y-4 text-sm text-white/55">
          <li>
            <a
              href="/"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              About Us
            </a>
          </li>

          <li>
            <a
              href="/services"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Services
            </a>
          </li>

          <li>
            <a
              href="/packages"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Safari Packages
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <div>
        <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Destinations
        </h4>

        <ul className="space-y-4 text-sm text-white/55">
          <li>
            <a
              href="/Destinations"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Maasai Mara
            </a>
          </li>

          <li>
            <a
              href="/Destinations"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Amboseli
            </a>
          </li>

          <li>
            <a
              href="/Destinations"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Lake Nakuru
            </a>
          </li>

          <li>
            <a
              href="/Destinations"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Nairobi
            </a>
          </li>

          <li>
            <a
              href="/Destinations"
              className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
            >
              <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
              Diani Beach
            </a>
          </li>
        </ul>
      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}
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
              9058-00300
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
              className="break-all transition hover:text-[#FF4C9A]"
            >
              wincatetoursandtravels.com
            </a>
          </div>

        </div>
      </div>
    </div>

    {/* =====================================================
        BOTTOM BAR
    ===================================================== */}
    <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

      <p>
        © {new Date().getFullYear()} Wincate Tours & Travels. All rights reserved.
      </p>

      <div className="flex gap-5">
        <a
          href="/"
          className="transition hover:text-[#FF4C9A]"
        >
          Privacy Policy
        </a>

        <a
          href="/"
          className="transition hover:text-[#FF4C9A]"
        >
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