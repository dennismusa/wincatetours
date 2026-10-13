import React, { useEffect, useState } from "react";
import {
  ArrowRight,  ChevronLeft,  ChevronRight,  MapPin,      Compass,  ShieldCheck,  Star,  Phone,  MessageCircle,  CheckCircle2,} from "lucide-react";

// Images
//import mara from "../assets/mara.jpg";
import mara1 from "../assets/mara1.jpg";
import mara2 from "../assets/mara2.jpg";
import cruiser1 from "../assets/cruiser1.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import team from "../assets/team.jpg";
import zanzibar4 from "../assets/zanzibar4.jpg";
import wilderbeast1 from "../assets/wilderbeast1.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import diani1 from "../assets/diani1.jpg";
import serengeti1 from "../assets/serengeti1.jpg";

const heroSlides = [
  {
    image: serengeti2,
    eyebrow: "THE GREAT WILDEBEEST MIGRATION",
    title: "Witness Africa's",
    highlight: "Greatest Spectacle",
    text: "Follow the incredible journey of millions of wildebeest across the Mara ecosystem and experience Kenya at its wildest.",
  },
  {
    image: mara2,
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
    title: "Maasai Mara Safari",
    duration: "3 Days",
    location: "Maasai Mara, Kenya",
    description:
      "Explore Kenya's iconic savannah, spot the Big Five, and experience unforgettable wildlife encounters.",
    image: mara1,
  },
  {
    title: "Amboseli Adventure",
    duration: "2–3 Days",
    location: "Amboseli, Kenya",
    description:
      "Discover elephants roaming beneath the spectacular backdrop of Mount Kilimanjaro.",
    image: amboseli,
  },
  {
    title: "Lake Nakuru Escape",
    duration: "2 Days",
    location: "Lake Nakuru, Kenya",
    description:
      "Enjoy beautiful lake scenery, rhinos, birdlife, and a refreshing wildlife getaway.",
    image: nakuru,
  },
  {
    title: "Wildebeest Migration",
    duration: "4–6 Days",
    location: "Maasai Mara, Kenya",
    description:
      "Witness one of nature's greatest spectacles with dramatic wildlife encounters across the plains.",
    image: wilderbeast1,
  },
  {
    title: "Diani Beach Holiday",
    duration: "3–5 Days",
    location: "Diani Beach, Kenya",
    description:
      "Unwind on white sandy beaches with ocean adventures, relaxation, and coastal experiences.",
    image: diani1,
  },
  {
    title: "Zanzibar Island Holiday",
    duration: "4–5 Days",
    location: "Zanzibar, Tanzania",
    description:
      "Experience turquoise waters, tropical beaches, Stone Town, and the unique Swahili culture.",
    image: zanzibar4,
  },
  {
    title: "Dubai Holiday",
    duration: "4–6 Days",
    location: "Dubai, United Arab Emirates",
    description:
      "Discover Dubai's iconic skyline, luxury shopping, desert safaris, beautiful beaches, and unforgettable city experiences.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Visa Assistance",
    duration: "Application Support",
    location: "Kenya & International",
    description:
      "Get guidance on visa application requirements, supporting documents, and application procedures for your intended destination. Visa approval is determined by the relevant authorities.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Hotel & Resort Bookings",
    duration: "Tailor-Made",
    location: "Kenya & Beyond",
    description:
      "Find suitable hotels, luxury resorts, beach properties, and safari lodges for your next trip.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Airport Transfers",
    duration: "On Request",
    location: "Nairobi, Kenya",
    description:
      "Enjoy convenient airport pickups, drop-offs, and comfortable transfers for your journey.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Team Building Experiences",
    duration: "Half or Full Day",
    location: "Kenya",
    description:
      "Bring your team together with engaging outdoor activities, group adventures, and memorable retreats.",
    image: team,
  },
  {
    title: "International Travel",
    duration: "Tailor-Made",
    location: "Worldwide",
    description:
      "Plan international holidays with flight ticketing, accommodation, and travel documentation guidance.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
  },
];

