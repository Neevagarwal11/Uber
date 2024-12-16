import React from 'react'

function waitingForDriver(props) {
  // console.log(props.ride.captain)
  const desti = props.ride?.destination.split(' ') || []
  const pickup = props.ride?.pickup.split(' ') || []
  return (
    
    <div>
    <h5
      className="p-1  text-center absolute top-0 w-[90%]"
      onClick={() => {
        props.setWaitingForDriver(false);
      }}
    >
      <i className="text-2xl pt-14 ri-arrow-down-s-line"></i>
    </h5>


    <div className='flex items-center flex-row justify-between '>
    <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
    />
    <div className='text-right'>
        <h2 className='text-lg font-medium capitalize'>{props.ride?.captain?.fullname.firstname + " " + props.ride?.captain?.fullname.lastname }</h2>
        <h4 className='text-2xl -mb-1 -mt-1 font-bold'>{props.ride?.captain?.vehicle.plate}</h4>
        <p className='font-sm  text-gray-600 capitalize'>{props.ride?.captain?.vehicle.color+ " " + props.ride?.captain?.vehicle.vehicleType}</p>
        <div className='flex flex-row justify-end items-center gap-2 bg-black-300'>
        <p className='test-sm text-gray-500'>Use OTP:</p>
        <h1 className='text-2xl font-bold text-black  '>{props.ride?.otp}</h1>
        </div>
    </div>
    </div>


    <div className="flex border-t-2 flex-col gap-2 justify-between items-center">
      <div className="w-full mt-5">
        <div className="flex p-2 border-b-2 items-center gap-5">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">{pickup.slice(0,3).join(' ')}</h3>
            <p className="text-gray-600 text-sm">{props.ride?.pickup}</p>
          </div>
        </div>

        <div className="flex p-2 border-b-2 items-center gap-5">
          <i class="ri-map-pin-user-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">{desti.slice(0,3).join(' ')}</h3>
            <p className="text-gray-600 text-sm"> {props.ride?.destination} </p>
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

    </div>
  </div>
  )
}

export default waitingForDriver