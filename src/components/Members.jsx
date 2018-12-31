import React from "react";
import PropTypes from "prop-types";

//material-ui
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tabs from "@material-ui/core/Tabs";

class CurrentMembers extends React.Component {

  render() {
      const {members} = this.props;
      return(
        <Table>
          <TableBody>
            {members.map((row, i) =>
              <TableRow key={i}>
                {row.map((name, j) =>
                  <TableCell key={j}>{name}</TableCell>
                )}
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
          <TableBody>
            {candidates.map((row, i) =>
              <TableRow key={i}>
                {row.map((name, j) =>
                  <TableCell key={j}>{name}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )
  }

}

class Members extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  sort = (l_unsorted, name) => {
    let sorted_members = []
    if(l_unsorted.length > 15){
      sorted_members.push(name)
    }else{
      name = ""
    }
    for(let m of l_unsorted){
       if(m.toLowerCase === name) continue;
       sorted_members.push(m);
    }
    sorted_members.sort();
    let three_columns = [[]]
    for(let m of sorted_members){
      let last_i = three_columns.length - 1;
      if(three_columns[last_i].length >= 3){
        three_columns.push([m]);
      }else{
        three_columns[last_i].push(m);
      }
    }
    return three_columns;
  }

  render() {
    const {index} = this.state;
    const {members, candidates} = this.props;
    return (
      <div>
        <img src="static/images/members.jpg" alt="" style={{width: "100%"}}/>
        <Tabs value={index} onChange={(e, i) => this.setState({index: i})}>
          <Tab key={0} label="Current Members"/>
          <Tab key={1} label="Prospective Candidates"/>
        </Tabs>
        {index === 0 ? <CurrentMembers members={this.sort(members, "Ethan Cantlin")}/> : undefined}
        {index === 1 ? <Candidates candidates={this.sort(candidates, "Nick Clegg")}/> : undefined}
      </div>
    );
  }

}

Members.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.string),
  members: PropTypes.arrayOf(PropTypes.string)
}

export default Members;
