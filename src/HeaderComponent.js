import React from 'react';
import logo from './assets/Header-img.png';
import './App.css';
import CallToActionComponent from './CallToActionComponent';


class HeaderComponent extends React.Component {
    render() {
      return (
        <div className="App-header">
          <header className="App-header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">POWERFULLY SIMPLE WITH A SQUEEKY CLEAN DESIGN.</h1>
            <p className="App-intro">Find out how you can offer quick and powerful solutions to your customers now!</p>
          <button className="App-button">LEARN MORE</button>
          <CallToActionComponent text ="CREATE A POWERFULL SOLUTION NOW!" button = "GET STARTED" />
          </header>
          
        </div>
      );
    }
  }

  export default HeaderComponent;