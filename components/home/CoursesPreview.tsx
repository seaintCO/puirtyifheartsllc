import { siteLinks } from "./siteLinks";

export default function CoursesPreview() {
  return (
    <section className="bg-[#F3F1ED] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
            Courses & Resources
          </span>

          <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight md:text-6xl">
            Learn the framework. Apply it with support.
          </h2>

          <p className="mb-10 max-w-xl text-sm font-light leading-relaxed text-[#827E76] md:text-base">
            The course side of Purity of Heart gives students simple lessons, PDFs, worksheets, and guided resources to help them take action without feeling overwhelmed.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={siteLinks.courses} className="rounded-full bg-[#1C1B1A] px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
              View Courses
            </a>
            <a href={siteLinks.resources} className="rounded-full border border-[#EBE8E2] bg-white/70 px-8 py-4 text-center text-sm font-medium tracking-wide text-[#1C1B1A] transition hover:border-[#C8B49C]">
              Free Resources
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#EBE8E2] bg-white p-10">
          <div className="border-b border-[#EBE8E2] pb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#C8B49C]">Inside the platform</p>
            <h3 className="font-serif text-3xl font-medium">Lessons, PDFs, workshops, and mentoring.</h3>
          </div>

          <div className="space-y-5 pt-6 text-sm font-light text-[#827E76]">
            <p>• Get To The F framework</p>
            <p>• Business foundation lessons</p>
            <p>• Downloadable PDFs and worksheets</p>
            <p>• Live seminars and private mentoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
