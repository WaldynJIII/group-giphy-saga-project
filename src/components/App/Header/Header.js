import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import Menu from '@material-ui/core';
import Search from '../../GiphySearch/Search';
import Favorites from '../../Favorites/Favorites';


class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Group Giphy </h1>
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Search</Link>
                                </li>
                                <li>
                                    <Link to="/favorites">Favorites</Link>
                                </li>
                            </ul>
                            <Route exact path="/" component={Search} />
                            <Route exact path="/favorites" component={Favorites} />
                        </div>
                    </Router>
                </header>
            </div>
        );
    }
}

export default Header;