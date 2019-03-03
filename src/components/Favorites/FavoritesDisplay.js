import React, { Component } from 'react';
import FavoriteItems from './FavoriteItems';

class FavoritesDisplay extends Component {

    //returns favorites
    // componentDidMount() {
    //     this.getFavorites();
    // }

    // getFavorites = () => {
    //     const action = { type: 'FETCH_GIPHY' };
    //     this.props.dispatch(action);
    // }

    render() {
        return (
            <div>
                <h1>Favourite Gifs</h1>
                {/* {this.props.reduxState.favorites.map((fave) => {
                    return (
                        <FavoriteItems key={fave.id} fave={fave} />
                    )
                })} */}
            </div>
        );
    }
}

export default FavoritesDisplay;