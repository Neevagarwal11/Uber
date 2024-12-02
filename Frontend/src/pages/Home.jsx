import React from 'react'
import bg from '../assets/Home-bg.png'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='h-screen pt-8 w-full flex justify-between flex-col bg-cover bg-bottom ' style={{ backgroundImage: `url(${bg})` }}>
          <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="LOGO" />
          <div className='bg-white px-4 py-4 pb-7'>
            <h2 className='font-bold text-3xl'>Get Started with Uber</h2>
            <Link to='/userlogin' className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
          </div>
        </div>
    </div>

)
}

export default Home