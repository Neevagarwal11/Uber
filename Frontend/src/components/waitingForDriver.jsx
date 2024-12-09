import React from 'react'

function waitingForDriver(props) {
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
        <h2 className='text-lg font-medium'>Ayaan</h2>
        <h4 className='text-2xl -mb-1 -mt-1 font-bold'>TN 02 BR 9403</h4>
        <p className='font-sm  text-gray-600'>Maruti Suzuki Alto</p>
    </div>
    </div>


    <div className="flex border-t-2 flex-col gap-2 justify-between items-center">
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

    </div>
  </div>
  )
}

export default waitingForDriver