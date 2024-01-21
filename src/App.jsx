import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutUs from './components/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Editpost from './components/Editpost'
import Logout from './components/Logout'
import ProfileEdit from './components/ProfileEdit'
import YourPost from './components/YourPost'
import CardPost from './components/CardPost'
import Otherprofile from './components/OtherProfile'
// import Testing from './pages/testin'

function App() {
const [data, setData]= useState()

  return (
    <div className="  ">
    <Navbar data={data}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LogIn  setData={setData}/>}/>
      <Route path='/signup' element={<Signup setData={setData}/>}/>
      <Route path='/editpost/:postId'element={<Editpost/>}/>
      <Route path="/porfileEdit/:id" element={<ProfileEdit/>}/>
      <Route path='/about'element={<AboutUs/>}/>
      <Route path='/postcard'element={<CardPost/> }/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/otherprofile/:userId" element={<Otherprofile />}/>
    </Routes>
   
    </div>
  )
}

export default App
