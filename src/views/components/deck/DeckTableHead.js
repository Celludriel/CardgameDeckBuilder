import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

const columnData = [
  { id: 'setCode', numeric: false, disablePadding: true, label: 'Set' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Cardname' },
  { id: 'supertype', numeric: false, disablePadding: true, label: 'Supertype' },
  { id: 'subtype', numeric: false, disablePadding: true, label: 'Subtype' },
  { id: 'types', numeric: false, disablePadding: true, label: 'Color' },
  { id: 'amount', numeric: true, disablePadding: true, label: 'Amount' }
];

class LibraryTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
            <TableCell
              key={'action'}
              numeric={false}
              padding={'none'}
            >
              Action
            </TableCell>
            {columnData.map(column => {
                return (
                  <TableCell
                    key={column.id}
                    numeric={column.numeric}
                    padding={column.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <Tooltip
                      title="Sort"
                      placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={order}
                        onClick={this.createSortHandler(column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

LibraryTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
};

export default LibraryTableHead;
