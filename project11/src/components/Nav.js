import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {

  return (

    <nav className="main-nav">
      <ul>
        <li><NavLink to='/mountains'>Mountains</NavLink></li>
        <li><NavLink to='/rivers'>Rivers</NavLink></li>
        <li><NavLink to='/valleys'>Valleys</NavLink></li>
        <li><NavLink to='/search'>Search</NavLink></li>
      </ul>
    </nav>

  );

}

export default Nav;
