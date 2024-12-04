import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import cookie from 'js-cookie'

function CaptainLogout() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout` , {
        withCredentials:true
    }).then((response) =>{
        if(response.status ===200){
            localStorage.removeItem('token')
            cookie.remove('token')
            navigate('/captainlogin')
        }
    })



  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout