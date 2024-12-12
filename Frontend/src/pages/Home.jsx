import React, { useEffect, useRef , useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/vehiclePanel'
import ConfirmRide from '../components/ConfirmedVehicle'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/waitingForDriver'
import axios from 'axios'
import cookie from 'js-cookie'

function Home() {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelref = useRef(null)
  const [confirmedVehicle, setConfirmedVehicle] = useState(false)
  const confirmRide = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

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
 

  useEffect(()=>{

    if(confirmedVehicle){

      gsap.to(confirmRide.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(confirmRide.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[confirmedVehicle])


  useEffect(()=>{

    if(vehicleFound){

      gsap.to(vehicleFoundRef.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[vehicleFound])
 
  useEffect(()=>{

    if(waitingForDriver){

      gsap.to(waitingForDriverRef.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[waitingForDriver])
 

  const submitHandler =  (e) =>{
    e.preventDefault() //If user reloads my mistake it wont submit the form

  }


  const [pickupSuggestion, setPickupSuggestion] = useState([])
  const [destinationsuggestion, setDestinationsuggestion] = useState([])
  const [activeField, setActiveField] = useState('')
  


  const handelPickupChange = async (e)=>{

    setPickup(e.target.value)
    try{
      const authtoken = cookie.get('token')

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion` , { 
        params:{input:e.target.value},
        withCredentials:true
      })
      setPickupSuggestion(response.data)
      // console.log(pickupSuggestion)  gives an array 
    }catch(err){
      console.log(err , "Pickup Change mai error")
    }

  }



  const handelDestinationChange = async (e)=>{
    setDestination(e.target.value)
    try{
      const authtoken = cookie.get('token') 
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion` , {params:{input:e.target.value},
        withCredentials:true
      })

      setDestinationsuggestion(response.data)
      // console.log(destinationsuggestion) gives an array
    }catch(err){
      console.log(err , "Destination Change mai error")
    }
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
          <input value={pickup}       onChange={handelPickupChange}      onClick={()=>{setPanelOpen(true), setActiveField('pickup') }}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Add a Pick-Up Location' />
          <input value={destination}  onChange={handelDestinationChange} onClick={()=>{setPanelOpen(true) , setActiveField('destination')}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Enter your Destination' />
        </form>
        
        </div>


        <div ref={panelRef} className=' bg-white  h-[0%] '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}
          suggestions={activeField ==='pickup' ? pickupSuggestion: destinationsuggestion}
          setPickup = {setPickup} 
          setDestination={setDestination}
          activeField={activeField}
          ></LocationSearchPanel>
        </div>

      </div>



      <div ref={vehiclePanelref} className='vehicleSelection translate-y-full  bg-white fixed px-3 py-8 pt-12 z-10 bottom-0 w-full'>
        <VehiclePanel setConfirmedVehicle={setConfirmedVehicle} setVehiclePanel={setVehiclePanel}></VehiclePanel>
        
      </div>


      <div ref={confirmRide} className='confirmRide translate-y-full  bg-white fixed px-3 py-6 pt-12 z-10 bottom-0 w-full'>
          <ConfirmRide setVehicleFound={setVehicleFound} setConfirmedVehicle={setConfirmedVehicle}></ConfirmRide>
      </div>

      <div ref={vehicleFoundRef} className='vehicleFinding translate-y-full  bg-white fixed px-3 py-6 pt-12 z-10 bottom-0 w-full'>
          <LookingForDriver setVehicleFound={setVehicleFound}></LookingForDriver>
      </div>

      <div ref={waitingForDriverRef}  className='confirmRide   bg-white fixed px-3 py-6 pt-12 z-10 bottom-0 w-full'>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver}></WaitingForDriver>
      </div>




    </div>
  )
}

export default Home