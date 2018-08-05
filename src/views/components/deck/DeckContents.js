import React, {Component} from 'react';

import DeckEnhancedTable from './DeckEnhancedTable';

class DeckContents extends Component {

    render(){
        const { data, selectCard, removeCardFromDeck } = this.props;
        return (
            <div>
                <DeckEnhancedTable data={data}
                    selectCard={selectCard}
                    removeCardFromDeck={removeCardFromDeck} />
            </div>
        )
    }
}

export default DeckContents;
