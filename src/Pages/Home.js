import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import MenuBar from '../Components/MenuBar'
import Card from '../Components/Card'
import Login from './Login'
import Register from './Register'
import MenuList from '../Components/MenuList'

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
       
        <div className="container mx-auto space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Center the cards in the mobile view */}
        <div className="mx-auto md:space-x-4 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container mx-auto space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Center the cards in the mobile view */}
        <div className="mx-auto md:space-x-4 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container mx-auto space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Center the cards in the mobile view */}
        <div className="mx-auto md:space-x-4 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {isLoginPopupOpen && (
        <div className='container mx-auto  '>

        <Login close={() => setIsLoginPopupOpen(false)}/>
       
      </div>
      )}
       {isSinupPopupOpen && (
         <div className='container mx-auto'>

<Register close={() => setIsSinupPopupOpen(false)}/>
         
       </div>
        
      )}

    
    </div>
  )
}

export default Home
