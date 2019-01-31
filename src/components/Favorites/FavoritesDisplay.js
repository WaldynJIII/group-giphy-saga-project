import React, { Component } from 'react';

class FavoritesDisplay extends Component {

    //returns favorites
    componentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        const action = { type: 'GET_FAVORITES' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.favorites.map((fave) => {
                    return (
                        <FavoriteItems key={fave.id} fave={fave} />
                    )
                })}
            </ul>
        );
    }
}

export default FavoritesDisplay;