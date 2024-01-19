import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Editpost from './components/Editpost'
import Logout from './components/Logout'
// import Testing from './pages/testin'

function App() {
document.title="/public/images/Singupimg.png"

  return (
    <div className="  ">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/editpost/:postId'element={<Editpost/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
   
    </div>
  )
}

export default App
