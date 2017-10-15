import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Home from './components/Home';
import Pics from './components/Pics';
import Heading from './components/Heading';
import NoResults from './components/NoResults';



export default class App extends Component {

    constructor() {
      super();
      this.state = {
        pics: [],
        loading: true,
        term: ''

      };
    }




  componentDidMount(){
    let path = window.location.pathname.slice(1);
    if(path){
      this.performSearch(path);
    } else {
    this.performSearch();
  }
  }

  performSearch = (term = 'cats') => {

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&limit=2&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          pics: response.data.data,
          loading: false,
          term: term
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });


  }




// <Route exact path="/teachers" component={Teachers}/>
// <Route path="/teachers/:topic/:name" component={Featured}/>
// <Route path="/courses" component={Courses}/>
// <Route exact path="/" render={() => <Home loading={this.state.loading} pics={this.state.pics}/>}/>
  // <Route path="/search" render={() => }/>
// term={this.state.term} loading={this.state.loading} pics={this.state.pics}

  render() {

    return (

      <BrowserRouter>
        <div className="container">
          <Form onSearch={this.performSearch}/>
          <Nav preset={this.performSearch}/>
          <Heading subject={this.state.term} />
          <Switch>
            <Route exact path="/" render={props => <Presentation props={props} prop={this.state}/>}/>
            <Route path="/cats" render={props => <Presentation props={props} prop={this.state}/>}/>
            <Route path="/dogs" render={props => <Presentation props={props} prop={this.state}/>}/>
            <Route path="/birds" render={props => <Presentation props={props} prop={this.state}/>}/>


            <Route component={NoResults}/>
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}
