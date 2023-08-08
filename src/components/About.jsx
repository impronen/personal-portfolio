import { forwardRef } from "react";

// eslint-disable-next-line no-empty-pattern
const About = forwardRef(({}, ref) => {
  return (
    <div className="about" ref={ref}>
      <section>
        <h2 className="aboutHeading">who is matti?</h2>
        <p className="aboutParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
          pellentesque habitant morbi tristique senectus et netus et malesuada.
          Sit amet justo donec enim diam vulputate. Id porta nibh venenatis cras
          sed. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.
          Nunc eget lorem dolor sed viverra ipsum. Eu mi bibendum neque egestas
          congue quisque egestas diam in. Mi eget mauris pharetra et ultrices.
          Neque ornare aenean euismod elementum nisi.
        </p>
        <p className="aboutParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
          pellentesque habitant morbi tristique senectus et netus et malesuada.
          Sit amet justo donec enim diam vulputate. Id porta nibh venenatis cras
          sed. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.
          Nunc eget lorem dolor sed viverra ipsum. Eu mi bibendum neque egestas
          congue quisque egestas diam in.
        </p>
      </section>
    </div>
  );
});

About.displayName = "About";

export default About;
