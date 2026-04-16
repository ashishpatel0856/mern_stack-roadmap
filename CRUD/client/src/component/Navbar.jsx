import React from 'react'

const Navbar = () => {
  <h1>this is navbar,in which every information overview</h1>
  return (
    <div className='w-full flex justify-between h-20 items-center bg-gray-500 shadow px-5'>
       <div className='w-[10%] h-full flex items-center'>
        <h1 className='font-bold text-zinc-50'>Logo</h1>
        </div> 

        <div className='w-[50%] h-full'>
            <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-50 font-medium '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>ABOUT</li>
                <li className='cursor-pointer'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar