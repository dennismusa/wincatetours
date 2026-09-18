import React, { useEffect, useState } from "react";
import {
  ArrowRight,  ChevronLeft,  ChevronRight,  MapPin,  Plane,  Car,  Hotel,  Compass,  ShieldCheck,  Star,  Phone,  MessageCircle,  CheckCircle2,} from "lucide-react";

// Images
import mara from "../assets/mara.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import migration from "../assets/migration.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import diani1 from "../assets/diani1.jpg";
import safariVehicle from "../assets/safari-vehicle.jpg";

const heroSlides = [
  {
    image: serengeti2,
    eyebrow: "THE GREAT WILDEBEEST MIGRATION",
    title: "Witness Africa's",
    highlight: "Greatest Spectacle",
    text: "Follow the incredible journey of millions of wildebeest across the Mara ecosystem and experience Kenya at its wildest.",
  },
  {
    image: mara,
    eyebrow: "KENYA SAFARIS",
    title: "Discover the Wild",
    highlight: "Heart of Kenya",
    text: "From the legendary Maasai Mara to hidden wildlife gems, discover unforgettable safari experiences with Wincate.",
  },
  {
    image: amboseli,
    eyebrow: "ADVENTURE AWAITS",
    title: "Explore Kenya",
    highlight: "Your Way",
    text: "Private safaris, family adventures, excursions and tailor-made journeys designed around you.",
  },
];

const safariPackages = [
  {
    image: mara,
    location: "Narok County",
    title: "Maasai Mara Safari",
    description:
      "Discover Kenya's most iconic wildlife destination and experience incredible game viewing across the Mara.",
    duration: "3 Days",
  },
  {
    image: migration,
    location: "Maasai Mara",
    title: "Wildebeest Migration",
    description:
      "Experience one of nature's greatest spectacles as massive herds move across the Mara ecosystem.",
    duration: "4 Days",
  },
  {
    image: amboseli,
    location: "Kajiado County",
    title: "Amboseli Safari",
    description:
      "Meet giant elephant herds beneath the magnificent backdrop of Mount Kilimanjaro.",
    duration: "3 Days",
  },
  {
    image: nakuru,
    location: "Nakuru County",
    title: "Lake Nakuru Safari",
    description:
      "Explore beautiful landscapes, rhinos, flamingos and diverse wildlife around Lake Nakuru.",
    duration: "2 Days",
  },
];

