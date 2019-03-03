import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from './GifItem.js';
import './searchPage.css'

// material ui

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  };
  

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }


      // Renders the entire app on the DOM
      getGiphy = () => {
          this.props.dispatch({ type: 'POST_GIPHY', payload: this.state});
      }
    
    handleNameChange = event => {
        console.log('Search')
        this.setState({
                search: event.target.value,
        });
    }


      render() {
          const {classes } = this.props;
        return (
     
        <div className="container">
            <Paper id="search-box" className={classes.root} elevation={1}>
                <InputBase onChange={this.handleNameChange} className={classes.input} placeholder="Search Giphy Api" />
                <IconButton onClick={this.getGiphy} className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <div id="cards-container">
                {this.props.arrayGif.map((gif)=> {
                    return (<GifItem key={gif.id} gif={gif} />) }) }
            </div>
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
  
export default connect(mapStoreToProps)(withStyles(styles)(Search));