import React , {useContext , useEffect, useState} from 'react'
import { UserDataContext } from '../Context/UContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import cookie from 'js-cookie'

function UserProjectedWrapper({children}) {
    const navigate = useNavigate()
    const {user , setUser } = useContext(UserDataContext) 
    const token = cookie.get('token')
    const [isLoading, setIsLoading] = useState(true)

    
useEffect(()=>{
  if(!token){
    navigate('/userlogin')
  }
  
  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile` , {
    withCredentials: true, // Ensures cookies are included in the request
  }).then((response)=>{
    if(response.status===200){
      const data = response.data
      setUser(data.user)
      setIsLoading(false)
    }
  })
  .catch((err)=>{
    console.log(err , "Token could not be Recognised")
    navigate('/userlogin')
  })
  
},[navigate , setUser , setIsLoading, token])
   
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

export default UserProjectedWrapper