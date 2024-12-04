import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import cookie from 'js-cookie'


function UserLogout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    // axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout` , {
    //     withCredentials: true, // Ensures cookies are included in the request
    // }).then((Response)=>{
    //     if(Response.status === 200){
    //         localStorage.removeItem('token')
    //         cookie.remove('token')
    //         navigate('/login')
    //     }
    // }).catch((error) => {
    //     console.error('Logout failed:', error);
    // });

    useEffect(() => {
        // Execute the logout request when the component mounts
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            withCredentials: true, // Ensures cookies are included in the request
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                cookie.remove('token')
                navigate('/userlogin');
            }
        })
        .catch((error) => {
            console.error('Logout failed:', error);
        });
    }, [navigate]); // The dependency array ensures this effect runs only once




  return (
    <div>UserLogout</div>
  )
}

export default UserLogout