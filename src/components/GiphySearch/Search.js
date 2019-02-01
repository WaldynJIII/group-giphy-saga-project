import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          this.props.dispatch({ type: 'POST_GIPHY', action: this.state.search});
      }
    
    handleNameChange = event => {
        console.log('Search')
        this.setState({
                search: event.target.value,
        });
    }


      render() {
        return (
     
        <div className="container">  
                <input onChange ={this.handleNameChange} type='text' placeholder='search'></input>
                <button onClick={this.getGiphy}></button>
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