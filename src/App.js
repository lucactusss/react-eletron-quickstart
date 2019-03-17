import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            React + Electron ={' '}
            <span role="img" aria-label="love">
              😍
            </span>
          </h2>
        </div>
        <p className="App-intro">
          <b> Release 0.2.7 </b>
        </p>
      </div>
    );
  }
}

export default App;
