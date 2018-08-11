import React, {Component} from 'react';

const electron = window.require('electron');
const app = electron.remote.app;


const iconPath = "atom:///" + app.getAppPath().split("\\").join("/") + "/data/pokemon_symbols.png";
const pokemonIcons = {
    'Grass': {
        background: "url('"+iconPath+"') no-repeat -1px -1px",
    },
    'Darkness': {
        background: "url('"+iconPath+"') no-repeat -238px -1px",
    },
    'Colorless': {
        background: "url('"+iconPath+"') no-repeat -482px  -1px",
    },
    'Fighting': {
        background: "url('"+iconPath+"') no-repeat -723px  -1px",
    },
    'Fire': {
        background: "url('"+iconPath+"') no-repeat -964px  -1px",
    },
    'Electric': {
        background: "url('"+iconPath+"') no-repeat -121px  -194px",
    },
    'Water': {
        background: "url('"+iconPath+"') no-repeat -362px  -194px",
    },
    'Psychic': {
        background: "url('"+iconPath+"') no-repeat -603px  -194px",
    },
    'Metal': {
        background: "url('"+iconPath+"') no-repeat -843px  -194px",
    }
}

class PokemonIcon extends Component {

    render(){
        const { size, type } = this.props;
        //console.log(app.getAppPath().split("\\").join("/"))
        return (
            <div style={{
                background: pokemonIcons[type].background,
                width: '130px',
                height: '130px',
                zoom: size
            }}/>
        )
    }
}

export default PokemonIcon;
