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

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

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
                  {rows
                    .sort(getSorting(order, orderBy))
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
