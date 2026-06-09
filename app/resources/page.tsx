import Link from "next/link";
import { resources } from "../data";

export default function Resources() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] p-6 text-[#2a2421] md:p-12">
      <Link href="/dashboard" className="text-sm text-black/50">Back to dashboard</Link>
      <h1 className="mt-6 font-serif text-5xl">Resource Vault</h1>
      <p className="mt-3 text-black/60">PDFs, worksheets, planners, and business tools.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {resources.map((file) => (
          <div key={file} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f6ebe4]">
              PDF
            </div>
            <h2 className="font-serif text-2xl">{file}</h2>
            <p className="mt-2 text-sm text-black/50">Downloadable resource</p>
            <button className="mt-6 rounded-full bg-[#2a2421] px-6 py-3 text-sm text-white">
              Download
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
