import React, { Component } from 'react';
import ScoreButton from './ScoreButton';

import api from './utils/api'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ScoreButton/>
      </div>
    );
  }
}

export default App;
