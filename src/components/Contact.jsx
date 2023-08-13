import { forwardRef } from "react";

// eslint-disable-next-line no-empty-pattern
const Contact = forwardRef(({}, ref) => {
  return (
    <div className="contact" ref={ref}>
      <h2 className="contactHeading">contact</h2>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
