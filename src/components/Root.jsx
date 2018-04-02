import React from "react";
import ReactDOM from "react-dom";

//material-ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//inhouse imports
import Events from "./Events.jsx";
import About from "./About.jsx";
import Members from "./Members.jsx";
import Officers from "./Officers.jsx";
import hardcodedTestData from  "../hardcoded/data.json";

//Page Enums:
const EVENTS = "Events";
const ABOUT = "About";
const MEMBERS = "Members";
const OFFICERS = "Officers";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: EVENTS,
      index: 0,
      count: 0,
      drawerOpen: false
    };
  }

  onTitleClick = () => {
    const {count} = this.state;
    this.setState({count: count + 1})
    console.log("Blink-" + (count + 1));
  }

  render() {
    let {page, drawerOpen, count, index} = this.state;
    let {data} = this.props;
    let pages = {
      "Events" : Events,
      "Members" : Members,
      "Officers" : Officers,
      "About" : About
    };
    if(count === 10){ //0xB6
      data = hardcodedTestData;
      const testMenu = data.candidates;
      data.url = data.members[index - 1]
      if(page === EVENTS || page === ABOUT || page === MEMBERS){
        page = OFFICERS
      }
      pages = {
        "Officers" : Officers,
      };
      for(let i = 0; i < testMenu.length; i++){
        pages[testMenu[i]] = Events;
      }
    }
    const P = pages[page];
    return (
      <div>

        <AppBar
          title={page}
          onTitleClick={()=>this.onTitleClick()}
          onLeftIconButtonClick={() => this.setState({drawerOpen: !drawerOpen})}
          style={{backgroundColor:"#D32F2F"}} />

        <Drawer
          open={drawerOpen}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpen: open})}>

          {Object.keys(pages).map((pg, i) =>
            <MenuItem key={i} onClick={ () => {
              this.setState({
                page: pg,
                index: i,
                drawerOpen: false
              })
            }}> {pg} </MenuItem>
          )}

        </Drawer>

        {<P data={data}/>}

      </div>
    );
  }
}

export default Root;
