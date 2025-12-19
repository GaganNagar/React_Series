import React from 'react'
import Card from './Card'

const usersData = [
  {
    name: "Gagan Nagar",
    img: "https://via.placeholder.com/150",
    role: "Frontend Developer",
    button: "View Profile"
  },
  {
    name: "Ram",
    img: "https://via.placeholder.com/150",
    role: "UI/UX Designer",
    button: "Connect"
  },
  {
    name: "Shyam",
    img: "https://via.placeholder.com/150",
    role: "Full Stack Developer",
    button: "Message"
  }
]

const MainContent = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="
        grid
        gap-6
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        max-w-6xl
        mx-auto
      ">
        {usersData.map((user, idx) => (
          <Card
            key={idx}
            img={user.img}
            name={user.name}
            role={user.role}
            button={user.button}
          />
        ))}
      </div>
    </div>
  )
}

export default MainContent
