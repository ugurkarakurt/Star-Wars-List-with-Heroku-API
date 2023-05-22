
import './scss/aside.scss'
import { NavLink } from "react-router-dom";
import logo from './img/starwars-jedi.svg';
import logoColorful from './img/starwars-jedi-colorful.svg'

import List from './List';

const Aside = () => {
  return (
    <aside className="aside">
      <div className='home-logo'>
        <NavLink to="/" activeclassname="active">
          <img className='colorless' src={logo} alt="medal" />
          <img className='colorful' src={logoColorful} alt="medal" />
        </NavLink>
      </div>
      <List />
    </aside>
  );
};

export default Aside;