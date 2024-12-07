import React from 'react'
import pic1 from './image/pic1.webp'
import pic2 from './image/pic4.webp'
import pic3 from './image/pic2.webp'

function Header() {
  return (
    <>
      <div className='header container mt-3 d-flex'>
        <div className='container'>
          <form className="d-flex" role="search">
            <input className="form-control me-2 search" type="search" placeholder="Type the domain you want" aria-label="Search" />
            <button className="btn btn-success srch-btn" type="submit"><span className='srch-text'>Search Domains</span>
              <span class="material-symbols-outlined srch-icon">
                search
              </span></button>
          </form>
        </div>

        <div className='d-flex div-price'>
          <p className='p1'>.pro</p>
          {/* <br></br> */}
          <p className='p2'> &#8377; 299.00*/1st yr.
            <br></br>
            <span className='sp1'>.Pro says you're the best.</span></p>

        </div>



      </div>

      <div className='container'>
        <p className='p3 tw-mt-3'>Popular products picked for you.</p>
        <div>
          <button type="button" class="btn btn-dark btn-2">Recommended</button>
          <button type="button" class="btn btn-light btn-3">Create my website</button>
          <button type="button" class="btn btn-light btn-4">Market my brand</button>

        </div>
      </div>

    <div className='headiv'>

      <div className='img1 tw-container'>
        <img src={pic1} alt="" className='photo1'/>
        <button className='pho1btn'>DOMAIN NAMES</button>
        <p className='headp1'>Grab a .com for ₹ 1.00* <br></br>/1st yr.</p>
        <p className='headsubp1'>3-year purchase required. <br></br>Additional year(s) ₹ 1,399.00*</p>
        <button className='pho1btn2'>Find Your Domain</button>
      </div>

      <div className='img2 tw-container'>
        <img src={pic2} alt="" className='photo2'/>
        <p className='headp2'>Announce your site is Coming<br></br> Soon.</p>
        <p className='headsubp2'>Build excitement before officially launching your new website.</p>
        <button className='pho2btn'>Start for free</button>
      </div>

      <div className='img3 tw-container'>
        <img src={pic3} alt="" className='photo3'/>
        <p className='headp3'>Use professional email to<br></br> build credibility.</p>
        <p className='headsubp3'>Match your email to your domain <br></br>to help establish trust. <br></br>(you@yourdomain.com)</p>
        <button className='pho3btn'>Learn More</button>
      </div>
      
    </div>
    <br></br>
      <br /><br />


    </>
  )
}

export default Header
