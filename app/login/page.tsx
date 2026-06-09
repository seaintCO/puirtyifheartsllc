import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fcfbf8] px-6 text-[#2a2421]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">Purity Academy</p>
        <h1 className="font-serif text-4xl">Member Login</h1>
        <p className="mt-3 text-sm text-black/50">Demo login screen for course buyers.</p>

        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none" placeholder="Email address" />
          <input className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none" placeholder="Password" type="password" />
        </div>

        <Link href="/dashboard" className="mt-6 block rounded-full bg-[#2a2421] px-6 py-4 text-center text-sm text-white">
          Login To Portal
        </Link>

        <Link href="/" className="mt-4 block text-center text-sm text-black/50">
          Back to website
        </Link>
      </div>
    </main>
  );
}
