import React from 'react'
import NewsCard from './NewsCard'

const MainContent = () => {
  // Dummy Data for Articles
  const articles = [
    { id: 1, category: "Tech", title: "React vs Angular: What to learn in 2025?", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80" },
    { id: 2, category: "Startup", title: "IndoriZayka raises funds for expansion", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" },
    { id: 3, category: "AI", title: "PrepAI launches new features for students", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" },
    { id: 4, category: "Career", title: "How to crack a 20 LPA Job as a fresher", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80" },
    { id: 5, category: "Coding", title: "Top 10 VS Code Extensions you need", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80" },
    { id: 6, category: "Lifestyle", title: "Work Life Balance for Developers", img: "https://images.unsplash.com/photo-1499750310159-52f0f837ce30?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-8 md:p-16">
                <span className="text-amber-400 font-bold tracking-widest uppercase mb-4">Featured Story</span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-2xl">
                    Building the Future of Web Development
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                    Join us on a journey to master React, Tailwind, and Modern UI design. From Indore to the Global Stage.
                </p>
                <button className="w-fit px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition shadow-lg border-2 border-transparent hover:border-amber-400">
                    Read Full Article
                </button>
            </div>
        </div>
      </section>

      {/* LATEST NEWS GRID */}
      <section>
         <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-amber-950">Latest Stories</h2>
            <a href="#" className="text-amber-700 font-semibold hover:underline">View All</a>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item) => (
                <NewsCard key={item.id} {...item} />
            ))}
         </div>
      </section>

    </div>
  )
}

export default MainContent