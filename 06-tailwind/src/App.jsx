import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default App