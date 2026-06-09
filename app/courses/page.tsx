import Link from "next/link";
import { courses } from "../data";

export default function Courses() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] p-6 text-[#2a2421] md:p-12">
      <Link href="/dashboard" className="text-sm text-black/50">Back to dashboard</Link>
      <h1 className="mt-6 font-serif text-5xl">My Courses</h1>
      <p className="mt-3 text-black/60">Video modules inside the Purity Academy.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-[#f6ebe4]">
              Video Player Placeholder
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#c9a46d]">{course.module}</p>
            <h2 className="mt-2 font-serif text-3xl">{course.title}</h2>
            <p className="mt-3 text-black/60">{course.description}</p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-3 rounded-full bg-[#f6ebe4]">
                <div className="h-3 rounded-full bg-[#2a2421]" style={{ width: `${course.progress}%` }} />
              </div>
            </div>

            <button className="mt-6 rounded-full bg-[#2a2421] px-6 py-3 text-sm text-white">
              Continue Course
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
