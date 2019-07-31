import React from 'react';
import Pics from './Pics';
// stateless functional component that holds the pictures
const Presentation = props => {
// if path is not search, display loading indicator then the pics. if path is search, if we have not searched yet, display nothing, else display loading indicator then the pics.
    return (
      <div>
        {props.props.match.path !== '/search'?
          <div className="main-content">
            {(props.pics.loading ? <p>loading....</p> :
              <Pics data={props.pics.pics}/>
            )}
          </div> :
        props.pics.searchedYet ?
          <div className="main-content">
            {(props.pics.loading ? <p>loading....</p> :
              <Pics data={props.pics.pics}/>
            )}
          </div> :
          null
        }
      </div>
    );

}
export default Presentation;
