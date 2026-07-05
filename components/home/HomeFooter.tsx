export default function HomeFooter() {
  return (
    <footer className="bg-[#1C1B1A] px-6 pb-12 pt-16 text-white md:px-12">
      <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-8 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
        <p>© 2026 Purity of Heart. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
