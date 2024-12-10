import React from 'react'
import 'remixicon/fonts/remixicon.css'


function RidePopup(props) {
  return (
    <div>
    <h5 onClick={()=>{props.setRidePopup(false)}}
      className="p-1  text-center absolute top-0 w-[90%]" >
      <i className="text-2xl pt-14 ri-arrow-down-s-line"></i>

    </h5>
    <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>

    <div className='flex items-center mt-4 bg-yellow-400 p-2 rounded-lg justify-between'>
        <div className='flex items-center gap-3'>
            <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" className='h-12 rounded-full object-cover w-12' alt="" />
            <h2 className='text-xl font-medium'>Emily</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2km</h5>
    </div>

    <div className="flex flex-col gap-2 justify-between items-center">
     

      <div className="w-full mt-5">
        <div className="flex p-2 border-b-2 items-center gap-5">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">OMR Chennai </p>
          </div>
        </div>

        <div className="flex p-2 border-b-2 items-center gap-5">
          <i class="ri-map-pin-user-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">Besant Nagar Chennai </p>
          </div>
        </div>

        <div className="flex p-2  items-center gap-5">
        <i className="ri-cash-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.40</h3>
            <p className="text-gray-600 text-sm">Cash</p>
          </div>
        </div>
      </div>

        <div className='flex w-full items-center justify-center gap-4'>

      <button onClick={()=>{props.setConfirmRidePopup(true) , props.setRidePopup(false)} } className="p-3  bg-green-500 text-white font-semibold rounded-lg">
        Accept Ride
      </button>

      <button onClick={()=>{props.setRidePopup(false)}} className="   bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg">
        Ignore Ride
      </button>
        </div>
    </div>
  </div>  )
}

export default RidePopup