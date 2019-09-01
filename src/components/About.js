import React from "react";

import {stringListToHTML} from "./helpers/HtmlConverter.js";

class About extends React.Component {
  render() {
    const {about} = this.props;
    const htmlAbout = stringListToHTML(about)
    return (
      <div>
        {htmlAbout.map((html) => 
          html
        )}
      </div>
    );
  }
}

export default About;
