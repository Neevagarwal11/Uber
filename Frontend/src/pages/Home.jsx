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
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelref = useRef(null)

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

  useEffect(()=>{

    if(vehiclePanel){

      gsap.to(vehiclePanelref.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
            gsap.to(vehiclePanelref.current,{
              
              transform:'translateY(100%)'
            })
      
    }

  },[vehiclePanel])
 

  const submitHandler =  (e) =>{
    e.preventDefault() //If user reloads my mistake it wont submit the form

  }




  return (
    <div className='h-screen relative overflow-hidden'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16 absolute left-5 top-5' />

      <div className='h-screen w-full' onClick={()=>{ setVehiclePanel(false) ,setPanelOpen(false) }}>
        {/* Temporary Image */}
        <img className='w-full h-full object-cover' src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp" alt="" />
      </div>

      <div className=' absolute h-screen flex flex-col justify-end top-0 w-full '>
        <div className='h[30%] p-5 bottom-0  bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute  top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div className='line absolute h-14 left-[10%] rounded-full top-1/2 w-1 bg-black'></div>
          <input value={pickup}       onChange={(e)=>{ setPickup(e.target.value) }}      onClick={()=>{setPanelOpen(true)}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Add a Pick-Up Location' />
          <input value={destination}  onChange={(e)=>{ setDestination(e.target.value) }} onClick={()=>{setPanelOpen(true)}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Enter your Destination' />
        </form>
        
        </div>


        <div ref={panelRef} className=' bg-white  h-[0%] '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} ></LocationSearchPanel>
        </div>

      </div>



      <div ref={vehiclePanelref} className='vehicleSelection translate-y-full  bg-white fixed px-3 py-8 z-10 bottom-0 w-full'>
      <h5 className='p-1  text-center absolute top-0 w-[90%]' onClick={()=>{setVehiclePanel(false)}}><i className="text-2xl pt-14 ri-arrow-down-s-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

          <div className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-6-line"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable, compact rides.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹193.20</h2>
          </div>

          <div className='flex  mb-2 active:border-black rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Moto <span><i className="ri-user-6-line"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable Motorcycle ride.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹65.20</h2>
          </div>

          <div className='flex  mb-2 active:border-black rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Auto<span><i className="ri-user-6-line"></i>3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable Auto ride.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹120.20</h2>
          </div>


      </div>


    </div>
  )
}

export default Home