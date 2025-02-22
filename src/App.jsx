import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Community from './pages/Community'
import Check from './pages/Check'
import Home2 from './pages/Home2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/community' element={<Community />} />
      <Route path='/check' element={<Check />} />
      <Route path='/home2' element={<Home2 />} />
    </Routes>
  )
}

export default App