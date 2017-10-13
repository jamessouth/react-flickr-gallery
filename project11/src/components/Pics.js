import React from 'react';
import NoResults from './NoResults';
import Pic from './Pic';


const Pics = props => {



    const results = props.data;
    let pics;
    if(results.length > 0){
      pics = results.map(pic => <Pic key={pic.id} url={pic.images.fixed_height.url}/>);

    } else {
      pics = <NoResults />
    }

    return(
      <ul className="pic-list">
          {pics}
      </ul>
    );





}

export default Pics;
