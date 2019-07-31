import React from 'react';
// stateless functional component to display a heading: the preset button topics via props, nothing prior to executing a search, and 'results' after a search
const Heading = props => {

  let topic = props.subject.replace(/s$/, '');
  if(topic === ''){
    topic = 'mountain';
  }

    return (
      <h2>{topic !== 'search' ? `${topic} pics` : props.searched[1] && props.searched[0] > 0 ? 'Results' : ''}</h2>
    );

}
export default Heading;
