import React , {useEffect , useContext} from "react";
import {Link, useLocation} from 'react-router-dom'
import { SocketContext } from "../Context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/liveTracking";

function riding() {
  const location = useLocation()
  const ride  = location.state || {}
  const navigate = useNavigate()
  const desti = ride?.destination.split(' ')
  const { socket } = useContext(SocketContext)


  socket.on('ride-ended' , () =>{
    navigate('/home')
  })

  return (
    <div className="h-screen relative">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='w-16 absolute left-5 top-5' />

    <Link to='/home' className="fixed h-10 w-10 bg-white right-2 top-2 flex items-center justify-center rounded-full"><i className="text-lg font-medium ri-home-6-line"></i></Link>

       <LiveTracking ></LiveTracking>

      <div className="h-1/2 w-full p-3 z-[100] bg-white absolute bottom-0">
        <div className="flex items-center flex-row justify-between ">
          <img
            className="h-14"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">{ride?.captain.fullname.firstname + " " + ride?.captain.fullname.lastname}</h2>
            <h4 className="text-2xl -mb-1 -mt-1 font-bold uppercase ">{ride?.captain.vehicle.plate}</h4>
            <p className="font-sm  text-gray-600">{ride?.captain.vehicle.color + " " +ride?.captain.vehicle.vehicleType}</p>
          </div>
        </div>

        <div className="flex border-t-2 flex-col gap-2 justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex p-2 border-b-2 items-center gap-5">
              <i class="ri-map-pin-user-line text-lg"></i>
              <div>
                <h3 className="text-md font-medium">{desti.slice(0,3).join(' ')}</h3>
                <p className="text-gray-600 text-sm">{ride?.destination}</p>
              </div>
            </div>

            <div className="flex p-2  items-center gap-5">
              <i className="ri-cash-line text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
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
