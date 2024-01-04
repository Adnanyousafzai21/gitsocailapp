import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   
    </>
  )
}

export default App
