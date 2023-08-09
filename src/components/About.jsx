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
            he's a bit of an odd one. after spending most of his career in
            customer service and logistics, code beckoned. due to the
            background, matti brings a unique perspective to creating web
            experiences that are customer centric. matti is naturally curious
            and eager to learn new stuff.
          </p>
          <p className="aboutParagraph">
            when not coding, you might find him reading some long and (some
            might say) boring tome of a book or making odd sounds with a guitar.
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
