import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';

class Header extends Component {


    render() {

        return (
            <div className="App-header">
                        <Tabs>
                        <div>
                            <li>
                                <Link label="Search" to="/">Search</Link>
                            </li>
                            <li>
                                <Link label="Favorites" to="/Favorites">Favorites</Link>
                            </li>
                        </div>
                        </Tabs>
            </div>
        );
    }
}



export default Header;