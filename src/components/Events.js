import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";

/**
 * Iframe wrapper to display a given url
 */
class Events extends React.Component {
  render() {
    const {url, width, height} = this.props;
    return (
      <Iframe
        url={url}
        width={width}
        height={height}
        overflow="hidden"
        id="calendar"
        display="initial"
        position="relative" />
    );
  }
}
Events.propTypes = {
  // rendered url
  url: PropTypes.string.isRequired,
  // desired width
  width: PropTypes.number.isRequired,
  // desired height
  height: PropTypes.number.isRequired,
}

export default Events;
