import React from 'react'
import '../App.css'

const FeatureCard = ({ icon, title, text, button }) => {

  return (
    <div className="feature-card">
      <div className="icon">
        <i className={icon} aria-hidden="true"></i>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="feature-card-button">
        {button}
      </button>
    </div>
  )
}

export default FeatureCard