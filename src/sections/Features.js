import React from 'react'
import '../App.css'
import FeatureCard from '../components/FeatureCard'


const Feature = ({ content }) => {

  return (
    <section className="features">
      {content.map((feature, index) => {
        const { icon, title, text, button } = feature
        return (
          <FeatureCard key={index} icon={icon} title={title} text={text} button={button} />
        )
      })}
    </section>
  )
}

export default Feature

