import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from './../../GiphySearch/Search';
import Favorites from './../../Favorites/Favorites';
import Tabs from '@material-ui/core/Tabs';

class Header extends Component {


    render() {

        return (
            <div className="App-header">
                    <Router>
                        <Tabs>
                        <div>
                            <li>
                                <Link label="Search" to="/">Search</Link>
                            </li>
                            <li>
                                <Link label="Favorites" to="/Favorites">Favorites</Link>
                            </li>
                            <Route exact path="/" component={Search} />
                            <Route exact path="/Favorites" component={Favorites} />
                        </div>
                        </Tabs>
                    </Router>
            </div>
        );
    }
}



export default Header;