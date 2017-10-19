import React from 'react';
import NoResults from './NoResults';
import Pic from './Pic';

const Pics = props => {

    const results = props.data;
    let pics;
    let resultsClass;
    if(results.length > 0){
      pics = results.map(pic => <Pic key={pic.id} url={pic.images.fixed_height.url}/>);
      resultsClass = "pic-list";
    } else {
      pics = <NoResults />
      resultsClass = "no-pics";
    }

    return(
      <ul className = {resultsClass} >
          {pics}
      </ul>
    );

}
export default Pics;
