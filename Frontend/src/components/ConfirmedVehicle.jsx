import React from 'react'

function ConfirmedVehicle() {
  return (
    <div>
        {/* <h5 className='p-1  text-center absolute top-0 w-[90%]' onClick={()=>{props.setVehiclePanel(false)}}><i className="text-2xl pt-14 ri-arrow-down-s-line"></i></h5> */}
        <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

        <div className='flex flex-col justify-between items-center'>
        <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />

        <div className='w-full bg-yellow-500'>
                <div></div>
                <div></div>
                <div></div>
        </div>
        <button className='w-full  bg-green-500 border-2'>Confirm</button>
        </div>



    </div>
    
  )
}

export default ConfirmedVehicle