"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { jsPDF } from "jspdf";

export default function FillResource() {
  const params = useSearchParams();

  const title = params.get("title") || "Purity OS Worksheet";
  const module = params.get("module") || "Purity OS";

  const [name, setName] = useState("");
  const [current, setCurrent] = useState("");
  const [goal, setGoal] = useState("");
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState("");

  function downloadPDF() {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString();

    doc.setFontSize(22);
    doc.text("Purity OS", 20, 25);

    doc.setFontSize(16);
    doc.text(title, 20, 38);

    doc.setFontSize(10);
    doc.text(`Module: ${module}`, 20, 48);
    doc.text(`Date: ${today}`, 20, 55);
    doc.text(`Name: ${name || "Not provided"}`, 20, 62);

    doc.setFontSize(13);
    doc.text("Current Situation", 20, 80);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(current || "No answer provided.", 170), 20, 88);

    doc.setFontSize(13);
    doc.text("Goal / Desired Outcome", 20, 120);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(goal || "No answer provided.", 170), 20, 128);

    doc.setFontSize(13);
    doc.text("Action Step", 20, 160);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(action || "No answer provided.", 170), 20, 168);

    doc.setFontSize(13);
    doc.text("Notes", 20, 200);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(notes || "No notes provided.", 170), 20, 208);

    doc.setFontSize(9);
    doc.text("Purity OS Beta • Powered by ALMA", 20, 285);

    doc.save(`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-completed.pdf`);
  }

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href="/resources" className="text-sm text-[#7C6853]">
        Back to resources
      </Link>

      <section className="mx-auto max-w-4xl py-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">
          Interactive Worksheet
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-4 text-[#7C6853]">
          Fill this out, then download your completed PDF.
        </p>

        <div className="mt-10 space-y-5 rounded-[2rem] bg-white/75 p-6 shadow-sm">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-full border border-black/10 bg-white px-6 py-4 outline-none"
          />

          {[
            ["Current Situation", current, setCurrent],
            ["Goal / Desired Outcome", goal, setGoal],
            ["Action Step", action, setAction],
            ["Notes", notes, setNotes],
          ].map(([label, value, setter]: any) => (
            <div key={label}>
              <label className="mb-2 block text-sm text-[#7C6853]">{label}</label>
              <textarea
                value={value}
                onChange={(e) => setter(e.target.value)}
                placeholder="Write your answer..."
                className="min-h-32 w-full rounded-2xl border border-black/10 bg-white p-4 outline-none"
              />
            </div>
          ))}

          <button
            onClick={downloadPDF}
            className="w-full rounded-full bg-[#1F1C1A] px-8 py-4 text-sm text-[#F4F0EA]"
          >
            Download Completed PDF
          </button>
        </div>
      </section>
    </main>
  );
}
