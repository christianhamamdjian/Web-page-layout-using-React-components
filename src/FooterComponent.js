import React from 'react';
import './App.css';
import FooterCardComponent from './FooterCardComponent';

class FooterComponent extends React.Component {

  render() {
    const square = <div><div className="square"></div><div className="square"></div><div className="square"></div><div className="square"></div></div>;
    return (
      <div className="App-footer">
        <div className="App-footer-content">
          <FooterCardComponent title="ABOUT US" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <FooterCardComponent title="LATEST TWEETS" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <FooterCardComponent title="LATEST POSTS" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <FooterCardComponent title="FLICKR" content={square}> </FooterCardComponent>
        </div>
        <div className="footer-slug"><p>COPYRIGHT &copy; 2022</p>
        </div>
      </div>
    );
  }
}

export default FooterComponent;