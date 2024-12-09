import React from "react";
import {Link} from 'react-router-dom'
function riding() {
  return (
    <div className="h-screen">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16 absolute left-5 top-5' />

    <Link to='/home' className="fixed h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full"><i className="text-lg font-medium ri-home-6-line"></i></Link>

      <div className="h-1/2 ">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg.webp"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center flex-row justify-between ">
          <img
            className="h-14"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ayaan</h2>
            <h4 className="text-2xl -mb-1 -mt-1 font-bold">TN 02 BR 9403</h4>
            <p className="font-sm  text-gray-600">TATA Nano</p>
          </div>
        </div>

        <div className="flex border-t-2 flex-col gap-2 justify-between items-center">
          <div className="w-full mt-5">
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
        <button className="w-full mt-5  bg-green-500 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
}

export default riding;
