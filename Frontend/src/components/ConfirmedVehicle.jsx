import React from "react";

function ConfirmedVehicle(props) {
  return (
    <div>
      <h5
        className="p-1  text-center absolute top-0 w-[90%]"
        onClick={() => {
          props.setConfirmedVehicle(false);
        }}
      >
        <i className="text-2xl pt-14 ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>

      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-28"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />

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

        <button onClick={()=>{props.setVehicleFound(true)  , props.setConfirmedVehicle(false)}} className="w-full mt-5  bg-green-500 text-white font-semibold p-2 rounded-lg">
          Confirm Ride
        </button>
      </div>
    </div>
  );
}

export default ConfirmedVehicle;
