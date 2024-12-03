import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Start from './pages/Start'
import Captianlogin from './pages/Captainlogin'
import CaptianSignup from './pages/CaptainSignup'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/userlogin' element ={<Userlogin></Userlogin>}></Route>
          <Route path='/usersignup' element ={<UserSignup/>}></Route>
          <Route path='/captainlogin' element ={<Captianlogin/>}></Route>
          <Route path='/captainsignup' element ={<CaptianSignup/>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App