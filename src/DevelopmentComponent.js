import React from 'react';
import './App.css';
import DevelopmentCardComponent from './DevelopmentCardComponent';
import LineSeparatorComponent from './LineSeparatorComponent';

class DevelopmentComponent extends React.Component {
    render() {
      return (
        <div className="App-development">
        <LineSeparatorComponent title = "DEVELOPMENT" />
        <div className="development">
      
        <DevelopmentCardComponent title = "John Smith" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
        </div>
      );
    }
  }

  export default DevelopmentComponent;