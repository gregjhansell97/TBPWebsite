import React from "react";
import ReactDOM from "react-dom";

//material-ui
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

//in-house
import Root from "./components/Root.jsx";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
        main: "#f44336"
    },
  },
});

///grabs the static data needed to render the the page
fetch("/static/data.json").then((response) => {
  response.json().then((data) => {
  const Website = (
    <MuiThemeProvider theme={theme}>
      <Root data={data}/>
    </MuiThemeProvider>
  );

  ReactDOM.render(Website, document.getElementById('app'));
  })
});
