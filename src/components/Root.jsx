import React from "react";
import ReactDOM from "react-dom";

//material-ui
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";


//inhouse imports
import Events from "./Events.jsx";
import About from "./About.jsx";
//import Members from "./Members.jsx";
//import Officers from "./Officers.jsx";
import hardcodedTestData from  "../data.json";

class Root extends React.Component {

  constructor(props) {
    super(props); //thanks bro!
    this.state = {
      index: 0,
      count: 0
    }
  }

  onClick = () => {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    let {count, index} = this.state;
    let {data} = this.props;
    let pages = [
      {name: "Events", component: Events},
      {name: "Members", component: About},
      {name: "Officers", component: About},
      {name: "About", component: About}
    ];
    
    const P = pages[index].component;

    return (
      <div>
        <AppBar position="static">
          <Tabs value={index} onChange={(e, i) => this.setState({index: i})}>
            {pages.map((pg, i) =>
              <Tab key={i} label={pg.name}/>
            )}
          </Tabs>
        </AppBar>
       
        {<P data={data}/>}
      </div>
    );
  }
}

export default Root;
