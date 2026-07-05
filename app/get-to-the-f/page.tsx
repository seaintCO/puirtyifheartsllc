export default function GetToTheFPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF9] text-[#1C1B1A]">
      <nav className="fixed top-0 z-50 w-full border-b border-white/50 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 md:px-12">
          <a href="/" className="font-serif text-xl font-medium uppercase tracking-tight">
            Purity of Heart
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="/booking" className="hidden text-[#827E76] hover:text-[#1C1B1A] md:block">Booking</a>
            <a href="/courses" className="hidden text-[#827E76] hover:text-[#1C1B1A] md:block">Courses</a>
            <a href="/login" className="rounded-full border border-[#EBE8E2] px-5 py-2 hover:border-[#C8B49C]">Login</a>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-40 text-center md:px-12">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
          The Purity Framework
        </span>

        <h1 className="font-serif mx-auto mb-8 max-w-5xl text-6xl font-medium leading-[1.05] tracking-tight md:text-8xl">
          Get To The F.
        </h1>

        <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-[#827E76] md:text-lg">
          Get to the point. Burn the boats. Build the life and business God placed in your hands.
        </p>
      </section>

      <section className="mx-auto grid max-w-screen-2xl gap-8 px-6 pb-24 md:grid-cols-3 md:px-12">
        <div className="rounded-3xl border border-[#EBE8E2] bg-white p-8">
          <h2 className="font-serif mb-4 text-3xl font-medium">Get to the point.</h2>
          <p className="text-sm font-light leading-relaxed text-[#827E76]">
            Stop circling the same ideas, excuses, and distractions. Get clear on what matters, what needs to change, and what step has to happen next.
          </p>
        </div>

        <div className="rounded-3xl border border-[#EBE8E2] bg-white p-8">
          <h2 className="font-serif mb-4 text-3xl font-medium">Burn the boats.</h2>
          <p className="text-sm font-light leading-relaxed text-[#827E76]">
            Make the decision that there is no going back to the old version of you. Commit to the calling, the discipline, and the structure required to grow.
          </p>
        </div>

        <div className="rounded-3xl border border-[#EBE8E2] bg-white p-8">
          <h2 className="font-serif mb-4 text-3xl font-medium">Move with faith.</h2>
          <p className="text-sm font-light leading-relaxed text-[#827E76]">
            Build from faith, not fear. Purity of Heart helps people and businesses create habits, systems, courses, workshops, and offers with intention.
          </p>
        </div>
      </section>

      <section className="bg-[#F3F1ED] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-[#1C1B1A] p-10 text-white">
            <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
              About Susan
            </span>

            <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight">
              The heart behind Purity of Heart.
            </h2>

            <p className="text-sm font-light leading-relaxed text-white/60">
              Susan created Purity of Heart to help people live with more clarity, purpose, faith, and structure. Her heart is to guide individuals and business owners toward intentional decisions, healthier habits, stronger foundations, and practical systems that help them move forward.
            </p>
          </div>

          <div>
            <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
              What It Means
            </span>

            <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight md:text-6xl">
              It is not just a phrase. It is a decision.
            </h2>

            <div className="space-y-5 text-sm font-light leading-relaxed text-[#827E76] md:text-base">
              <p>
                Get To The F means getting honest, getting focused, and getting to the point. It is about removing confusion and deciding what the next right step is.
              </p>

              <p>
                It also means burn the boats. Once you know the direction, you stop keeping backup plans that pull you back into fear, delay, or inconsistency.
              </p>

              <p>
                Inside Purity of Heart, this framework supports both personal growth and business growth through mentoring, courses, seminars, resources, and systems.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/booking" className="rounded-full bg-[#1C1B1A] px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
                Book Mentoring
              </a>

              <a href="https://puirtyofheartsdemo.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#C8B49C] px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:bg-[#B5A189]">
                See Booking System Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
