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
      tab: 0, //current tab
      count: 0, //how many times website authors image has been clicked
      width: 0, //width of the screen
      height: 0 //height of the screen
    }
  }

  componentDidMount() {
    this.updateSize();
    //subscries to resize
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    //unsubscribes to resize upon unmounting
    window.removeEventListener("resize", this.updateSize);
  }

  /**
   * sets the states width and height when a resize occurs
   */
  updateSize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight });
  }

  /**
   * increments the count by one
   */
  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  /**
   * sets the count, do not use to increment
   *
   * @param newCount(int): the new count that modifies the count state
   */
  setCount = (newCount) => {
    this.setState({count: newCount});
  }

  /**
   * sets the current tab
   *
   * @param newTab(int): the new tab that modifies the tab state
   */
  setTab = (newTab) => {
    this.setState({tab: newTab});
  }

  render() {
    let {count, height, tab, width} = this.state;

    //makes a copy of data so items can be modified without reference problems
    let {data} = JSON.parse(JSON.stringify(this.props));

    //pages to be rendered
    let pages = [
      {name: "Events", component: Events},
      {name: "Members", component: Members},
      {name: "Officers", component: Officers},
      {name: "About", component: About}
    ];

    //easter egg logic
    if(count > 1 && count < 6) {
      count = 1;
    }else if(count > 6 && count < 15) {
      count = 6;
    }
    //embedds author as an officer

    data["officers"].push(embeddedData["author"][count + ""]);

    //solved the riddle!
    if(count < 0) {
      data["officers"] = [embeddedData["author"][count + ""]];
      pages = [{name: "Officer", component: Officers}];
      for(let p of embeddedData["pages"]){
        pages.push({name: p.name, component: Events, url: p.url })
      }
      data["url"] = pages[tab].url;
    }

    if(pages.length <= tab) tab = 0;
    const P = pages[tab].component;

    return (
      <div>
        <AppBar position="static">
          <Tabs value={tab} onChange={(e, i) => this.setState({tab: i})}>
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
          setTab={this.setTab}/>
        }
      </div>
    );
  }
}

Root.propTypes = {
  /**
   * the static data injected in that includes information needed for all the
   * components
   */
  data: PropTypes.object
}

export default Root;
