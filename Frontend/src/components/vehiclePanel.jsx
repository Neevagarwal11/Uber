import React from 'react'

function vehiclePanel(props) {

  return (
    <div>
        <h5 className='p-1  text-center absolute top-0 w-[90%]' onClick={()=>{props.setVehiclePanel(false)}}><i className="text-2xl pt-14 ri-arrow-down-s-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

          <div onClick={()=>{props.setConfirmedVehicle(true) , props.setVehiclePanel(false) , props.selectVehicle('car')}} className='flex active:border-2 active:border-black active:bg-gray-100 mb-2 rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-6-line"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable, compact rides.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹{props.fare.car}</h2>
          </div>

          <div onClick={()=>{props.setConfirmedVehicle(true) ,props.setVehiclePanel(false) , props.selectVehicle('motorcycle')}} className='flex  mb-2 active:border-2 active:bg-gray-100 active:border-black rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Moto <span><i className="ri-user-6-line"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable Motorcycle ride.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹{props.fare.motorcycle}</h2>
          </div>

          <div onClick={()=>{props.setConfirmedVehicle(true) , props.setVehiclePanel(false) , props.selectVehicle('auto')}} className='flex  mb-2 active:border-2 active:border-black rounded-xl items-center w-full p-3  justify-between'>
            <img className='h-10 scale-150 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Car Png  " />
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>Uber Auto<span><i className="ri-user-6-line"></i>3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-500'>Affordable Auto ride.</p>
            </div>
            <h2 className='text-xl font-semibold '>₹{props.fare.auto}</h2>
          </div>

    </div>
  )
}

export default vehiclePanel