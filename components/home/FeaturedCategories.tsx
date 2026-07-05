import { siteLinks } from "./siteLinks";

export default function FeaturedCategories() {
  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-5 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
          Wellness Shop
        </span>

        <h2 className="font-serif mb-6 text-4xl font-medium tracking-tight md:text-6xl">
          Curated products for intentional living.
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-sm font-light leading-relaxed text-[#827E76] md:text-base">
          The shop supports the lifestyle side of the brand with red light therapy, wellness tools, and dog accessories.
        </p>

        <a href={siteLinks.shop} className="inline-flex rounded-full bg-[#C8B49C] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[#B5A189]">
          Visit Shop
        </a>
      </div>
    </section>
  );
}
