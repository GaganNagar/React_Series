import { useState } from 'react'
import './App.css'

function App() {

  const [name, setname] = useState(0)
  const [note, setnote] = useState(0)

  const formhandler = (e) => {
    e.preventDefault();    // form submit hone par page reload nhi hoga
    console.log("okokokoko")

  }

  return (
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e) => {
        formhandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <input type="text"
          placeholder='Enter Notes Heading'
          value={name}
          onChange={(e) => {
            setname(e.target.value)
          }} className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        />

        <textarea
          placeholder='write details'
          value={note}
          onChange={(e) => setnote(e.target.value)}
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none resize-none'
        >
        </textarea>
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 border-1-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto' >
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App
