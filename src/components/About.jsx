import { forwardRef } from "react";
import { skillData } from "../data/skillData";

// eslint-disable-next-line no-empty-pattern
const About = forwardRef(({}, ref) => {
  return (
    <div className="about" ref={ref}>
      <h2 className="aboutHeading">who exactly is this guy?</h2>
      <div className="aboutContainer">
        <section className="aboutText">
          <h3>matti is a self taught programmer</h3>
          <p className="aboutParagraph">
            after spending most of his career in customer service and logistics,
            code beckoned. as aresult, i bring a unique, customer centric
            perspective to creating web experiences.
          </p>
          <p className="aboutParagraph">
            whether its understanding customer requirements, or complex
            interactions in customer systems or implementing robust solutions to
            those requirements - you&apos;ve got your man.
          </p>
          <p className="aboutParagraph">
            when not coding, you might find me reading some long and (some might
            say) boring tome of a book or making odd sounds with a guitar. or
            hiking with my dear wife.
          </p>
        </section>

        <section className="aboutSkills">
          <h3>skills</h3>
          <ul className="skillList">
            {skillData.map((skill) => (
              <li key={skill.skill} className="skill">
                {skill.skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
