import Button from "./Button";

export default function Project({
  project,
  description,
  github,
  live,
  image,
  features,
}) {
  return (
    <div className="project">
      <div className="leftWrapper">
        <img src={image} alt={project} className="projectImage" />
      </div>
      <div className="rightWrapper">
        <h3 className="projectHeading">{project}</h3>
        <p className="projectDescription">{description}</p>
        <ul className="featureList">
          <h4>features</h4>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="buttonWrapper">
          <Button text="github" url={github} className="projectButton" />
          <Button text="live" url={live} className="projectButton" />
        </div>
      </div>
    </div>
  );
}
