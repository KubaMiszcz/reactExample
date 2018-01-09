import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="circle" alt="logo" />
          <img src="https://github.com/" className="circle" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card/>
      </div>
    );
  }
}

export default App;
