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
// import Testing from './pages/testin'

function App() {
document.title="/public/images/Singupimg.png"

  return (
    <div className=" bg-slate-100 h-screen ">
    <Navbar/>
    <Routes>
      {/* <Route path='/' element={<Testing/>}/> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   
    </div>
  )
}

export default App
