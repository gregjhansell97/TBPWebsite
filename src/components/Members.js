import React from "react";

// material-ui
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tabs from "@material-ui/core/Tabs";

/**
 * 2-D table of members currently apart of Tau Beta Pi
 */
class MemberTable extends React.Component {
  render() {
    const {members, columns} = this.props;

    // converts members list into 2-D array
    let members_table = [];
    for(let i = 0; i < members.length; ++i) {
        if(i%columns == 0) {
            members_table.push([]);
        }
        members_table[members_table.length - 1].push(members[i]);
    }

    return (
      <Table>
        <TableBody>
          {members_table.map((row, i) =>
            <TableRow key={i}>
              {row.map((name, j) =>
                <TableCell key={i*members_table.length + j}> 
                  {name} 
                </TableCell>
              )}
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
        {tab === CURRENT && <MemberTable columns={3} members={members} />}
        {tab === PROSPECTIVE && <MemberTable columns={3} members={candidates} />}
      </div>
    )
  }
}

export default Members;
