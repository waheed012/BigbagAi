import React from 'react'
import HeartIcon from "../Icon/heart.svg"

const Card = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg mt-6">
      <img
        src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" // Replace with the URL of your image
        alt="Card Image"
        className="w-full"
      />
      
    <div className='pt-4 pb-3 pl-2 flex justify-between'>
       <div>
       <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" // Replace with the URL of your avatar image
          alt="Avatar"
          className="w-10 h-10 rounded-full inline-block mr-2"
        />
        <span className="text-gray-700 text-lg m-3 ">Creative Design</span>
       </div>
       
<div className=' px-4'>
<button className='border border-black hover:bg-red-200  rounded-lg opacity-70 p-1 flex '>

<img src={HeartIcon} className='w-6 h-6 pr-2 '/>
1.7k
</button>
</div>
      
      </div>
     
    </div>
  )
}

export default Card
