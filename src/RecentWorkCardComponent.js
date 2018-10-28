import React from "react";
import "./App.css";

class RecentWorkCardComponent extends React.Component {
  render() {
    return (
      <div className="App-recent-work-card">
        <img alt="" src={this.props.image} />
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <div className="recent-work-triangle-white" />
      </div>
    );
  }
}

export default RecentWorkCardComponent;
