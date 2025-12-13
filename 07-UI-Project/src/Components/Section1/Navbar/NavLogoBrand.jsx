import React from 'react'
import BrandName from './BrandName'
import Logo from './Logo'

const NavLogoBrand = () => {
  return (
    <div className='flex justify-between items-center '>
        <Logo />
      <BrandName />
    </div>
  )
}

export default NavLogoBrand
