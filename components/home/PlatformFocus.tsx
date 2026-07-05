import { siteLinks } from "./siteLinks";

export default function PlatformFocus() {
  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
          The Purity Platform
        </span>

        <h2 className="font-serif mx-auto mb-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          One path for clarity, growth, and execution.
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-sm font-light leading-relaxed text-[#827E76] md:text-base">
          Start with the Get To The F framework, continue through mentoring and courses, then use business systems when you are ready to scale.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={siteLinks.getToTheF} className="rounded-full bg-[#1C1B1A] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
            Learn Get To The F
          </a>

          <a href={siteLinks.mentoring} className="rounded-full border border-[#EBE8E2] bg-white/70 px-8 py-4 text-sm font-medium tracking-wide text-[#1C1B1A] transition hover:border-[#C8B49C]">
            Book Mentoring
          </a>

          <a href={siteLinks.bookingDemo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#C8B49C] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#B5A189]">
            View Booking Demo
          </a>
        </div>
      </div>
    </section>
  );
}
