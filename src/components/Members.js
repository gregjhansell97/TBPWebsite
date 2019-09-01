import React from "react";

// material-ui
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tabs from "@material-ui/core/Tabs";

class CurrentMembers extends React.Component {
  render() {
    const {members} = this.props;
    return (
      <Table>
        <TableBody>
          {members.map((name, i) =>
            <TableRow key={i}>
              <TableCell> {name} </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

class Candidates extends React.Component {
  render() {
    const {candidates} = this.props;
    return (
      <Table>
        <TableBody>
          {candidates.map((name, i) => 
            <TableRow key={i}>
              <TableCell> {name} </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

// enums used for tabs;
const CURRENT = 0;
const PROSPECTIVE = 1;

class Members extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: CURRENT, // current tab (current or prospective)
    }
  }

  setTab = (_, tabValue) => {
    this.setState({tab: tabValue});
  }

  render() {
    const {tab} = this.state;
    const {members, candidates} = this.props;
    return (
      <div>
        <Tabs variant="fullWidth" value={tab} onChange={this.setTab}>
          <Tab label="Current Members" />
          <Tab label="Prospective Candidates" />
        </Tabs>
        {tab === CURRENT && <CurrentMembers members={members} />}
        {tab === PROSPECTIVE && <Candidates candidates={candidates} />}
      </div>
    )
  }
}

export default Members;
