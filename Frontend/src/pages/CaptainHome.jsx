import React,  {useState ,useRef , useEffect , useContext} from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import gsap from 'gsap'
import { SocketContext } from '../Context/SocketContext'
import { captainDataContext } from '../Context/captainContext'
import axios from 'axios'

function CaptainHome() {

  const [ridePopup, setRidePopup] = useState(false)
  const ridePopupRef = useRef(null)
  const [confirmRidePopup, setConfirmRidePopup] = useState(false)
  const confirmRideRef = useRef(null)


  useEffect(()=>{

    if(ridePopup){

      gsap.to(ridePopupRef.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(ridePopupRef.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[ridePopup])
 

  useEffect(()=>{

    if(confirmRidePopup){

      gsap.to(confirmRideRef.current,{
        
        transform:'translateY(0)'
      })
    }else{
      
      gsap.to(confirmRideRef.current,{
        transform:'translateY(100%)'
      })
      
    }

  },[confirmRidePopup])
 
  const {socket} = useContext(SocketContext)
  const {captain} = useContext(captainDataContext)

  useEffect(()=>{
    // console.log(captain)   OK
    socket.emit('join' , {userId : captain._id , userType:"captain" })


    const updateLocation = () =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {  

          socket.emit('update-location-captain' , {
            userId:captain._id,
            location:{
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation , 10000)
    updateLocation()


  },[])

  socket.on('new-ride' , (data) =>{
    console.log(data)
    setRide(data)
    setRidePopup(true)
  })

  const [ride, setRide] = useState(null)



  async function confirmRide(){

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
      rideId:ride._id,
      captain:captain._id
    } , {
      withCredentials:true
    })
    console.log(response)

    setRidePopup(false)
    setConfirmRidePopup(true)
  }



  return (
    <div className="h-screen">
      <img  className='w-12 absolute left-5 top-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

    <div>
    <Link to='/home' className="fixed h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full"><i className="ri-logout-box-r-line"></i></Link>
    </div>

      <div className="h-3/5 ">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
      <CaptainDetails></CaptainDetails>
      </div>



      <div ref={ridePopupRef} className='translate-y-full  bg-white fixed px-3 py-8 pt-12 z-10 bottom-0 w-full'>
        <RidePopup ride={ride} confirmRide={confirmRide}  setRidePopup={setRidePopup} setConfirmRidePopup={setConfirmRidePopup}></RidePopup>
      </div>

      <div ref={confirmRideRef} className='translate-y-full  bg-white fixed h-screen px-3 py-8 pt-12 z-10 bottom-0 w-full'>
        <ConfirmRidePopup ride={ride} setConfirmRidePopup={setConfirmRidePopup}></ConfirmRidePopup>
      </div>


 

    </div>
  )
}

export default CaptainHome