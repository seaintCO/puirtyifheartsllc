export default function NewsletterSection() {
  return (
    <section id="newsletter" className="bg-[#1C1B1A] px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight">Join the Purity Community</h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-white/60">
            Receive wellness tips, faith encouragement, product launches, workshop updates, and downloadable resources.
          </p>
        </div>

        <form className="space-y-4">
          <input placeholder="First name" className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C8B49C]" />
          <input type="email" placeholder="Email address" className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C8B49C]" />
          <button className="w-full rounded-full bg-[#C8B49C] px-8 py-4 text-sm font-medium text-white hover:bg-[#B5A189]">
            Join Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
