import React from "react";
import serengeti1 from "../assets/serengeti1.jpg";
import nairobi from "../assets/nairobi.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";
import team from "../assets/team.jpg";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  /*
   * ONLINE IMAGES
   * No local image files are required for this page.
   */

  const images = {
    hero:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85",

    safari:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85",

    nairobiNationalPark:
      "https://images.unsplash.com/photo-1634662101368-fa8021773862?auto=format&fit=crop&w=1400&q=85",

    giraffeCentre:
      "https://static.wixstatic.com/media/163cb6_0433244089a747df9fb8dba4b8ab74a2~mv2_d_2000_1333_s_2.jpg/v1/fill/w_1600,h_1066,al_c/163cb6_0433244089a747df9fb8dba4b8ab74a2~mv2_d_2000_1333_s_2.jpg",

    campNdunda:
      "https://zazuventure.com/wp-content/uploads/2023/06/1c.jpg",

    teamBuilding:
      "https://kambimstuniresort.com/images/team-building-in-kenya.jpg",

    hotel:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",


    airport:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",

    

    beach:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=85",

    travelPlanning:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85",
  };

  const services = [
    {
      number: "01",
      title: "Tours & Safaris",
      category: "Wildlife & Adventure",
      description:
        "Discover Kenya through carefully planned wildlife safaris, private tours, group adventures and unforgettable experiences.",
      image: kenya,
      features: [
        "Maasai Mara safaris",
        "Wildlife experiences",
        "Private & group tours",
        "Custom itineraries",
      ],
    },

    {
      number: "02",
      title: "Nairobi National Park",
      category: "Nairobi Excursion",
      description:
        "Experience wildlife just outside Nairobi with a memorable game-drive excursion through one of Kenya's most unique urban safari destinations.",
      image: images.nairobiNationalPark,
      features: [
        "Game drives",
        "Wildlife viewing",
        "Private excursions",
        "Flexible schedules",
      ],
    },

    {
      number: "03",
      title: "Giraffe Centre",
      category: "Wildlife Experience",
      description:
        "Enjoy a close-up wildlife experience at the Giraffe Centre, ideal for families, couples, groups and visitors exploring Nairobi.",
      image: images.giraffeCentre,
      features: [
        "Giraffe encounters",
        "Family excursions",
        "Nairobi day trips",
        "Flexible transport",
      ],
    },

    {
      number: "04",
      title: "Camp Ndunda",
      category: "Nature & Adventure",
      description:
        "Escape into nature with an outdoor adventure at Camp Ndunda, combining beautiful surroundings with exciting activities.",
      image: images.campNdunda,
      features: [
        "Nature experiences",
        "Outdoor activities",
        "Group trips",
        "Adventure escapes",
      ],
    },

    {
      number: "05",
      title: "Team Building",
      category: "Corporate & Groups",
      description:
        "Take your team outside the office with professionally coordinated team-building trips, outdoor activities, transport and accommodation.",
      image: team,
      features: [
        "Corporate outings",
        "Team activities",
        "Group transport",
        "Trip coordination",
      ],
    },

    {
      number: "06",
      title: "Hotel Bookings",
      category: "Accommodation",
      description:
        "Find comfortable accommodation that matches your destination, travel style and budget, from city hotels to safari lodges and beach resorts.",
      image: images.hotel,
      features: [
        "Hotels & lodges",
        "Safari camps",
        "Beach resorts",
        "Accommodation planning",
      ],
    },

    {
      number: "07",
      title: "Airport Transfers",
      category: "Transport",
      description:
        "Start and end your journey comfortably with reliable airport transfers between Nairobi's airports, hotels and other destinations.",
      image: images.airport,
      features: [
        "Airport pickups",
        "Airport drop-offs",
        "Private transfers",
        "Professional service",
      ],
    },

    {
      number: "08",
      title: "Car Hire",
      category: "Vehicle Services",
      description:
        "Choose a convenient vehicle solution for business, leisure, road trips and exploring Kenya at your own pace.",
      image: serengeti1,
      features: [
        "Flexible vehicle options",
        "Short & long-term hire",
        "Self-drive options",
        "Chauffeur services",
      ],
    },

    {
      number: "09",
      title: "Beach Holidays",
      category: "Coastal Escapes",
      description:
        "Relax along Kenya's beautiful coast with carefully arranged beach holidays, accommodation, transfers and coastal experiences.",
      image: images.beach,
      features: [
        "Diani Beach",
        "Beach resorts",
        "Coastal excursions",
        "Holiday planning",
      ],
    },

    
  ];

  const benefits = [
    {
      number: "01",
      title: "Reliable Service",
      text: "We focus on dependable arrangements and clear communication throughout your journey.",
    },
    {
      number: "02",
      title: "Local Knowledge",
      text: "Our understanding of Kenya helps you discover destinations and experiences suited to your trip.",
    },
    {
      number: "03",
      title: "Flexible Planning",
      text: "Your trip can be adjusted around your schedule, interests, group size and travel requirements.",
    },
    {
      number: "04",
      title: "Personal Support",
      text: "From your first enquiry to the end of your journey, our team is available to assist.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us Your Plans",
      text: "Share your destination, dates, interests and travel requirements with our team.",
    },
    {
      number: "02",
      title: "We Plan Your Trip",
      text: "We'll help arrange transport, accommodation, activities and experiences around your needs.",
    },
    {
      number: "03",
      title: "Enjoy Your Journey",
      text: "Travel with confidence knowing that your arrangements have been carefully coordinated.",
    },
  ];

  return (
    <main className="bg-white text-[#17151A]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[#17151A]">

        <img
          src={image17}
          alt="Kenya safari experience"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/65 to-[#17151A]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/90 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 lg:px-10">

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Our Services
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
              Travel.
              <br />

              <span className="text-[#FF72AC]">
                Explore. Experience.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From Nairobi excursions and wildlife safaris to hotel bookings,
              airport transfers, car hire and team-building adventures,
              Wincate Tours & Travels helps you experience Kenya with ease.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-24">

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#EC1676]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Explore With Wincate
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              More Than Just
              <span className="text-[#EC1676]"> Travel</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Whether you are looking for a wildlife adventure, a Nairobi
              excursion, accommodation, transport or a memorable group
              experience, we bring the essential pieces of your journey
              together.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                What We Offer
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Services Designed
                <span className="text-[#EC1676]"> Around You</span>
              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500">
              From wildlife and nature experiences to accommodation,
              transportation and corporate activities, explore the services
              available through Wincate Tours & Travels.
            </p>

          </div>


          {/* IMAGE SERVICE CARDS */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.number}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-[310px] overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/90 via-[#17151A]/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#EC1676] text-sm font-black text-white shadow-xl">
                    {service.number}
                  </div>

                  <div className="absolute bottom-5 left-6">

                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      {service.category}
                    </span>

                    <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                      {service.title}
                    </h3>

                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <p className="text-sm leading-7 text-gray-600">
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
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676] transition-all group-hover:gap-3"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          NAIROBI EXPERIENCES
      ===================================================== */}
      <section className="bg-[#FFF9F5] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#17151A] lg:grid-cols-2">

            <div className="relative min-h-[450px]">

              <img
                src={nairobi}
                alt="Giraffe at Nairobi National Park"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                  Nairobi Experiences
                </span>

                <h3 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                  Wildlife Just Outside the City
                </h3>

              </div>

            </div>


            <div className="flex items-center px-7 py-14 sm:px-12 lg:px-16">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                  Discover Nairobi
                </span>

                <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Your Nairobi
                  <span className="text-[#FF72AC]"> Adventure</span>
                </h2>

                <p className="mt-6 text-base leading-8 text-white/60">
                  Explore some of Nairobi's most popular attractions without
                  having to travel far from the city. Wincate can help arrange
                  transport and excursions to Nairobi National Park and the
                  Giraffe Centre.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                    <h4 className="font-serif text-lg font-bold text-white">
                      Nairobi National Park
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Game drives and wildlife experiences with the Nairobi
                      skyline in the background.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                    <h4 className="font-serif text-lg font-bold text-white">
                      Giraffe Centre
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      A memorable wildlife experience for families, couples
                      and groups.
                    </p>

                  </div>

                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68]"
                >
                  Book an Excursion
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          GIRAFFE CENTRE
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2.5rem]">

              <img
                src={images.giraffeCentre}
                alt="Giraffe Centre Nairobi"
                loading="lazy"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                  Nairobi Wildlife
                </span>

                <h3 className="mt-2 font-serif text-3xl font-bold text-white">
                  Meet Kenya's Giraffes
                </h3>

              </div>

            </div>


            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Giraffe Centre
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                A Close-Up
                <span className="text-[#EC1676]"> Wildlife Experience</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Add a visit to the Giraffe Centre to your Nairobi itinerary.
                It is a great option for families, couples, school groups,
                corporate groups and visitors looking for a short wildlife
                experience.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Giraffe encounters",
                  "Family-friendly experience",
                  "Nairobi city excursion",
                  "Private and group transport",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EC1676] text-white">
                      <Check size={14} />
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17151A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Plan Your Visit
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAMP NDUNDA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#17151A] py-20 sm:py-24">

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#EC1676]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Nature & Adventure
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Escape to
                <span className="text-[#FF72AC]"> Camp Ndunda</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                Looking for something different from the traditional safari?
                Add an outdoor adventure at Camp Ndunda to your Kenya travel
                plans and enjoy nature, adventure and group experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Nature",
                  "Adventure",
                  "Outdoor Activities",
                  "Groups",
                ].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/70"
                  >
                    {tag}
                  </span>

                ))}

              </div>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68]"
              >
                Plan the Experience
                <ArrowRight size={17} />
              </a>

            </div>


            <div className="relative">

              <img
                src={images.campNdunda}
                alt="Camp Ndunda Kenya"
                loading="lazy"
                className="h-[480px] w-full rounded-[2.5rem] object-cover"
              />

              <div className="absolute -bottom-5 left-5 rounded-2xl bg-[#EC1676] px-6 py-5 shadow-2xl sm:left-6">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Experience Kenya
                </p>

                <p className="mt-1 font-serif text-xl font-bold text-white">
                  Nature. Adventure. Memories.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TEAM BUILDING
      ===================================================== */}
      <section className="bg-[#FFF9F5] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="order-2 lg:order-1">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Corporate & Groups
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Bring Your
                <span className="text-[#EC1676]"> Team Together</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Take your team outside the office and create meaningful
                experiences through carefully coordinated team-building
                activities, excursions, transport and accommodation.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Corporate team-building trips",
                  "Group transport arrangements",
                  "Outdoor activities and excursions",
                  "Accommodation coordination",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EC1676] text-white">
                      <Check size={14} />
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17151A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Plan Team Building
                <ArrowRight size={17} />
              </a>

            </div>


            <div className="order-1 lg:order-2">

              <div className="relative overflow-hidden rounded-[2.5rem]">

                <img
                  src={team}
                  alt="Team building activity in Kenya"
                  loading="lazy"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-md">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF72AC]">
                      Groups • Teams • Companies
                    </p>

                    <p className="mt-2 font-serif text-2xl font-bold text-white">
                      Experiences That Bring People Together
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOTEL BOOKINGS
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#FFF9F5] shadow-xl lg:grid-cols-2">

            <div className="relative min-h-[450px]">

              <img
                src={images.hotel}
                alt="Hotel accommodation in Nairobi"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/60 via-transparent to-transparent" />

            </div>


            <div className="flex items-center p-8 sm:p-12 lg:p-16">

              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10">
                  <CalendarCheck
                    size={23}
                    className="text-[#EC1676]"
                  />
                </div>

                <span className="mt-7 block text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                  Accommodation
                </span>

                <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                  Stay Somewhere
                  <span className="text-[#EC1676]"> You Love.</span>
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  We can help arrange accommodation for your safari, business
                  trip, family holiday, beach escape or group adventure.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {[
                    "Hotels",
                    "Safari lodges",
                    "Safari camps",
                    "Beach resorts",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold"
                    >

                      <Check
                        size={15}
                        className="text-[#EC1676]"
                      />

                      {item}

                    </div>

                  ))}

                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D80F68]"
                >
                  Ask About Accommodation
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY WINCATE
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                The Wincate Difference
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Travel With
                <br />
                <span className="text-[#EC1676]">
                  Confidence.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              We believe good travel service is about being available,
              dependable and attentive to the details that matter.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <div
                key={benefit.number}
                className="group rounded-[1.75rem] border border-gray-100 bg-[#FFF9F5] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#EC1676]/30 hover:shadow-xl"
              >

                <span className="text-xs font-black text-[#EC1676]">
                  {benefit.number}
                </span>

                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10">
                  <ShieldCheck
                    size={22}
                    className="text-[#EC1676]"
                  />
                </div>

                <h3 className="mt-7 font-serif text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-[#FFF9F5] py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Simple & Easy
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              From Enquiry to Adventure
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Tell us what you need and we'll help you organize the journey.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {process.map((step) => (

              <div
                key={step.number}
                className="relative rounded-[2rem] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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


      {/* =====================================================
          CTA
      ===================================================== */}
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
            Whether you need a safari, Nairobi excursion, team-building
            experience, hotel booking, airport transfer or car hire, we're
            ready to help.
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


      {/* =====================================================
          FOOTER
      ===================================================== */}
     
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

    </main>
  );
};

export default Services;