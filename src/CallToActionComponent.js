import React from 'react';
import './App.css';


class CallToActionComponent extends React.Component {
    render() {
      return (
        <div className="App-action-call">
        <p className="App-call-text">{this.props.text}</p>
        <button className="App-button-white">{this.props.button}</button>
        <div className="outer-triangle"></div>
        </div>
      );
    }
  }

  export default CallToActionComponent;








