"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { academyModules } from "../academy-data";

export default function Courses() {
  const academies = Array.from(new Set(academyModules.map((item) => item.academy)));
  const [activeAcademy, setActiveAcademy] = useState(academies[0]);
  const [selectedModule, setSelectedModule] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, boolean>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const modules = useMemo(
    () => academyModules.filter((item) => item.academy === activeAcademy),
    [activeAcademy]
  );

  const module = modules[selectedModule] || modules[0];

  const quizKey = `${activeAcademy}-${module?.title}`;
  const answeredCount = module?.quiz.filter((question) => quizAnswers[`${quizKey}-${question}`]).length || 0;
  const quizScore = module?.quiz.length ? Math.round((answeredCount / module.quiz.length) * 100) : 0;
  const quizPassed = quizScore >= 80;

  const totalLessons = modules.reduce((sum, item) => sum + item.lessons.length, 0);
  const completedLessons = completed.filter((id) => id.startsWith(activeAcademy)).length;
  const progress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  function toggleLesson(lesson: string) {
    const id = `${activeAcademy}-${module.title}-${lesson}`;
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function isComplete(lesson: string) {
    return completed.includes(`${activeAcademy}-${module.title}-${lesson}`);
  }

  return (
    <main className="min-h-screen marble-bg p-6 text-[#1F1C1A] md:p-12">
      <Link href="/dashboard" className="text-sm text-[#7C6853]">
        Back to dashboard
      </Link>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5">
          <div className="w-full max-w-5xl rounded-[2rem] bg-[#1F1C1A] p-5 text-[#F4F0EA]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                  Lesson Preview
                </p>
                <h2 className="mt-2 font-serif text-3xl">{activeVideo}</h2>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-full bg-white/10 px-5 py-3 text-sm"
              >
                Close
              </button>
            </div>

            <div className="flex aspect-video items-center justify-center rounded-[1.5rem] bg-black">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C8A46B]">
                  Video Placeholder
                </p>
                <h3 className="mt-3 font-serif text-5xl">{activeVideo}</h3>
                <p className="mt-4 text-sm text-white/45">
                  Replace this placeholder with your real lesson video embed later.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#B29571]">
              Course Library
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Choose your academy.
            </h1>
            <p className="mt-5 max-w-2xl text-[#7C6853]">
              Watch lessons, track completion, open worksheets, and download your completed resources.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-5 md:w-72">
            <p className="text-sm text-[#7C6853]">Course Progress</p>
            <h2 className="mt-2 font-serif text-4xl">{progress}%</h2>
            <div className="mt-4 h-3 rounded-full bg-white/70">
              <div className="h-3 rounded-full bg-[#1F1C1A]" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {academies.map((academy) => (
            <button
              key={academy}
              onClick={() => {
                setActiveAcademy(academy);
                setSelectedModule(0);
                setQuizSubmitted(false);
              }}
              className={`rounded-[2rem] p-6 text-left ${
                activeAcademy === academy
                  ? "bg-[#1F1C1A] text-[#F4F0EA]"
                  : "glass-card"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.25em] opacity-60">Academy</p>
              <h2 className="mt-3 font-serif text-4xl">{academy}</h2>
              <p className="mt-3 text-sm opacity-70">
                {academyModules.filter((item) => item.academy === academy).length} modules
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
          <aside className="glass-card rounded-[2rem] p-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B29571]">
              Modules
            </p>

            <div className="space-y-3">
              {modules.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setSelectedModule(index);
                    setQuizSubmitted(false);
                  }}
                  className={`w-full rounded-2xl p-4 text-left text-sm ${
                    selectedModule === index
                      ? "bg-[#1F1C1A] text-[#F4F0EA]"
                      : "bg-white/75"
                  }`}
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-xs opacity-60">
                    {item.lessons.length} lessons • {item.pdfs.length} worksheets
                  </p>
                </button>
              ))}
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] bg-[#1F1C1A] p-6 text-[#F4F0EA]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                {activeAcademy}
              </p>
              <h2 className="mt-3 font-serif text-4xl">{module.title}</h2>
              <p className="mt-3 text-white/55">
                Complete lessons, then open worksheets connected to this module.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="glass-card rounded-[2rem] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B29571]">
                  Video Lessons
                </p>

                <div className="space-y-4">
                  {module.lessons.map((lesson, index) => (
                    <div key={lesson} className="rounded-2xl bg-white/75 p-4">
                      <button
                        onClick={() => setActiveVideo(lesson)}
                        className="flex aspect-video w-full items-center justify-center rounded-xl bg-[#1F1C1A] text-[#F4F0EA]"
                      >
                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                            Lesson {index + 1}
                          </p>
                          <h3 className="mt-2 font-serif text-2xl">{lesson}</h3>
                          <p className="mt-2 text-xs text-white/45">
                            Click to open full lesson view
                          </p>
                        </div>
                      </button>

                      <button
                        onClick={() => toggleLesson(lesson)}
                        className={`mt-4 w-full rounded-full px-5 py-3 text-sm ${
                          isComplete(lesson)
                            ? "bg-[#B29571] text-white"
                            : "bg-[#1F1C1A] text-[#F4F0EA]"
                        }`}
                      >
                        {isComplete(lesson) ? "Completed" : "Mark Complete"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card rounded-[2rem] p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B29571]">
                    Interactive Worksheets
                  </p>

                  <div className="space-y-3">
                    {module.pdfs.map((pdf) => (
                      <Link
                        key={pdf}
                        href={`/resources/worksheet?title=${encodeURIComponent(pdf)}&module=${encodeURIComponent(module.title)}&academy=${encodeURIComponent(activeAcademy)}&back=/courses`}
                        className="block rounded-2xl bg-white/75 p-4 text-sm hover:bg-white"
                      >
                        {pdf} →
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-[2rem] p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B29571]">
                    Quiz
                  </p>

                  <div className="space-y-3">
                    {module.quiz.map((question) => {
                      const id = `${quizKey}-${question}`;
                      const checked = !!quizAnswers[id];

                      return (
                        <label
                          key={question}
                          className={`block rounded-2xl p-4 text-sm ${
                            quizSubmitted && checked
                              ? "bg-[#B29571] text-white"
                              : "bg-white/75"
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="mr-3"
                            checked={checked}
                            onChange={(e) =>
                              setQuizAnswers((current) => ({
                                ...current,
                                [id]: e.target.checked,
                              }))
                            }
                          />
                          {question}
                        </label>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="mt-5 w-full rounded-full bg-[#1F1C1A] px-6 py-4 text-sm text-[#F4F0EA]"
                  >
                    Grade Quiz
                  </button>

                  {quizSubmitted && (
                    <div
                      className={`mt-5 rounded-2xl p-5 ${
                        quizPassed ? "bg-[#B29571] text-white" : "bg-[#F4F0EA] text-[#1F1C1A]"
                      }`}
                    >
                      <p className="text-sm uppercase tracking-[0.2em] opacity-70">
                        Quiz Score
                      </p>
                      <h3 className="mt-2 font-serif text-4xl">{quizScore}%</h3>
                      <p className="mt-2 text-sm">
                        {quizPassed
                          ? "Passed. Great job — you can move to the next module."
                          : "Keep going. Score 80% or higher to pass this module."}
                      </p>
                    </div>
                  )}
                </div>

                <div className="rounded-[2rem] bg-[#1F1C1A] p-6 text-[#F4F0EA]">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C8A46B]">
                    Next Step
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">Complete this module</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    Watch the lessons, complete the quiz, and fill out your worksheets to build your business binder.
                  </p>
                  <Link href="/resources" className="mt-6 block rounded-full bg-[#F4F0EA] px-6 py-4 text-center text-sm text-[#1F1C1A]">
                    Open Resource Vault
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

