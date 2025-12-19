
import React from 'react'
import { CircleUserRound } from 'lucide-react'

const RightNav = () => {
    return (
        <nav className="flex items-center gap-10">
           
            <div className="flex items-center gap-8 text-lg font-medium">
                <a href="#" className="hover:text-amber-300 transition-colors">Home</a>
                <a href="#" className="hover:text-amber-300 transition-colors">About</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Experience</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Project</a>
            </div>

          
            <div className="flex items-center cursor-pointer hover:scale-110 transition-transform">
                <CircleUserRound size={32} strokeWidth={1.5} />
            </div>
        </nav>
    )
}

export default RightNav