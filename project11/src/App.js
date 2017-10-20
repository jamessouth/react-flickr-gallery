import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage';
import Container from './components/Container';


const App = () => {

    return (

      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Container}/>
            <Route path="/mountains" component={Container}/>
            <Route path="/rivers" component={Container}/>
            <Route path="/valleys" component={Container}/>
            <Route path="/search" component={Container}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </BrowserRouter>

    );

}
export default App;
