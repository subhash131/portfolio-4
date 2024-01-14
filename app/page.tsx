import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/section3/Section3";

export default function Home() {
  return (
    <main className="bg-black min-h-screen  ">
      <Navbar />
      <Hero />
      <Section3 />
      <Section2 />
    </main>
  );
}
