import React from "react";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";

class Events extends React.Component {
  render() {
    return (
      <div>
        <Iframe url="https://www.google.com/calendar/embed?src=tbpnygamma%40gmail.com&amp;ctz=America/New_York"
        width="100%"
        height="100%"
        id="calendar"
        display="initial"
        position="relative"/>
      </div>
    );
  }
}

//<div style="position: relative; top: 20px;"><iframe frameborder="0" height="350" scrolling="no" src="https://www.google.com/calendar/embed?src=tbpnygamma%40gmail.com&amp;ctz=America/New_York" style="border: 0" width="450"></iframe>
export default Events;
