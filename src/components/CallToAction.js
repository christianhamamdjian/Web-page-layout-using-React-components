import React from 'react'
import '../App.css'

const CallToAction = ({ title, button }) => {

  return (
    <div className="action-call">
      <p className="call-text">{title}</p>
      <button className="button-white">{button}</button>
      <div className="outer-triangle"></div>
    </div>
  )
}

export default CallToAction








