import React from "react";
import ReactDOM from "react-dom";

//material-ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//inhouse imports
import Events from "./Events.jsx";
import History from "./History.jsx";
import Members from "./Members.jsx";
import Officers from "./Officers.jsx";

//Page Enums:
const EVENTS = "Events";
const HISTORY = "History";
const MEMBERS = "Members";
const OFFICERS = "Officers";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: EVENTS,
      drawerOpen: false
    };
  }

  render() {
    const {page, drawerOpen} = this.state;
    const pages = {
      "Events" : Events,
      "History" : History,
      "Members" : Members,
      "Officers" : Officers
    };
    const P = pages[page];

    return (
      <div>
        <AppBar
        title={page}
        onLeftIconButtonClick={() => this.setState({drawerOpen: !drawerOpen})} />

        <Drawer
        open={drawerOpen}
        docked={false}
        onRequestChange={(open) => this.setState({drawerOpen: open})}>
          {Object.keys(pages).map((pg, i) =>
            <MenuItem key={i} onClick={ () => {
              this.setState({
                page: pg,
                drawerOpen: false
              })
            }}> {pg} </MenuItem>
          )}
        </Drawer>
        {<P />}
      </div>
    );
  }
}

export default Root;
