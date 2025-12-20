import { useState } from 'react'
import './App.css'
//hamko smjhna h useState kaise kam krti h 

const arr=["ram","shyam","rohit","virat","pandya","gagan"]
function App() {


  const [num, setnum] = useState(0)  ///ye bn gy hamara variable state k through
  // const [user, setuser] = useState("Gagan")
  
  // function changeValue(){    // num ki value change karni
  //   // num=10  ese nhi kar skte 
  //   // num++   ese bhi nhi kar skte 
  //   // to ham state k jariye change krenge
  //   // setnum(10)       /// ye function k andr value bhejenge to edit ho jygi num ki value
  //   // to hamne dkhli bhaiya num ki value chaange ho gyi isse then ab

  //   // setnum("Gagan")   change ho gyi 
  // }

  function increaseNum(){
    setnum(prev=>prev+1)
  }

  function decreaseNum(){
    setnum(prev=>prev-1)
  }

//   function changeUser(){
//     setuser({                        ye confusing point h 
//   ...user,
//   name: "Gagan naagr"
// });
  // }



  // function arr(){
  //   setarr([...arr,newItem])    array ko change karne liye
  // }

  return (
    <>
     <h1>Num value : {num}</h1>
     <h1>Username = {name}</h1>
     <button onClick={increaseNum} >Increase ++</button>
     <button onClick={decreaseNum} >decrease --</button>
     {/* <button onClick={changeUser}>Change User </button> */}
    </>
  )
}

export default App 
