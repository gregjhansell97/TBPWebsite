import React from "react";
import ReactDOM from "react-dom";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import {Tabs, Tab} from "material-ui/Tabs";

class CurrentMembers extends React.Component {
  render() {
      const {members} = this.props;
      return(
        <Table>
          <TableBody displayRowCheckbox={false}>
            {members.map((name, i) =>
              <TableRow key={i} selectable={false} >
                <TableRowColumn>{name}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )
  }
}

class Candidates extends React.Component {
  render() {
      const {candidates} = this.props;
      return(
        <Table>
          <TableBody displayRowCheckbox={false}>
            {candidates.map((name, i) =>
              <TableRow key={i} selectable={false} >
                <TableRowColumn>{name}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )
  }
}

class Members extends React.Component {
  render() {
    const {members, candidates} = this.props.data
    return (
      <div>
        <img src="static/images/members.jpg" alt="" style={{width: "100%"}}/>
        <Tabs>
          <Tab label="Current Members">
            <CurrentMembers members={members}/>
          </Tab>
          <Tab label="Prospective Candidates">
            <Candidates candidates={candidates}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Members;
