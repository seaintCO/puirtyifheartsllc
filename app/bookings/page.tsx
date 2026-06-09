"use client";

import { useState } from "react";

const templates = {
  Salon: {
    service: "Balayage Consultation",
    deposit: "$50",
    portal: "Aftercare + appointment prep",
    intake: ["Hair goal", "Current color", "Inspiration photo", "Preferred stylist"],
  },
  Accountant: {
    service: "Tax Strategy Call",
    deposit: "$100",
    portal: "Secure document checklist",
    intake: ["Business type", "Annual revenue", "Tax concern", "Documents needed"],
  },
  "Med Spa": {
    service: "Skin Consultation",
    deposit: "$75",
    portal: "Pre-care + post-care instructions",
    intake: ["Skin concern", "Treatment history", "Preferred date", "Medical notes"],
  },
  Coach: {
    service: "Private Clarity Call",
    deposit: "$150",
    portal: "Course videos + PDF workbook",
    intake: ["Main goal", "Current challenge", "Desired outcome", "Coaching focus"],
  },
};

export default function Bookings() {
  const [business, setBusiness] = useState("Salon");
  const [step, setStep] = useState(0);

  const data = templates[business as keyof typeof templates];

  const steps = [
    "Business selected",
    "Booking flow generated",
    "Deposit attached",
    "Custom intake created",
    "Portal access prepared",
  ];

  return (
    <main className="min-h-screen bg-[#fbf8f3] p-6 text-[#241f1b] md:p-12">
      <a href="/" className="text-sm text-black/50">Back to homepage</a>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">Powered By ALMA</p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Interactive Booking Sandbox
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Select an industry and let ALMA generate a custom booking flow, intake form,
            deposit logic, reminders, and portal experience.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {Object.keys(templates).map((item) => (
              <button
                key={item}
                onClick={() => {
                  setBusiness(item);
                  setStep(0);
                }}
                className={`rounded-2xl px-5 py-4 text-left text-sm shadow-sm transition ${
                  business === item ? "bg-[#241f1b] text-white" : "bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep((step + 1) % steps.length)}
            className="mt-8 rounded-full bg-[#241f1b] px-8 py-4 text-sm text-white"
          >
            Run ALMA Step
          </button>
        </section>

        <section className="rounded-[2rem] bg-[#241f1b] p-5 text-white shadow-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#d6b078]">ALMA Live System</p>
                <h2 className="mt-2 font-serif text-3xl">{business} Booking OS</h2>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-2 text-xs text-green-700">Live</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 text-[#241f1b]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a46d]">Service</p>
                <h3 className="mt-3 font-serif text-2xl">{data.service}</h3>
              </div>
              <div className="rounded-3xl bg-white p-6 text-[#241f1b]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a46d]">Deposit</p>
                <h3 className="mt-3 font-serif text-2xl">{data.deposit}</h3>
              </div>
              <div className="rounded-3xl bg-white p-6 text-[#241f1b]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c9a46d]">Portal</p>
                <h3 className="mt-3 font-serif text-xl">{data.portal}</h3>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6b078]">Current ALMA Action</p>
              <h3 className="font-serif text-3xl">{steps[step]}</h3>
              <div className="mt-5 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-[#d6b078] transition-all" style={{ width: `${(step + 1) * 20}%` }} />
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#d6b078]">Generated Intake Form</p>
              <div className="grid gap-3 md:grid-cols-2">
                {data.intake.map((field) => (
                  <div key={field} className="rounded-2xl bg-white/10 p-4 text-sm">
                    {field}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {["Book", "Pay", "Intake", "Remind", "Portal"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl p-4 text-center text-sm ${
                    index <= step ? "bg-[#d6b078] text-[#241f1b]" : "bg-white/10 text-white/50"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
