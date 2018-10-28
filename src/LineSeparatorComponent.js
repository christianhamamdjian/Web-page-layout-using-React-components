import React from 'react';
import './App.css';


class LineSeparatorComponent extends React.Component {
    render() {
      return (
        <div className="App-line-separator">
        <h2>{this.props.title}</h2>
        </div>
      );
    }
  }

  export default LineSeparatorComponent;