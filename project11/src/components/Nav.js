import React from 'react';
import {NavLink} from 'react-router-dom';
// stateless functional component to display navigation buttons: 3 preset topics and a link to the search form
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
