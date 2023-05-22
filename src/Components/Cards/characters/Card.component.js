import React from 'react'
import './scss/card.scss'
import deleteLogo from './img/cleaning.png';
import editLogo from './img/multiple.png';

export default function Card(char) {
  const bgColors = ['bg-purple', 'bg-red', 'bg-lightBlue', 'bg-blue', 'bg-green', 'bg-orange', 'bg-yellow', 'bg-white']
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  const character = char.props
  return (
    <div className={`card-wrapper rotating-border-card ${bgColor}`}>
      <div className='card'>
        <div className="card-header">
          <div className="card-actions">
            <button className="edit-button js-edit-button">
              <img src={editLogo} alt="edit character" />
            </button>

            <button className="delete-button js-delete-button">
              <img src={deleteLogo} alt="delete character" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="name">{character.name}</div>
          <div className="informations">
            {/* <span className="homeworld">{character.homeworld}</span> */}
            <span className="gender">{character.gender}</span>
            <span className="birth-year">{character.birth_year}</span>
            <span className="height">1{character.height}80</span>
            <span className="mass">{character.mass}</span>
            <span className="hair-color">{character.hair_color}</span>
            <span className="skin-color">{character.skin_color}</span>
            <span className="eye-color">{character.eye_color}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
