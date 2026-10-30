import PageShell from "../components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell narrow>
      <h1 className="text-3xl lg:text-4xl font-extrabold uppercase mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: October 30, 2026</p>
      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2">1. Who we are</h2>
          <p>
            Lumen Wear (&quot;we&quot;, &quot;us&quot;) operates this online
            clothing storefront. Contact us at contact@lumenwear.shop with any
            privacy questions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">2. Information we collect</h2>
          <p>
            When you browse, place an order, or contact us, we may collect your
            name, email address, shipping address, phone number, and payment
            confirmation details provided by our payment processors (such as
            PayPal). We do not store full card numbers on our servers.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">3. How we use information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process and fulfill orders</li>
            <li>To respond to customer support requests</li>
            <li>To send order updates and, with consent, marketing emails</li>
            <li>To improve our website and prevent fraud</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">4. Sharing</h2>
          <p>
            We share personal data only with service providers who help us
            operate (payment processors, shipping carriers, email tools), and
            only as needed. We do not sell your personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">5. Cookies</h2>
          <p>
            We may use essential cookies for site functionality and optional
            analytics cookies. You can control cookies through your browser
            settings.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">6. Retention &amp; security</h2>
          <p>
            We keep order records as long as required for legal, tax, and
            customer-service purposes. We use reasonable technical and
            organizational measures to protect your data.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">7. Your rights</h2>
          <p>
            Depending on where you live, you may request access, correction, or
            deletion of your personal data. Email contact@lumenwear.shop to make
            a request.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">8. Changes</h2>
          <p>
            We may update this policy from time to time. The &quot;Last
            updated&quot; date at the top will change when we do.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
