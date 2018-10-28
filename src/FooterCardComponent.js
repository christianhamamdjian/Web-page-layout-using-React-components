import React from 'react';
import './App.css';


class FooterCardComponent extends React.Component {
    render() {
      return (
        <div className="App-footer-card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        </div>
      );
    }
  }

  export default FooterCardComponent;