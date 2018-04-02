import React from "react";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";

class Events extends React.Component {
  render() {
    const {url} = this.props.data
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

export default Events;
