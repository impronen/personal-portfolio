export default function Project(props) {
  const { project, description, github, live } = props;

  return (
    <div className="project">
      <h3 className="projectHeading">{project}</h3>
      <p className="projectDescription">{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer">
        Live
      </a>
    </div>
  );
}
