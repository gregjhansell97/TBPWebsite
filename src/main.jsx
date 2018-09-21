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

/*
const palette: {
  primary: {
    light: palette.primary[300],
    main: palette.primary[500],
    dark: palette.primary[700],
    contrastText: getContrastText(palette.primary[500]),
  },
  secondary: {
    light: palette.secondary.A200,
    main: palette.secondary.A400,
    dark: palette.secondary.A700,
    contrastText: getContrastText(palette.secondary.A400),
  },
  error: {
    light: palette.error[300],
    main: palette.error[500],
    dark: palette.error[700],
    contrastText: getContrastText(palette.error[500]),
  },
}*/


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
