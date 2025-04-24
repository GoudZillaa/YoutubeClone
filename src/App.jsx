import { useState } from 'react'
import './App.css'
import Navbar from '../Components/navbar/navbar'
import Home from '../Pages/Home/home'

function App() {
  const [sideNavbar,setSideNavbar]=useState(true)

  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
    <div className='App'>
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
      <Home sideNavbar={sideNavbar}/>
    </div>
  )
}

export default App
