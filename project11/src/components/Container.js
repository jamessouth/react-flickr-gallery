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

let cnt = 0;
export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      loading: null,
      searchTerms: []
    };
  }


  componentDidMount(){
    console.log('called');
    let path = this.props.match.path.slice(1);
    if(path){
      this.performSearch(path);
    } else {
    this.performSearch();
  }
  }


  componentWillReceiveProps(nextProps){




    console.log('called');
    let oldPath = this.props.match.path.slice(1);
    let newPath = nextProps.match.path.slice(1);
    console.log(oldPath);
    console.log(newPath);
    if(oldPath !== newPath && newPath !== 'results'){
      console.log('change');
      this.performSearch(newPath || 'cats');

    }


  }
// cache search results???

  performSearch = (term = 'cats') => {

    if(!['cats', 'dogs', 'birds', 'results'].includes(term)){

      this.setState({searchTerms: [...this.state.searchTerms, `${cnt}${term}`]});
      cnt++;
    }

    if(this.props.match.path.slice(1) === 'results'){
      console.log('HERERERERE');
    }



    this.setState({loading: true});
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&limit=2&api_key=dc6zaTOxFJmzC`)
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

console.log(this.state.searchTerms);
console.log(this.props.match);
    return (


<div>
          <Form props={this.props} onSearch={this.performSearch}/>
          <Nav preset={this.performSearch}/>
          <Heading subject={this.props.match.path.slice(1)} />
          <Presentation pics={this.state}/>
</div>




    );
  }






}
