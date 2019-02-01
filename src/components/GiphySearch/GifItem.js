import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifItem extends Component {
    
    
    componentDidMount() {
        this.getGiphy();
      }
      // Renders the entire app on the DOM
      getGiphy = () => {
          this.props.dispatch({ type: 'FETCH_GIPHY'});
      }

    render() {
        return (
            <div>
                {this.props.displayList.images.name}
               
            </div>
        );
    }
}

export default connect()(GifItem);