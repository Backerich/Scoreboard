import React, { Component } from 'react';
import './App.css';
import Application from './components/Application';

var PLAYERS = [
  {
    name: "Ron Weasley",
    score: 31,
    id: 1,
  },
  {
    name: "Peter Maffay",
    score: 10,
    id: 2,
  },
  {
    name: "Albus Dumbledore",
    score: 1,
    id: 3,
  },
]

class App extends Component {
  render() {
    return (
      <Application title="Scoreboard" initialPlayers={PLAYERS}/>
    );
  }
}

export default App;
