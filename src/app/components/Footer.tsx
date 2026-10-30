import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-8 lg:py-20 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <section className="mb-12 lg:mb-0">
          <h5 className="text-white text-2xl font-extrabold uppercase tracking-wider">
            Lumen Wear
          </h5>
          <p className="text-neutral-400 my-5">
            Modern unisex street &amp; casual wear.
            <br />
            Everyday pieces built for real life.
          </p>
          <div className="flex gap-2">
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaFacebookF className="w-4 h-4" />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaInstagram />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaTwitter />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaLinkedinIn />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-28">
          <div>
            <h3 className="text-md text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/shop">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md text-white font-semibold mb-4">
              Customer Care
            </h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/refunds">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/contact">
                  Shipping Help
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/contact">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-8 lg:mt-12 text-center lg:text-left">
        <p className="text-neutral-400">
          Lumen Wear © {new Date().getFullYear()} All rights reserved.
          <br />
          Contact:{" "}
          <a
            href="mailto:contact@lumenwear.shop"
            className="text-yellow-300 hover:text-white"
          >
            contact@lumenwear.shop
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
