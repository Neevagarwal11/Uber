import React, { useEffect, useRef , useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

function Home() {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  useEffect(()=>{

    if(panelOpen){
      
      gsap.to(panelRef.current, {
        height:"70%",
        opacity:1,
        padding:"20px"
      });
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      
      gsap.to(panelRef.current, {
        height:"0%",
        opacity:0,
        padding:'0px'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
      
    }
  },[panelOpen])

 

  const submitHandler =  (e) =>{
    e.preventDefault() //If user reloads my mistake it wont submit the form

  }




  return (
    <div className='h-screen relative'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16 absolute left-5 top-5' />

      <div className='h-screen w-full'>
        {/* Temporary Image */}
        <img className='w-full h-full object-cover' src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp" alt="" />
      </div>

      <div className=' absolute h-screen flex flex-col justify-end top-0 w-full '>
        <div className='h[30%] p-5 bottom-0  bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div className='line absolute h-14 left-[10%] rounded-full top-1/2 w-1 bg-black'></div>
          <input value={pickup}       onChange={(e)=>{ setPickup(e.target.value) }}      onClick={()=>{setPanelOpen(true)}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Add a Pick-Up Location' />
          <input value={destination}  onChange={(e)=>{ setDestination(e.target.value) }} onClick={()=>{setPanelOpen(true)}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Enter your Destination' />
        </form>
        
        </div>


        <div ref={panelRef} className=' bg-white  h-[0%] '>
          <LocationSearchPanel></LocationSearchPanel>
        </div>

      </div>

      <div className='vehicleSelection bg-white fixed z-10 bottom-0 w-full h-screen'>
          <div className='flex items-center bg-red-50 justify-between'>
            <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Car Png  " />
            <div className='bg-green-400  '>
              <h4>UberGo <span><i className="ri-user-6-line"></i>4</span></h4>
              <h5>2 mins away</h5>
              <p>Affordable, compact rides.</p>
            </div>
            <h2>₹193.20</h2>
          </div>
      </div>


    </div>
  )
}

export default Home