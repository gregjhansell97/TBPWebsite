import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Root from "./components/Root.jsx";

fetch("/static/data.json").then((response) => {
  response.json().then((data) => {
    const Website = (
      <MuiThemeProvider>
        <Root data={data}/>
      </MuiThemeProvider>);
    ReactDOM.render(Website, document.getElementById('app'));
  })
});
