"use client";

import { useMemo, useState } from "react";
import { shopCategories, shopProducts } from "./shopProducts";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return shopProducts;
    return shopProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto max-w-screen-2xl px-6 py-16 md:px-12">
      <div className="sticky top-20 z-30 mb-12 rounded-[2rem] border border-[#EBE8E2] bg-white/80 p-3 backdrop-blur-2xl">
        <div className="flex gap-2 overflow-x-auto">
          {shopCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "whitespace-nowrap rounded-full bg-[#1C1B1A] px-5 py-3 text-xs font-medium text-white"
                  : "whitespace-nowrap rounded-full px-5 py-3 text-xs font-medium text-[#827E76] transition hover:bg-[#F3F1ED] hover:text-[#1C1B1A]"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.25em] text-[#C8B49C]">
            {activeCategory === "All" ? "All Products" : activeCategory}
          </span>
          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Curated essentials
          </h2>
        </div>

        <p className="text-sm text-[#827E76]">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <article key={product.name} className="group overflow-hidden rounded-[2rem] border border-[#EBE8E2] bg-white transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,.08)]">
            <div className="relative aspect-[4/4.5] overflow-hidden bg-[#F3F1ED]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[11px] font-medium text-[#1C1B1A] backdrop-blur-xl">
                {product.category}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl font-medium tracking-tight">{product.name}</h3>
                <span className="text-sm font-medium">{product.price}</span>
              </div>

              <p className="mb-6 text-sm font-light leading-relaxed text-[#827E76]">
                {product.description}
              </p>

              <button className="w-full rounded-full bg-[#1C1B1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]">
                View Product
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
