import React from 'react'

function LocationSearchPanel(props) {


    const locations = [
        "24B , Near Kapoor's cafe ,Metrozone near VR Mall",
        "26B , Near Farzi cafe ,Metrozone near VR Mall",
        "30B , Near Cosmo cafe ,Metrozone near VR Mall",
    ]


  return (
    <div >

        {/* Sample Data */}

        {
            locations.map(function(elem , index){
                return <div onClick={()=>{ props.setVehiclePanel(true), props.setPanelOpen(false) }} className='flex my-2 border-2 border-white active:border-black p-3 rounded-xl  items-center justify-start gap-4'>
                    <h2 className='bg-[#eee] h-10 flex items-center justify-center  w-10  rounded-full '><i className="ri-map-pin-5-fill"></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
                    
            })                
        }

    </div>
  )
}

export default LocationSearchPanel