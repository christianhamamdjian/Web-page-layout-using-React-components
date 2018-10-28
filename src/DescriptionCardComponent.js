import React from 'react';
import './App.css';


function DescriptionCardComponent (props) {
      return (
        <div className="App-description-card">
        <div className="icon"><i className={props.icon} aria-hidden="true"></i></div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button className="App-description-card-button">{props.button}</button>
        </div>
      );
  }

  export default DescriptionCardComponent;