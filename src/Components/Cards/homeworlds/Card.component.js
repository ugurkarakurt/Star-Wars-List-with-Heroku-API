import React from 'react'
import './scss/card.scss'

export default function Card(homeworld) {
  const worldname = homeworld.props.worldname

  return (
    <div className='card'>
      <div className="card-body">
        <div className="name">{worldname}</div>
        <div className="informations">

        </div>
      </div>
    </div>
  )
}
