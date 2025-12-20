import React from 'react'
import { CircleUserRound, Menu } from 'lucide-react' // Menu icon mobile ke liye

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex justify-between items-center bg-amber-950 text-amber-50 h-20 w-full px-6 md:px-10 shadow-xl'>
      {/* Left Side: Brand Logo */}
      <div className="flex items-center">
         <h1 className='text-3xl font-extrabold tracking-tight cursor-pointer'>
            Gagan<span className='text-amber-500'>News</span>
         </h1>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex items-center gap-8">
        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Tech</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Indore</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Projects</a>
        </div>

        {/* User Icon */}
        <div className="flex items-center gap-4">
            <CircleUserRound size={32} className="cursor-pointer hover:text-amber-400 transition" />
            {/* Mobile Menu Icon */}
            <Menu className="md:hidden cursor-pointer" size={30} />
        </div>
      </nav>
    </header>
  )
}

export default Header