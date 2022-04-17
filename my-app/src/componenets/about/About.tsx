import React from 'react'
import "../about/about.css"
import firstImg from '../../assets/kti tiles.jpg'
export default function About() {
  return (
    <div>
      <img src={firstImg} alt="about Image" width="100%" height="50%" />
      <div className='textDiv'>
        <p>
          We deliver the most reliable & extensive connectivity to our customers by deploying a state-of-art network
          infrastructure equipped with the latest technology and process innovation.
          Our solutions span key customer segments ranging from; Home Broadband Users, Enterprise Customers & OTT providers,
          Service Providers, and many others. Our key products focused on these segments are: High-speed fiber-based broadband solutions,
          Internet Leased Lines, High-speed Inter-office data connectivity, Lit & Dark fiber solutions,security servilance and CCTV,Video door phone,
          solar solutions, and Infra management services among others.
        </p>
        <h4>
          Our Vision
        </h4>
        <p>
          Our Vision is to enable our customers to live their lives to the fullest through a digital journey and open new possibilities.
        </p>
        <h4>
          Our Mission
        </h4>
        <p>
          Our mission is to deliver the most reliable & extensive connectivity to our customers by deploying state-of-art network infrastructure,
          equipped with latest technology and process innovation.
        </p>
      </div>
    </div>

  )
}
