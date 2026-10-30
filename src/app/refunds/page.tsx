import PageShell from "../components/PageShell";

export default function RefundsPage() {
  return (
    <PageShell narrow>
      <h1 className="text-3xl lg:text-4xl font-extrabold uppercase mb-2">
        Returns &amp; Refunds
      </h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: October 30, 2026</p>
      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">30-day return window</h2>
          <p>
            If you are not satisfied with your Lumen Wear purchase, you may
            return unworn, unwashed items with original tags within 30 days of
            delivery for a refund or exchange.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">How to start a return</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Email{" "}
              <a className="underline text-yellow-700" href="mailto:orders@lumenwear.shop">
                orders@lumenwear.shop
              </a>{" "}
              with your order number and reason for return.
            </li>
            <li>We will send return instructions and a return authorization.</li>
            <li>Ship the item(s) back using a trackable method.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Refunds</h2>
          <p>
            Once we receive and inspect the return, refunds are issued to the
            original payment method (including PayPal) within 5–10 business days.
            Original shipping fees are non-refundable unless the item arrived
            damaged or incorrect.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Exchanges</h2>
          <p>
            Want a different size or color? Note that in your return request and
            we will arrange an exchange subject to stock availability.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Non-returnable items</h2>
          <p>
            Final-sale / clearance items marked as such, gift cards, and items
            returned without tags or showing wear may not be accepted.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Damaged or wrong item</h2>
          <p>
            Contact us within 7 days of delivery with photos. We will cover
            return shipping and send a replacement or full refund.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
