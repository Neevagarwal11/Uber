import React, { useContext, useEffect, useRef , useState} from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/vehiclePanel'
import ConfirmRide from '../components/ConfirmedVehicle'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/waitingForDriver'
import axios from 'axios'
import cookie from 'js-cookie'
import { SocketContext } from '../Context/SocketContext'
import { UserDataContext } from '../Context/UContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/liveTracking'

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
  const [fare, setFare] = useState({})
  const [ride, setRide] = useState(null)

  const handelPickupChange = async (e)=>{

    setPickup(e.target.value)
    try{
      const authtoken = cookie.get('token')

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion` , { 
        params:{input:e.target.value},
        withCredentials:true
      })

      console.log(response.data)
      setPickupSuggestion(response.data)
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
  
  const getFare = async ()=>{
    
    try{
      console.log(pickup)
      console.log(destination)
      const fare = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare` , {
        params:{
          pickup:pickup ,
          destination :destination
        },
        withCredentials:true
      })
      // console.log(fare.data)
      setFare(fare.data)

    }catch(err){
      console.log(err , "Error in the get-fare axios")
    }


  }

  const [vehicleType, setVehicleType] = useState(null)

  async function createRide(){
    try{
      
      const ride = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create` , {
        pickup,
        destination,
        vehicleType
      },{
        withCredentials:true
      }
      )
    console.log(ride.data)
  }catch(err){
    console.log(err , "Ride Could not be created")
  }
  }

//-------------- Socket Code

const {socket} = useContext(SocketContext)
const {user} = useContext(UserDataContext)
// console.log(user)    OK    

useEffect(()=>{
  socket.emit('join' , {userType:'user' , userId:user._id})
}, [user])


socket.on('ride-confirmed' , (ride) =>{
  setVehicleFound(false)
  setWaitingForDriver(true)
  setRide(ride)
  // console.log(ride)  OK
  
})

const navigate = useNavigate()

socket.on('ride-started' , ride =>{
  setWaitingForDriver(false)
  navigate('/riding' , {state: ride})
})


  return (
    <div className='h-screen relative overflow-hidden z-10'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16  absolute left-5 top-5' />

      <div className='h-screen w-full  ' onClick={()=>{ setVehiclePanel(false) ,setPanelOpen(false) }}>
        {/* Temporary Image */}
        <LiveTracking></LiveTracking>
      </div>

      <div className=' absolute  h-screen flex flex-col justify-end top-0 w-full '>
        <div className='h[30%] p-5 bottom-0  bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute  top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div className='line absolute h-16 left-[10%] rounded-full top-1/3 w-1 bg-black'></div>
          <input value={pickup}       onChange={handelPickupChange}      onClick={()=>{setPanelOpen(true), setActiveField('pickup')}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Add a Pick-Up Location' />
          <input value={destination}  onChange={handelDestinationChange} onClick={()=>{setPanelOpen(true) , setActiveField('destination')}}      className='bg-[#eee] px-12 py-3 text-base rounded-lg mt-4 w-full' type="text" placeholder='Enter your Destination' />
        </form>

        
        <button onClick={()=>{setPanelOpen(false) , setVehiclePanel(true) , getFare()}} className="w-full mt-7 flex text-lg justify-center items-center  bg-black text-white  font-semibold p-2 rounded-lg">Find Trip</button>
        </div>


        <div ref={panelRef} className=' bg-white  h-[0%] '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}
          suggestions={activeField ==='pickup' ? pickupSuggestion : destinationsuggestion}
          setPickup = {setPickup} 
          setDestination={setDestination}
          activeField={activeField}
          ></LocationSearchPanel>
        </div>

      </div>



      <div ref={vehiclePanelref} className='vehicleSelection translate-y-full  bg-white fixed px-3 pt-4 py-12 z-10 bottom-0 w-full'>
        <VehiclePanel selectVehicle={setVehicleType} fare={fare} setConfirmedVehicle={setConfirmedVehicle} setVehiclePanel={setVehiclePanel}></VehiclePanel>
        
      </div>


      <div ref={confirmRide} className='confirmRide translate-y-full  bg-white fixed px-3 py-12 pt-12 z-10 bottom-0 w-full'>
          <ConfirmRide  pickup={pickup} fare={fare} vehicleType={vehicleType} destination={destination} createRide = {createRide}  setVehicleFound={setVehicleFound} setConfirmedVehicle={setConfirmedVehicle}></ConfirmRide>
      </div>

      <div ref={vehicleFoundRef} className='vehicleFinding translate-y-full  bg-white fixed px-3 py-12 pt-12 z-10 bottom-0 w-full'>
          <LookingForDriver pickup={pickup} fare={fare} vehicleType={vehicleType} destination={destination} setVehicleFound={setVehicleFound}></LookingForDriver>
      </div>

      <div ref={waitingForDriverRef}  className='confirmRide   bg-white fixed px-3 py-12 pt-12 z-10 bottom-0 w-full'>
          <WaitingForDriver ride={ride} setWaitingForDriver={setWaitingForDriver}></WaitingForDriver>
      </div>




    </div>
  )
}

export default Home