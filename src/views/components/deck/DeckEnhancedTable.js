import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeckTableHead from './DeckTableHead';

let counter = 0;
function createData(cardname) {
  counter += 1;
  return { id: counter, cardname };
}

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
      orderBy: 'cardname',
      selected: [],
      data: [
        createData('Cupcake'),
        createData('Donut'),
        createData('Eclair'),
        createData('Frozen yoghurt'),
        createData('Gingerbread'),
        createData('Honeycomb'),
        createData('Ice cream sandwich'),
        createData('Jelly Bean'),
        createData('KitKat'),
        createData('Lollipop'),
        createData('Marshmallow'),
        createData('Nougat'),
        createData('Oreo')
      ],
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
    const { data, order, orderBy } = this.state;

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
                        {n.cardname}
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

export default LibraryEnhancedTable;
