import React, { Component } from 'react';
import Pics from './Pics';

export default class Presentation extends Component {




  componentWillReceiveProps(nextProps){
    let oldPath = this.props.props;
    let newPath = nextProps.props;
    console.log(oldPath);
    console.log(newPath);
    // if(oldPath !== newPath){
    //
    //
    // }


  }

  render(){
console.log('called');

    return (
      <div className="main-content">
      {(this.props.prop.loading ? <p>loading....</p> :
        <Pics data={this.props.prop.pics}/>
        )}
      </div>
    );

  }

}
