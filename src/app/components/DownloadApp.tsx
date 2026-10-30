import React from "react";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f6f5f5] rounded-[30px] p-8 lg:p-16 gap-8">
      <div className="text-center lg:text-left">
        <p className="text-2xl lg:text-4xl font-black uppercase tracking-wider leading-relaxed">
          Free shipping
          <br />
          on orders $80+
        </p>
        <p className="my-6 lg:my-8 text-base lg:text-lg font-medium text-neutral-500">
          Easy 30-day returns. Ships worldwide.
          <br />
          Questions? Email contact@lumenwear.shop
        </p>
        <Link
          href="/shop"
          className="inline-block text-lg font-medium bg-black text-white py-3 px-6 rounded-lg hover:bg-yellow-300 hover:text-black border border-black"
        >
          Browse the Shop
        </Link>
      </div>
      <div className="text-center lg:text-right max-w-md">
        <p className="text-lg font-semibold mb-2">Need help?</p>
        <p className="text-neutral-600 mb-4">
          Our support team usually replies within one business day.
        </p>
        <Link href="/contact" className="text-yellow-600 font-semibold hover:underline">
          Contact Lumen Wear →
        </Link>
      </div>
    </div>
  );
};

export default DownloadApp;