const destinations = [
  {
    name: "Maasai Mara",
    image: mara,
    text: "Big cats, endless plains & the Great Migration.",
  },
  {
    name: "Amboseli",
    image: amboseli,
    text: "Elephants with unforgettable Kilimanjaro views.",
  },
  {
    name: "Lake Nakuru",
    image: nakuru,
    text: "Rhinos, birdlife and spectacular Rift Valley scenery.",
  },
  {
    name: "Diani Beach",
    image: diani1,
    text: "Tropical beaches, warm waters and coastal escapes.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const slide = heroSlides[currentSlide];

  return (
    <main className="overflow-hidden bg-[#FFF9FC] text-[#17151A]">
      {/* =========================================================
          HERO
      ========================================================== */}
    <section className="relative min-h-[52vh] overflow-hidden bg-[#17151A]">

  {/* Background */}
  {heroSlides.map((item, index) => (
    <div
      key={item.title}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
    </div>
  ))}

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:min-h-[560px] lg:px-8">

    <div className="max-w-3xl text-white">

      {/* Eyebrow */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-[#EC1676]" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300 sm:text-sm">
          {slide.eyebrow}
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
        {slide.title}

        <span className="block text-[#FF4C9A]">
          {slide.highlight}
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
        {slide.text}
      </p>

      {/* Buttons */}
      <div className="mt-7 flex flex-wrap gap-3">

        
      </div>

      {/* Trust */}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/80 sm:text-sm">

        <div className="flex items-center gap-2">
          <CheckCircle2
            size={16}
            className="text-[#FF4C9A]"
          />
          Kenya Tours & Safaris
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2
            size={16}
            className="text-[#FF4C9A]"
          />
          Tailor-Made Experiences
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2
            size={16}
            className="text-[#FF4C9A]"
          />
          Professional Service
        </div>

      </div>

    </div>

  </div>

  {/* Slider Controls */}
  <div className="absolute bottom-7 right-5 z-20 flex items-center gap-2 sm:right-8">

    <button
      onClick={prevSlide}
      aria-label="Previous slide"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-[#EC1676]"
    >
      <ChevronLeft size={18} />
    </button>

    <div className="flex gap-1.5">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-1.5 rounded-full transition-all ${
            index === currentSlide
              ? "w-8 bg-[#EC1676]"
              : "w-4 bg-white/50"
          }`}
        />
      ))}
    </div>

    <button
      onClick={nextSlide}
      aria-label="Next slide"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-[#EC1676]"
    >
      <ChevronRight size={18} />
    </button>

  </div>

  {/* Floating Booking Card */}


 

</section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Welcome to Wincate
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#17151A] sm:text-5xl">
              Your journey into the
              <span className="text-[#EC1676]"> wild begins here.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              Wincate Tours & Travels is a Nairobi-based tour company creating
              memorable experiences across Kenya. From wildlife safaris and
              Nairobi excursions to airport transfers, car hire and hotel
              bookings, we make exploring Kenya simple, comfortable and
              unforgettable.
            </p>

            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 font-bold text-[#17151A]"
            >
              Discover Wincate
              <ArrowRight
                size={18}
                className="text-[#EC1676] transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              What We Do
            </span>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              Everything you need for
              <span className="text-[#EC1676]"> your journey.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Compass,
                title: "Tours & Safaris",
                text: "Explore Kenya through unforgettable wildlife and adventure experiences.",
              },
              {
                icon: Plane,
                title: "Airport Transfers",
                text: "Reliable and convenient airport transfers to start your journey smoothly.",
              },
              {
                icon: Car,
                title: "Car Hire",
                text: "Comfortable transport solutions for business, leisure and adventure.",
              },
              {
                icon: Hotel,
                title: "Hotel Bookings",
                text: "Find comfortable accommodation that fits your itinerary and budget.",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-gray-100 bg-[#FFF9FC] p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-100 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#EC1676] transition group-hover:bg-[#EC1676] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.text}
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED SAFARIS
      ========================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Featured Experiences
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
                Journeys worth
                <span className="text-[#EC1676]"> remembering.</span>
              </h2>
            </div>

            <a
              href="/safaris"
              className="group inline-flex items-center gap-2 font-bold"
            >
              View All Safaris
              <ArrowRight
                size={18}
                className="text-[#EC1676] transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safariPackages.map((safari) => (
              <article
                key={safari.title}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-black/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold">
                    {safari.duration}
                  </span>

                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center gap-1 text-xs font-semibold text-white/80">
                      <MapPin size={13} />
                      {safari.location}
                    </div>

                    <h3 className="mt-1 text-xl font-bold">
                      {safari.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-gray-500">
                    {safari.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#EC1676]"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WILDEBEEST FEATURE
      ========================================================== */}
      <section className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[2.5rem]">
          <img
            src={migration}
            alt="Wildebeest migration in Maasai Mara"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="relative flex min-h-[560px] items-center px-7 py-16 sm:px-12 lg:px-20">
            <div className="max-w-2xl text-white">
              <span className="inline-flex rounded-full bg-[#EC1676] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                Signature Experience
              </span>

              <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-6xl">
                The Great
                <span className="block text-[#FF4C9A]">
                  Wildebeest Migration
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                Witness dramatic river crossings, massive herds and some of
                Africa's most unforgettable wildlife encounters in the
                legendary Maasai Mara.
              </p>

              <a
                href="/wildebeest-migration"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#17151A] transition hover:bg-[#EC1676] hover:text-white"
              >
                Explore Migration Safaris
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
          DESTINATIONS
      ========================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Explore Kenya
            </span>

            <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl font-bold sm:text-5xl">
              Places that make
              <span className="text-[#EC1676]"> Kenya unforgettable.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <a
                href="/Destinations"
                key={destination.name}
                className="group relative h-[430px] overflow-hidden rounded-[2rem]"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pink-300">
                    <MapPin size={14} />
                    Kenya
                  </div>

                  <h3 className="font-serif text-3xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                    {destination.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold">
                    Explore
                    <ArrowRight
                      size={17}
                      className="text-[#FF4C9A] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WINCATE
      ========================================================== */}
      <section className="bg-[#17151A] px-6 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
              Why Wincate
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Travel with confidence.
              <span className="block text-[#FF4C9A]">
                Experience more.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/65">
              We believe travel should be exciting, comfortable and easy.
              Whether you're planning a wildlife safari, a city excursion or
              a beach escape, we're here to make every part of your journey
              count.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold transition hover:bg-[#D80F68]"
            >
              More About Wincate
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Trusted Service",
                text: "Professional travel support from planning to the end of your journey.",
              },
              {
                icon: Compass,
                title: "Local Knowledge",
                text: "Explore Kenya with people who understand the destinations.",
              },
              {
                icon: Star,
                title: "Memorable Experiences",
                text: "We focus on creating experiences you'll want to remember.",
              },
              {
                icon: MessageCircle,
                title: "Personal Support",
                text: "Talk to us and get help creating the right trip for you.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-pink-500/30 hover:bg-white/[0.07]"
                >
                  <Icon className="text-[#FF4C9A]" size={28} />

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VEHICLE / EXPERIENCE
      ========================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src={safariVehicle}
              alt="Safari vehicle in Kenya"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
              Go Further
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              More than a trip.
              <span className="block text-[#EC1676]">
                It's your story.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              From the moment you land in Nairobi to your final sunset in the
              wild, Wincate is here to help you experience Kenya your way.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Flexible travel experiences",
                "Safari and excursion planning",
                "Airport transfers and transport",
                "Accommodation arrangements",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-[#EC1676]">
                    <CheckCircle2 size={16} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17151A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#EC1676]"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#EC1676] px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Let's Start Planning
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
                Ready to explore Kenya?
              </h2>

              <p className="mt-5 leading-7 text-white/80">
                Tell us what you're dreaming about and let Wincate help you
                turn it into an unforgettable journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#17151A] transition hover:bg-[#17151A] hover:text-white"
              >
                Plan My Trip
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:0724 938419"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#17151A]"
              >
                <Phone size={17} />
                0724 938419
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHATSAPP BUTTON
      ========================================================== */}
      <a
        href="https://wa.me/254724938419"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Wincate on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <MessageCircle size={27} />
      </a>


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
}