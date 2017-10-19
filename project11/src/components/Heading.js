import React from 'react';

const Heading = props => {

  let topic = props.subject;
  if(topic === ''){
    topic = 'cats';
  }

    return (
      <h2>{topic !== 'search' ? `${topic} pics` : props.searched[1] && props.searched[0] > 0 ? 'Results' : ''}</h2>
    );

}
export default Heading;
