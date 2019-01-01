import React from "react";
import PropTypes from "prop-types";

//material-ui
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

//inhouse
import CustomTable from "./helpers/CustomTable.jsx";

/**
 * the members of the society displayed in two tables; one for candidates and
 * one for current members
 */
class Members extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0 //index to select candidates or members
    }
  }

  /**
   * makes a grid with columns specified in the members property; inserts an
   * easter egg member if length is greater than 15
   *
   * @param l_unsorted ([str]): unsorted list of names to be made into a grid
   * @param name (str): the name of easter egg inserted when length is larger
   * than twenty
   *
   * @return [[str]]: a sorted grid that copies data from l_unsorted
   */
  makeGrid = (l_unsorted, name) => {
    //handles the easter egg
    let sorted_members = [];
    if(l_unsorted.length > 15){
      sorted_members.push(name);
    }else{
      name = "";
    }

    //copy of sorted members
    for(let m of l_unsorted){
       if(m.toLowerCase() === name) continue; //easter egg
       sorted_members.push(m);
    }
    sorted_members.sort();

    //makes a grid out of the sorted list
    let grid = [[]];
    for(let m of sorted_members){
      let last_i = grid.length - 1;
      if(grid[last_i].length >= this.props.columns){
        grid.push([m]);
      }else{
        grid[last_i].push(m);
      }
    }
    return grid;
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
        {index === 0 &&
          <CustomTable grid={this.makeGrid(members, "Ethan Cantlin")}/>
        }
        {index === 1 &&
          <CustomTable grid={this.makeGrid(candidates, "Nick Clegg")}/>
        }
      </div>
    );
  }

}

Members.propTypes = {
  ///prospective candidates of the society
  candidates: PropTypes.arrayOf(PropTypes.string),
  ///current members of the society
  members: PropTypes.arrayOf(PropTypes.string)
}

Members.defaultProps = {
  ///number of columns presented for candidates and members
  columns: 3
}

export default Members;
