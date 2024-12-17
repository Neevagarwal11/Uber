import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function FinishRide(props) {
const navigate = useNavigate()

  async function endRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,{
      rideId:props.ride._id
    },
    {withCredentials:true}
    )

    if(response.status ===200){
      props.setFinishRidePanel(false)
      navigate('/captain-home')
    }


  }

  return (
    <div>
    <h5 onClick={()=>{props.setFinishRidePanel(false)}}
      className="p-1  text-center absolute top-0 w-[90%]" >
      <i className="text-2xl pt-14 ri-arrow-down-s-line"></i>

    </h5>
    <h3 className="text-2xl font-semibold mb-5"> Finish This Ride</h3>

    <div className='flex items-center mt-4 bg-yellow-400 p-2 rounded-lg justify-between'>
        <div className='flex items-center gap-3'>
            <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" className='h-12 rounded-full object-cover w-12' alt="" />
            <h2 className='text-xl font-medium'>{props.ride?.user?.fullname.firstname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2km</h5>

    </div>

    <div className="flex flex-col gap-2 justify-between items-center">
     

      <div className="w-full mt-5">
        <div className="flex p-2 border-b-2 items-center gap-5">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">{props.ride?.pickup}</p>
          </div>
        </div>

        <div className="flex p-2 border-b-2 items-center gap-5">
          <i class="ri-map-pin-user-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">{props.ride.destination} </p>
          </div>
        </div>

        <div className="flex p-2  items-center gap-5">
        <i className="ri-cash-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div>
      </div>

    <div className='flex items-center flex-col justify-center mt-6 w-full '>
      <button onClick={endRide} className="w-full mt-5 flex text-lg justify-center items-center  bg-green-500 text-white font-semibold p-2 rounded-lg">
        Finish Ride
      </button>

      <p className='text-xs  mt-3 -mb-4 text-red-500 '>Click on Finish Ride if you have completed the payment</p>
    </div>
    </div>
  </div> 

  )
}

export default FinishRide