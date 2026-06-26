"use client";

import { useState } from "react";
import Link from "next/link";

const events = [
  {
    title: "In-Person Business Systems Workshop",
    type: "In Person",
    location: "Nashville, TN",
    date: "July 12",
    time: "10:00 AM",
    seats: "12 seats",
    description: "Build offers, systems, booking flows, and your client experience.",
  },
  {
    title: "Online Purity OS Beta Walkthrough",
    type: "Online",
    location: "Zoom",
    date: "July 18",
    time: "7:00 PM",
    seats: "Unlimited",
    description: "A guided walkthrough of the dashboard, courses, resources, and booking platform.",
  },
  {
    title: "Assistant University Implementation Day",
    type: "Online",
    location: "Zoom",
    date: "July 25",
    time: "11:00 AM",
    seats: "25 seats",
    description: "A focused session for assistant systems, onboarding, education, and team structure.",
  },
  {
    title: "Get TO The F Strategy Session",
    type: "Hybrid",
    location: "Online + In Person",
    date: "August 2",
    time: "1:00 PM",
    seats: "15 seats",
    description: "Faith, focus, financial clarity, fulfillment, and freedom for business owners.",
  },
];

export default function Events() {
  const [selected, setSelected] = useState(events[0]);
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href="/" className="text-sm text-[#7C6853]">
        Back to homepage
      </Link>

      <section className="mx-auto max-w-7xl py-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">
              Events + Workshops
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Join a live Purity OS experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7C6853]">
              Choose an online or in-person workshop, preview the details, and join the early event list.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {["July 12", "July 18", "July 25", "August 2"].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelected(events.find((event) => event.date === day) || events[0])}
                  className={`rounded-2xl px-5 py-4 text-left text-sm ${
                    selected.date === day
                      ? "bg-[#1F1C1A] text-[#F4F0EA]"
                      : "bg-white/75 text-[#1F1C1A]"
                  }`}
                >
                  <span className="block text-xs opacity-60">Workshop</span>
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1F1C1A] p-6 text-[#F4F0EA] shadow-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
              Selected Event
            </p>

            <h2 className="mt-3 font-serif text-4xl">{selected.title}</h2>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                ["Type", selected.type],
                ["Date", selected.date],
                ["Time", selected.time],
                ["Location", selected.location],
                ["Seats", selected.seats],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C8A46B]">{label}</p>
                  <p className="mt-2 text-sm">{value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 leading-7 text-white/65">{selected.description}</p>

            <div className="mt-8 rounded-[1.5rem] bg-white/10 p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                Join Event List
              </p>

              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="rounded-full bg-[#F4F0EA] px-5 py-4 text-[#1F1C1A] outline-none"
                />
                <button
                  onClick={() => setSignedUp(true)}
                  className="rounded-full bg-[#C8A46B] px-6 py-4 text-sm text-[#1F1C1A]"
                >
                  Sign Up
                </button>
              </div>

              {signedUp && (
                <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-white/75">
                  You are on the list for {selected.title}. Beta note: this is demo mode until email/Supabase is connected.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5">
          {events.map((event) => (
            <button
              key={event.title}
              onClick={() => setSelected(event)}
              className="glass-card rounded-[2rem] p-6 text-left transition hover:scale-[1.01]"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">
                    {event.type} • {event.location}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{event.title}</h3>
                  <p className="mt-2 text-sm text-[#7C6853]">
                    {event.date} at {event.time} • {event.seats}
                  </p>
                </div>

                <span className="rounded-full bg-[#1F1C1A] px-6 py-3 text-center text-sm text-[#F4F0EA]">
                  View Details
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
