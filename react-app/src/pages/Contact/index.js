import React from "react";
import propTypes from "prop-types";

function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
    </main>
  );
}

Contact.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Contact.defaultProps = {};

export default Contact;
