import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PageShell({
  children,
  narrow = false,
}: {
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <main>
      <div className="mx-4 sm:mx-8 lg:mx-[65px] my-10">
        <NavBar />
        <div className={`mt-12 ${narrow ? "max-w-3xl mx-auto" : ""}`}>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
