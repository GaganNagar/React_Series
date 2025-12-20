// components/MainContent.jsx
import React from 'react'
import NewsCard from './NewsCard'

const MainContent = () => {
  
  // Ye dummy data hai (API se baad mein aayega)
  const articles = [
    { id: 1, category: "Tech", title: "AI is changing how we code in 2025", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" },
    { id: 2, category: "Design", title: "Why Minimalism is making a comeback", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80" },
    { id: 3, category: "Startup", title: "IndoriZayka raises $1M funding", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* 1. HERO SECTION (Breaking News) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-amber-950 mb-6 border-l-4 border-amber-600 pl-4">
          Trending Now
        </h2>
        
        {/* Unique Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="h-96 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Main News" 
                />
            </div>
            <div className="p-10 flex flex-col justify-center">
                <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Editor's Pick</span>
                <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                    The Future of Web Development: React & Beyond
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Discover how new frameworks are reshaping the internet and what freshers need to know to stay ahead in the race.
                </p>
                <button className="w-fit px-8 py-3 bg-amber-950 text-white font-bold rounded-lg hover:bg-amber-800 transition">
                    Read Full Story
                </button>
            </div>
        </div>
      </section>

      {/* 2. RECENT NEWS GRID */}
      <section>
         <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Stories</h2>
         
         {/* Grid System: Mobile pe 1 column, PC pe 3 column */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item) => (
                <NewsCard 
                  key={item.id} 
                  category={item.category} 
                  title={item.title} 
                  image={item.img} 
                />
            ))}
         </div>
      </section>

    </div>
  )
}

export default MainContent