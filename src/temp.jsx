import React from 'react';

const electron = window.require('electron');
const app = electron.remote.app;

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <img alt="test" src={app.getAppPath() + '/data/test.png'} />
    </div>);
  }
}
