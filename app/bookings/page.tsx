"use client";

import { useState } from "react";

const templates = {
  Restaurant: {
    service: "Private Dining Reservation",
    deposit: "$250",
    portal: "Menu preview + event details",
    intake: ["Guest count", "Event date", "Dietary notes", "Private room request"],
  },
  Beauty: {
    service: "Balayage Consultation",
    deposit: "$50",
    portal: "Aftercare + appointment prep",
    intake: ["Hair goal", "Current color", "Inspiration photo", "Preferred stylist"],
  },
  Culinary: {
    service: "Catering Inquiry",
    deposit: "$300",
    portal: "Menu builder + event notes",
    intake: ["Event type", "Guest count", "Menu preference", "Budget range"],
  },
  Accountant: {
    service: "Tax Strategy Call",
    deposit: "$100",
    portal: "Secure document checklist",
    intake: ["Business type", "Annual revenue", "Tax concern", "Documents needed"],
  },
  Coaching: {
    service: "Business Coaching Call",
    deposit: "$150",
    portal: "Business resources + PDF workbook",
    intake: ["Business type", "Revenue goal", "Current challenge", "Coaching focus"],
  },
  Wellness: {
    service: "Treatment Consultation",
    deposit: "$75",
    portal: "Pre-care + post-care instructions",
    intake: ["Main concern", "Treatment history", "Preferred date", "Medical notes"],
  },
};

export default function Bookings() {
  const [business, setBusiness] = useState("Restaurant");
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
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <a href="/" className="text-sm text-[#7C6853]">Back to homepage</a>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">Powered By ALMA</p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Interactive Booking Sandbox
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7C6853]">
            Select an industry and let ALMA generate a custom booking flow, deposit,
            intake form, reminders, and portal experience.
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
                  business === item ? "bg-[#1F1C1A] text-[#F4F0EA]" : "glass-card"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep((step + 1) % steps.length)}
            className="mt-8 rounded-full bg-[#1F1C1A] px-8 py-4 text-sm text-[#F4F0EA]"
          >
            Run ALMA Step
          </button>
        </section>

        <section className="rounded-[2rem] bg-[#1F1C1A] p-5 text-[#F4F0EA] shadow-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">ALMA Live System</p>
                <h2 className="mt-2 font-serif text-3xl">{business} Booking OS</h2>
              </div>
              <span className="rounded-full bg-[#F4F0EA] px-3 py-2 text-xs text-[#1F1C1A]">Live</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-[#F4F0EA] p-6 text-[#1F1C1A]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">Service</p>
                <h3 className="mt-3 font-serif text-2xl">{data.service}</h3>
              </div>
              <div className="rounded-3xl bg-[#F4F0EA] p-6 text-[#1F1C1A]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">Deposit</p>
                <h3 className="mt-3 font-serif text-2xl">{data.deposit}</h3>
              </div>
              <div className="rounded-3xl bg-[#F4F0EA] p-6 text-[#1F1C1A]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">Portal</p>
                <h3 className="mt-3 font-serif text-xl">{data.portal}</h3>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#C8A46B]">Current ALMA Action</p>
              <h3 className="font-serif text-3xl">{steps[step]}</h3>
              <div className="mt-5 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-[#C8A46B] transition-all" style={{ width: `${(step + 1) * 20}%` }} />
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#C8A46B]">Generated Intake Form</p>
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
                    index <= step ? "bg-[#C8A46B] text-[#1F1C1A]" : "bg-white/10 text-white/50"
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
