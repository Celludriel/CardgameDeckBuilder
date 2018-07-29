import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'

class DeckInformation extends Component {

    render(){
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Card>== pie chart here ==</Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Card>== deck information here ==</Card>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" size="small" >
                          <DeleteIcon />
                          Delete
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default DeckInformation;
