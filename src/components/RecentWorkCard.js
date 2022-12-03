import React from "react"
import "../App.css"
import img_placeholder from '../assets/img_placeholder.png'

const RecentWorkCard = ({ title, text }) => {

  return (
    <div className="recent-work-card">
      <img alt="" src={img_placeholder} />
      <h2>{title}</h2>
      <p>{text}</p>
      {/* <div className="recent-work-triangle-white" /> */}
    </div>
  )
}

export default RecentWorkCard
