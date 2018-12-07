import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Chat from './containers/Chat/Chat';


import SignIn from './containers/SignIn/SignIn';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path='/chat' component={Chat} />
            <Route path='/' component={SignIn} />
        </Switch>
      </div>
    );
  }
}


export default App;
