import React from 'react'
import './App.css'
import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'
import data from './data'

const App = () => {
  const {
    header,
    call_to_action,
    feature_names,
    recent_work,
    testimonials,
    development,
    footer,
    footer_tweets,
    footer_posts
  } = data

  return (
    <div className="App">
      <Header
        content={header}
        cta={call_to_action} />
      <Main
        feature_names={feature_names}
        recent_work={recent_work}
        testimonials={testimonials}
        cta={call_to_action}
        development={development} />
      <Footer
        footer={footer}
        footer_tweets={footer_tweets}
        footer_posts={footer_posts} />
    </div>
  )
}

export default App
