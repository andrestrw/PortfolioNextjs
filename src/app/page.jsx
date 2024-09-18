import Header from "../components/common/header";

import HeroSection from "../components/HeroSection";
import WorkSection from "../components/workSection";

export default function HomePage() {
  return (
    <>
      <Header className="bg-bgGeneral fuente-general"> </Header>;
      <HeroSection></HeroSection>
      <WorkSection></WorkSection>
    </>
  );
}
