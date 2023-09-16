import React from 'react'

const MenuBar = () => {
  return (
    <div className="container mx-auto ">
     <nav className=" pt-5  flex " >
     <ul className="  space-x-6 text-black mx-10 md:mx-0 ">
        <li className=" px-0 py-2 xl:px-0   opacity-40 font-semibold ">
          20,172 Result
        </li>
        </ul  >
      <ul className="  space-x-6 text-black md:flex hidden  overflow-auto">
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 lg:px-6 opacity-40 font-semibold">
          Discover
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Real Estate
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Moters
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Fashion
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Accessories
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Jobs
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Services
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Hotel Booking
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          Tourism
        </li>
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
          <div >
    <select className="bg-transparent outline-none">
      <option>See More Categories</option>
      <option value="search">1</option>
      <option value="filter">2</option>
      <option value="filter">3</option>
      <option value="filter">4</option>
    </select>
  </div>
        </li>
      
      </ul>
    </nav>
    </div>
  )
}

export default MenuBar
