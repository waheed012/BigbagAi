import React from 'react'

const MenuBar = () => {
  return (
    <div className="container mx-auto ">
     <nav className=" pt-5  ">
     <ul className="flex flex-col lg:flex-row space-x-10 text-black">
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2  xl:px-6  opacity-40 font-semibold">
          20,172 Result
        </li>
        
      <ul className="flex flex-col xl:flex-row space-x-6 text-black">
        <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 xl:px-6 opacity-40 font-semibold">
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
          Demo Category
        </li>
        </ul> 
      </ul>
    </nav>
    </div>
  )
}

export default MenuBar
