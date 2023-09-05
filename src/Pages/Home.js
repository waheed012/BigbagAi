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

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };
  const handleSinupClick = () => {
    setIsSinupPopupOpen(true);
  };

  const handleCloseSinupPopup = () => {
    setIsSinupPopupOpen(false);
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
        <Login onClose={handleCloseLoginPopup} />
      )}
       {isSinupPopupOpen && (
        <Register onClose={handleCloseSinupPopup} />
      )}

    
    </div>
  )
}

export default Home
