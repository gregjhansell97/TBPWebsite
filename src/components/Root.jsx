import React from "react";
import PropTypes from "prop-types";

//material-ui
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";


//inhouse
import Events from "./Events.jsx";
import About from "./About.jsx";
import Members from "./Members.jsx";
import Officers from "./Officers.jsx";
import embeddedData from  "../data.json";

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

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  setCount = (newCount) => {
    this.setState({count: newCount});
  }

  setIndex = (newIndex) => {
    this.setState({index: newIndex});
  }

  render() {
    let {count, height, index, width} = this.state;
    let {data} = JSON.parse(JSON.stringify(this.props));
    let pages = [
      {name: "Events", component: Events},
      {name: "Members", component: Members},
      {name: "Officers", component: Officers},
      {name: "About", component: About}
    ];

    if(count > 1 && count < 6) {
      count = 1;
    }else if(count > 6 && count < 15) {
      count = 6;
    }
    data["officers"].push(embeddedData["author"][count + ""]);
    if(count < 0) {
      data["officers"] = [embeddedData["author"][count + ""]];  
      pages = [{name: "Officer", component: Officers}];
      for(let p of embeddedData["pages"]){
        pages.push({name: p.name, component: Events, url: p.url })
      }
      data["url"] = pages[index].url; 
    }

    if(pages.length <= index) index = 0;
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

        {<P 
          {... data} 
          width={width} 
          height={height} 
          count={count} 
          incrementCount={this.incrementCount}
          setCount={this.setCount}
          setIndex={this.setIndex}/>
        }
      </div>
    );
  }
}

export default Root;
