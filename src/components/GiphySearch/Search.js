import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GifItem from './GifItem.js';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }


    componentDidMount() {
        this.getGiphy();
      }
      // Renders the entire app on the DOM
      getGiphy = () => {
          this.props.dispatch({ type: 'FETCH_GIPHY', action: this.state.search});
      }
    
    handleNameChange = event => {
        console.log('Search')
        this.setState({
                search: event.target.value,
        });
    }

    // giphyFavorite = () => {

    // }

      render() {
        return (
     
        <div className="container">  
            
                         {this.props.arrayGif.map((gif)=> {
                               return (<GifItem key={gif.id} gif={gif} />) }) }
                      
                {/* <CardActions>
                    {/* <Button onClick={giphyFavorite}>Favorite</Button> */}
                {/* </CardActions> */}
          
        </div>
        );
      }
    }
const mapStoreToProps = reduxStore => ({
        arrayGif: reduxStore.displayList 
    });
  
export default connect(mapStoreToProps)(Search);