import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UContext.jsx'
import CaptainContext from './Context/captainContext.jsx'
import SocketContext from './Context/SocketContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
    <UserContext>
    <SocketContext>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </SocketContext>
    </UserContext>
    </CaptainContext>
  </StrictMode>,
)
