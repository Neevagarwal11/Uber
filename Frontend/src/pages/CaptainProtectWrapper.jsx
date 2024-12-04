import React , {useContext , useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { captainDataContext } from '../Context/captainContext'
import axios from 'axios'


function CaptainProtectedWrapper({children}) {
    const navigate = useNavigate()
    const {captain , setCaptain}  = React.useContext(captainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem("token")

    if(!token){
        navigate('/captainlogin')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        withCredentials: true, // Ensures cookies are included in the request
    }).then((response)=>{
        if(response.status ===201){
            const data = response.data
            setCaptain(data.captain)
            setIsLoading(false)
        }
    })
    .catch(err =>{
        console.log(err , "Token not Recognised")
        navigate('/captainlogin')
    })



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