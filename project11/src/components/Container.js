import React, { Component } from 'react';
import Pics from './Pics';

export default class Container extends Component {


  componentWillReceiveProps(nextProps){
    console.log(nextProps);

  }


  render(){
    console.log(this.props);
    return (
      <div className="main-content">
      {(this.props.loading ? <p>loading....</p> :
        <Pics data={this.props.pics}/>
        )}
      </div>
    );

  }

}
