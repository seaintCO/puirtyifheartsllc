"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { academyModules } from "../academy-data";

export default function Resources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const resources = academyModules.flatMap((module) =>
    module.pdfs.map((pdf) => ({
      title: pdf,
      module: module.title,
      academy: module.academy,
    }))
  );

  const categories = ["All", ...Array.from(new Set(resources.map((item) => item.academy)))];

  const filtered = useMemo(() => {
    return resources.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.module.toLowerCase().includes(query.toLowerCase()) ||
        item.academy.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = category === "All" || item.academy === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category, resources]);

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href="/dashboard" className="text-sm text-[#7C6853]">
        Back to dashboard
      </Link>

      <section className="mx-auto max-w-7xl">
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#B29571]">
              Interactive Resource Vault
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Worksheets, templates, and business tools.
            </h1>
            <p className="mt-5 max-w-2xl text-[#7C6853]">
              Fill out each worksheet inside Purity OS, save your progress, and download your completed version as a PDF.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-5 md:w-80">
            <p className="text-sm text-[#7C6853]">Available Worksheets</p>
            <h2 className="mt-2 font-serif text-4xl">{resources.length}</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search worksheets..."
            className="rounded-full border border-black/10 bg-white/80 px-6 py-4 outline-none"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-3 text-sm ${
                  category === item
                    ? "bg-[#1F1C1A] text-[#F4F0EA]"
                    : "bg-white/75 text-[#1F1C1A]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <div key={`${item.module}-${item.title}`} className="glass-card rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">
                {item.academy}
              </p>

              <h2 className="mt-3 font-serif text-3xl">{item.title}</h2>

              <p className="mt-2 text-sm text-[#7C6853]">
                {item.module}
              </p>

              <div className="mt-6">
                <Link
                  href={`/resources/worksheet?title=${encodeURIComponent(item.title)}&module=${encodeURIComponent(item.module)}&academy=${encodeURIComponent(item.academy)}`}
                  className="block rounded-full bg-[#1F1C1A] px-6 py-4 text-center text-sm text-[#F4F0EA]"
                >
                  Continue Worksheet
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-[2rem] bg-white/75 p-10 text-center">
            <h2 className="font-serif text-3xl">No worksheets found.</h2>
            <p className="mt-3 text-[#7C6853]">Try another search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
