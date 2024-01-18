import React from 'react'
import Main from '../components/Main'
import Dashboard from '../components/Dashboard'
import Posts from '../components/Posts'
import { useState } from 'react'

const Home = () => {
  const [update, setUpdate]=useState(false)
  return (
  <Main>
  <Dashboard setUpdate={setUpdate}/>
  <Posts pupdate={update} setUpdate={setUpdate}/>
  </Main>
  )
}

export default Home
