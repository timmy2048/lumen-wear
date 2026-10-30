import Image from "next/image";
import PageShell from "../components/PageShell";
import { products } from "../lib/products";

export default function ShopPage() {
  return (
    <PageShell>
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase mb-3">
          Shop Lumen Wear
        </h1>
        <p className="text-neutral-600 text-lg max-w-2xl">
          Unisex street and casual essentials. Prices shown in USD. Secure
          checkout will be available via PayPal and major cards.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {products.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow bg-white"
          >
            <Image
              src={p.image}
              alt={p.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                {p.category}
              </p>
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
              <p className="text-neutral-600 text-sm mb-4">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold">${p.price}.00</span>
                <a
                  href="mailto:orders@lumenwear.shop?subject=Order%20inquiry%20-%20Lumen%20Wear"
                  className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black border border-black"
                >
                  Inquire
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-12 text-sm text-neutral-500">
        Stock photos are illustrative. Product availability and shipping times
        may vary. See our{" "}
        <a href="/refunds/" className="underline">
          Returns &amp; Refunds
        </a>{" "}
        policy for details.
      </p>
    </PageShell>
  );
}
