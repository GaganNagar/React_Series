import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://imahttps://plushtthttps://images.unsplash.com/photo-1764662028080-227b6ccc808f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3Dps://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3Dges.unsplash.com/photo-1761839258623-e232e15f7ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/laptop-tablet-and-phone-on-a-wooden-desk-9-To59dy6Kghttps://images.unsplash.com/photo-1764676209354-446dc19217c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>{props.bio}</p>
        <button>About</button>
      </div>
  )
}

export default Card
