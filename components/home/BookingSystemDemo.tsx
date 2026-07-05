import { siteLinks } from "./siteLinks";

export default function BookingSystemDemo() {
  return (
    <section className="bg-[#F3F1ED] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
            Business Growth Tool
          </span>

          <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight md:text-6xl">
            A booking system for students ready to scale.
          </h2>

          <p className="mb-8 max-w-xl text-sm font-light leading-relaxed text-[#827E76] md:text-base">
            After the course, students who want to build a service-based business can view the booking system demo and upgrade into a professional client booking experience.
          </p>

          <a href={siteLinks.bookingDemo} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[#1C1B1A] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
            View Booking System Demo
          </a>
        </div>

        <div className="rounded-[2rem] border border-[#EBE8E2] bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,.06)]">
          <div className="rounded-[1.5rem] bg-[#FCFBF9] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#C8B49C]">Demo Preview</p>
            <h3 className="font-serif mb-6 text-3xl font-medium">Booking System</h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#EBE8E2] bg-white p-5">
                <p className="text-sm font-medium">Discovery Call</p>
                <p className="mt-1 text-xs text-[#827E76]">30 min • Online booking</p>
              </div>

              <div className="rounded-2xl border border-[#EBE8E2] bg-white p-5">
                <p className="text-sm font-medium">Consultation</p>
                <p className="mt-1 text-xs text-[#827E76]">60 min • Lead capture</p>
              </div>

              <div className="rounded-2xl bg-[#1C1B1A] p-5 text-white">
                <p className="text-sm font-medium">Professional client experience</p>
                <p className="mt-1 text-xs text-white/50">Built for students ready to sell services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
