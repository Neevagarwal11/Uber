import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Captainlogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler =()=>{
        e.preventDefault()
        setCaptainData({
            email:email,
            password:password
        })

        setEmail('')
        setPassword('')
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen' >
    <div>

    <img className='w-16 mb-8' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

    <form action="" onSubmit={(e) =>{  submitHandler(e) }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input type="email" value={email} onChange={(e)=>{  setEmail(e.target.value)}} className='bg-[#eeeeee] rounded mb-7 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='email@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input type="password" value={password} onChange={(e)=>{ setPassword(e.target.value)}} className='bg-[#eeeeee] rounded mb-7 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='Password' />
        <button className='w-full bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border'>Login</button>

        <p className='text-center'>Join our Fleet
        <Link to='/captainsignup' className='text-blue-600 ml-2'>Register as Captain</Link>
        </p>
    </form>
    </div>

    <div>
        <Link to='/userlogin' className='w-full flex items-center justify-center bg-[#DC5F29] text-black font-semibold mb-7 rounded px-4 py-2 border-2'>Sign In as User</Link>
    </div>
</div>  )
}

export default Captainlogin