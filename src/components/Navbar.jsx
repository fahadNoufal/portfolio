import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex flex-row justify-between text-[2rem] tracking-wider font-allison text-[#bfbfbf] font-light items-center absolute top-0 left-0 right-0 px-8 md:px-20 py-10 '>
            <div className="logo text-white font z-10 relative">
                Home
            </div>
            <div className="nav-links hidden md:flex gap-20 text-white z-10 relative">
                <a href="#about-me" className='hover:text-gray-400 transition-colors'>Intro</a>
                <a href="#services" className='hover:text-gray-400 transition-colors'>Services</a>
                {/* <a href="#web-projs" className='hover:text-gray-400 transition-colors'>Web Projects</a> */}
                <a href="#works" className='hover:text-gray-400 transition-colors'>Works</a>
                <a href="#contact" className='hover:text-gray-400 transition-colors'>Contact</a>
            </div>

        </nav>
    </div>
  )
}

export default Navbar