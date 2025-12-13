import React from 'react'
import LeftNavContent from './LeftNavContent'
import RightNavcontent from './RightNavcontent'

const Navbar = () => {
  return (
    <div className='bg-amber-400'>
      <header>

        <nav >
            <LeftNavContent />
            <RightNavcontent />
        </nav>

      </header>
      
    </div>
  )
}

export default Navbar
