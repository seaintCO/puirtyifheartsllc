import { siteLinks } from "./siteLinks";

export default function HomeNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/50 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 md:px-12">
        <div className="hidden items-center gap-8 text-sm font-medium text-[#827E76] md:flex">
          <a href={siteLinks.shop} className="hover:text-[#1C1B1A]">Shop</a>
          <a href={siteLinks.courses} className="hover:text-[#1C1B1A]">Courses</a>
          <a href={siteLinks.workshops} className="hover:text-[#1C1B1A]">Workshops</a>
          <a href={siteLinks.mentoring} className="hover:text-[#1C1B1A]">Mentoring</a>
          <a href={siteLinks.getToTheF} className="hover:text-[#1C1B1A]">Get To The F</a>
        </div>

        <a href={siteLinks.home} className="font-serif absolute left-1/2 -translate-x-1/2 text-xl font-medium uppercase tracking-tight">
          Purity of Heart
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-[#827E76]">
          <a href={siteLinks.resources} className="hidden hover:text-[#1C1B1A] md:block">Resources</a>
          <a href={siteLinks.about} className="hidden hover:text-[#1C1B1A] md:block">About</a>
          <a href={siteLinks.login} className="rounded-full border border-[#EBE8E2] px-5 py-2 text-[#1C1B1A] hover:border-[#C8B49C]">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
