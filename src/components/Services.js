/* eslint-disable no-unused-vars */
import React from "react";
import tanzania from "../assets/tanzania.jpg";
import serengeti1 from "../assets/serengeti1.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import team from "../assets/team.jpg";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const images = {
    hero:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=90",

    safari:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=90",

    nairobiNationalPark:
      "https://images.unsplash.com/photo-1634662101368-fa8021773862?auto=format&fit=crop&w=1600&q=90",

    giraffeCentre:
      "https://static.wixstatic.com/media/163cb6_0433244089a747df9fb8dba4b8ab74a2~mv2_d_2000_1333_s_2.jpg/v1/fill/w_1600,h_1066,al_c/163cb6_0433244089a747df9fb8dba4b8ab74a2~mv2_d_2000_1333_s_2.jpg",

    campNdunda:
      "https://zazuventure.com/wp-content/uploads/2023/06/1c.jpg",

    teamBuilding:
      "https://kambimstuniresort.com/images/team-building-in-kenya.jpg",

    hotel:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",

    airport:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=90",

    carHire:
      {serengeti1},

    beach:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1600&q=90",

    planning:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=90",
  };

  const experienceServices = [
    {
      number: "01",
      title: "Nairobi National Park",
      label: "Wildlife Experience",
      image: images.nairobiNationalPark,
      description:
        "Enjoy an unforgettable wildlife experience just outside Nairobi. Our Nairobi National Park excursions are ideal for visitors looking for a convenient safari experience without travelling far from the city.",
      features: [
        "Game drives",
        "Wildlife viewing",
        "Private excursions",
        "Flexible schedules",
      ],
    },
    {
      number: "02",
      title: "Giraffe Centre",
      label: "Nairobi Excursion",
      image: images.giraffeCentre,
      description:
        "Get closer to one of Kenya's most iconic animals with a visit to the Giraffe Centre. Perfect for families, couples, groups and travellers exploring Nairobi.",
      features: [
        "Giraffe encounters",
        "Family excursions",
        "Nairobi day trips",
        "Transport arrangements",
      ],
    },
    {
      number: "03",
      title: "Camp Ndunda",
      label: "Nature & Adventure",
      image: images.campNdunda,
      description:
        "Escape the city and enjoy an outdoor experience at Camp Ndunda. We can help arrange your transportation, group logistics and adventure experience.",
      features: [
        "Outdoor experiences",
        "Nature activities",
        "Group excursions",
        "Adventure escapes",
      ],
    },
    {
      number: "04",
      title: "Team Building",
      label: "Corporate Experience",
      image: team,
      description:
        "Take your team beyond the office with a professionally coordinated outdoor experience. We assist with transport, activities, accommodation and trip logistics.",
      features: [
        "Corporate outings",
        "Team activities",
        "Group transport",
        "Trip coordination",
      ],
    },
  ];

  const travelServices = [
    {
      number: "05",
      title: "Tours & Safaris",
      image: tanzania,
      description:
        "Discover Kenya through wildlife safaris, private tours, group adventures and tailor-made journeys.",
    },
    {
      number: "06",
      title: "Airport Transfers",
      image: images.airport,
      description:
        "Reliable transfers between Nairobi airports, hotels, residences and destinations across Kenya.",
    },
    {
      number: "07",
      title: "Car Hire",
      image: serengeti1,
      description:
        "Convenient vehicle solutions for business trips, holidays, road trips and exploring Kenya.",
    },
    {
      number: "08",
      title: "Hotel Bookings",
      image: images.hotel,
      description:
        "Accommodation arrangements ranging from city hotels and safari lodges to beach resorts.",
    },
    {
      number: "09",
      title: "Beach Holidays",
      image: images.beach,
      description:
        "Relax along Kenya's coast with accommodation, transfers and carefully arranged coastal experiences.",
    },
    {
      number: "10",
      title: "Travel Planning",
      image: images.planning,
      description:
        "Let us coordinate your itinerary, accommodation, transportation and activities around your plans.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Local Knowledge",
      text: "Our understanding of Kenya helps us connect you with destinations and experiences that suit your trip.",
    },
    {
      number: "02",
      title: "Flexible Planning",
      text: "We can adapt arrangements around your dates, group size, interests and travel requirements.",
    },
    {
      number: "03",
      title: "Reliable Arrangements",
      text: "From transport to accommodation, we focus on keeping your travel arrangements clear and convenient.",
    },
    {
      number: "04",
      title: "Personal Support",
      text: "Our team remains available to help before and during your journey.",
    },
  ];

  return (
    <main className="bg-[#FFF9F5] text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[#17151A]">
        <img
          src={serengeti2}
          alt="Kenya safari"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/70 to-[#17151A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/70 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#EC1676]" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
                Wincate Tours & Travels
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl">
              Travel services
              <br />
              <span className="text-[#FF4C9A]">built around you.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              From wildlife experiences and airport transfers to hotel
              bookings, car hire and corporate team building, Wincate helps
              you make every journey across Kenya easier.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 lg:flex">
          <span>Scroll to explore</span>
          <ChevronRight size={16} />
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:px-12 lg:py-28">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              What We Do
            </span>

            <h2 className="mt-4 max-w-md font-serif text-4xl font-bold leading-tight text-[#17151A] sm:text-5xl">
              More than travel.
              <br />
              We make it easier.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-[#17151A]/70">
              Wincate Tours & Travels provides a range of travel services
              designed to make exploring Kenya simple, comfortable and
              memorable.
            </p>

            <p className="mt-6 leading-8 text-[#17151A]/55">
              Whether you are looking for a quick Nairobi wildlife excursion,
              a corporate team-building experience, airport transportation,
              accommodation or a complete safari, we help coordinate the
              details around your needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Wildlife",
                "Transport",
                "Accommodation",
                "Adventure",
                "Corporate Travel",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-[#FFF9F5] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#17151A]/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE SECTION
      ========================================================= */}
      <section
        id="experiences"
        className="bg-[#FFF9F5] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Experiences
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              Experiences worth
              <br />
              leaving the city for.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/55">
              Explore some of the experiences Wincate can arrange for
              individuals, families, groups and organizations.
            </p>
          </div>

          {/* EXPERIENCE 01 */}
          <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#17151A] lg:grid-cols-[1.2fr_1fr]">

            <div className="relative min-h-[420px]">
              <img
                src={experienceServices[0].image}
                alt={experienceServices[0].title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <span className="absolute left-7 top-7 rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold text-white">
                {experienceServices[0].number}
              </span>

              <span className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                {experienceServices[0].label}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF4C9A]">
                Nairobi Wildlife
              </span>

              <h3 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
                {experienceServices[0].title}
              </h3>

              <p className="mt-6 leading-8 text-white/60">
                {experienceServices[0].description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {experienceServices[0].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EC1676]/20 text-[#FF4C9A]">
                      <Check size={14} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/254724938419"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-2 text-sm font-bold text-white transition hover:text-[#FF4C9A]"
              >
                Plan this experience
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* EXPERIENCE 02 */}
          <div className="mt-6 grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">

            <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#EC1676]">
                {experienceServices[1].label}
              </span>

              <h3 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                {experienceServices[1].title}
              </h3>

              <p className="mt-6 leading-8 text-black/55">
                {experienceServices[1].description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {experienceServices[1].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-black/65"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EC1676]/10 text-[#EC1676]">
                      <Check size={14} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/254724938419"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#EC1676]"
              >
                Plan this experience
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="relative order-1 min-h-[400px] lg:order-2">
              <img
                src={experienceServices[1].image}
                alt={experienceServices[1].title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="absolute right-7 top-7 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#17151A]">
                {experienceServices[1].number}
              </span>
            </div>
          </div>

          {/* EXPERIENCE 03 + 04 */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">

            {experienceServices.slice(2).map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[2rem] bg-white"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold text-white">
                    {service.number}
                  </span>

                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                      {service.label}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="leading-7 text-black/55">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[#FFF9F5] px-3 py-2 text-xs font-semibold text-black/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/254724938419"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
                  >
                    Enquire now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAVEL SERVICES
      ========================================================= */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Travel Services
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Everything you need,
                <br />
                in one place.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-black/55">
                Beyond experiences, Wincate can also take care of the practical
                details that make travelling easier.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#17151A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#EC1676]"
              >
                Talk to our team
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {travelServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[1.5rem] bg-[#17151A]"
                >
                  <div className="relative h-[270px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17151A] via-[#17151A]/30 to-transparent" />

                    <span className="absolute left-5 top-5 text-sm font-bold text-[#FF4C9A]">
                      {service.number}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOTEL FEATURE
      ========================================================= */}
      <section className="bg-[#17151A] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#242127] lg:grid-cols-2">

          <div className="relative min-h-[460px]">
            <img
              src={images.hotel}
              alt="Hotel accommodation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/70 to-transparent" />

            <div className="absolute bottom-7 left-7">
              <span className="rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                Accommodation
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
              Hotel Bookings
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              The right place to
              <br />
              stay matters.
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              Whether your trip takes you to Nairobi, the coast or the heart
              of Kenya's safari destinations, we can help arrange
              accommodation around your travel plans and budget.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "City hotels",
                "Safari lodges and camps",
                "Beach resorts",
                "Accommodation planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EC1676]/20 text-[#FF4C9A]">
                    <Check size={15} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/254724938419"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#EC1676] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D80F68]"
            >
              Ask About Accommodation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WINCATE
      ========================================================= */}
      <section className="bg-[#FFF9F5] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Why Wincate
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-6xl">
              Simple planning.
              <br />
              Better journeys.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-black/10 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="bg-white p-7 sm:p-8 lg:p-9"
              >
                <span className="text-sm font-bold text-[#EC1676]">
                  {benefit.number}
                </span>

                <h3 className="mt-10 font-serif text-2xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  {benefit.text}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                How It Works
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                From idea
                <br />
                to journey.
              </h2>

              <p className="mt-5 max-w-md leading-8 text-black/50">
                Tell us what you have in mind and we'll help turn the idea
                into a practical travel plan.
              </p>
            </div>

            <div className="divide-y divide-black/10">

              {[
                {
                  number: "01",
                  title: "Tell Us Your Plans",
                  text: "Share your destination, dates, group size and the type of experience you are looking for.",
                },
                {
                  number: "02",
                  title: "We Arrange the Details",
                  text: "We help coordinate transportation, accommodation, activities and other travel requirements.",
                },
                {
                  number: "03",
                  title: "Enjoy Your Journey",
                  text: "Travel with confidence knowing that the important details have been arranged around your needs.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 py-8 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-2xl font-bold text-[#EC1676]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-black/50">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EC1676] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
              Start Planning
            </span>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-6xl">
              Have a destination in mind?
              <br />
              Let's make it happen.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/75">
              Whether you need a safari, airport transfer, hotel, car hire,
              excursion or team-building experience, talk to Wincate and
              let's plan your next journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#17151A] transition hover:bg-[#FFF9F5]"
            >
              Contact Wincate
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/254724938419"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#17151A]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT STRIP
      ========================================================= */}
      
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