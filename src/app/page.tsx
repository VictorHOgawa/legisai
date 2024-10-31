import { Cities } from "@/components/Cities";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { ParallaxCards } from "@/components/ParallaxCards";
import { ParallaxComponent } from "@/components/ParallaxComponent";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <Hero />
      <Numbers />
      <ParallaxComponent />
      <ParallaxCards />
      <Cities />
      <Footer />
    </div>
  );
}
