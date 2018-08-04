import React, {Component} from 'react';

import DeckEnhancedTable from './DeckEnhancedTable';

class DeckContents extends Component {

    render(){
        const { data, selectCard } = this.props;
        return (
            <div>
                <DeckEnhancedTable data={data} selectCard={selectCard}/>
            </div>
        )
    }
}

export default DeckContents;
