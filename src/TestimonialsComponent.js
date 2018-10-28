import React from 'react';
import './App.css';
import TestimonialsCardComponent from './TestimonialsCardComponent';
import LineSeparatorComponent from './LineSeparatorComponent';

class TestimonialsComponent extends React.Component {
    render() {
      return (
        <div className="App-testimonials">
       <LineSeparatorComponent title = "TESTIMONIALS" /> 
       <div className="testimonials">
        
        <TestimonialsCardComponent title = "John Smith" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <TestimonialsCardComponent title = "Jane Smith" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <TestimonialsCardComponent title = "Jill Smith" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <TestimonialsCardComponent title = "Jeff Smith" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
        </div>
      );
    }
  }

  export default TestimonialsComponent;