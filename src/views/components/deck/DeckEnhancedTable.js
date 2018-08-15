import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Remove'

import DeckTableHead from './DeckTableHead';
import PokemonIconArray from '../common/PokemonIconArray';

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

  removeCardFromDeck = (event, id) => {
    const { removeCardFromDeck } = this.props;
    removeCardFromDeck(id);
  };

  normalizeData = (data) => {
      let entries = Object.entries(data);
      let returnValue = [];
      entries.forEach(
      	function(entry){
          entry[1].id = entry[0];
          returnValue.push(entry[1]);
        }
      )
      return returnValue;
  }

  render() {
    const { data } = this.props;
    const { order, orderBy } = this.state;
    let tableData = this.normalizeData(data);

    var sortedRows = tableData.length > 0 ? this.mergeSort(tableData) : [];

    return (
        <div style={{ height: "375px", overflow: "auto" }}>
          <Table aria-labelledby="tableTitle">
            <DeckTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {sortedRows
                .map(n => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={n.id}
                      onClick={event => this.handleClick(event, n.id)}
                    >
                      <TableCell component="th" scope="row" padding="none">
                          <Button variant="contained" size="small" onClick={event => this.removeCardFromDeck(event, n.id)} >
                            <RemoveIcon />
                          </Button>
                      </TableCell>
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
                          {n.types !== undefined &&
                              <PokemonIconArray data={n.types} />
                          }
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
    );
  }
}

export default DeckEnhancedTable;
