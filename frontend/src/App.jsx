import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignIn from './pages/CaptainSignUp'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/riding" element={<Riding/>}/>
        <Route path="/signup" element={<UserSignUp/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignIn/>}/>
        <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>} />
        <Route path="/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
        <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>} />
        <Route path="/captain-logout" element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>}/>
        <Route path="/captain-riding" element={<CaptainProtectedWrapper><CaptainRiding/></CaptainProtectedWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
