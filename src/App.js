import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Item from './component/Item';
  
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
       <Router>
           <div>    
            <Nav />
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/item' component={Item}></Route>
              </Switch>
          </div>
       </Router>
   );
  }
}
  
export default App;