import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto grid max-w-[1440px] grid-cols-7">
      <section className="col-start-2 col-end-6 py-20">
        <Form />
      </section>
    </main>
  );
}
