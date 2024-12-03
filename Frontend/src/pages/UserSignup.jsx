import React, { useContext, useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext}  from '../Context/UContext.jsx'

function UserSignup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const navigate = useNavigate()
    const {user,setUser} = useContext(UserDataContext)

    const submitHandler =async  (e) => {
        e.preventDefault();
        
        const newUser = {
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser)
        // try {
        //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
        //     if (response.status === 201) {
        //         const data = response.data;
        //         setUser(data.user);
        //         navigate('/home');
        //     }
        // } catch (error) {
        //     console.error('Error during registration:', error);
        //     alert(error.response?.data?.message || 'Registration failed');
        // }


        if(response.status ===201){
            const data = response.data
            
            setUser(data.user)
            navigate('/home')
        }

        // setFirstName("")
        // setlastName('')
        // setEmail('')
        // setPassword('')
    }

  return (
    <div className='p-7 flex flex-col justify-between h-screen' >
    <div>

    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="LOGO" />

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
        <button className='w-full bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border'>Create Account</button>

        <p className='text-center'>Already have a account?
        <Link to='/userlogin' className='text-blue-600 ml-2'>Login here</Link>
        </p>
    </form>
    </div>

    <p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Service apply.</p>


    
</div>
  )
}

export default UserSignup