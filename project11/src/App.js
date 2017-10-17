import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Home from './components/Home';
import Container from './components/Container';
import Pics from './components/Pics';
import Heading from './components/Heading';
import NoResults from './components/NoResults';



const App = () => {


    return (

      <BrowserRouter>
        <div className="container">

          <Switch>
            <Route exact path="/" component={Container}/>
            <Route path="/cats" component={Container}/>
            <Route path="/dogs" component={Container}/>
            <Route path="/birds" component={Container}/>
            <Route path="/search" component={Container}/>

            <Route component={NoResults}/>
          </Switch>
        </div>
      </BrowserRouter>


    );

}
export default App;
