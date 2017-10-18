import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import Form from './Form';
import Nav from './Nav';
import Presentation from './Presentation';
import Home from './Home';
import Pics from './Pics';
import Heading from './Heading';
import NoResults from './NoResults';


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

    } else {
    this.performSearch();

  }
  }


  componentWillReceiveProps(nextProps){


    let oldPath = this.props.match.path.slice(1);
    let newPath = nextProps.match.path.slice(1);

    if(oldPath !== newPath && newPath !== 'search'){

      this.performSearch(newPath || 'cats');
      this.setState({searchedYet : false})
    }


  }


  performSearch = (term = 'cats', searched = false) => {

    searched ? this.setState({searchedYet : true}) : {};


    this.setState({loading : true});
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          pics: response.data.data,
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
          <Heading subject={this.props.match.path.slice(1)} />
          <Presentation props={this.props} pics={this.state}/>
</div>




    );
  }






}
