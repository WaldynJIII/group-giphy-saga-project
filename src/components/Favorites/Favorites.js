import React, { Component } from 'react';
import FavoritesDisplay from './FavoritesDisplay';
import
class Favorites extends Component {

    render() {
        return (
            <div>
                <h2>Favorites!</h2>
                <FavoritesDisplay />
            </div>
        );
    }
}

export default Favorites;