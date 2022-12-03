import React from 'react'
import '../App.css'
import CallToAction from '../components/CallToAction'

const Header = ({ content: { hero_image, title, slogan, button }, cta }) => {
  const { title: ctaTitle, button: ctaButton } = cta[0]
  return (
    <section className="header">
      <header className="header-content">
        <div className="header-left">
          <img src={hero_image} className="logo" alt="logo" />
        </div>
        <div className="header-right">
          <h1 className="title">POWERFULLY SIMPLE <span className="title-dark">WITH A</span> SQUEEKY CLEAN <span className="title-dark">DESIGN</span></h1>
          <p className="intro">{slogan}</p>
          <button className="button">{button}</button>
        </div>
      </header>
      <CallToAction
        title={ctaTitle}
        button={ctaButton} />
    </section >
  )
}

export default Header