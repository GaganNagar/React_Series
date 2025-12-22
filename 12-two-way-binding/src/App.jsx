import './App.css'
import { useState } from 'react';
//hame sikhna h two way binding keses karte h 

function App() {
const [name, setname] = useState('')
  
const formhandler=(e)=>{ 
  e.preventDefault();
      
  console.log('form submited by', name)
  setname('')
}

  return (
    <>
      <form onSubmit={(e)=>{    
        formhandler(e)     
      }}>
        <input 
         type="text" 
         placeholder='Enter name'
         value={name} 
         onChange={(e)=>{
          setname(e.target.value); 
        }} 
        />

        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
