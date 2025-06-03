import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
export default function Sucess() {
 const time = 3;
  return (
    <div className='h-svh w-svw flex justify-center items-center'>

      <div className="flex flex-col gap-3">
        <div className="w-24 h-24 rounded-[50%] bg-purple-300 flex items-center justify-center">
          <IoCheckmarkDoneOutline color='purple' size={40}/>
        </div>
        <div className="">
          <p className='text-xl font-medium'>Account created successfully</p>

          <span className='text-gray-400'>Redirecting in {time} secs</span>
        </div>
      </div>

    </div>
  )
}
