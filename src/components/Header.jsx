import React from 'react'
import logo from '../assets/reactIcon.svg'

const Header = () => {
  return (
    <>
        <header className='flex justify-between p-6 bg-clr-dark text-white'>
            <div className="logo flex gap-2 text-clr-extra-light">
                <img src={logo} alt="react-logo" />
                ReactFacts
            </div>

            <nav>
                <a href="#">React Course - Project 1</a>
            </nav>
        </header>
    </>
  )
}

export default Header