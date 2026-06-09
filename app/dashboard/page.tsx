import Link from "next/link";
import { bookings, courses, resources } from "../data";

export default function Dashboard() {
  const completed = courses.reduce((sum, item) => sum + item.progress, 0) / courses.length;

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#2a2421]">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-black/5 bg-white p-6 md:block">
          <h1 className="font-serif text-3xl">Purity Academy</h1>
          <p className="mt-2 text-sm text-black/50">Member Portal Demo</p>

          <nav className="mt-10 space-y-2">
            {[
              ["Dashboard", "/dashboard"],
              ["Courses", "/courses"],
              ["Resources", "/resources"],
              ["Bookings", "/bookings"],
              ["Website", "/"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="block rounded-2xl px-4 py-3 text-sm hover:bg-[#f6ebe4]">
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6 md:p-12">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">Welcome Back</p>
              <h2 className="font-serif text-4xl">Sarah's Portal</h2>
            </div>
            <Link href="/login" className="rounded-full bg-[#2a2421] px-5 py-3 text-sm text-white">
              Logout
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-black/50">Progress</p>
              <h3 className="mt-2 text-3xl font-light">{Math.round(completed)}%</h3>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-black/50">Courses</p>
              <h3 className="mt-2 text-3xl font-light">{courses.length}</h3>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-black/50">Resources</p>
              <h3 className="mt-2 text-3xl font-light">{resources.length}</h3>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-black/50">Calls</p>
              <h3 className="mt-2 text-3xl font-light">{bookings.length}</h3>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c9a46d]">Continue Learning</p>
              <h3 className="mt-4 font-serif text-3xl">Get TO The F Module 3</h3>
              <p className="mt-3 text-black/60">Continue your journey through faith, focus, feminine power, and freedom.</p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {courses.slice(0, 2).map((course) => (
                  <Link href="/courses" key={course.title} className="rounded-3xl bg-[#fcfbf8] p-5">
                    <div className="mb-5 flex aspect-video items-center justify-center rounded-2xl bg-[#f6ebe4]">
                      Play Lesson
                    </div>
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="mt-1 text-sm text-black/50">{course.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl bg-[#2a2421] p-8 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c9a46d]">Up Next</p>
                <h3 className="mt-4 font-serif text-3xl">{bookings[0].title}</h3>
                <p className="mt-3 text-white/60">{bookings[0].date} at {bookings[0].time}</p>
                <Link href="/bookings" className="mt-8 block rounded-full bg-white px-6 py-4 text-center text-sm text-[#2a2421]">
                  View Schedule
                </Link>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl">Recent Resources</h3>
                <div className="mt-6 space-y-4">
                  {resources.slice(0, 3).map((file) => (
                    <Link href="/resources" key={file} className="block rounded-2xl bg-[#fcfbf8] p-4">
                      <p className="text-sm font-medium">{file}</p>
                      <p className="text-xs text-black/50">PDF Download</p>
                    </Link>
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
