import HomeNav from "@/components/home/HomeNav";
import ProductGrid from "@/components/shop/ProductGrid";
import HomeFooter from "@/components/home/HomeFooter";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF9] text-[#1C1B1A]">
      <HomeNav />

      <section className="relative overflow-hidden px-6 pb-16 pt-40 text-center md:px-12">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8B49C]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
            Purity Store
          </span>

          <h1 className="font-serif mb-6 text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Shop with intention.
          </h1>

          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-[#827E76] md:text-lg">
            Red light therapy, supplements, dog accessories, memorial keepsakes, jewelry, and digital essentials in one clean shop.
          </p>
        </div>
      </section>

      <ProductGrid />

      <HomeFooter />
    </main>
  );
}
