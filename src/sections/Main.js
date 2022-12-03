import React from 'react'
import '../App.css'
import Description from './Features'
import RecentWork from './RecentWork'
import Testimonials from './Testimonials'
import Development from './Development'
import CallToAction from '../components/CallToAction'
import border_bg from 'border_bg.jpg'

const Main = ({ feature_names, recent_work, testimonials, development, cta }) => {
  const { title: ctaTitle, button: ctaButton } = cta[0]

  return (
    <>
      <section className="main-section">
        <div className="main-section-container">
          <div
            style={{ backgroundImage: `url(${border_bg})` }}
            className="line-separator" ></div>
          <Description
            content={feature_names} />
          <RecentWork
            content={recent_work} />
          <div className="bottom-section">
            <Testimonials
              content={testimonials} />
            <Development
              content={development} />
          </div>
        </div>
        <CallToAction
          title={ctaTitle}
          button={ctaButton} />
      </section>
    </>
  )
}


export default Main