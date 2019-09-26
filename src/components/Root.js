import React from "react";
import PropTypes from "prop-types";

// material-ui
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

// inhouse
import Events from "./Events.js";
import About from "./About.js";
import Members from "./Members.js";
import Officers from "./Officers.js";

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 0, // current tab
      count: 0, // how many times website authors image has been clicked
      width: 0, // width of screen
      height: 0 // height of scree
    }
  }

  componentDidMount() {
    this.updateSize();
    // subscribes to resize
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    // unsubscribes from resize
    window.removeEventListener("resize", this.updateSize);
  }

  /**
   * sets the states width and height when a resize occurs
   */
  updateSize = () => {
    this.setState({
      width: window.innerWidth - 5,
      height: window.innerHeight - 8
    });
  }

  /**
   * increments the count of times authors images has been clicked; modifies
   * the count state
   */
  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  }

  /**
   * sets the count size; do not use to increment
   *
   * Args:
   *   newCount(int): new count that modifies count state
   */
  setCount = (newCount) => {
    this.setState({count: newCount});
  }

  /**
   * sets the current tab
   *
   * Args:
   *   newTab(int): new tab that modifies the tab state
   */
  setTab = (_, newTab) => {
    this.setState({tab: newTab});
  }

  render() {
    let {count, height, tab, width} = this.state;

    // copies so items can be modified without reference problems
    let data = JSON.parse(JSON.stringify(this.props.data));

    // pages to be rendered (modified by easter egg)
    let pages = [
      {name: "Events", component: Events},
      {name: "About", component: About},
      {name: "Members", component: Members},
      {name: "Officers", component: Officers}
    ]

    // prevents index out of bounds access to tabs
    if(pages.length <= tab) tab = 0;
    const P = pages[tab].component;

    for(let o of data["officers"]) {
        const webmaster = (/Webmaster/.test(o["position"]))
        if(count > 0 && webmaster) {
            o["bio"] = "Ouch! That hurt man!";
        } 
        if(count > 5 && webmaster) {
            o["bio"] = "Seriously, knock it off... don't make me come out of this machine";
        }
        if(count > 9 && !webmaster) {
            o["position"] = "Hostage";
        }
        if(count > 9 && webmaster) {
            o["bio"] = "Look at me, I am the captain now";
        }
        if(count > 14 && webmaster) {
            o["position"] = "The Captain"
            o["bio"] = "What was in that cup I spilt in hall? Could you please tell my mother she's not to blame. Type your answer in the lower left corner of this page; there will be no curve for this exam! Dont forget to blink more than one-hundred-and-eighty-one times x)"
        } 
    }

    return (
      <div>
        <AppBar position="static" style={{height:50}}>
          <Tabs variant="fullWidth" value={tab} onChange={this.setTab}>
            {pages.map((pg, i) =>
              <Tab key={i} label={pg.name} />
            )}
          </Tabs>
        </AppBar>
        {<P
          {... data}
          width={width}
          height={height - 50}
          count={count}
          incrementCount={this.incrementCount}
          setCount={this.setCount}
          setTab={this.setTab}/>
        }
      </div>

    )

  }

}

export default Root;
