import React from 'react';
import NoResults from './NoResults';
import Pic from './Pic';
// stateless functional component to display pictures or nothing if no results
const Pics = props => {

    const results = props.data;
    let pics;
    let resultsClass;
    // map through results, adding key attribute and creating the url to pass down to Pic as props, OR style for no results
    if(results.length > 0){
      pics = results.map(pic => <Pic key={pic.id} url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_n.jpg`}/>);
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
