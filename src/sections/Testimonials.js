import React from 'react'
import '../App.css'
import TestimonialsCard from '../components/TestimonialsCard'
import LineSeparator from '../components/LineSeparator'

const Testimonials = ({ content }) => {

  return (
    <section className="testimonials">
      <LineSeparator title="TESTIMONIALS" />
      <div className="testimonials-content">
        {content.map(({ title, text }, index) => {
          return (
            <TestimonialsCard
              key={index}
              title={title}
              text={text} />
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials