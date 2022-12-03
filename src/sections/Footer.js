import React from 'react'
import '../App.css'
import FooterCard from '../components/FooterCard'

const Footer = ({ footer, footer_tweets, footer_posts }) => {
  const flickerSquares = (
    Array.from(Array(8)).map((el, index) => {
      return (
        <div key={index} className="flicker-squares"></div>
      )
    })
  )
  const socialSquares = (
    Array.from(Array(6)).map((el, index) => {
      return (
        <div key={index} className="social-squares"></div>
      )
    })
  )
  const date = new Date()

  return (
    <section className="footer">
      <div className="footer-content">
        <FooterCard content={footer} />
        <FooterCard content={footer_tweets} />
        <FooterCard content={footer_posts} />
        <div className="footer-card-right">
          <h2>FLICKR</h2>
          <div>{flickerSquares}</div>
        </div>
      </div>
      <div className="footer-slug">
        <div>COPYRIGHT &copy; {date.getFullYear()}</div>
        <div>{socialSquares}</div>
      </div>
    </section>
  )
}

export default Footer