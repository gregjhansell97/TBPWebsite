import React from "react";
import ReactDOM from "react-dom";

//material-ui
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";


//inhouse
import Events from "./Events.jsx";
import About from "./About.jsx";
import Members from "./Members.jsx";
import Officers from "./Officers.jsx";
import hardcodedTestData from  "../data.json";

class Root extends React.Component {

  constructor(props) {
    super(props); //thanks bro!
    this.state = {
      index: 0,
      count: 0,
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
 
  updateSize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight });
  }

  onClick = () => {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    let {count, height, index, width} = this.state;
    let {data} = this.props;
    let pages = [
      {name: "Events", component: Events},
      {name: "Members", component: Members},
      {name: "Officers", component: Officers},
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

        {<P data={data} width={width} height={height} count={count} onClick={this.onClick}/>}
      </div>
    );
  }
}

export default Root;
