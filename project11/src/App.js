import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Container from './components/Container';
import Home from './components/Home';
import Pics from './components/Pics';
import Heading from './components/Heading';
import NoResults from './components/NoResults';



class App extends Component {

  state = {

    pics: [],
    loading: true,
    term: ''


  }





  componentDidMount(){
    this.performSearch();
  }

  performSearch = (term = 'frogs') => {

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

  render() {

    return (

      <BrowserRouter>
        <div className="container">

          <Nav preset={this.performSearch}/>
          <Heading subject={this.state.term} />
          <Switch>
            <Route exact path="/" render={() => <Container term={this.state.term} loading={this.state.loading} pics={this.state.pics}/>}/>
            <Route path="/cats" render={() => <Container term={this.state.term} loading={this.state.loading} pics={this.state.pics}/>}/>
            <Route path="/dogs" render={() => <Container term={this.state.term} loading={this.state.loading} pics={this.state.pics}/>}/>
            <Route path="/birds" render={() => <Container term={this.state.term} loading={this.state.loading} pics={this.state.pics}/>}/>
            <Route path="/search" render={() => <Form onSearch={this.performSearch}/>}/>
            <Route component={NoResults}/>
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
