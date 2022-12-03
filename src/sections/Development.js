import React, { useState } from 'react'
import '../App.css'
import DevelopmentCard from '../components/DevelopmentCard'
import LineSeparator from '../components/LineSeparator'

const Development = ({ content }) => {
  const [value, setValue] = useState(0)

  const { title, text, button } = content[value]

  return (
    <section className="development">
      <LineSeparator title="DEVELOPMENT" />
      <div className="development-content">
        <div className="development">
          {content.map((el, index) => {
            return (
              <button
                key={index}
                className={`dev-button ${index === value && 'dev-button-active'}`}
                onClick={() => setValue(index)}
              >{el.tab_name}</button>
            )
          })}
          <div className="development">
            <DevelopmentCard title={title} text={text} button={button} />
          </div></div>
      </div>

    </section >
  )
}

export default Development