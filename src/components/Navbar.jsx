import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-[#A1C289] justify-between h-[6vh] items-center text-xl'>
      <div className="logo pl-20 hover:font-semibold hover:text-blue-800">fetchApi.com</div>
      <ul className='list flex gap-10 pr-24'>
        <li className=' hover:font-semibold hover:text-blue-800'>Home</li>
        <li className=' hover:font-semibold hover:text-blue-800'>Links</li>
      </ul>
    </nav>
  )
}

export default Navbar
