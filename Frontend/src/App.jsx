import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import Captianlogin from './pages/Captainlogin'
import CaptianSignup from './pages/CaptainSignup'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/userlogin' element ={<Userlogin></Userlogin>}></Route>
          <Route path='/usersignup' element ={<UserSignup/>}></Route>
          <Route path='/captainlogin' element ={<Captianlogin/>}></Route>
          <Route path='/captainsignup' element ={<CaptianSignup/>}></Route>
      </Routes>
    </div>
  )
}

export default App