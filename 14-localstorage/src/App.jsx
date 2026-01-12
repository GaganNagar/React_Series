import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // 1️⃣ STATE: localStorage se initial value lo (lazy init)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("userData")
    return saved ? JSON.parse(saved) : []
  })

  // 2️⃣ STATE change hone par localStorage update karo
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user))
  }, [user])
  
  // 3️⃣ Button click handler
  function change() {
    setUser(prev => [
      ...prev,
      {
        name: "Gagan",
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JS"]
      }
    ])
  }

  function dlt(index){
    const dlt = [...user]
    dlt.splice(index,1)
     setUser(dlt)
  }

  return (
    <>
      <h1>User Data</h1>

      {/* 4️⃣ Safe rendering */}
      {user.length === 0 && <p>No user added</p>}

      {user.map((u, index) => (
        <div key={index}>
          <h2>Name: {u.name}</h2>
          <p>Role: {u.role}</p>
          <p>Skills: {u.skills.join(", ")}</p>

          <button
           onClick={()=>{
            dlt(index)
            }}>
            delete User</button>
        </div>
      ))}

      <button onClick={change}>Add User</button>
    </>
  )
}

export default App
