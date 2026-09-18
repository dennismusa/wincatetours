import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Plane,
  CalendarDays,
  Users,
} from "lucide-react";

import mara from "../assets/mara.jpg";
import nairobi from "../assets/nairobi.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send enquiry directly to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "254724938419";

    const whatsappMessage = `
Hello Wincate Tours & Travels,

I would like to make a travel enquiry.

*FULL NAME*
${formData.name}

*EMAIL*
${formData.email}

*PHONE*
${formData.phone || "Not provided"}

*NUMBER OF TRAVELERS*
${formData.travelers || "Not specified"}

*TRAVEL DATE*
${formData.travelDate || "Not specified"}

*DESTINATION*
${formData.destination || "Not specified"}

*TRIP DETAILS*
${formData.message}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="bg-white text-[#17151A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[54vh] overflow-hidden bg-[#17151A]">

        <img
          src={mara}
          alt="Maasai Mara safari in Kenya"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17151A]/95 via-[#17151A]/75 to-[#17151A]/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17151A]/95 via-transparent to-[#17151A]/20" />

        {/* Decorative pink glow */}
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#EC1676]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[54vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#EC1676]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF72AC]">
                Contact Wincate
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
              Let's Plan Your
              <br />
              <span className="text-[#FF72AC]">
                Next Adventure.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Have a safari in mind, need an airport transfer, looking for
              accommodation, or simply want advice about travelling in Kenya?
              Our team is ready to help you plan your journey.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          CONTACT OPTIONS
      ========================================================= */}
      <section className="relative z-10 -mt-8 px-6 sm:px-8 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <a
            href="tel:0724938419"
            className="group rounded-[1.5rem] bg-white p-6 shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10 transition group-hover:bg-[#EC1676]">
              <Phone
                size={21}
                className="text-[#EC1676] transition group-hover:text-white"
              />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Call Us
            </p>

            <p className="mt-2 text-lg font-black text-[#17151A]">
              0724 938419
            </p>
          </a>


          {/* WhatsApp */}
          <a
            href="https://wa.me/254724938419"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.5rem] bg-white p-6 shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10 transition group-hover:bg-[#EC1676]">
              <MessageCircle
                size={21}
                className="text-[#EC1676] transition group-hover:text-white"
              />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              WhatsApp
            </p>

            <p className="mt-2 text-lg font-black text-[#17151A]">
              Chat With Us
            </p>
          </a>


          {/* Email */}
          <a
            href="mailto:info@wincatetoursandtravels.com"
            className="group rounded-[1.5rem] bg-white p-6 shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10 transition group-hover:bg-[#EC1676]">
              <Mail
                size={21}
                className="text-[#EC1676] transition group-hover:text-white"
              />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-black text-[#17151A]">
              info@wincatetoursandtravels.com
            </p>
          </a>


          {/* Location */}
          <div className="rounded-[1.5rem] bg-white p-6 shadow-xl ring-1 ring-black/5">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EC1676]/10">
              <MapPin
                size={21}
                className="text-[#EC1676]"
              />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Location
            </p>

            <p className="mt-2 text-lg font-black text-[#17151A]">
              Nairobi, Kenya
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="bg-[#FFF9F5] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">


            {/* =====================================================
                LEFT SIDE
            ===================================================== */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Start a Conversation
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Tell Us About
                <span className="text-[#EC1676]">
                  {" "}
                  Your Trip.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Whether you're dreaming about a wildlife safari, a relaxing
                beach holiday or a tailor-made Kenyan adventure, tell us what
                you have in mind and our team will help you put the journey
                together.
              </p>


              {/* Contact information */}
              <div className="mt-9 space-y-4">


                {/* Phone */}
                <a
                  href="tel:0724938419"
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EC1676]/10 transition group-hover:bg-[#EC1676]">
                    <Phone
                      size={19}
                      className="text-[#EC1676] transition group-hover:text-white"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 font-bold">
                      0724 938419
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Speak directly with our travel team.
                    </p>
                  </div>
                </a>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/254724938419"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EC1676]/10 transition group-hover:bg-[#EC1676]">
                    <MessageCircle
                      size={19}
                      className="text-[#EC1676] transition group-hover:text-white"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-bold">
                      Chat With Wincate
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      The quickest way to reach us.
                    </p>
                  </div>
                </a>


                {/* Office */}
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EC1676]/10">
                    <MapPin
                      size={19}
                      className="text-[#EC1676]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Office
                    </p>

                    <p className="mt-1 font-bold">
                      Nairobi, Kenya
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      14199-00400, Nairobi, Kenya
                    </p>
                  </div>

                </div>


                {/* Support */}
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EC1676]/10">
                    <Clock
                      size={19}
                      className="text-[#EC1676]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Travel Support
                    </p>

                    <p className="mt-1 font-bold">
                      We're Here to Help
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Contact us for help with safari planning,
                      accommodation, transfers and travel arrangements.
                    </p>
                  </div>

                </div>

              </div>


              {/* Quick reassurance */}
              <div className="mt-7 rounded-2xl border border-[#EC1676]/10 bg-[#EC1676]/5 p-5">

                <div className="flex items-start gap-3">

                  <CheckCircle
                    size={19}
                    className="mt-0.5 shrink-0 text-[#EC1676]"
                  />

                  <div>
                    <p className="font-bold text-[#17151A]">
                      Personalised Travel Planning
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Share your ideas with us and we'll help shape them into
                      a practical travel experience.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =====================================================
                FORM
            ===================================================== */}
            <div className="rounded-[2rem] bg-white p-7 shadow-xl ring-1 ring-black/5 sm:p-9 lg:p-11">

              <div className="mb-8">

                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-[#EC1676]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                    Travel Enquiry
                  </span>

                </div>

                <h3 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                  Plan Your Journey
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                  Tell us a little about your trip. When you submit the form,
                  WhatsApp will open with your enquiry already prepared for
                  Wincate Tours & Travels.
                </p>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-[#FFF9F5] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-[#FFF9F5] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                    />
                  </div>

                </div>


                {/* Phone + Travelers */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#FFF9F5] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Travelers
                    </label>

                    <div className="relative">

                      <Users
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FFF9F5] px-11 py-3.5 text-sm outline-none transition focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                      >
                        <option value="">
                          Number of travelers
                        </option>

                        <option value="1">
                          1 traveler
                        </option>

                        <option value="2">
                          2 travelers
                        </option>

                        <option value="3-5">
                          3–5 travelers
                        </option>

                        <option value="6-10">
                          6–10 travelers
                        </option>

                        <option value="10+">
                          More than 10
                        </option>
                      </select>

                    </div>
                  </div>

                </div>


                {/* Date + Destination */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Travel Date
                    </label>

                    <div className="relative">

                      <CalendarDays
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-[#FFF9F5] px-11 py-3.5 text-sm outline-none transition focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                      />

                    </div>
                  </div>


                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                      Destination
                    </label>

                    <div className="relative">

                      <Plane
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-[#FFF9F5] px-11 py-3.5 text-sm outline-none transition focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                      >

                        <option value="">
                          Select destination
                        </option>

                        <option value="Maasai Mara">
                          Maasai Mara
                        </option>

                        <option value="Amboseli">
                          Amboseli
                        </option>

                        <option value="Lake Nakuru">
                          Lake Nakuru
                        </option>

                        <option value="Nairobi">
                          Nairobi
                        </option>

                        <option value="Diani Beach">
                          Diani Beach
                        </option>

                        <option value="Other / Multiple Destinations">
                          Other / Multiple Destinations
                        </option>

                      </select>

                    </div>

                  </div>

                </div>


                {/* Message */}
                <div>

                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Tell Us About Your Trip *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us where you'd like to go, what you'd like to experience, preferred accommodation, budget or any other requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#FFF9F5] px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-gray-400 focus:border-[#EC1676] focus:ring-4 focus:ring-[#EC1676]/10"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#EC1676] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#D80F68] hover:shadow-xl"
                >
                  <MessageCircle size={18} />

                  Send Enquiry

                  <Send
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>


                <p className="text-center text-xs leading-5 text-gray-400">
                  Your enquiry will open WhatsApp with your travel details
                  ready to send to Wincate Tours & Travels.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          KENYA FEATURE
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">


            {/* Image */}
            <div className="relative">

              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-[#EC1676]/20" />

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src={nairobi}
                  alt="Nairobi Kenya"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="rounded-2xl bg-black/45 p-5 backdrop-blur-md">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF72AC]">
                      Welcome to Kenya
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Wildlife • Culture • Coast • Adventure
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC1676]">
                Based in Kenya
              </span>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">

                Kenya Is Waiting
                <span className="text-[#EC1676]">
                  {" "}
                  For You.
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                From Nairobi's vibrant city life to the open plains of Maasai
                Mara, the dramatic landscapes of Amboseli and the white sands
                of Diani Beach, Kenya offers unforgettable experiences for
                every traveller.
              </p>


              {/* Experience list */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Wildlife Safaris",
                  "Cultural Experiences",
                  "Beach Holidays",
                  "City Excursions",
                  "Airport Transfers",
                  "Car Hire",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#FFF9F5] px-4 py-3"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EC1676]/10">
                      <CheckCircle
                        size={15}
                        className="text-[#EC1676]"
                      />
                    </span>

                    <span className="text-sm font-semibold">
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              <a
                href="/packages"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17151A] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black hover:shadow-xl"
              >
                Explore Our Packages

                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EC1676] py-20 sm:py-24">

        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border-[60px] border-white/10" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[70px] border-white/10" />

        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />


        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Wincate Tours & Travels
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Next Adventure Starts With a Conversation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Don't know where to start? That's okay. Tell us what you're
            looking for and we'll help you plan the rest.
          </p>


          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://wa.me/254724938419"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#17151A] transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle size={18} />

              WhatsApp Us
            </a>


            <a
              href="tel:0724938419"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17151A] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black hover:shadow-2xl"
            >
              <Phone size={17} />

              0724 938419
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-black text-white">

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
                Discover Kenya through unforgettable safaris, carefully
                planned tours, comfortable travel and experiences designed
                around your journey.
              </p>


              {/* Social */}
              <div className="mt-6 flex gap-3">

  {/* Facebook */}
  <a
    href="/"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
  >
    f
  </a>

  {/* Instagram */}
  <a
    href="/"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
  >
    ◎
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/254724938419"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/60 transition hover:border-[#EC1676] hover:bg-[#EC1676] hover:text-white"
  >
    W
  </a>

</div>

            </div>


            {/* Explore */}
            <div>

              <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
                Explore
              </h4>

              <ul className="space-y-4 text-sm text-white/55">

                <li>
                  <a
                    href="/"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/services"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/packages"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Safari Packages
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="transition hover:text-[#FF4C9A]"
                  >
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
                  <a
                    href="/destinations"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Maasai Mara
                  </a>
                </li>

                <li>
                  <a
                    href="/destinations"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Amboseli
                  </a>
                </li>

                <li>
                  <a
                    href="/destinations"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Lake Nakuru
                  </a>
                </li>

                <li>
                  <a
                    href="/destinations"
                    className="transition hover:text-[#FF4C9A]"
                  >
                    Nairobi
                  </a>
                </li>

                <li>
                  <a
                    href="/destinations"
                    className="transition hover:text-[#FF4C9A]"
                  >
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


          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

            <p>
              © {currentYear} Wincate Tours & Travels. All rights reserved.
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

export default Contact;