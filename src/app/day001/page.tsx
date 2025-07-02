import React from 'react'

function page() {
  return (
    <div className='min-h-screen bg-white w-full'>
      <header className="bg-[#fafafa] flex justify-between items-center px-10 py-3 border-b-1">
        <h2 className="text-xl font-bold text-black">VolunteerConnect</h2>
        <ul className='md:flex items-center gap-9 text-black hidden'>
          <li className='text-sm font-semibold cursor-pointer'>Home</li>
          <li className='text-sm font-semibold cursor-pointer'>About</li>
          <li className='text-sm font-semibold cursor-pointer'>Events</li>
          <li className='text-sm font-semibold cursor-pointer'>Contact</li>
          <li className='text-sm font-semibold '><button className='px-4 py-2 bg-amber-300 rounded-md cursor-pointer block'>Sign Up</button></li>
        </ul>
      </header>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-2xl text-black pt-10 pb-2'>Join VolunteerConnect</h1>
        <p className='text-lg text-black text-center'>Sign up to start making a difference in your community.</p>
        <input type="text" className='border-2 focus:border-blue-500 focus:outline-none rounded-md p-4 text-xl font-semibold text-black md:w-xl w-xs m-4' placeholder='Full Name'  />
        <input type="email" className='border-2 focus:border-blue-500 focus:outline-none rounded-md p-4 text-xl font-semibold text-black md:w-xl w-xs m-4' placeholder='Email'  />
        <input type="password" className='border-2 focus:border-blue-500 focus:outline-none rounded-md p-4 text-xl font-semibold text-black md:w-xl w-xs m-4' placeholder='Password'  />
        <input type="password" className='border-2 focus:border-blue-500 focus:outline-none rounded-md p-4 text-xl font-semibold text-black md:w-xl w-xs m-4' placeholder='Conform Password'  />
        <button className='focus:border-blue-500 focus:outline-none rounded-md p-4 text-xl font-semibold text-black bg-[#F2E8CC] md:w-xl w-xs m-4' >Sign up</button>
        <p className="text-center text-sm text-black pb-10">Already have an account?  <span className='text-blue-500 cursor-pointer font-semibold'>Sign In</span></p>
      </div>
    </div>
  )
}

export default page