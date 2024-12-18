import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom'

function ConfirmRidePopup(props) {

    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const submitHandler =async (e)=>{
        e.preventDefault()

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride` , {params:{
        rideId: props.ride._id,
        otp:otp
      },
      withCredentials:true
    })


    if(response.status === 200){
      props.setConfirmRidePopup(false)
      props.setConfirmRidePopup(false)
      navigate('/captainriding' , {state: {ride:props.ride}})
    }

    }
  return (
    <div>
    <h5 onClick={()=>{props.setConfirmRidePopup(false)}}
      className="p-1  text-center absolute top-0 w-[90%]" >
      <i className="text-2xl pt-14 ri-arrow-down-s-line"></i>

    </h5>
    <h3 className="text-2xl font-semibold mb-5"> Ride Details</h3>

    <div className='flex items-center mt-4 bg-yellow-400 p-2 rounded-lg justify-between'>
        <div className='flex items-center gap-3'>
            <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" className='h-12 rounded-full object-cover w-12' alt="" />
            <h2 className='text-xl font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
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
            <p className="text-gray-600 text-sm">{props.ride?.destination}</p>
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

    <div className='flex items-center justify-center mt-6 w-full '>
    <form onSubmit={submitHandler} className='w-full'>

      <input type="number" placeholder='Enter OTP' onChange={(e)=>{setOtp(e.target.value)}}  value={otp} className='bg-[#eee] mb-3 px-6 py-3 font-mono text-base rounded-lg mt-4 w-full'/>

      <button onClick={submitHandler} className="w-full text-lg mt-5 flex justify-center items-center  bg-green-500 text-white font-semibold p-3 rounded-lg">
        Confirm
      </button>
      <button onClick={()=>{props.setConfirmRidePopup(false)}} className="text-lg w-full mt-1  bg-red-500  text-white font-semibold p-3 rounded-lg">
        Cancel
      </button>

    </form>
    </div>
    </div>
  </div>  )
}

export default ConfirmRidePopup