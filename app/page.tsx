import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Section2 from "@/components/Section2/Section2";

export default function Home() {
  return (
    <main className="bg-black min-h-screen  ">
      <Navbar />
      <Hero />
      <Section2 />
    </main>
  );
}
