import HeroVideo from "@/components/HeroVideo";
import FixedHeader from "@/components/FixedHeader";

import PlacementAnalysis from "@/components/PlacementAnalysis";
import RecruiterWall from "@/components/RecruiterWall";
import FacultyHighlights from "@/components/FacultyHighlights";
import ResearchData from "@/components/ResearchData";
import CoeShowcase from "@/components/CoeShowcase";
import DeansMessage from "@/components/DeansMessage";
import { Preloader } from "@/components/preloader";

export default function Home() {
  return (
    <main className="relative">
      <FixedHeader />

      <div id="overview">
        <HeroVideo />
      </div>

      <div id="highlights" className="scroll-mt-24" aria-hidden="true" />
      <div id="info" className="scroll-mt-24" aria-hidden="true" />
      <div id="placement" className="scroll-mt-24">
        <PlacementAnalysis />
      </div>
      {/* <div id="clubs" className="scroll-mt-24">
        <RecruiterWall />
      </div> */}
      <div id="publications-research" className="scroll-mt-24">
        <ResearchData />
      </div>
      <div id="roadmap" className="scroll-mt-24" aria-hidden="true" />
      <div id="syllabus" className="scroll-mt-24" aria-hidden="true" />

      <div id="coe" className="scroll-mt-24">
        <CoeShowcase />
      </div>

      <div id="deans-message" className="scroll-mt-24">
        <DeansMessage />
      </div>
      <div id="faculty" className="scroll-mt-24">
        <FacultyHighlights />
      </div>
      <div id="testimonials" className="scroll-mt-24" aria-hidden="true" />
      <Preloader
        firstLine="KIET"
        secondLine="UNIVERSITY"
        backgroundColor="#EEEEFF"
        textColor="#FFFFFF"
      />
    </main>
  );
}
