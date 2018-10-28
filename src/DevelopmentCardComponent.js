import React from 'react';
import './App.css';


class DevelopmentCardComponent extends React.Component {
    render() {
      return (
        <div>
        <div className="dev-button">DESIGN</div>
        <div className="dev-button-dark">PRODUCTION</div>
        <div className="App-development-card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <button className="App-description-card-button">READ MORE</button>
        </div>
        </div>
      );
    }
  }

  export default DevelopmentCardComponent;