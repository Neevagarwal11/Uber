import React , {useContext , useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { captainDataContext } from '../Context/captainContext'
import axios from 'axios'
import cookie from 'js-cookie'


function CaptainProtectedWrapper({children}) {
    const navigate = useNavigate()
    const {captain , setCaptain}  = React.useContext(captainDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const token = cookie.get('token')   //Checking for exisitance of cookie
   
useEffect(()=>{
    // console.log(token)   OK
    if(!token){
      navigate('/captainlogin')
    }
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile` , {
      withCredentials:true
    }).then((response)=>{
      if(response.status===201){
        const data = response.data
        setCaptain(data.captain)
        setIsLoading(false)
      }
    })
    .catch((err)=>{
      console.log(err , "Token could not be Recognised")
      navigate('/captainlogin')
    })
    
  },[navigate , setCaptain , setIsLoading, token])
     

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }




  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper