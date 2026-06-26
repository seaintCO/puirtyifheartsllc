"use client";

import { useState } from "react";

export default function Home() {
  const fWords = [
    {
      word: "Faith",
      meaning: "Trusting God while still taking disciplined action.",
      verse: "Hebrews 11:1",
      apply: "Take one step today toward something you have been praying for.",
      prayer: "God, strengthen my faith and help me move with wisdom.",
      declaration: "I walk by faith and not by fear."
    },
    {
      word: "Focus",
      meaning: "Giving your attention to what God has assigned you to build.",
      verse: "Proverbs 4:25",
      apply: "Choose one priority today and remove one distraction.",
      prayer: "God, help me fix my eyes on what matters.",
      declaration: "I am focused, disciplined, and clear."
    },
    {
      word: "Favor",
      meaning: "God opening doors, relationships, and opportunities you could not force.",
      verse: "Psalm 5:12",
      apply: "Prepare for the opportunity you have been praying for.",
      prayer: "God, surround me with favor and guide my steps.",
      declaration: "I walk in favor and preparation."
    },
    {
      word: "Forgiveness",
      meaning: "Choosing freedom over bitterness and obedience over offense.",
      verse: "Ephesians 4:32",
      apply: "Release one offense you have been carrying.",
      prayer: "God, help me forgive and move forward with peace.",
      declaration: "I am free from bitterness."
    },
    {
      word: "Fruitfulness",
      meaning: "Producing results through obedience, consistency, and stewardship.",
      verse: "John 15:5",
      apply: "Review what is producing fruit and what needs pruning.",
      prayer: "God, make my life fruitful in the right places.",
      declaration: "My work produces good fruit."
    },
    {
      word: "Fortitude",
      meaning: "The strength to keep going when the assignment feels heavy.",
      verse: "Joshua 1:9",
      apply: "Face one hard thing today with courage.",
      prayer: "God, give me courage and endurance.",
      declaration: "I am strong, courageous, and steady."
    },
    {
      word: "Freedom",
      meaning: "Living unchained from fear, confusion, and old patterns.",
      verse: "Galatians 5:1",
      apply: "Identify one pattern you are ready to leave behind.",
      prayer: "God, lead me into freedom and discipline.",
      declaration: "I am free and moving forward."
    }
  ];

  const [todayWord, setTodayWord] = useState(fWords[new Date().getDay() % fWords.length]);

  function generateWord() {
    const next = fWords[Math.floor(Math.random() * fWords.length)];
    setTodayWord(next);
  }
  return (
    <main className="min-h-screen marble-bg text-[#1F1C1A]">
      <nav className="sticky top-0 z-50 border-b border-white/40 bg-[#F4F0EA]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="/" className="font-serif text-3xl tracking-tight">Purity OS</a>

          <div className="hidden gap-8 text-sm text-[#7C6853] md:flex">
            <a href="#getf">Get TO The F</a>
            <a href="#academy">Academy</a>
            <a href="#booking">Booking</a>
            <a href="/events">Events</a>
            <a href="/shop">Shop</a>
          </div>

          <a href="/dashboard" className="rounded-full bg-[#1F1C1A] px-5 py-3 text-sm text-[#F4F0EA]">
            View Dashboard
          </a>
        </div>
      </nav>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#B29571]">
              Business Coaching + Systems + Education
            </p>

            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Build a business that runs with clarity.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#7C6853]">
              Purity OS helps founders, operators, and service businesses organize their offers,
              train their team, book clients, and build better systems powered by ALMA.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/dashboard" className="rounded-full bg-[#1F1C1A] px-8 py-4 text-center text-sm text-[#F4F0EA]">
                View Dashboard
              </a>
              <a href="#beta" className="rounded-full bg-white/75 px-8 py-4 text-center text-sm shadow-sm">
                Join Beta
              </a>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] bg-[#1F1C1A] p-6 text-[#F4F0EA]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                Purity OS Beta
              </p>
              <h3 className="mt-2 font-serif text-3xl">Business Operating System</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Courses, PDFs, quizzes, booking pages, client portals, events, templates,
                and ALMA tools in one place.
              </p>

              <div className="mt-8 space-y-3">
                {["Business Academy", "Assistant University", "Booking Platform", "Events + Workshops"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    {item}
                  </div>
                ))}
              </div>

              <a href="/dashboard" className="mt-8 block rounded-full bg-[#F4F0EA] px-6 py-4 text-center text-sm text-[#1F1C1A]">
                Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="getf" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#1F1C1A] p-8 text-[#F4F0EA] md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A46B]">
            Signature Framework
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Get TO The F
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            A practical coaching framework for faith, focus, financial clarity, fulfillment,
            and freedom — built for business owners who want structure without losing purpose.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["Faith", "Focus", "Financial Clarity", "Fulfillment", "Freedom"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                  Daily Biblical F
                </p>
                <h3 className="mt-2 font-serif text-3xl">{todayWord.word}</h3>
                <p className="mt-2 max-w-2xl text-sm text-white/65">{todayWord.meaning}</p>
              </div>

              <button
                onClick={generateWord}
                className="rounded-full bg-[#F4F0EA] px-6 py-3 text-sm text-[#1F1C1A]"
              >
                Generate New F
              </button>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8A46B]">Verse</p>
                <p className="mt-2 text-sm">{todayWord.verse}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8A46B]">Apply</p>
                <p className="mt-2 text-sm text-white/70">{todayWord.apply}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8A46B]">Prayer</p>
                <p className="mt-2 text-sm text-white/70">{todayWord.prayer}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8A46B]">Declare</p>
                <p className="mt-2 text-sm text-white/70">{todayWord.declaration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="academy" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ["Business Coaching Academy", "Benchmarks, systems, client experience, payroll, social, and scaling."],
            ["Assistant University", "Foundation, education, coaching, mentoring, assistant guides, and growth tools."]
          ].map(([title, text]) => (
            <div key={title} className="glass-card rounded-[2rem] p-8">
              <h3 className="font-serif text-4xl">{title}</h3>
              <p className="mt-4 leading-7 text-[#7C6853]">{text}</p>
              <a href="/courses" className="mt-6 inline-block rounded-full bg-[#1F1C1A] px-6 py-3 text-sm text-[#F4F0EA]">
                View Courses
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#1F1C1A] p-8 text-[#F4F0EA] md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A46B]">
                Live Booking Platform
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                See a real booking page before we build yours.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Preview how a service business can present offers, collect inquiries,
                book clients, and create a premium client experience.
              </p>

              <a
                href="https://puirtyofheartsdemo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#F4F0EA] px-8 py-4 text-sm text-[#1F1C1A]"
              >
                Launch Live Booking Demo
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              {["Beauty", "Restaurant", "Accounting", "Coaching", "Wellness"].map((item) => (
                <div key={item} className="mb-3 rounded-2xl bg-white/10 p-4 text-sm text-white/75">
                  {item} booking experience
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="beta" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">
            Early Beta Access
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Join the first Purity OS beta users.
          </h2>

          <div className="mt-10 grid gap-4 rounded-[2rem] bg-white/70 p-5 shadow-sm md:grid-cols-[1fr_auto]">
            <input
              placeholder="Enter your email"
              className="rounded-full border border-black/10 bg-white px-6 py-4 outline-none"
            />
            <button className="rounded-full bg-[#1F1C1A] px-8 py-4 text-sm text-[#F4F0EA]">
              Request Beta Access
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-[#7C6853]">
        Purity OS. Business Coaching. Assistant University. Booking Platforms. Events.
      </footer>
    </main>
  );
}


