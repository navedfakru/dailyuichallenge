import React from 'react'

function page() {
  return (
    <>
      <header className="bg-[#fafafa] flex justify-between items-center px-10 py-3">
        <h2 className="text-xl font-bold text-black">VolunteerConnect</h2>
        <ul className='flex items-center gap-9 text-black'>
          <li className='text-sm font-semibold cursor-pointer'>Home</li>
          <li className='text-sm font-semibold cursor-pointer'>About</li>
          <li className='text-sm font-semibold cursor-pointer'>Events</li>
          <li className='text-sm font-semibold cursor-pointer'>Contact</li>
          <li className='text-sm font-semibold '><button className='px-4 py-2 bg-amber-300 rounded-md cursor-pointer'>Sign Up</button></li>
        </ul>
      </header>
    </>
  )
}

export default page