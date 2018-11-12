import React, { Component } from 'react';
import './App.css';
import MediaContainer from './Containers/MediaContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">PALIS</h2>
        <MediaContainer />
      </div>
    );
  }
}

export default App;
