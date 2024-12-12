import React from 'react'

const LocationSearchPanel = ({suggestions , setVehiclePanel,setPanelOpen,setPickup,setDestination, activeField}) =>{



    // console.log(suggestions)     returns an array
    const handelSuggestionClick = (suggestion)=>{
        if(activeField === 'pickup'){
            setPickup(suggestion.description)
        }else if(activeField ==='destination'){
            setDestination(suggestion.description)
        }
    }


  return (
    <div >

        {/* Sample Data */}
        {
            suggestions.map((elem , index)=>(
                <div key={index} onClick={()=>{ handelSuggestionClick(elem) }} className='flex bg-white w-full  border-2 border-white active:border-black p-0 rounded-xl  items-center justify-start gap-2 my-3'>
                    <h2 className='bg-[#eee] h-10 mr-2 flex items-center justify-center w-12  rounded-full '><i className=" ri-map-pin-5-fill"></i></h2>
                    <h4 className='font-medium text-md'>{elem.description}</h4>
                </div>
                    
            ))                
        }

    </div>
  )
}

export default LocationSearchPanel