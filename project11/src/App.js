import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Pics from './components/Pics';

class App extends Component {
  render() {
    return (
      <div class="container">

        <Form />

        <Nav />

        <Pics />

      </div>
    );
  }
}

export default App;
