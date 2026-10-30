import PageShell from "../components/PageShell";

export default function TermsPage() {
  return (
    <PageShell narrow>
      <h1 className="text-3xl lg:text-4xl font-extrabold uppercase mb-2">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: October 30, 2026</p>
      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">1. Agreement</h2>
          <p>
            By accessing lumenwear.shop or placing an order with Lumen Wear, you
            agree to these Terms &amp; Conditions. If you do not agree, please do
            not use this site.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">2. Products &amp; pricing</h2>
          <p>
            We strive to display accurate product information and prices in USD.
            We reserve the right to correct errors and to refuse or cancel orders
            placed at an incorrect price.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">3. Orders &amp; payment</h2>
          <p>
            Orders are subject to acceptance and availability. Payment is due at
            checkout via the methods we offer (including PayPal). You confirm that
            you are authorized to use the selected payment method.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">4. Shipping</h2>
          <p>
            Delivery estimates are approximate. Risk of loss passes to you upon
            delivery to the carrier, except where local law requires otherwise.
            Import duties and taxes for international orders may be your
            responsibility.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">5. Returns</h2>
          <p>
            Returns are governed by our{" "}
            <a href="/refunds/" className="underline text-yellow-700">
              Returns &amp; Refunds
            </a>{" "}
            policy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">6. Intellectual property</h2>
          <p>
            All content on this site — branding, text, images, and design — is
            owned by Lumen Wear or its licensors and may not be reused without
            permission.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Lumen Wear is not liable for
            indirect, incidental, or consequential damages arising from your use
            of the site or products. Our total liability for any claim related to
            an order is limited to the amount you paid for that order.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">8. Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a
              href="mailto:contact@lumenwear.shop"
              className="underline text-yellow-700"
            >
              contact@lumenwear.shop
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
