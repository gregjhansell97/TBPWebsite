import React from "react";
import ReactDOM from "react-dom";

import {stringListToHTML} from "./helpers/HtmlConverter.jsx";

class About extends React.Component {
  render() {
    const {about} = this.props.data
    let htmlAbout = stringListToHTML(about)
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
