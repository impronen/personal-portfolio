import { forwardRef } from "react";
import { projectData } from "../data/projectData";
import Project from "./Project";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <h2 className="projecSectiontHeading">projects</h2>
        <p>these projects show what i can do</p>
        <div className="projectContainer">
          {projectData.map((project) => (
            <Project key={project.project} {...project} />
          ))}
        </div>
      </div>
    </>
  );
});

Projects.displayName = "Projects";

export default Projects;
