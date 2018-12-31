import React from "react";
import PropTypes from "prop-types";

//inhouse
import {stringListToHTML} from "./helpers/HtmlConverter.jsx";

/**
 * about tab for the website
 */
class About extends React.Component {
  render() {
    const {about} = this.props;
    let htmlAbout = stringListToHTML(about);
    return (
      <div>
        {htmlAbout.map((html) =>
          html
        )}
      </div>
    );
  }
}

About.propTypes = {
  about: PropTypes.arrayOf(PropTypes.string)
}

export default About;
