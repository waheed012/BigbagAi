import React from 'react'
const MenuList = ({closeMenu,login,Sinup}) => {
  return (
    <div className="fixed top-20 left-0 w-full h-full flex items-center justify-center bg-white ">
   
    <div className=" p-0 ">
   
      <nav className="pt-5 flex">
     <ul className=" text-end  text-black  ">
     <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2  opacity-40 font-semibold" onClick={closeMenu}>
        
             <p onClick={login}>Login</p> 
          
          
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2  opacity-40 font-semibold"onClick={closeMenu}>
       <p onClick={Sinup}>Signup</p> 
             
       
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2  opacity-40 font-semibold" onClick={closeMenu}>
         Discover
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Real Estate
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Moters
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Fashion
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Accessories
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Jobs
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Services
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Hotel Booking
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold" onClick={closeMenu}>
         Tourism
       </li>
       <li className=" hover:bg-red-200 transition duration-300 ease-in-out rounded-xl px-4 py-2 opacity-40 font-semibold">
         <div>
   
     See More Categories
     
 </div>
       </li>
     
     </ul>
   </nav>
   </div>
   </div>
  )
}

export default MenuList
