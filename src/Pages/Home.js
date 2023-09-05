import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import MenuBar from '../Components/MenuBar'
import Card from '../Components/Card'
import Login from './Login'
import Register from './Register'

const Home = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSinupPopupOpen, setIsSinupPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };


  const handleSinupClick = () => {
    setIsSinupPopupOpen(true);
  };





    
  return (
    <div>
        <Navbar onLoginClick={handleLoginClick} onSinupClick={handleSinupClick} />
        <MenuBar/>
       
      <div className='container mx-auto flex space-x-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='container mx-auto flex space-x-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='container mx-auto flex space-x-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      {isLoginPopupOpen && (
        <div>

        <Login />
        <button
        className="absolute top-2 right-2 text-red-500"
        onClick={() => setIsLoginPopupOpen(false)}
      >
        Close
      </button>
      </div>
      )}
       {isSinupPopupOpen && (
         <div>

<Register />
         <button
         className="absolute top-2 right-2 text-red-500"
         onClick={() => setIsSinupPopupOpen(false)}
       >
         Close
       </button>
       </div>
        
      )}

    
    </div>
  )
}

export default Home
