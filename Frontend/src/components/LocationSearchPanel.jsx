import React from 'react'
import PropTypes from 'prop-types'


const LocationSearchPanel = ({suggestions , setVehiclePanel,setPanelOpen,setPickup,setDestination, activeField}) =>{



    const handelSuggestionClick = (suggestion)=>{
        if(activeField === 'pickup'){
            setPickup(suggestion.description)
        }else if(activeField ==='destination'){
            setDestination(suggestion.description)
        }
    }

    const validSuggestions = Array.isArray(suggestions)
    console.log(validSuggestions)

  return (
    <div >

        {
            validSuggestions.map((ele , index)=>(
                <div key={index} onClick={()=>{ handelSuggestionClick(ele) }} className='flex bg-white w-full  border-2 border-white active:border-black p-0 rounded-xl  items-center justify-start gap-2 my-3'>
                    <h2 className='bg-[#eee] h-10 mr-2 flex items-center justify-center w-12  rounded-full '><i className=" ri-map-pin-5-fill"></i></h2>
                    <h4 className='font-medium text-md'>{ele ? ele.description : 'Loading...'}</h4>
                </div>
                    
                ))
        }
        

    </div>
  )
}

export default LocationSearchPanel