import React, { useState } from 'react';
import SearchIcon from '../Icon/search-svg.svg';
import logo from "../Icon/Logo1.png"
import Menu from "../Icon/menu.svg"
import close from "../Icon/close.svg"


import voice from "../Icon/voice.svg"
import { useSpeechRecognition } from 'react-speech-recognition';

import MenuList from './MenuList';

const Navbar = ({ onLoginClick ,onSinupClick}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { transcript, startListening, stopListening } = useSpeechRecognition();
const [searchOption, setSearchOption] = useState('Search Here'); // Default search option
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close
 

  const openModal = () => {
    setModalIsOpen(true);
    startListening();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    stopListening();
    console.log('Transcript:', transcript); // Display transcript in console
  };

  // Toggle the menu state when the menu icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
  };
 
  const navbarClass = isMenuOpen ? "fixed top-0 left-0 w-full bg-white z-50" : "";

  return (
    <div className={`p-4 ${navbarClass}`}>
      <div className="container mx-auto  flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex w-full md:w-auto md:text-center pt-2 pb-4 md:p-0 mx-auto md:mx-0 justify-between md:justify-normal">
          <div>
          <img src={logo} className="w-40 h-12 pr-2 " alt="Logo" />
          </div>
          {isMenuOpen && (
              <div>
              <img src={close} className="w-10 h-10  md:hidden" alt="Logo" onClick={toggleMenu} />
            </div>
          
        )}
        {!isMenuOpen &&
            (
              <div className="md:hidden">
              <img src={Menu} className="w-10 h-10  md:hidden" alt="Logo" onClick={toggleMenu} />
            </div>
          )
        }
          
         
        </div>

        {/* Search Bar with Dropdown */}
        <div className="rounded-lg border bg-slate-200 flex flex-col md:flex-row mx-auto md:mx-0 overflow-hidden items-center space-y-2 md:space-y-0 md:space-x-2 max-w-screen-xl  md:w-[50%]">

  <div className="p-4 flex w-full ">
    <img src={SearchIcon} className="w-8 h-8 pr-3" alt="Search Icon" />
  


  <input
    type="text"
    placeholder="Search"
    className="border-black focus:outline-none bg-slate-200 w-[30%] flex-grow"
  />

<button onClick={openModal} className="border hover:border-white    rounded-3xl  ml-2 mr-2">
<img src={voice} className="w-8 h-8 " alt="voice Icon" />
</button>
  
   
  
  </div>
  

  

</div>


{isMenuOpen && (
          <div className="md:hidden">
            <MenuList  closeMenu={toggleMenu} login={onLoginClick} Sinup={onSinupClick} />
          </div>
        )}


        {/* Login and Signup Buttons */}
     
          <div className="hidden md:flex justify-center mt-4 mb-4 md:p-0 space-x-2 mx-auto md:mx-0 ">
            <button
              className="bg-white border border-black text-black px-4 py-2 rounded-xl"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button
              className="bg-red-400 text-white px-4 py-2 rounded-xl mt-2 md:mt-0 md:ml-2"
              onClick={onSinupClick}
            >
              Signup
            </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;


