import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({ user: "gagan", age: 22 })

  // sabse pehle sikhenge sync or async tareka 
  const changeVal = () => {
    // setCount(count+1)   // par dom par dikheag +1 hokr kyuki y async tareeke se kam krra 
    // console.log(count)   //// yha par dikhega btn click par 0   or ye sync ye bad me update hoga 
    // to hm kya krege ki hmare pas jo value  pehle se hi usko update karenge usko pkd kar 


    // setCount(prev=>(prev+1))  // yha iska mtlb y h ki purani jo value h vo aa kaye usme + ho jaye isse current time me update hoga 
    // console.log(count)  //// yha par value update hokr aaygi 1


    // ab ham sikhenge ki useState jo vo obejct k sath kaise kam krti h
    //hame karna h name= ram ,age 23 to hm, object ko spread kar lenge
    const obj = { ...count }
    obj.user = "ram"
    obj.age = 23;
    setCount(obj)           /// ye tareeka acha h taki hm multiple operations kar paye 

    // dusra tareeka
    setCount(prev => ({ ...prev, user: "shyam", age: 24 }))      ///ese bhi kar skte h 

  }

  ///same arary k sath kam krta h ese 
  const newArr = [...count]
  newArr.push(200)    //agar array m karna hoto
  setCount(newArr)


  //hamne isme sikha sync or async ka behave thik h fhir dekha usestate object k sath kaise kam karri or fhir dekha array k sath kaise kam krra dono k 2-2 tarreeka dkehe 
  return (
    <>

      <h1>value is : {count}</h1>
      <button onClick={changeVal}>
        increase
      </button>

    </>
  )
}

export default App
