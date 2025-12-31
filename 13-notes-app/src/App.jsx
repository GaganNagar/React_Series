import { useState } from 'react'
import './App.css'

function App() {
  
  const [name, setname] = useState(0)
  const [note, setnote] = useState(0)

  const formhandler = (e)=>{
    e.preventDefault();    // form submit hone par page reload nhi hoga
  console.log("okokokoko")

  }

  return (
    <>
      <form onSubmit={(e)=>{
        formhandler(e)
      }}>
        <input type="text" 
        value={name} 
        onChange={(e)=>{
          setname(e.target.value)
        }} />

        <textarea name="" id="" 
        value={note} 
        onChange={(e)=>{
          setnote(e.target.value);
        }} >

        </textarea>

        <button>Add</button>
      </form>
    </>
  )
}

export default App
