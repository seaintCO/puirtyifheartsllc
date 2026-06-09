"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Salon");

  const industries = {
    Salon: ["Service menu", "Stylist calendar", "Deposit flow", "Aftercare portal"],
    Accountant: ["Tax consult", "Secure intake", "Document upload", "Invoice flow"],
    "Med Spa": ["Treatment menu", "Consent forms", "Deposit flow", "Follow-up care"],
    Coach: ["Discovery call", "Application", "Payment", "Course portal"],
  };

  const products = [
    [
      "Purity Hoodie",
      "$88",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop"
    ],
    [
      "Training Set",
      "$72",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop"
    ],
    [
      "Wellness Bottle",
      "$34",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900&auto=format&fit=crop"
    ]
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-[#241f1b]">
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#fbf8f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" className="font-serif text-3xl">Purity</a>

          <div className="hidden gap-8 text-sm text-black/50 md:flex">
            <a href="#coaching">Coaching</a>
            <a href="#systems">Systems</a>
            <a href="#getf">Get TO The F</a>
            <a href="/shop">Shop</a>
            <a href="/dashboard">Portal</a>
          </div>

          <a href="/bookings" className="rounded-full bg-[#241f1b] px-5 py-3 text-sm text-white">
            View Sandbox
          </a>
        </div>
      </nav>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
              Purity Of Heart
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
              Coaching for women. Systems for businesses.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Susan helps women grow through faith-centered coaching while offering
              custom booking systems powered by ALMA for service-based businesses.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#coaching" className="rounded-full bg-[#241f1b] px-8 py-4 text-center text-sm text-white">
                Explore Coaching
              </a>
              <a href="#systems" className="rounded-full bg-white px-8 py-4 text-center text-sm shadow-sm">
                Build My System
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-black/5">
            <div className="rounded-[1.5rem] bg-[#241f1b] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6b078]">
                Powered By ALMA
              </p>
              <h3 className="mt-2 font-serif text-3xl">Custom Client System</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Booking, payments, intake forms, reminders, and portal access in one flow.
              </p>

              <div className="mt-8 space-y-3">
                {["Client books", "Deposit collected", "Intake completed", "Portal unlocked"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    {item}
                  </div>
                ))}
              </div>

              <a href="/bookings" className="mt-8 block rounded-full bg-white px-6 py-4 text-center text-sm text-[#241f1b]">
                Try Sandbox Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="coaching" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
              Coaching
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              A personal brand built around Susan’s story.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-black/60">
            <p>
              Purity Of Heart is the movement. Susan is the voice. The coaching gives
              women structure, faith, confidence, and direction.
            </p>
            <p>
              Her clients can log in, watch lessons, download PDFs, access replays,
              and stay connected through a simple private portal.
            </p>
          </div>
        </div>
      </section>

      <section id="getf" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
              Signature Program
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Get TO The F
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/60">
              Susan’s online and in-person coaching sector built around faith,
              focus, feminine power, and freedom.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {["Faith", "Focus", "Feminine Power", "Freedom"].map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl">{item}</h3>
                <p className="mt-4 text-sm leading-6 text-black/55">
                  A core pillar inside the transformation experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
              Custom Systems Powered By ALMA
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Booking systems customized to each business.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/60">
              ALMA helps customize the booking flow, deposit, intake questions,
              reminders, documents, and client portal depending on the business type.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {Object.keys(industries).map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`rounded-2xl px-5 py-4 text-left text-sm shadow-sm ${
                    active === item ? "bg-[#241f1b] text-white" : "bg-[#fbf8f3]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#241f1b] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d6b078]">
              ALMA Preview
            </p>
            <h3 className="mt-2 font-serif text-3xl">{active} System</h3>

            <div className="mt-8 space-y-3">
              {industries[active as keyof typeof industries].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  {item}
                </div>
              ))}
            </div>

            <a href="/bookings" className="mt-8 block rounded-full bg-white px-6 py-4 text-center text-sm text-[#241f1b]">
              Open Interactive Sandbox
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
                Purity Shop
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
                Curated products for women building a life of faith, focus, and freedom.
              </h2>
            </div>

            <div className="w-full rounded-full bg-[#fbf8f3] px-5 py-4 text-left text-sm text-black/40 shadow-sm md:w-80">
              Search products...
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map(([name, price, img]) => (
              <div key={name} className="rounded-[2rem] bg-[#fbf8f3] p-4 shadow-sm">
                <img
                  src={img}
                  alt={name}
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                />
                <div className="p-4">
                  <div className="flex items-end justify-between">
                    <h3 className="font-serif text-3xl">{name}</h3>
                    <p className="font-serif text-2xl">{price}</p>
                  </div>
                  <a href="/shop" className="mt-5 block rounded-full bg-[#241f1b] px-6 py-4 text-center text-sm text-white">
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/shop" className="inline-block rounded-full bg-white px-8 py-4 text-sm shadow-sm">
              Open Full Shop
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white px-6 py-12 text-center text-sm text-black/50">
        Purity Of Heart. Coaching. Get TO The F. Custom Systems Powered By ALMA.
      </footer>
    </main>
  );
}
