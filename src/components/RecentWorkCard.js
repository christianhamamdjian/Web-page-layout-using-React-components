import React from "react"
import "../App.css"

const RecentWorkCard = ({ image, title, text }) => {

  return (
    <div className="recent-work-card">
      <img alt="" src={image} />
      <h2>{title}</h2>
      <p>{text}</p>
      {/* <div className="recent-work-triangle-white" /> */}
    </div>
  )
}

export default RecentWorkCard
