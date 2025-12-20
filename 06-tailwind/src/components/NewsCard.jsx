import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const NewsCard = ({ category, title, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 border border-stone-200">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      <div className="absolute bottom-0 p-5 text-white w-full">
        <span className="bg-amber-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </span>
        <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <div className="flex justify-between items-center mt-4 border-t border-gray-600 pt-3">
             <span className="text-xs text-gray-300">5 min read</span>
             <ArrowUpRight size={18} className="text-amber-400" />
        </div>
      </div>
    </div>
  )
}

export default NewsCard