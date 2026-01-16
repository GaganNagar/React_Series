import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.Elem.url} target='_blank'>

          <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={props.Elem.download_url} alt="" />
          </div>
          <h2>{props.Elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
