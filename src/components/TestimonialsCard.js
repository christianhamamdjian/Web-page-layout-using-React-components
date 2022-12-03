import React from 'react'
import '../App.css'

const TestimonialsCard = ({ title, text }) => {

  return (
    <div className="testimonials-card">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="outer-triangle-white"></div>
    </div>
  )
}

export default TestimonialsCard