import React from "react";
import PropTypes from "prop-types";

//material-ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

/**
 * displays a list of lists as a custom table where each index in the outer list
 * is a row and every index in the inner list is a column
 */
class CustomTable extends React.Component {

  render() {
      const {grid} = this.props;
      return(
        <Table>
          <TableBody>
            {grid.map((row, i) =>
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

CustomTable.propTypes = {
  ///prospective candidates of the society
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default CustomTable;
