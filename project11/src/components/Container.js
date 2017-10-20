import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import Form from './Form';
import Nav from './Nav';
import Presentation from './Presentation';
import Heading from './Heading';
import apiKey from './Config';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      loading: null,
      searchedYet: false
    };
  }

  componentDidMount(){
    let path = this.props.match.path.slice(1);
    if(path && path !== 'search'){
      this.performSearch(path);
    } else if(path === 'search'){
    } else {
      this.performSearch();
    }
  }

  componentWillReceiveProps(nextProps){
    let oldPath = this.props.match.path.slice(1);
    let newPath = nextProps.match.path.slice(1);
    if(oldPath !== newPath && newPath !== 'search'){
      this.performSearch(newPath || 'mountains');
      this.setState({searchedYet : false})
    }
  }

  performSearch = (term = 'mountains', searched = false) => {
    let num =  Math.floor(Math.random() * 200) + 1;
    if(searched){
       this.setState({searchedYet : true});
     }
    this.setState({loading : true});
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&page=${num}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (

      <div>
          {this.props.match.path === '/search' &&
            <Form props={this.props} onSearch={this.performSearch}/>
          }
          <Nav preset={this.performSearch}/>
          <Heading searched={[this.state.pics.length, this.state.searchedYet]} subject={this.props.match.path.slice(1)} />
          <Presentation props={this.props} pics={this.state}/>
      </div>

    );
  }

}
