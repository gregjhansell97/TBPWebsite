import React from "react";
import ReactDOM from "react-dom";

//inhouse imports
import Events from "./Events.jsx";
import History from "./History.jsx";
import Members from "./Members.jsx";
import Officers from "./Officers.jsx";


class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Root</h1>
        <Events />
        <History />
        <Members />
        <Officers />
      </div>
    );
  }
}

export default Root;
