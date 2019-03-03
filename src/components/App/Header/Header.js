import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';

// css
import './Nav.css'

class Header extends Component {


    render() {

        return (
            <div id="app-header">
            <h2>Giphy Api</h2>
                <div id="one">
                <Link label="Search" to="/">Search</Link>
                <Link label="Favorites" to="/Favorites">Favorites</Link>
                </div>
                
            </div>
        );
    }
}



export default Header;