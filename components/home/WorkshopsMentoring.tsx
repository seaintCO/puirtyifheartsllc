import { siteLinks } from "./siteLinks";

export default function WorkshopsMentoring() {
  return (
    <section className="grid grid-cols-1 border-y border-[#EBE8E2] lg:grid-cols-2">
      <div className="px-6 py-24 md:px-12 lg:px-20">
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#C8B49C]">Live Events</span>
        <h2 className="font-serif mb-12 text-4xl font-medium tracking-tight">Workshops & Seminars</h2>

        {[
          ["Next Seminar", "Introduction to Light Therapy", "Virtual • Reserve your seat"],
          ["Live Workshop", "Intentional Home Reset", "Virtual • Wellness + faith"],
          ["Community Class", "Holistic Pet Wellness", "Virtual • Join waitlist"],
        ].map(([date, title, meta]) => (
          <a key={title} href={siteLinks.workshops} className="group flex flex-col justify-between gap-4 border-b border-[#EBE8E2] py-6 sm:flex-row sm:items-center">
            <div className="flex gap-8">
              <div className="min-w-[110px] text-sm font-medium text-[#827E76]">{date}</div>
              <div>
                <h4 className="text-lg font-medium group-hover:text-[#C8B49C]">{title}</h4>
                <p className="mt-1 text-xs text-[#827E76]">{meta}</p>
              </div>
            </div>
            <span className="rounded-full border border-[#EBE8E2] px-5 py-2 text-xs font-medium group-hover:border-[#C8B49C] group-hover:bg-[#C8B49C] group-hover:text-white">
              Reserve
            </span>
          </a>
        ))}
      </div>

      <div className="bg-[#F3F1ED] px-6 py-24 md:px-12 lg:px-20">
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#C8B49C]">1-on-1 Guidance</span>
        <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight">Private Mentoring</h2>
        <p className="mb-12 max-w-md text-sm font-light text-[#827E76]">
          A guided experience for individuals and businesses who want clarity, structure, faith, and growth.
        </p>
        <a href={siteLinks.mentoring} className="inline-flex rounded-full bg-[#1C1B1A] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
          See Booking Page
        </a>
      </div>
    </section>
  );
}
