import { siteLinks } from "./siteLinks";

export default function GetToTheFSection() {
  const steps = [
    ["Get Clear", "Get to the point and identify the real next step."],
    ["Burn the Boats", "Remove the fallback plan that keeps you stuck."],
    ["Build With Intention", "Use faith, structure, and systems to move forward."],
  ];

  return (
    <section className="bg-[#1C1B1A] px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
            Get To The F
          </span>

          <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight md:text-6xl">
            Get to the point. Burn the boats.
          </h2>

          <p className="max-w-xl text-sm font-light leading-relaxed text-white/60 md:text-base">
            The Purity framework for individuals and business owners ready to stop circling and start building with focus.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={siteLinks.getToTheF} className="rounded-full bg-[#C8B49C] px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:bg-[#B5A189]">
              Learn More
            </a>
            <a href={siteLinks.mentoring} className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:bg-white hover:text-[#1C1B1A]">
              Book Mentoring
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          {steps.map(([title, desc], index) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#C8B49C] text-sm font-medium text-white">
                {index + 1}
              </div>
              <h3 className="font-serif mb-3 text-3xl font-medium">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
