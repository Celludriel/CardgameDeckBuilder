import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import LibraryTableHead from './LibraryTableHead';
import PokemonIconArray from '../common/PokemonIconArray';

class LibraryEnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [],
      page: 0,
      rowsPerPage: 8,
    };
  }

  // Split the array into halves and merge them recursively
  mergeSort = (arr) => {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return this.merge(this.mergeSort(left),this.mergeSort(right));
  }

  // compare the arrays item by item and return the concatenated result
  merge = (left, right) => {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if(this.state.order === 'asc'){
            if (left[indexLeft][this.state.orderBy] < right[indexRight][this.state.orderBy]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        } else {
            if (left[indexLeft][this.state.orderBy] > right[indexRight][this.state.orderBy]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const { selectCard } = this.props;

    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    selectCard(newSelected[0]);
  };

  addCardToDeck = (event, id) => {
    const { addCardToDeck } = this.props;
    addCardToDeck(id);
  };

  render() {
    const { order, orderBy, rowsPerPage, page } = this.state;
    const { rows, showAdd } = this.props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    var sortedRows = this.mergeSort(rows);

    return (
        <div>
            <div style={{ height: "450px", overflow: "auto" }}>
              <Table aria-labelledby="tableTitle">
                <LibraryTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                />
                <TableBody>
                  {sortedRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={n.id}
                          onClick={event => this.handleClick(event, n.id)}
                        >
                          <TableCell component="th" scope="row" padding="none">
                            {n.setCode}
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            {n.name}
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            {n.types !== undefined &&
                                <PokemonIconArray data={n.types} />
                            }
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                              {showAdd && <Button variant="contained" size="small" onClick={event => this.addCardToDeck(event, n.id)}>
                                  <AddIcon />
                                </Button>}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div>
              <TablePagination
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                      'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                      'aria-label': 'Next Page',
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  rowsPerPageOptions={[8,16,24]}
              />
            </div>
        </div>
    );
  }
}

export default LibraryEnhancedTable;
