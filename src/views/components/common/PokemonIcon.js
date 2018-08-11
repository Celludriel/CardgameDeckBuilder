import React, {Component} from 'react';

const electron = window.require('electron');
const app = electron.remote.app;


const iconPath = "atom:///" + app.getAppPath().split("\\").join("/") + "/data/pokemon_symbols.jpg";
const pokemonIcons = {
    'Grass': {
        background: "url('"+iconPath+"') no-repeat -111px -155px",
    },
    'Darkness': {
        background: "url('"+iconPath+"') no-repeat -170px -269px",
    },
    'Colorless': {
        background: "url('"+iconPath+"') no-repeat -170px  -40px",
    },
    'Fighting': {
        background: "url('"+iconPath+"') no-repeat -54px  -40px",
    },
    'Fire': {
        background: "url('"+iconPath+"') no-repeat -342px  -155px",
    },
    'Lightning': {
        background: "url('"+iconPath+"') no-repeat -54px  -269px",
    },
    'Water': {
        background: "url('"+iconPath+"') no-repeat -400px  -40px",
    },
    'Psychic': {
        background: "url('"+iconPath+"') no-repeat -284px  -40px",
    },
    'Metal': {
        background: "url('"+iconPath+"') no-repeat -284px  -269px",
    },
    'Dragon': {
        background: "url('"+iconPath+"') no-repeat -400px  -269px",
    },
    'Fairy': {
        background: "url('"+iconPath+"') no-repeat -226px  -155px",
    }
}

class PokemonIcon extends Component {

    render(){
        const { size, type } = this.props;
        return (
            <div style={{
                background: pokemonIcons[type].background,
                width: '115px',
                height: '115px',
                zoom: size
            }}/>
        )
    }
}

export default PokemonIcon;
