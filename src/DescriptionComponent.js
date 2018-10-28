import React from 'react';
import './App.css';
import DescriptionCardComponent from './DescriptionCardComponent';


function DescriptionComponent (props) {
      return (
        <div className="App-description">
        <DescriptionCardComponent icon = "fa fa-mobile" title = "SUPERBLY RESPONSIVE" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button = "READ MORE" />

        <DescriptionCardComponent icon = "fa fa-desktop" title = "SQUEEKY CLEAN" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button = "READ MORE" />

        <DescriptionCardComponent icon = "fa fa-laptop" title = "MULTY PURPOSE" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button = "READ MORE" />

        <DescriptionCardComponent icon = "fa fa-repeat" title = "HIGHLY FLEXIBLE" content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." button = "READ MORE" />
        </div>
      );
  }

  export default DescriptionComponent;