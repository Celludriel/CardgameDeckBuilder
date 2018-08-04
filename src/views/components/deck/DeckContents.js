import React, {Component} from 'react';

import DeckEnhancedTable from './DeckEnhancedTable';

class DeckContents extends Component {

    render(){
        const { data } = this.props;
        return (
            <div>
                <DeckEnhancedTable data={data} />
            </div>
        )
    }
}

export default DeckContents;
