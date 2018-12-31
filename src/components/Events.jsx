import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";

class Events extends React.Component {
  render() {
    const {url} = this.props
    return (
      <div>
        <Iframe url={url}
          width="100%"
          height="90%"
          id="calendar"
          display="initial"
          position="relative"/>
      </div>
    );
  }
}

Events.defaultProps = {
  url: ""
}

export default Events;
