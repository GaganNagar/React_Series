import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const Header = () => {
  return (
  
    <header className='flex justify-between items-center bg-amber-950 text-amber-50 h-20 w-full px-10 shadow-lg'>
      <LeftNav />
      <RightNav />
    </header>
  )
}

export default Header