import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function CaptainSignup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler =()=>{
        e.preventDefault()
        setUserData({
            fullname:{
                firstName:firstName,
                lastName:lastName,
            },
            email:email,
            password:password
        })

        setFirstName("")
        setlastName('')
        setEmail('')
        setPassword('')
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen' >
    <div>

    <img className='w-16 mb-8' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

    <form action="" onSubmit={(e) =>{  submitHandler(e) }}>

        <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
        <div className='flex gap-2 mb-6'>
        <input type="text" value={firstName} onChange={(e)=>{  setFirstName(e.target.value)}} className='bg-[#eeeeee] rounded text-lg placeholder:text-base  px-4 py-2 border-2 w-1/2 ' required placeholder='First Name' />
        <input type="text" value={lastName} onChange={(e)=>{  setlastName(e.target.value)}} className='bg-[#eeeeee] rounded text-lg placeholder:text-base  px-4 py-2 border-2 w-1/2 ' placeholder='Last Name' />
        
        </div>


        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input type="email" value={email} onChange={(e)=>{  setEmail(e.target.value)}} className='bg-[#eeeeee] rounded mb-6 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='email@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input type="password" value={password} onChange={(e)=>{ setPassword(e.target.value)}} className='bg-[#eeeeee] rounded mb-6 text-lg placeholder:text-base  px-4 py-2 border-2 w-full ' required placeholder='Password' />
        <button className='w-full bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border'>Login</button>

        <p className='text-center'>Already have a account?
        <Link to='/captainlogin' className='text-blue-600 ml-2'>Login here</Link>
        </p>
    </form>
    </div>

    <p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Service apply.</p>


    
</div>  )
}

export default CaptainSignup