import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Root from "./components/Root.jsx";

ReactDOM.render(<MuiThemeProvider><Root/></MuiThemeProvider>, document.getElementById('app'));
