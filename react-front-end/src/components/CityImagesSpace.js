// src/Project.js

import React from 'react'

function CityImagesSpace(props) {
  // Get the
  const { name, image, address, hours } = props
  return (
    <div className="CityImagesSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default CityImagesSpace