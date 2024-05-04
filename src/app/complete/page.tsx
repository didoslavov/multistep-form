import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="col-span-full mt-20  justify-self-center text-center text-5xl text-neutral-900">
      <h1 className="mb-20">THANK YOU FOR YOUR ORDER</h1>
      <Link
        href="/"
        className="rounded-lg px-3 py-1 text-2xl transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-300"
      >
        Start over
      </Link>
    </section>
  );
}

export default page;
