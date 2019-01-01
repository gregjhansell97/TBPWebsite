import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";

/**
 * Iframe wrapper to display a given url
 */
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
Events.propTypes = {
  ///the url that is being rendered
  url: PropTypes.string
}
Events.defaultProps = {
  url: ""
}

export default Events;
