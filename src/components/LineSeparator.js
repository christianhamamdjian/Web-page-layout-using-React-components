import React from 'react'
import '../App.css'
import border_bg from '../assets/border_bg.jpg'

const LineSeparator = ({ title }) => {

  return (
    <div style={{ backgroundImage: `url(${border_bg})` }} className="line-separator">
      <h2>{title}</h2>
    </div>
  )
}

export default LineSeparator