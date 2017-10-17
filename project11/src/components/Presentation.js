import React, { Component } from 'react';
import Pics from './Pics';

const Presentation = props => {

// console.log(props);
    return (
      <div className="main-content">
      {(props.pics.loading ? <p>loading....</p> :
        <Pics data={props.pics.pics}/>
        )}
      </div>
    );



}
export default Presentation;
