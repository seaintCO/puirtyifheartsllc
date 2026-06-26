import Link from "next/link";
import { academyModules, comingSoon } from "../academy-data";

export default function Dashboard() {
  const totalModules = academyModules.length;
  const totalLessons = academyModules.reduce((sum, item) => sum + item.lessons.length, 0);
  const totalPdfs = academyModules.reduce((sum, item) => sum + item.pdfs.length, 0);

  return (
    <main className="min-h-screen marble-bg text-[#1F1C1A]">
      <div className="grid md:grid-cols-[280px_1fr]">
        <aside className="hidden min-h-screen border-r border-white/40 bg-white/50 p-6 backdrop-blur-xl md:block">
          <h1 className="font-serif text-3xl">Purity OS</h1>
          <p className="mt-2 text-sm text-[#7C6853]">Beta Dashboard</p>

          <nav className="mt-10 space-y-2">
            {[
              ["Home", "/"],
              ["Dashboard", "/dashboard"],
              ["Courses", "/courses"],
              ["Resources", "/resources"],
              ["Journal", "/journal"],
              ["Events", "/events"],
              ["Shop", "/shop"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="block rounded-2xl px-4 py-3 text-sm hover:bg-[#F4F0EA]">
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="p-5 md:p-10">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#B29571]">Welcome Back</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">Your Progress Dashboard</h2>
              <p className="mt-3 text-[#7C6853]">
                Resume your course, track progress, access resources, and keep building.
              </p>
            </div>

            <Link href="/courses" className="rounded-full bg-[#1F1C1A] px-6 py-4 text-center text-sm text-[#F4F0EA]">
              Open Course Library
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Courses", "2"],
              ["Modules", totalModules],
              ["Lessons", totalLessons],
              ["PDFs", totalPdfs],
            ].map(([label, value]) => (
              <div key={label} className="glass-card rounded-[2rem] p-6">
                <p className="text-sm text-[#7C6853]">{label}</p>
                <h3 className="mt-2 font-serif text-4xl">{value}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-8">
              <div className="rounded-[2rem] bg-[#1F1C1A] p-8 text-[#F4F0EA]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                  Resume Course
                </p>
                <h3 className="mt-3 font-serif text-4xl">Assistant University</h3>
                <p className="mt-3 text-white/55">
                  Continue with Week #2 — Education, Orientation, onboarding, and curriculum.
                </p>
                <div className="mt-6 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[45%] rounded-full bg-[#C8A46B]" />
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/courses" className="rounded-full bg-[#F4F0EA] px-6 py-4 text-center text-sm text-[#1F1C1A]">
                    Resume Course
                  </Link>
                  <Link href="/resources" className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm">
                    Open Resources
                  </Link>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">
                  My Products
                </p>

                <div className="mt-5 grid gap-5">
                  {[
                    ["Blueprint to Building Your Business", "Business Coaching Academy", "/courses"],
                    ["Assistant University", "Assistant program, education, coaching, and scaling.", "/courses"],
                  ].map(([title, description, href]) => (
                    <Link key={title} href={href} className="rounded-2xl bg-white/80 p-5 shadow-sm">
                      <h3 className="font-serif text-3xl">{title}</h3>
                      <p className="mt-2 text-sm text-[#7C6853]">{description}</p>
                      <p className="mt-5 text-sm font-medium">Access Here →</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B29571]">
                  Daily Mental Journal
                </p>
                <h3 className="mt-3 font-serif text-3xl">Clear your mind before you build.</h3>
                <p className="mt-3 text-sm leading-6 text-[#7C6853]">
                  Fill out your daily journal and download it as a PDF.
                </p>
                <Link href="/journal" className="mt-6 block rounded-full bg-[#1F1C1A] px-6 py-4 text-center text-sm text-[#F4F0EA]">
                  Open Journal
                </Link>
              </div>

              <div className="rounded-[2rem] bg-[#1F1C1A] p-6 text-[#F4F0EA]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                  Available
                </p>
                <h3 className="mt-3 font-serif text-3xl">On-Site Visits</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Strategy visits available for business owners who want in-person implementation.
                </p>
                <Link href="/events" className="mt-6 block rounded-full bg-[#F4F0EA] px-6 py-4 text-center text-sm text-[#1F1C1A]">
                  View Events
                </Link>
              </div>

              <div className="glass-card rounded-[2rem] p-6">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#B29571]">
                  Coming Soon
                </p>
                <div className="space-y-3">
                  {comingSoon.slice(0, 5).map((item) => (
                    <div key={item} className="rounded-2xl bg-white/75 p-4 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
