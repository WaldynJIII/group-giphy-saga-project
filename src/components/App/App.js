import React, { Component } from 'react';
import Header from './Header/Header.js';
import Search from '../GiphySearch/Search.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
  
}

export default App;
