import React from 'react';
import './App.css';
import DescriptionComponent from './DescriptionComponent';
import RecentWorkComponent from './RecentWorkComponent';
import TestimonialsComponent from './TestimonialsComponent';
import DevelopmentComponent from './DevelopmentComponent';
import CallToActionComponent from './CallToActionComponent';

class MainComponent extends React.Component {
    render() {
      return (
<div className = "main-section">
<div className="App-line-separator"></div>
<DescriptionComponent />
<RecentWorkComponent />
<div className = "bottom-section">
<TestimonialsComponent />
<DevelopmentComponent />
</div>
<CallToActionComponent text ="GET IN TOUCH WITH US NOW!" button = "CONTACT US" />
        </div>
      );
    }
  }

  export default MainComponent;