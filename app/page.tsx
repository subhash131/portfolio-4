import Navbar from "@/components/navbar/Navbar";
import Logo from "./logo/logo";
import Hero from "@/components/hero/Hero";
import Glow from "@/components/designs/Glow";

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="w-screen h-screen absolute"></div>
    </main>
  );
}
