import React from 'react'
import '../App.css'

const FooterCard = ({ content: { title, text } }) => {
  console.log(text)

  return (
    <div className="footer-card">
      <h2>{title}</h2>
      {text.map((el, index) => {
        return (
          <ul key={index}>
            <li>{el}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default FooterCard