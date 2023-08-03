import { projectData } from "../data/projectData";
import Project from "./Project";

export default function Projects() {
  return (
    <>
      <h2 className="projecSectiontHeading">projects</h2>
      <div className="projectContainer">
        {projectData.map((project) => (
          <Project key={project.project} {...project} />
        ))}
      </div>
    </>
  );
}
