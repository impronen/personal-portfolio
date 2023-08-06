import Button from "./Button";

export default function Project({ project, description, github, live }) {
  return (
    <div className="project">
      <h3 className="projectHeading">{project}</h3>
      <p className="projectDescription">{description}</p>
      <Button text="github" url={github} className="projectButton" />
      <Button text="live" url={live} className="projectButton" />
    </div>
  );
}