const destinations = [
  {
    name: "Maasai Mara",
    image: mara2,
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
    
{/* =========================================================
    WHAT WE DO — COMPLETE TRAVEL SERVICES
========================================================= */}

<section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EC1676]">
          What We Do
        </span>

        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Complete travel solutions
          <span className="block text-[#EC1676]">
            under one roof.
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-7 text-gray-500 lg:text-right">
        From documentation and ticketing to accommodation, transport,
        holidays and international travel, Wincate Tours & Travels helps
        you organise the important parts of your journey from one place.
      </p>

    </div>


    {/* SERVICE GRID */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


      {/* VISA APPLICATION */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src= "https://img.post.edu.pe/images/2026/02/gather-all-required-documents-before-visiting-a-peruvian-consulate.jpg"
          alt="Visa application and travel documentation"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Travel Documentation
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Visa Applications
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Assistance with visa application processes, supporting
            documentation and travel preparation for international journeys.
          </p>
        </div>
      </div>


      {/* PASSPORT */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src= "https://static.wixstatic.com/media/6476c8_05828c71ee1b434da8e57842a26a8300~mv2.jpg/v1/fill/w_1200%2Ch_675%2Cal_c%2Cq_85/6476c8_05828c71ee1b434da8e57842a26a8300~mv2.jpg"
          alt="Passport processing"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Documentation
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Passport Processing
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Support for new passport applications, renewals, replacements
            and other passport-related travel documentation processes.
          </p>
        </div>
      </div>


      {/* FLIGHT TICKETING */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90"
          alt="Flight booking and ticketing"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Air Travel
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Flight Booking & Ticketing
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Domestic and international flight arrangements including
            one-way, return and group travel bookings.
          </p>
        </div>
      </div>


      {/* HOTEL BOOKINGS */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=90"
          alt="Hotel bookings"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Accommodation
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Hotel Bookings
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Hotel, resort and safari lodge bookings for holidays, business
            trips, family travel and international journeys.
          </p>
        </div>
      </div>


      {/* TOURS & SAFARIS */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src={mara1}
          alt="Kenya tours and safaris"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Kenya Experiences
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Tours & Safaris
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Discover Kenya through wildlife safaris, excursions, adventure,
            culture and tailor-made travel experiences.
          </p>
        </div>
      </div>


      {/* AIRPORT TRANSFERS */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="https://cms.transfer.com.br/storage/9eVnGO2cVIWfYVkpcn6VYa67TdQjk5-metaQ2hhdEdQVCBJbWFnZSBNYXkgMTcsIDIwMjYsIDEyXzQxXzQ3IFBNLnBuZw%3D%3D-.webp"
          alt="Airport transfer services"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Ground Transport
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Airport Transfers
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Convenient airport pick-ups and drop-offs designed to make your
            arrival and departure smooth and stress-free.
          </p>
        </div>
      </div>


      {/* CAR HIRE */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src={cruiser1}
          alt="Car hire services"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Mobility
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Car Hire
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Flexible vehicle solutions for business, leisure, excursions,
            road trips and personal travel requirements.
          </p>
        </div>
      </div>


      {/* STUDENT & JOB TRAVEL */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
          alt="Student and work travel"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            Opportunity Travel
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Student & Job Travel
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Travel arrangements for students, study programmes, employment
            opportunities, interviews and work-related journeys.
          </p>
        </div>
      </div>


      {/* MOMBASA */}
      


      {/* DUBAI */}
      <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=90"
          alt="Dubai holiday destination"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
            International
          </span>

          <h3 className="mt-2 font-serif text-3xl font-bold">
            Dubai
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Plan Dubai holidays with flights, accommodation, city
            experiences, shopping, desert adventures and more.
          </p>
        </div>
      </div>


      

    </div>


    {/* BOTTOM SERVICE STATEMENT */}
    <div className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] bg-[#17151A] p-7 text-white sm:p-9 lg:flex-row lg:items-center">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF4C9A]">
          One Travel Partner
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
          From documentation to destination.
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/50">
          Whether you are travelling locally or internationally, Wincate
          can help coordinate the essential parts of your journey.
        </p>
      </div>

      <a
        href="/contact"
        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#EC1676] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#D80F68]"
      >
        Plan Your Journey
        <ArrowRight size={18} />
      </a>

    </div>

  </div>
</section>



      {/* =========================================================
          FEATURED SAFARIS
      ========================================================== */}
      
<section className="relative overflow-hidden bg-[#FFF9F5] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
  {/* Decorative background */}
  <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#EC1676]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
          <span className="h-1.5 w-7 rounded-full bg-[#EC1676]" />
          Discover Wincate
        </span>

        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#17151A] sm:text-5xl lg:text-6xl">
          Journeys worth
          <span className="block text-[#EC1676]">
            remembering.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
          From unforgettable wildlife safaris and coastal escapes to hotel
          bookings, airport transfers, and team adventures, we help you
          experience more with Wincate Tours & Travels.
        </p>
      </div>

      
    </div>

    {/* Experience cards */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {safariPackages.map((safari, index) => (
        <article
          key={safari.title}
          className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-lg shadow-black/[0.04] transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#EC1676]/10"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden sm:h-72">
            <img
              src={safari.image}
              alt={safari.title}
              loading={index < 4 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 opacity-90 transition duration-500 group-hover:opacity-100" />

            {/* Duration */}
            <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/95 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#17151A] shadow-sm">
              {safari.duration}
            </span>

            {/* Number */}
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Image title and location */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/85">
                <MapPin
                  size={14}
                  className="shrink-0 text-[#FF75B0]"
                />
                <span>{safari.location}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold leading-tight">
                {safari.title}
              </h3>
            </div>
          </div>

          {/* Description only — no enquiry button */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="text-sm leading-7 text-gray-600">
              {safari.description}
            </p>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#17151A] px-6 py-9 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF75B0]">
          Your next adventure starts here
        </span>

        <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
          Have a trip in mind?
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/65">
          Tell us what you need, and let our team help you plan a journey
          tailored to your budget, interests, and schedule.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EC1676] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#D80F68]"
        >
          Plan Your Trip
          <ArrowRight size={17} />
        </a>

        <a
          href={`https://wa.me/254724938419?text=${encodeURIComponent(
            "Hello Wincate Tours & Travels, I would like help planning a trip. Please assist me with the available options."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
        >
          Chat With Our Team
        </a>
      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          WILDEBEEST FEATURE
      ========================================================== */}
      <section className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="relative mx-auto min-h-[560px] max-w-7xl overflow-hidden rounded-[2.5rem]">
          <img
            src={wilderbeast1}
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
              src={serengeti1}
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
     
{/* =====================================================
    DESTINATIONS & SERVICES
===================================================== */}
<div>
  <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
    Destinations & Services
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

    <li>
      <a
        href="/Destinations"
        className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
      >
        <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
        Dubai Holidays
      </a>
    </li>

    <li>
      <a
        href="/services"
        className="group flex items-center gap-2 transition hover:text-[#FF4C9A]"
      >
        <span className="h-px w-0 bg-[#FF4C9A] transition-all duration-300 group-hover:w-4" />
        Visa Assistance
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
{/* Email */}
<div>
  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#FF4C9A]">
    Email
  </p>

  <a
    href="mailto:info@wincatetoursandtravels.com"
    className="break-all transition hover:text-[#FF4C9A]"
  >
    info@wincatetoursandtravels.com
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
}