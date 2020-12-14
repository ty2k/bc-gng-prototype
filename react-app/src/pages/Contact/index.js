import React from "react";
import propTypes from "prop-types";

function Contact() {
  return <p>Contact us page</p>;
}

Contact.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Contact.defaultProps = {};

export default Contact;
