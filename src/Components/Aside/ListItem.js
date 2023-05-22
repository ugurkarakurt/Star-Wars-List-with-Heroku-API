import React from 'react'
import { NavLink } from "react-router-dom";
import lightSaber from './img/light-saber.png';
import lightSaberColorful from './img/light-saber-colorful.png';
import spaceStation from './img/space-station.png';
import spaceStationColorful from './img/space-station-colorful.png';
import medal from './img/medal.png'
import medalColorful from './img/medal-colorful.png'

export default function ListItem() {
  return (
    <>
      <li>
        <NavLink activeclassname="active"
          to="character-list">
          <img className='colorless' src={lightSaber} alt="lightSaber" />
          <img className='colorful' src={lightSaberColorful} alt="lightSaber" />
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active"
          to="homeworld-list">
          <img className='colorless' src={spaceStation} alt="spaceStation" />
          <img className='colorful' src={spaceStationColorful} alt="spacestation" />
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active"
          to="add-chracter">
          <img className='colorless' src={medal} alt="medal" />
          <img className='colorful' src={medalColorful} alt="medal" />
        </NavLink>
      </li>
    </>
  )
}
