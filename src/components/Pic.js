import React from 'react';
// stateless functional component creating list items to hold each picture
const Pic = props => (
  <li className="pic-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Pic;
