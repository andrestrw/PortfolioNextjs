import { projects } from "../app/data";
import { projects2 } from "../app/data2";


import "../styles/globals.css";

import Header from "../components/common/header";

import HeroSection from "../components/HeroSection";
import WorkSection from "../components/workSection";

export default function HomePage() {
  return (
    <>
      <Header className="bg-bgGeneral fuente-general"> </Header>
      <HeroSection />
      < WorkSection   sectionTitle="Projects"  sectionSubtitle="My personal projects"  projects= {projects2} />
      <WorkSection sectionTitle="Projects"  sectionSubtitle="Projects for clients "  projects={projects} />
   
    </>
  );
}
