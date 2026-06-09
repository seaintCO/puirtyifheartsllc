"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Purity Hoodie",
    price: 88,
    category: "Merch",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Training Set",
    price: 72,
    category: "Gym",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Wellness Bottle",
    price: 34,
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Purity Tote",
    price: 42,
    category: "Merch",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Shop() {
  const [cart, setCart] = useState<any[]>([]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-[#241f1b]">
      <nav className="border-b border-black/5 bg-[#fbf8f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-sm text-black/50">Home</Link>
          <div className="font-serif text-3xl">Purity Shop</div>
          <Link href="/dashboard" className="rounded-full bg-[#241f1b] px-5 py-3 text-sm text-white">
            Portal
          </Link>
        </div>
      </nav>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a46d]">
                Merch + Gym Store
              </p>
              <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                Minimal pieces for the Purity lifestyle.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-black/60 lg:pt-16">
              A demo storefront for merch, gym wear, wellness products, journals,
              and future branded drops.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <div key={product.id} className="rounded-[2rem] bg-white p-4 shadow-sm">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-80 w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c9a46d]">
                      {product.category}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <h2 className="font-serif text-3xl">{product.name}</h2>
                      <p className="font-serif text-2xl">${product.price}</p>
                    </div>
                    <button
                      onClick={() => setCart([...cart, product])}
                      className="mt-5 w-full rounded-full bg-[#241f1b] px-6 py-4 text-sm text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-[2rem] bg-[#241f1b] p-6 text-white shadow-xl lg:sticky lg:top-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6b078]">Cart</p>
              <h2 className="mt-2 font-serif text-3xl">Checkout</h2>

              <div className="mt-6 space-y-3">
                {cart.length === 0 && (
                  <p className="rounded-2xl bg-white/5 p-4 text-sm text-white/50">
                    Your cart is empty.
                  </p>
                )}

                {cart.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white/5 p-4">
                    <div className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex justify-between">
                  <span className="text-white/60">Total</span>
                  <span className="font-serif text-3xl">${total}</span>
                </div>

                <button className="mt-6 w-full rounded-full bg-white px-6 py-4 text-sm text-[#241f1b]">
                  Demo Checkout
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
