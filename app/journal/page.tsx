"use client";

import { useState } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";

export default function Journal() {
  const [gratitude, setGratitude] = useState("");
  const [mind, setMind] = useState("");
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState("");

  function downloadPDF() {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString();

    doc.setFontSize(22);
    doc.text("Purity OS Daily Mental Journal", 20, 25);

    doc.setFontSize(11);
    doc.text(`Date: ${today}`, 20, 35);

    doc.setFontSize(14);
    doc.text("What am I grateful for?", 20, 55);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(gratitude || "No answer yet.", 170), 20, 65);

    doc.setFontSize(14);
    doc.text("What is on my mind?", 20, 95);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(mind || "No answer yet.", 170), 20, 105);

    doc.setFontSize(14);
    doc.text("One action I will take today", 20, 135);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(action || "No answer yet.", 170), 20, 145);

    doc.setFontSize(14);
    doc.text("Extra notes", 20, 175);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(notes || "No notes yet.", 170), 20, 185);

    doc.save("purity-daily-journal.pdf");
  }

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href="/dashboard" className="text-sm text-[#7C6853]">Back to dashboard</Link>

      <section className="mx-auto max-w-4xl py-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">
          Daily Mental Journal
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Clear your mind. Lead with focus.
        </h1>

        <div className="mt-10 space-y-5 rounded-[2rem] bg-white/70 p-6 shadow-sm">
          {[
            ["What am I grateful for today?", gratitude, setGratitude],
            ["What is on my mind right now?", mind, setMind],
            ["What is one action I will take today?", action, setAction],
            ["Extra notes", notes, setNotes],
          ].map(([label, value, setter]: any) => (
            <div key={label}>
              <label className="mb-2 block text-sm text-[#7C6853]">{label}</label>
              <textarea
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="min-h-32 w-full rounded-2xl border border-black/10 bg-white p-4 outline-none"
                placeholder="Write here..."
              />
            </div>
          ))}

          <button
            onClick={downloadPDF}
            className="w-full rounded-full bg-[#1F1C1A] px-8 py-4 text-sm text-[#F4F0EA]"
          >
            Download Journal As PDF
          </button>
        </div>
      </section>
    </main>
  );
}
