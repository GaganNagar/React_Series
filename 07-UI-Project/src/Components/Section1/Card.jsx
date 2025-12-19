import React from 'react'

const Card = ({ img, name, role, button }) => {
    return (
        <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      flex
      flex-col
      items-center
      text-center
      transition
      duration-300
      hover:shadow-xl
      hover:-translate-y-2
    ">
            {/* Image */}
            <img
                src={img}
                alt={name}
                className="
          w-24
          h-24
          rounded-full
          object-cover
          mb-4
          border-4
          border-gray-200
        "
            />

            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-800">
                {name}
            </h2>

            {/* Role */}
            <p className="text-gray-500 mt-1">
                {role}
            </p>

            {/* Button */}
            <button className="
        mt-4
        px-5
        py-2
        rounded-full
        bg-blue-600
        text-white
        font-medium
        transition
        duration-300
        hover:bg-blue-700
        active:scale-95
      ">
                {button}
            </button>
        </div>
    )
}

export default Card
