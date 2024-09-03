import { projects } from "../app/data";
import ProjectCard from "./projects/projectCard";

const WorkSection = () => {
  return (
    <section id="work" className=" px-5 my-10 lg:px-20 py-10">
      <div className="container mx-auto">
        <div className="row pb-4">
          <div className="lg:w-2/3">
            <h2 className="text-2xl text-gray-600">Proyectos</h2>
            <h1 className="text-4xl font-bold fuente-general text-blue-50">
              Mis proyectos personales
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              altText={project.altText}
              projectLink={project.projectLink}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
