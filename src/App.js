import React, { Component } from 'react';
import DiceBag from './Components/DiceBag';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <DiceBag startDice={['stnd']}/>
      </div>
    );
  }
}

export default App;
