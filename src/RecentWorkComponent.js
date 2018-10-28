import React from 'react';
import './App.css';
import placeholder from './assets/img-placeholder.png';
import RecentWorkCardComponent from './RecentWorkCardComponent';
import LineSeparatorComponent from './LineSeparatorComponent';

function RecentWorkComponent (props) {
      return (
      <div>
      <LineSeparatorComponent title = "RECENT WORK" />
      <div className="App-recent-work">
      <div className="App-recent-work-content">
      <RecentWorkCardComponent image = {placeholder} title = "Blog Title" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
      <RecentWorkCardComponent image = {placeholder} title = "Blog Title" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
      <RecentWorkCardComponent image = {placeholder} title = "Blog Title" content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
      </div>
      </div>
      </div>
      );
  }

  export default RecentWorkComponent;