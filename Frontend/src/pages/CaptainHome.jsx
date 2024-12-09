import React from 'react'
import {Link} from 'react-router-dom'

function CaptainHome() {
  return (
    <div className="h-screen">
      <img  className='w-12 absolute left-5 top-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

    <div>
    <Link to='/home' className="fixed h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full"><i class="ri-logout-box-r-line"></i></Link>

    </div>

      <div className="h-1/2 ">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
      <div>
        <div>
          <img src="" alt="" />
          <h4>Ayaan</h4>
        </div>
        <div>₹295.40</div>
        <p>Earned</p>
      </div>


      </div>
    </div>
  )
}

export default CaptainHome