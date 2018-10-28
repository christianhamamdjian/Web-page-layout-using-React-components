import React from 'react';
import './App.css';


class TestimonialsCardComponent extends React.Component {
    render() {
      return (
        <div className="App-testimonials-card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <div className="outer-triangle-white"></div>
        </div>
      );
    }
  }

  export default TestimonialsCardComponent;