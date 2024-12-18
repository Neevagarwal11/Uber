import React, { useState , useRef ,useEffect} from 'react'
import {Link , useLocation} from 'react-router-dom'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/liveTracking'

function CaptainRiding() {    

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const FinishRideRef = useRef(null)
    const location = useLocation()
    const { ride } = location.state || {}
    

  useEffect(()=>{

    if(finishRidePanel){

      gsap.to(FinishRideRef.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(FinishRideRef.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[finishRidePanel])
 

  return (
<div className="h-screen ">
      <img  className='w-12 absolute left-5 top-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

    <div>
    <Link to='/home' className="fixed h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full"><i className="ri-logout-box-r-line"></i></Link>
    </div>

      <div className="h-4/5">
      <LiveTracking className="h-[900px]"></LiveTracking>
      </div>

      <div onClick={()=>{setFinishRidePanel(true)}} className="h-1/5 relative p-6 flex items-center  justify-center flex-col  bg-yellow-400">
            <h5 className="p-1  text-center absolute top-0 w-[90%]" > <i className="text-2xl pt-14 ri-arrow-up-s-line"></i></h5>
            <h4 className='text-xl mt-2 font-semibold'>4 KM away</h4>
            <button className="w-full mt-5 flex justify-center items-center  bg-green-500 text-white font-semibold p-3 rounded-lg">Complete Ride</button>
      </div>

      <div ref={FinishRideRef} className='translate-y-full  bg-white fixed px-3 py-8 pt-12 z-[500] bottom-0 w-full'>
        <FinishRide ride={ride}  setFinishRidePanel={setFinishRidePanel}></FinishRide>
      </div>


 

 

    </div>  )
}

export default CaptainRiding