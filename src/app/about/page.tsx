import PageShell from "../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell narrow>
      <h1 className="text-3xl lg:text-5xl font-extrabold uppercase mb-6">
        About Lumen Wear
      </h1>
      <div className="space-y-5 text-neutral-700 text-lg leading-relaxed">
        <p>
          Lumen Wear is a modern unisex clothing brand focused on street and
          casual essentials you can actually live in — hoodies, tees, outerwear,
          and everyday layers with clean cuts and honest materials.
        </p>
        <p>
          We design for people who move between city streets, weekends, and
          work-from-anywhere days. No loud logos for the sake of it; just pieces
          that feel right the moment you put them on.
        </p>
        <p>
          Based online and shipping internationally, Lumen Wear sells directly
          to customers through this storefront. Payments are processed securely;
          customer support is available at{" "}
          <a
            className="text-yellow-600 font-semibold underline"
            href="mailto:contact@lumenwear.shop"
          >
            contact@lumenwear.shop
          </a>
          .
        </p>
        <p>
          Whether you are building a capsule wardrobe or picking up a single
          drop, we aim for quality you notice and prices that stay approachable.
        </p>
      </div>
    </PageShell>
  );
}
