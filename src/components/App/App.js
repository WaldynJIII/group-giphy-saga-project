import React, { Component } from 'react';
import Header from './Header/Header.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from '../GiphySearch/Search';
import Favorites from '../Favorites/Favorites';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Search} />
          <Route exact path="/Favorites" component={Favorites} />
        </div>
      </Router>
    );
  }
  
}

export default App;
