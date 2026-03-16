import HeroVideo from "@/components/HeroVideo";
import DepartmentIntro from "@/components/DepartmentIntro";

export default function Home() {
  return (
    <main className="relative">
      {/* Fullscreen Video Hero with Parallax */}
      <HeroVideo />

      {/* Department Introduction Section */}
      <DepartmentIntro />
    </main>
  );
}
