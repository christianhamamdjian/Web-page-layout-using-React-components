import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <MainComponent></MainComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
