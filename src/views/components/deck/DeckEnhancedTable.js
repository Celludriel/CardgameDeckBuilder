import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeckTableHead from './DeckTableHead';

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

class DeckEnhancedTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'cardname',
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

  render() {
    const { data } = this.props;
    const { order, orderBy } = this.state;

    return (
      <Paper>
        <div>
          <Table aria-labelledby="tableTitle">
            <DeckTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .map(n => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {n.setCode}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.supertype}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.subtype}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.types}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.amount}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default DeckEnhancedTable;
