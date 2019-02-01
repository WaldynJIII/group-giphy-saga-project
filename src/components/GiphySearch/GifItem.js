import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';


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
            <Card>
            <CardContent>
               <img src={this.props.gif.images.downsized.url} />
            </CardContent> 
            </Card>
        );
    }
}

export default connect()(GifItem);