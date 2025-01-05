import './App.css'
import React from 'react'
import Userdetail from './Components/Userdetail'
import { Route, Routes } from 'react-router-dom'
import Alluserdata from './Components/Alluserdata'

function App() {
  

  return (
    <>

      <Routes>
        <Route path='/' element={<Userdetail/>}></Route>
        <Route path='/a' element={<Alluserdata/>}></Route>
      </Routes>
    </>
  )
}

export default App
