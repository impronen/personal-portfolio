import { forwardRef } from "react";

// eslint-disable-next-line no-empty-pattern
const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <h2 className="contactHeading">contact</h2>
      <div className="contactContainer">
        <p>text</p>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
