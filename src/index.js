import React from "react";
import ReactDOM from "react-dom";

// inhouse
import "./index.css";
import Root from "./components/Root.js";
import * as serviceWorker from "./serviceWorker.js";

fetch("/static/data.json").then((response) => {
  return response.json()
}).then((data) => {
  return (<Root data={data} />);
}).then((website) => {
    ReactDOM.render(website, document.getElementById("root"));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
