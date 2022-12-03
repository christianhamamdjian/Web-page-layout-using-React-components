import React from 'react'
import '../App.css'

const LineSeparator = ({ title }) => {

  return (
    <div style={{ backgroundImage: `url('../assets/border_bg.jpg')` }} className="line-separator">
      <h2>{title}</h2>
    </div>
  )
}

export default LineSeparator