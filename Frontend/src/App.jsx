import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Start from './pages/Start'
import Captianlogin from './pages/Captainlogin'
import CaptianSignup from './pages/CaptainSignup'
import Home from './pages/home'
import UserProjectedWrapper from './pages/UserProjectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/userlogin' element ={<Userlogin></Userlogin>}></Route>
          <Route path='/usersignup' element ={<UserSignup/>}></Route>
          <Route path='/captainlogin' element ={<Captianlogin/>}></Route>
          <Route path='/captainsignup' element ={<CaptianSignup/>}></Route>
          <Route path='/home' element={<UserProjectedWrapper> <Home></Home> </UserProjectedWrapper>}></Route>
          <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome></CaptainHome></CaptainProtectedWrapper>}></Route>
          <Route path='/user/logout' element={<UserProjectedWrapper> <UserLogout></UserLogout> </UserProjectedWrapper>}></Route>
          <Route path='/captain/logout' element={<CaptainProtectedWrapper>  <CaptainLogout></CaptainLogout> </CaptainProtectedWrapper>}></Route>
          <Route path='/riding' element={<Riding></Riding>}></Route>
          <Route path='/captainriding' element={<CaptainRiding/>}></Route>
      </Routes>
    </div>
  )
}

export default App