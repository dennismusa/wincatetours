import React from "react";
import {
  ArrowRight,  Check,  Plane,  Hotel,  FileText,  Globe,  MapPin,  Briefcase,  GraduationCap, ShieldCheck,  Compass,   MessageCircle,  Clock,  Star,   Luggage,  Sparkles,
} from "lucide-react";

import mara from "../assets/mara.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import migration from "../assets/migration.jpg";
import nairobi from "../assets/nairobi.jpg";
import diani1 from "../assets/diani1.jpg";
import image16 from "../assets/image16.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";

const Destinations = () => {
  const whatsappNumber = "254724938419";

  const whatsappLink = (service = "a travel enquiry") => {
    const message = `Hello Wincate Tours & Travels,

I would like to enquire about ${service}.

Please provide me with more information.

Thank you.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  /* =========================================================
     SERVICE CATEGORIES
  ========================================================= */

  const travelServices = [
    {
      number: "01",
      icon: FileText,
      eyebrow: "Travel Documentation",
      title: "Visa Applications",
      description:
        "Professional assistance for travellers preparing visa applications and international travel documentation. We help you understand the process, organise the required information and prepare for your journey.",
      features: [
        "Visa application guidance",
        "Travel documentation support",
        "Tourist travel assistance",
        "Student travel assistance",
        "Business travel documentation",
      ],
    },

    {
      number: "02",
      icon: ShieldCheck,
      eyebrow: "Passport Services",
      title: "Passport Processing",
      description:
        "Assistance with passport-related processes for travellers preparing for local and international journeys, including new applications, renewals and replacement processes.",
      features: [
        "New passport applications",
        "Passport renewal guidance",
        "Lost passport assistance",
        "Damaged passport guidance",
        "Travel document assistance",
      ],
    },

    {
      number: "03",
      icon: Plane,
      eyebrow: "Air Travel",
      title: "Flight Booking & Ticketing",
      description:
        "Book domestic and international flights through a travel service designed around your destination, travel dates, passenger requirements and itinerary.",
      features: [
        "Domestic flights",
        "International flights",
        "Return tickets",
        "One-way tickets",
        "Group travel arrangements",
      ],
    },

    {
      number: "04",
      icon: Hotel,
      eyebrow: "Accommodation",
      title: "Hotel Bookings",
      description:
        "Accommodation solutions for holidays, business travel, family trips, students, groups and safari itineraries, from city hotels to beach resorts and safari lodges.",
      features: [
        "Hotels",
        "Safari lodges",
        "Beach resorts",
        "Business accommodation",
        "Group accommodation",
      ],
    },
  ];

  /* =========================================================
     KENYA DESTINATIONS
  ========================================================= */

  const kenyaDestinations = [
    {
      name: "Maasai Mara",
      category: "Wildlife Safari",
      image: mara,
      description:
        "Experience Kenya's iconic savannah wilderness, exceptional wildlife and unforgettable safari moments.",
      tags: ["Big Five", "Migration", "Culture"],
    },

    {
      name: "Amboseli",
      category: "Wildlife & Kilimanjaro",
      image: amboseli,
      description:
        "Discover spectacular elephant encounters with Mount Kilimanjaro creating one of Africa's most memorable backdrops.",
      tags: ["Elephants", "Kilimanjaro", "Game Drives"],
    },

    {
      name: "Lake Nakuru",
      category: "Wildlife & Birding",
      image: nakuru,
      description:
        "Explore Rift Valley scenery, wildlife, birdlife and remarkable landscapes around Lake Nakuru.",
      tags: ["Rhinos", "Birding", "Rift Valley"],
    },

    {
      name: "Nairobi",
      category: "City & Wildlife",
      image: nairobi,
      description:
        "Combine Kenya's vibrant capital with wildlife, culture, shopping and city experiences.",
      tags: ["City Tours", "National Park", "Culture"],
    },

    {
      name: "Diani Beach",
      category: "Beach Escape",
      image: diani1,
      description:
        "Relax on Kenya's tropical coast with white sands, warm Indian Ocean waters and beautiful resorts.",
      tags: ["Beach", "Ocean", "Resorts"],
    },

    {
      name: "Mombasa",
      category: "Coastal Holiday",
      image: diani1,
      description:
        "Experience Mombasa's coastal culture, historical attractions, beaches and Swahili heritage.",
      tags: ["Old Town", "Beach", "Culture"],
    },

    {
      name: "Samburu",
      category: "Northern Kenya",
      image: image16,
      description:
        "Travel into northern Kenya for dramatic landscapes, unique wildlife and authentic cultural experiences.",
      tags: ["Wildlife", "Culture", "Adventure"],
    },

   

    {
      name: "Mount Kenya",
      category: "Mountain Adventure",
      image: amboseli,
      description:
        "Experience Kenya's highland landscapes through trekking, nature and outdoor adventures.",
      tags: ["Trekking", "Nature", "Adventure"],
    },

    {
      name: "Lake Naivasha",
      category: "Nature Escape",
      image: nakuru,
      description:
        "Enjoy peaceful lake scenery, boat experiences, birdlife and the beauty of Kenya's Great Rift Valley.",
      tags: ["Boat Rides", "Birding", "Nature"],
    },
  ];

  /* =========================================================
     INTERNATIONAL DESTINATIONS
  ========================================================= */

  const internationalDestinations = [
    {
      name: "Dubai",
      category: "International Holiday",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90",
      description:
        "Experience Dubai through city tours, shopping, luxury accommodation, desert adventures and unforgettable modern attractions.",
    },

   {
name: "Zanzibar",
category: "Island Escape",
image: zanzibar4,
description:
"Discover Zanzibar’s pristine beaches, turquoise waters, rich Swahili heritage and unforgettable Indian Ocean adventures. Relax in paradise while exploring vibrant culture, historic Stone Town and beautiful tropical islands.",
},


    {
      name: "Mombasa",
      category: "Kenya Coast",
      image: diani1,
      description:
        "Enjoy tropical beaches, historic sites, coastal culture and relaxing accommodation along Kenya's Indian Ocean coast.",
    },
  ];

  /* =========================================================
     STUDENT / WORK TRAVEL
  ========================================================= */

  const opportunityServices = [
    {
      icon: GraduationCap,
      title: "Student Travel",
      text:
        "Travel arrangements for students travelling for education, study programmes, placements, examinations or other approved academic opportunities.",
    },

    {
      icon: Briefcase,
      title: "Work Travel",
      text:
        "Travel planning for employment-related journeys, interviews, business trips and other work-related travel requirements.",
    },

    {
      icon: Luggage,
      title: "International Relocation",
      text:
        "Travel planning support for people preparing to move temporarily or permanently for education, work or other personal reasons.",
    },

    {
      icon: Globe,
      title: "International Travel",
      text:
        "Combine flights, accommodation, documentation assistance and destination planning into one organised travel arrangement.",
    },
  ];

  return (
    <div className="bg-[#FFF9F5] text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#17151A]">

        <img
          src={mara}
          alt="Kenya safari landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#EC1676]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-4">

              <span className="h-[2px] w-14 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#FF4C9A]">
                Wincate Tours & Travels
              </span>

            </div>

            {/* Heading */}

            <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[86px]">

              Your journey.

              <span className="block text-[#FF4C9A]">
                Our expertise.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From passports and visa assistance to flight ticketing, hotel
              bookings, safaris and international holidays, Wincate provides
              practical travel solutions for journeys within Kenya and around
              the world.
            </p>

            {/* CTA */}


            {/* HERO SERVICE PILLS */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "Visa Assistance",
                "Passport Processing",
                "Flight Tickets",
                "Hotel Bookings",
                "Kenya Safaris",
                "International Travel",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom indicator */}


      </section>

      {/* =========================================================
          INTRO / POSITIONING
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                The Wincate Difference
              </span>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Travel should be
                <span className="block text-[#EC1676]">
                  beautifully simple.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-9 text-black/65">
                Planning a journey often means dealing with several different
                requirements at once — documents, tickets, accommodation,
                transport and activities.
              </p>

              <p className="mt-6 text-base leading-8 text-black/50">
                Wincate brings these services together so travellers can work
                with one travel partner from the first enquiry to the final
                destination. Whether you are travelling for leisure, study,
                business, work or a family holiday, we help organise the
                journey around your needs.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">

                {[
                  ["Local", "Travel"],
                  ["Global", "Journeys"],
                  ["Travel", "Support"],
                  ["Tailor", "Made"],
                ].map(([a, b]) => (
                  <div key={a} className="border-l-2 border-[#EC1676] pl-4">

                    <p className="font-serif text-2xl font-bold">
                      {a}
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
                      {b}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CORE SERVICES
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                Our Core Services
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                Everything arranged.
                <span className="block text-[#EC1676]">
                  Nothing overlooked.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              Professional travel assistance covering documentation,
              ticketing, accommodation and complete travel planning.
            </p>

          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">

            {travelServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#FFF9F5] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
                >

                  {/* Background number */}

                  <span className="pointer-events-none absolute -right-5 -top-12 font-serif text-[180px] font-bold leading-none text-black/[0.025]">
                    {service.number}
                  </span>

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17151A] text-[#FF4C9A] transition duration-300 group-hover:bg-[#EC1676] group-hover:text-white">
                        <Icon size={25} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-black/25">
                        {service.number}
                      </span>

                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-black/55">
                      {service.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">

                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs font-semibold text-black/55"
                        >

                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10 text-[#EC1676]">
                            <Check size={11} />
                          </span>

                          {feature}

                        </div>
                      ))}

                    </div>

                    <a
                      href={whatsappLink(service.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
                    >
                      Enquire About {service.title}

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          VISA + PASSPORT PREMIUM SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#17151A] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#EC1676]/15 blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FF4C9A]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <div className="flex items-center gap-3">

                <FileText
                  size={20}
                  className="text-[#FF4C9A]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                  Documentation Desk
                </span>

              </div>

              <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Prepare today.
                <span className="block text-[#FF4C9A]">
                  Travel with confidence.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-white/55">
                International travel often begins long before the flight.
                Passports, visas and supporting documentation can all form
                part of the preparation process.
              </p>

              <p className="mt-5 text-base leading-8 text-white/55">
                Wincate assists travellers with travel-document processes and
                helps organise their travel arrangements around the relevant
                requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                {[
                  "Visa Assistance",
                  "Passport Services",
                  "Travel Documents",
                  "International Travel",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: FileText,
                  title: "Visa Assistance",
                  text:
                    "Guidance around visa application processes and travel documentation for international journeys.",
                },
                {
                  icon: ShieldCheck,
                  title: "Passport Processing",
                  text:
                    "Assistance around new passport, renewal and replacement-related processes.",
                },
                {
                  icon: Globe,
                  title: "International Travel",
                  text:
                    "Connect documentation preparation with flights, hotels and destination planning.",
                },
                {
                  icon: Clock,
                  title: "Travel Preparation",
                  text:
                    "Organise the important parts of your journey before your departure date.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
                  >

                    <Icon
                      size={25}
                      className="text-[#FF4C9A]"
                    />

                    <h3 className="mt-5 font-serif text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FLIGHT TICKETING
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2.5rem] bg-[#FFF0F7]">

            <div className="grid lg:grid-cols-2">

              <div className="relative min-h-[560px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90"
                  alt="Flight ticketing"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">

                  <div className="inline-flex items-center gap-3 rounded-full bg-black/50 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">

                    <Plane
                      size={16}
                      className="text-[#FF4C9A]"
                    />

                    Domestic & International

                  </div>

                  <h3 className="mt-5 max-w-md font-serif text-4xl font-bold text-white">
                    Your next flight starts here.
                  </h3>

                </div>

              </div>

              <div className="flex items-center p-8 sm:p-12 lg:p-16">

                <div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                    Flight Booking & Ticketing
                  </span>

                  <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                    Fly from
                    <span className="text-[#EC1676]"> anywhere.</span>
                  </h2>

                  <p className="mt-6 text-base leading-8 text-black/55">
                    Whether you are travelling within Kenya, across Africa or
                    internationally, Wincate can assist with flight booking
                    and ticketing arrangements based on your travel plans.
                  </p>

                  <div className="mt-8 space-y-3">

                    {[
                      "Domestic flight ticketing",
                      "International flight ticketing",
                      "Return and one-way tickets",
                      "Group travel arrangements",
                      "Student travel tickets",
                      "Business travel arrangements",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-medium shadow-sm"
                      >

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10 text-[#EC1676]">
                          <Check size={13} />
                        </span>

                        {item}

                      </div>
                    ))}

                  </div>

                  <a
                    href={whatsappLink("flight booking and ticketing")}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17151A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#EC1676]"
                  >
                    Request Flight Options
                    <ArrowRight size={18} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          HOTEL BOOKINGS
      ========================================================= */}

      ```jsx
{/* =========================================================
    HOTEL BOOKINGS
========================================================= */}

<section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

      {/* LEFT CONTENT */}
      <div>

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
          Accommodation
        </span>

        <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Stay somewhere
          <span className="block text-[#EC1676]">
            worth remembering.
          </span>
        </h2>

        <p className="mt-6 text-base leading-8 text-black/55">
          Your accommodation is an important part of your journey. Wincate
          Tours & Travels helps you arrange comfortable and suitable stays
          based on your destination, travel dates, preferences and budget.
        </p>

        <p className="mt-5 text-sm leading-7 text-black/45">
          Whether you need a city hotel in Nairobi, a beach resort in
          Mombasa or Zanzibar, a safari lodge in the Maasai Mara, or
          accommodation for an international holiday, we help bring your
          entire travel arrangement together.
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          {[
            "City Hotels",
            "Beach Resorts",
            "Safari Lodges",
            "International Hotels",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-[#FFF9F5] p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10 text-[#EC1676]">
                <Check size={14} />
              </span>

              <span className="text-xs font-bold text-black/65">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* CTA */}
        <a
          href={whatsappLink("hotel booking")}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#EC1676]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#D80F68]"
        >
          Enquire About Hotels
          <ArrowRight size={18} />
        </a>

      </div>


      {/* RIGHT — HOTEL IMAGE GRID */}
      <div className="grid gap-5 sm:grid-cols-2">

        {[
           {
  title: "City Hotels",
  description:
    "Comfortable stays for business, leisure and city travel.",
  image:
    "https://media.licdn.com/dms/image/v2/C4E1BAQECJ75Exb-AQg/company-background_10000/company-background_10000/0/1584476764612/sankara_nairobi_autograph_collection_cover?e=2147483647&t=ngDTW3JwdUbBbtd8eqM5X3rcB9iKFsuOS39uMT9Q3fs&v=beta",
},

          {
            title: "Beach Resorts",
            description:
              "Relaxing coastal escapes in Kenya and beyond.",
            image:
              "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=90",
          },

         

{
  title: "Safari Lodges",
  description:
    "Stay close to nature in unforgettable safari destinations.",
  image:
    "https://content.knightfrank.com/property/hub2647292/images/079acc7d-9811-45d4-921b-a0aba1cd7b5b-0.jpg?cio=true&w=1400",
},

          {
            title: "International Stays",
            description:
              "Accommodation options for journeys around the world.",
            image:
              "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=90",
          },

        ].map((hotel) => (

          <article
            key={hotel.title}
            className="group relative h-[290px] overflow-hidden rounded-[2rem] bg-black shadow-sm"
          >

            {/* IMAGE */}
            <img
              src={hotel.image}
              alt={hotel.title}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* TOP LABEL */}
            <div className="absolute left-5 top-5">

              <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Accommodation
              </span>

            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-6">

              <div className="flex items-end justify-between gap-4">

                <div>

                  <h3 className="font-serif text-2xl font-bold text-white">
                    {hotel.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
                    {hotel.description}
                  </p>

                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EC1676] text-white transition duration-300 group-hover:scale-110">
                  <Hotel size={17} />
                </div>

              </div>

            </div>

          </article>

        ))}

      </div>

    </div>

  </div>

</section>



      {/* =========================================================
          STUDENTS & JOB TRAVEL
      ========================================================= */}

      <section className="bg-[#17151A] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <div className="flex items-center gap-3">

                <Sparkles
                  size={20}
                  className="text-[#FF4C9A]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                  Beyond Holidays
                </span>

              </div>

              <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Travel for
                <span className="block text-[#FF4C9A]">
                  opportunity.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-white/55">
                Not every journey is a holiday. Students travel for education,
                professionals travel for work and families relocate for new
                opportunities.
              </p>

              <p className="mt-5 text-base leading-8 text-white/45">
                Wincate can help organise the travel component of these
                journeys — from flights and accommodation to travel
                documentation guidance and airport arrangements.
              </p>

              <div className="mt-9">

                <a
                  href={whatsappLink("student or work travel")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#D80F68]"
                >
                  Discuss Your Travel Plans
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {opportunityServices.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:bg-white/[0.07]"
                  >

                    <Icon
                      size={27}
                      className="text-[#FF4C9A]"
                    />

                    <h3 className="mt-5 font-serif text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          KENYA DESTINATIONS
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={19}
                  className="text-[#EC1676]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                  Kenya
                </span>

              </div>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                Explore
                <span className="text-[#EC1676]"> Kenya.</span>
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-black/50">
              Wildlife, beaches, mountains, culture and city experiences —
              discover destinations across Kenya and build an itinerary around
              the experiences you want.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {kenyaDestinations.map((destination, index) => (
              <article
                key={destination.name}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-[340px] overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-6 left-6 right-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF4C9A]">
                      {destination.category}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-bold text-white">
                      {destination.name}
                    </h3>

                  </div>

                </div>

                <div className="p-6">

                  <p className="text-sm leading-7 text-black/55">
                    {destination.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {destination.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#FFF0F7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#EC1676]"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
                  >
                    Plan This Destination

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          INTERNATIONAL DESTINATIONS
      ========================================================= */}

      <section className="bg-[#17151A] px-6 py-24 text-white lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                International
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                Go beyond
                <span className="block text-[#FF4C9A]">
                  Kenya.
                </span>
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-8 text-white/45">
              International holidays can be planned as complete journeys,
              combining flights, accommodation, documentation assistance and
              destination experiences.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {internationalDestinations.map((destination) => (
              <article
                key={destination.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >

                <div className="relative h-80 overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF4C9A]">
                      {destination.category}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-bold">
                      {destination.name}
                    </h3>

                  </div>

                </div>

                <div className="p-7">

                  <p className="text-sm leading-7 text-white/45">
                    {destination.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF4C9A]"
                  >
                    Plan Your Visit
                    <ArrowRight size={16} />
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          SIGNATURE SAFARI EXPERIENCE
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-black">

            <img
              src={migration}
              alt="Great Wildebeest Migration"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

            <div className="relative min-h-[550px] px-8 py-16 sm:px-12 lg:flex lg:items-center lg:px-16">

              <div className="max-w-2xl text-white">

                <div className="flex items-center gap-3">

                  <Sparkles
                    size={20}
                    className="text-[#FF4C9A]"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4C9A]">
                    Signature Safari
                  </span>

                </div>

                <h2 className="mt-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                  Experience Kenya
                  <span className="block text-[#FF4C9A]">
                    beyond the ordinary.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                  From the Great Wildebeest Migration to beach escapes,
                  mountain adventures and tailor-made wildlife safaris, your
                  journey can be designed around the experiences you want to
                  remember.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  {[
                    "Wildlife",
                    "Adventure",
                    "Beach",
                    "Culture",
                    "Photography",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/65 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <a
                  href="/packages"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#D80F68]"
                >
                  Explore Safari Packages

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
              The Wincate Process
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              From enquiry
              <span className="text-[#EC1676]"> to departure.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/50">
              A simple approach to organising the important details of your
              journey.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Tell Us",
                text: "Share your destination, travel dates, requirements and plans.",
              },
              {
                number: "02",
                title: "We Plan",
                text: "Our team helps organise the relevant travel services.",
              },
              {
                number: "03",
                title: "We Arrange",
                text: "Tickets, accommodation, documentation and experiences are coordinated.",
              },
              {
                number: "04",
                title: "You Travel",
                text: "Travel with your arrangements prepared and your journey ready.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-[2rem] border border-black/5 bg-[#FFF9F5] p-7"
              >

                <span className="font-serif text-5xl font-bold text-[#EC1676]/15">
                  {step.number}
                </span>

                <h3 className="mt-4 font-serif text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/50">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          WHY WINCATE
      ========================================================= */}

      <section className="bg-[#FFF0F7] px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
                Why Travel With Us
              </span>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                One partner for
                <span className="block text-[#EC1676]">
                  more of your journey.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-black/55">
                Wincate brings together travel planning, documentation,
                ticketing, accommodation and destination experiences, giving
                travellers one place to start their journey.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  icon: Globe,
                  title: "Local & International",
                  text: "Travel arrangements for journeys in Kenya and international destinations.",
                },
                {
                  icon: Star,
                  title: "Personalised Planning",
                  text: "Travel arrangements built around your dates, destination and requirements.",
                },
                {
                  icon: Compass,
                  title: "Complete Solutions",
                  text: "Connect flights, hotels, documentation and experiences.",
                },
                {
                  icon: MessageCircle,
                  title: "Direct Support",
                  text: "Speak directly with our team about your travel requirements.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] bg-white p-7 shadow-sm"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10 text-[#EC1676]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/50">
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#EC1676] px-7 py-16 text-center text-white shadow-2xl sm:px-12 lg:py-20">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Start Your Journey
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Tell us what you need.
            <span className="block">
              We'll help you plan the rest.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            Visa assistance, passport processing, flight tickets, hotel
            bookings, safaris, beach holidays, student travel or an
            international adventure — start your enquiry with Wincate.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Make an Enquiry
              <ArrowRight size={18} />
            </a>

            <a
              href={whatsappLink("a general travel enquiry")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#17151A] transition hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              WhatsApp Wincate
            </a>

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