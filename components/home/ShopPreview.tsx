const products = [
  ["Aura Red Light Panel", "Cellular rejuvenation", "$349", "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop"],
  ["Restorative Bath Salts", "Magnesium & Lavender", "$42", "https://images.unsplash.com/photo-1608248593842-8021b619e075?q=80&w=600&auto=format&fit=crop"],
  ["Morning Ritual Matcha", "Ceremonial grade", "$58", "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop"],
  ["Linen Dog Bed", "Orthopedic comfort", "$185", "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"],
];

export default function ShopPreview() {
  return (
    <section className="bg-[#F3F1ED] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="font-serif mb-4 text-4xl font-medium tracking-tight md:text-5xl">Curated Collection</h2>
            <p className="max-w-md font-light text-[#827E76]">Intentional products sourced for your daily rituals.</p>
          </div>
          <a href="/shop" className="hidden border-b border-[#1C1B1A] pb-1 text-sm font-medium hover:border-[#C8B49C] hover:text-[#C8B49C] md:block">
            Shop All →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(([name, desc, price, img]) => (
            <a key={name} href="/shop" className="group block">
              <div className="mb-6 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-[#FCFBF9] p-8 transition group-hover:shadow-[0_25px_60px_rgba(0,0,0,.07)]">
                <img src={img} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between px-2">
                <div>
                  <h3 className="font-medium tracking-tight">{name}</h3>
                  <p className="text-xs text-[#827E76]">{desc}</p>
                </div>
                <span className="text-sm font-medium">{price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
