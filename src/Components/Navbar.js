import React, { useState } from 'react';
import SearchIcon from '../Icon/search-svg.svg';
import logo from "../Icon/Logo.png"

const Navbar = ({ onLoginClick ,onSinupClick}) => {

  const [searchOption, setSearchOption] = useState('See More Categories'); // Default search option

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-red-900 text-2xl font-bold mb-4 md:mb-0">
        <img src={logo} className="w-40 h-12 pr-2" alt="Logo" />
        </div>

        {/* Search Bar with Dropdown */}
        <div class="rounded-lg border bg-slate-200 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">

  <div class="p-4">
    <img src={SearchIcon} class="w-6 h-6 pr-2" alt="Search Icon" />
  </div>


  <input
    type="text"
    placeholder="Search"
    class="border-black focus:outline-none bg-slate-200 flex-grow"
  />

  <div class=" border-r-2 border-gray-400 h-6 md:h-auto p-4"></div>
  <div class="ml-2 p-4">
    <select class="bg-transparent outline-none">
      <option>See More Categories</option>
      <option value="search">1</option>
      <option value="filter">2</option>
      <option value="filter">3</option>
      <option value="filter">4</option>
    </select>
  </div>
</div>


        {/* Login and Signup Buttons */}
        <div className="mt-4 md:mt-0 space-x-4">
          <button className="bg-white border border-black text-black px-4 py-2 rounded-xl" onClick={onLoginClick}>
            Login
          </button>
          <button className="bg-red-400 text-white px-4 py-2 rounded-xl"  onClick={onSinupClick}>Signup</button>
        </div>
        {/* {showLoginForm && <Login onClose={closeLoginForm} />}
        {showSinupForm && <Register onClose={closeSinupForm} />} */}
      </div>
    </div>
  );
};

export default Navbar;
