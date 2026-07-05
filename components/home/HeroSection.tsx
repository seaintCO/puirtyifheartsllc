import { siteLinks } from "./siteLinks";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <div className="absolute inset-0 bg-[#FCFBF9]">
        <img src="https://images.unsplash.com/photo-1618604440667-2c9ebf66bf22?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCFBF9]/75 to-[#FCFBF9]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
          Mentoring • Courses • Business Systems
        </span>

        <h1 className="font-serif mb-8 text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Get To The F.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-[#827E76] md:text-lg">
          Faith-led mentoring, courses, and systems for people and businesses ready to move with intention.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a href={siteLinks.getToTheF} className="w-full rounded-full bg-[#1C1B1A] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#333] sm:w-auto">
            Get To The F
          </a>
          <a href={siteLinks.mentoring} className="w-full rounded-full bg-[#C8B49C] px-8 py-4 text-sm font-medium tracking-wide text-white shadow-[0_15px_35px_rgba(200,180,156,.35)] transition hover:bg-[#B5A189] sm:w-auto">
            Book Mentoring
          </a>
          <a href={siteLinks.login} className="w-full rounded-full border border-[#EBE8E2] bg-white/60 px-8 py-4 text-sm font-medium tracking-wide text-[#1C1B1A] backdrop-blur-xl transition hover:bg-white sm:w-auto">
            Course Login
          </a>
        </div>
      </div>
    </section>
  );
}
