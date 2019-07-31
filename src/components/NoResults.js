import React from 'react';
// stateless functional component if search yields no results
const NoResults = props => (

  <li>
    <h3>No results found</h3>
    <p>That search did not return any results. Please try again.</p>
  </li>

);

export default NoResults;
