"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";

function WorksheetResourceContent() {
  const params = useSearchParams();

  const title = params.get("title") || "Purity OS Worksheet";
  const module = params.get("module") || "Purity OS";
  const academy = params.get("academy") || "Purity OS";
  const back = params.get("back") || "/resources";

  const storageKey = useMemo(
    () => `purity-worksheet-${title}-${module}`,
    [title, module]
  );

  const [name, setName] = useState("");
  const [current, setCurrent] = useState("");
  const [goal, setGoal] = useState("");
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState("");
  const [complete, setComplete] = useState(false);
  const [savedAt, setSavedAt] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const data = JSON.parse(saved);
      setName(data.name || "");
      setCurrent(data.current || "");
      setGoal(data.goal || "");
      setAction(data.action || "");
      setNotes(data.notes || "");
      setComplete(data.complete || false);
      setSavedAt(data.savedAt || "");
    }
  }, [storageKey]);

  useEffect(() => {
    const data = {
      name,
      current,
      goal,
      action,
      notes,
      complete,
      savedAt: new Date().toLocaleString(),
    };

    localStorage.setItem(storageKey, JSON.stringify(data));
    setSavedAt(data.savedAt);
  }, [name, current, goal, action, notes, complete, storageKey]);

  const answered = [name, current, goal, action, notes].filter(Boolean).length;
  const progress = Math.round((answered / 5) * 100);

  function downloadPDF() {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString();

    doc.setFontSize(22);
    doc.text("Purity OS", 20, 25);

    doc.setFontSize(16);
    doc.text(title, 20, 38);

    doc.setFontSize(10);
    doc.text(`Academy: ${academy}`, 20, 48);
    doc.text(`Module: ${module}`, 20, 55);
    doc.text(`Date: ${today}`, 20, 62);
    doc.text(`Name: ${name || "Not provided"}`, 20, 69);

    doc.setFontSize(13);
    doc.text("Current Situation", 20, 88);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(current || "No answer provided.", 170), 20, 96);

    doc.setFontSize(13);
    doc.text("Goal / Desired Outcome", 20, 128);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(goal || "No answer provided.", 170), 20, 136);

    doc.setFontSize(13);
    doc.text("Action Step", 20, 168);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(action || "No answer provided.", 170), 20, 176);

    doc.setFontSize(13);
    doc.text("Notes", 20, 208);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(notes || "No notes provided.", 170), 20, 216);

    doc.setFontSize(9);
    doc.text("Purity OS Beta • Completed Worksheet", 20, 285);

    doc.save(`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-completed.pdf`);
  }

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href={back} className="text-sm text-[#7C6853]">
        Back
      </Link>

      <section className="mx-auto max-w-5xl py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B29571]">
              Interactive Worksheet
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              {title}
            </h1>

            <p className="mt-4 text-[#7C6853]">
              Fill this out inside Purity OS. Your answers autosave in this browser.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm text-[#7C6853]">Worksheet Progress</p>
            <h2 className="mt-2 font-serif text-4xl">{progress}%</h2>
            <div className="mt-4 h-3 rounded-full bg-white/70">
              <div className="h-3 rounded-full bg-[#1F1C1A]" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-xs text-[#7C6853]">
              Last saved: {savedAt || "Not saved yet"}
            </p>
          </div>
        </div>

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

          <label className="flex items-center gap-3 rounded-2xl bg-[#F4F0EA] p-4 text-sm">
            <input
              type="checkbox"
              checked={complete}
              onChange={(e) => setComplete(e.target.checked)}
            />
            Mark this worksheet complete
          </label>

          <div className="grid gap-3 md:grid-cols-2">
            <button
              onClick={downloadPDF}
              className="rounded-full bg-[#1F1C1A] px-8 py-4 text-sm text-[#F4F0EA]"
            >
              Download Completed PDF
            </button>

            <Link
              href={back}
              className="rounded-full bg-white px-8 py-4 text-center text-sm shadow-sm"
            >
              Back
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default function WorksheetResourcePage() {
  return (
    <Suspense fallback={<main className="min-h-screen p-8">Loading...</main>}>
      <WorksheetResourceContent />
    </Suspense>
  );
}
