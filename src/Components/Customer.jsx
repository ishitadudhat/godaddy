import React from 'react'
import customer from './image/customer3.png'
import customer2 from './image/customer-star4-2.png'
import customer3 from './image/customer-star1.png'

function Customer() {
  return (
    <>
      <div>
        <h1 className='customer-h1'>Onward and upward with our customers.</h1>
        <div className='customer-img-container'>

          {/* <img className='customer-img' src={customer} alt="Customer" /> */}
          <div className='customer-img-div2'>
            <p className='customer-p1'>“GoDaddy's Website Builder is super-convenient for somebody who has an idea of what they're trying to create, but might not have any technical skills.”</p>

            <div className='customer-div3'>
              <div className='customer-div-ul'>
                <ul>
                  <li>Products used by</li>
                  <li className='tw-font-bold'>Roletape:</li>
                </ul>
                <ul>
                  <li>
                    <img src="" alt="Customer" />
                    <div>
                      <a>
                        <span>Domain</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <img src="" alt="Customer" />
                    <div>
                      <a>
                        <span>Online Store</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <img src="" alt="Customer" />
                    <div>
                      <a>
                        <span>SSL Certificates</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img className='customer-img' src={customer} alt="image" />
              </div>
            </div>
          </div>
        </div>


        <p className='customer-p2'>Trusted by 20+ million customers around the world.</p>

        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                  <div class="card-body">
                    <p class="card-title">THE SUPPORT PERSON HAVE GOOD KNOWLEDGE...</p>
                    <img className='customer-card1img' src={customer2} alt="" />
                    <p class="card-text">The support person have good knowledge and help with good suggestion on improving my setting that is extraordinary.</p>
                  </div>
                  <br></br>
                  <div class="card-footer">
                    <small className="card-footer-text">Niraj Singh</small>
                  </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                  <div class="card-body">
                    <h5 class="card-title">10 ON 10 CUSTOMER SUPPORT.</h5>
                    <img className='customer-card1img' src={customer2} alt="" />
                    <p class="card-text">The support provided by GoDaddy is the best in the industry with knowledgeable customer agents and best practices. They offer the best rates upfront over the call.</p>
                  </div>
                  <div class="card-footer">
                    <small class="card-footer-text">Chandrashekhar Mhaskar</small>
                  </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                  <div class="card-body">
                    <h5 class="card-title">GOOD COMMUNICATION SKILL BY SUPPORT ASSISTANT</h5>
                    <img className='customer-card1img' src={customer2} alt="" />
                    <p class="card-text">Great Product and Service Customer Support Assistance from Godadddy Support Team</p>
                  </div>
                  <div class="card-footer">
                    <small class="card-footer-text">Prashant Khambhayata</small>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img className='customer-img3' src={customer3} alt="" />
          <p className='customer-p3'>4.6 out of 5 stars based on 110,937 reviews  <span className='customer-sp1'>  |  </span> Showing our 4 and 5 star reviews.</p>
        </div>
      </div>
    </>
  )
}

export default Customer
