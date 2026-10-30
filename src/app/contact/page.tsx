import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell narrow>
      <h1 className="text-3xl lg:text-5xl font-extrabold uppercase mb-6">
        Contact Us
      </h1>
      <p className="text-neutral-700 text-lg mb-8">
        Questions about an order, sizing, shipping, or returns? Reach the Lumen
        Wear team and we will get back within one business day.
      </p>
      <div className="space-y-6 bg-[#f6f5f5] rounded-2xl p-8">
        <div>
          <h2 className="font-bold text-lg mb-1">Email</h2>
          <a
            href="mailto:contact@lumenwear.shop"
            className="text-yellow-700 font-semibold underline text-lg"
          >
            contact@lumenwear.shop
          </a>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-1">Orders</h2>
          <a
            href="mailto:orders@lumenwear.shop"
            className="text-yellow-700 font-semibold underline text-lg"
          >
            orders@lumenwear.shop
          </a>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-1">Business hours</h2>
          <p className="text-neutral-700">
            Monday–Friday, 9:00–18:00 (UTC+8). Weekend messages are answered the
            next business day.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-1">Mailing address</h2>
          <p className="text-neutral-700">
            Lumen Wear Customer Care
            <br />
            Online retail — correspondence by email
          </p>
        </div>
      </div>
      <form
        className="mt-10 space-y-4"
        action="mailto:contact@lumenwear.shop"
        method="get"
        encType="text/plain"
      >
        <h2 className="text-2xl font-bold mb-2">Send a message</h2>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full border border-neutral-300 rounded-md px-4 py-3"
        />
        <textarea
          name="body"
          placeholder="How can we help?"
          required
          rows={5}
          className="w-full border border-neutral-300 rounded-md px-4 py-3"
        />
        <button
          type="submit"
          className="bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-300 hover:text-black border border-black"
        >
          Open email client
        </button>
      </form>
    </PageShell>
  );
}
