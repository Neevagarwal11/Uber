import React, { useState , useContext } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { UserDataContext } from '../Context/UContext'
import axios from 'axios'
import cookie from 'js-cookie'

function Userlogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user , setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler =async (e)=>{
        e.preventDefault()

        const userData={
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , userData)

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token' , data.token)
            cookie.set('token' , data.token)
            navigate('/home')
        }
        
        setEmail('')
        setPassword('')
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen' >
        <div>

        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="LOGO" />

        <form action="" onSubmit={(e) =>{  submitHandler(e) }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input type="email" value={email} onChange={(e)=>{  setEmail(e.target.value)}} className='bg-[#eeeeee] rounded mb-7 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='email@example.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input type="password" value={password} onChange={(e)=>{ setPassword(e.target.value)}} className='bg-[#eeeeee] rounded mb-7 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='Password' />
            <button className='w-full bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border'>Login</button>

            <p className='text-center'>New here?
            <Link to='/usersignup' className='text-blue-600'>Create new Account</Link>
            </p>
        </form>
        </div>

        <div>
            <Link to='/captainlogin' className='w-full flex items-center justify-center bg-[#0EB65F] text-black font-semibold mb-7 rounded px-4 py-2 border-2'>Sign In as Captain</Link>
        </div>
    </div>
  )
}

export default Userlogin