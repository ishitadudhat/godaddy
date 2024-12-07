import React from 'react'
import marketing from './image/marketing.webp'

function Marketing() {
  return (
    <>
      <p className='mark-p1'>Grow your brand
        with Websites + Marketing.</p>
      {/* <img className='mark-img1' src=
{marketing} alt="first picture" /> */}
      <div id='mark-bg-img1'>

      </div>

      <div className="marketing-container">
        <div className="marketing-item">
          <h2>Get online fast. No design skills needed.</h2>
          <p>Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
        </div>
        <div className="marketing-item">
          <h2>Build trust with email that matches your domain.</h2>
          <p>Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
        </div>
        <div className="marketing-item">
          <h2>Engage with marketing tools.</h2>
          <p>Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
        </div>
      </div>


      <div className='mark-btn'>Start for Free</div>

    </>
  )
}

export default Marketing
