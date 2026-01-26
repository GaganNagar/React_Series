import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const prevCountRef = useRef(count);


   //ye fnc hame button click par chlvana par hamne use use calback k andar chlaya
 const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);


  
  //ye jo h hmara normal function hai jo button click par chl rha or state chnge ho rhi re render ho rhi 
  // function counter(){
  //   setCount((count) => count + 1)
  //   console.log("counter++")
  // }


  //ye side effects ko smbhal tha h jese hame count kaa data count change hone p local storage me save karvana
 useEffect(() => {
    prevCountRef.current = count;
    localStorage.setItem("count", count);
  }, [count]);


  return (
    <>
       
      <button onClick={increment}>
        count is {count}
      </button>
      <p>Previous count: {prevCountRef.current}</p>

    </>
  )
}

export default App
