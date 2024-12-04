import React from 'react'
import { createContext , useState , useContext } from 'react'


export const captainDataContext = createContext()

function captainContext({children}) {

    const [captain, setCaptain] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateCaptain = (captainData) =>{
        setCaptain(captainData)
    }

    const value ={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }


  return (
    <captainDataContext.Provider value={value}>
        {children}
    </captainDataContext.Provider>
  )
}

export default captainContext