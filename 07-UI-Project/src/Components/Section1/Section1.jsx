import React from 'react'
import Header from './Header'
import MainContent from './MainContent'

const Section1 = () => {
  return (

    <div className='min-h-screen flex flex-col gap-10'>
      <Header />

      <main className='flex-grow'>
        <MainContent />
      </main>
    </div>
  )
}

export default Section1