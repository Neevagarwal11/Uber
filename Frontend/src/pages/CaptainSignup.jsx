import React, { useState , useContext } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { captainDataContext } from '../Context/captainContext'
import axios from 'axios'
import cookie from 'js-cookie'      //IN frontend This is used to set cookie 

function CaptainSignup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const {captain, setCaptain} =  React.useContext(captainDataContext) 
    const navigate = useNavigate()

    const submitHandler =async(e)=>{
        e.preventDefault()
        const captainData={
            fullname:{
                firstname:firstName,
                lastname:lastName,
            },
            email:email,
            password:password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType,
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register` , captainData)
        
        if(response.status ===201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token' , data.token)
            cookie.set('token' , data.token)     //Coookie set using js-cookie
            navigate('/captain-home')
        }

        setFirstName("")
        setlastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }


  return (
    <div className='p-7 flex flex-col justify-between h-screen' >
    <div>

    <img className='w-12 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="LOGO" />

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
        {/* Vehicle Dets */}
        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
        <div className='flex gap-2 mb-2'>
        <input type="text" value={vehicleColor} onChange={(e)=>{  setVehicleColor(e.target.value)}} className='bg-[#eeeeee] rounded text-lg placeholder:text-base  px-4 py-2 border-2 w-1/2 ' required placeholder='Vehicle Color' />
        <input type="text" value={vehiclePlate} onChange={(e)=>{  setVehiclePlate(e.target.value)}} className='bg-[#eeeeee] rounded text-lg placeholder:text-base  px-4 py-2 border-2 w-1/2 ' required placeholder='Vehicle Plate' />
        </div>
        <div className='flex gap-2 mb-6'>
        <input type="number" value={vehicleCapacity} onChange={(e)=>{  setVehicleCapacity(e.target.value)}} className='bg-[#eeeeee] rounded text-lg placeholder:text-base  px-4 py-2 border-2 w-1/2 ' required placeholder='Vehicle Capacity' />
        <select value={vehicleType} required onChange={(e)=>{  setVehicleType(e.target.value)}} className='bg-[#eeeeee] rounded text-md placeholder:text-base py-2 border-2 w-1/2 ' placeholder="Vehicle Type">
            <option value="" disabled >Select Vehicle Type</option>
            <option value="car"  >Car</option>
            <option value="auto"  >Auto</option>
            <option value="moto"  >Motorcycle</option>
        </select>
        </div>





        <button className='w-full bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border'>Create Captain Account</button>
        <p className='text-center'>Already have a account?
        <Link to='/captainlogin' className='text-blue-600 ml-2'>Login here</Link>
        </p>
    </form>
    </div>

    <p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and Terms of Service apply.</p>


    
</div>  )
}

export default CaptainSignup