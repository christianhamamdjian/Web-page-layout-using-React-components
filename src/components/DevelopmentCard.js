import React from 'react'
import '../App.css'

const DevelopmentCard = ({ title, text, button }) => {

  return (
    <div>
      <div className="development-card">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="feature-card-button">
          {button}
        </button>
        {/* <button className="development-card-button">{button}</button> */}
      </div>
    </div>
  )
}

export default DevelopmentCard