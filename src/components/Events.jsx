import React from "react";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";

class Events extends React.Component {
  render() {
    return (
      <div>
        <Iframe url="https://www.google.com/calendar/embed?src=tbpnygamma%40gmail.com&amp;ctz=America/New_York"
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
